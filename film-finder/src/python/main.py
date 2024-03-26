from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd 
import re


from sklearn.feature_extraction.text import TfidfVectorizer
movies = pd.read_csv(r"C:\Users\Nabeera\Documents\GitHub\476-movie-recs\film-finder\src\python\movie_dataset.csv")
vectorizer = TfidfVectorizer(ngram_range=(1,2))

tfidf = vectorizer.fit_transform(movies["cleanedTitle"])
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

#def search(title):
title = "Resurrection Man"
#title = clean_title(title)
query_vec = vectorizer.transform([title])
similarity = cosine_similarity(query_vec, tfidf).flatten()
indices = np.argpartition(similarity, -5)[-5:]
results = movies.iloc[indices].iloc[::-1]
#return results
#results 

results_dict = results.to_dict(orient='records')


#plot summary stuff 
movies['plot'] = movies['plot'].fillna('')
vectorizer = TfidfVectorizer(ngram_range=(1,2))

tfidf = vectorizer.fit_transform(movies["plot"])
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

#def search(title):
plot = "boy is in love"
#plot = clean_plot(plot)
query_vec = vectorizer.transform([plot])
similarity = cosine_similarity(query_vec, tfidf).flatten()
indices = np.argpartition(similarity, -5)[-5:]
#results = movies.iloc[indices].iloc[::-1]
#return results
#results 
plot_results = movies.iloc[indices].iloc[::-1]
#return results
#results 


plot_results_dict = plot_results.to_dict(orient='records')



####################################################
##Ratings recommendations ##
ratings_data = pd.read_csv(r"C:\Users\Nabeera\Documents\GitHub\476-movie-recs\film-finder\src\python\movie_reviews.csv")
movie_id = 25

def recommend_ratings(movie_id):
    similar_users = ratings_data[(ratings_data["movieId"] == movie_id) & (ratings_data["rating"] > 4)]["userId"].unique()
    similar_user_recs = ratings_data[(ratings_data["userId"].isin(similar_users)) & (ratings_data["rating"] > 4)]["movieId"]
    similar_user_recs = similar_user_recs.value_counts() / len(similar_users)

    similar_user_recs = similar_user_recs[similar_user_recs > .10]
    all_users = ratings_data[(ratings_data["movieId"].isin(similar_user_recs.index)) & (ratings_data["rating"] > 4)]
    all_user_recs = all_users["movieId"].value_counts() / len(all_users["userId"].unique())
    rec_percentages = pd.concat([similar_user_recs, all_user_recs], axis=1)
    rec_percentages.columns = ["similar", "all"]
    
    rec_percentages["score"] = rec_percentages["similar"] / rec_percentages["all"]
    rec_percentages = rec_percentages.sort_values("score", ascending=False)
    
    return rec_percentages.head(10).merge(movies,left_on="movieId", right_on="movie_id")[["score", "cleanedTitle", "plot"]]

ratingdf = recommend_ratings(movie_id)
ratings_results_dict = ratingdf.to_dict(orient='records')


app = Flask(__name__)
CORS(app)

# Movies API route
@app.route("/movies2")
def movies():
    
    return jsonify({"movies": results_dict})
    #return {"movies2": ["IT", "Works","YIPEE"]}



@app.route("/plot_recommend")
def movies_recommend():
    #recommend_ratings(movie_id)
    return jsonify({"plot_recommendations": ratings_results_dict})
    #return {"movies2": ["IT", "Works","YIPEE"]}

@app.route("/rating_recommend")
def rating_recommend():
    
    return jsonify({"plot_recommendations": plot_results_dict})
    #return {"movies2": ["IT", "Works","YIPEE"]}

@app.route("/enter-movie", methods=["POST"])
def enter_movie():
    data = request.get_json()

    return jsonify(data), 201




if __name__ == "__main__":
    app.run(debug=True)