from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd 
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from flask_pymongo import PyMongo
from pymongo import MongoClient 


app = Flask(__name__)

# Set up MongoDB connection 
client = MongoClient('mongodb+srv://476team:FilmFinder!!@filmfinder.sjnushj.mongodb.net/?retryWrites=true&w=majority&appName=FilmFinder') 
db = client['test'] 
collection = db['films']

print (collection.find({"title": "Traffic in Souls"}))


#app.config["MONGO_URI"] = "mongodb+srv://476team:FilmFinder!!@filmfinder.sjnushj.mongodb.net/?retryWrites=true&w=majority&appName=FilmFinder"
#mongo = PyMongo(app) #.db#maybe
try:
    db.command('ismaster')
    print("Connected successfully to MongoDB Atlas")
except Exception as e:
    print("Connection failed:", e)

#cursor = mongo.db.collection_name.find()
cursor = collection.find()
# Convert MongoDB cursor to list of dictionaries
data_list = list(cursor)

# Convert list of dictionaries to DataFrame
movies22 = pd.DataFrame(data_list)
movies22_dict = movies22.to_dict(orient='records')
##turn id into a string 
for record in movies22_dict:
        record['_id'] = str(record['_id'])

#movies33 = pd.read_csv(r"C:\Users\Nabeera\Documents\GitHub\476-movie-recs\film-finder\src\python\movie_dataset.csv")
movies = pd.DataFrame(data_list)
print(type(movies["title"]))
#print(type(movies33))

vectorizer = TfidfVectorizer(ngram_range=(1,2))
#print(movies[25]["title"])
movies['title'] = movies['title'].astype(str)
tfidf = vectorizer.fit_transform(movies["title"])


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

for record in results_dict:
        record['_id'] = str(record['_id'])


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
#plot_results_short = plot_results['title','plot','poster']
plot_results_short_dict = plot_results.to_dict(orient='records')

sel = ['title','plot','poster']
selected_data = [{column: record[column] for column in sel} for record in plot_results_short_dict]

#selected_data = {key: plot_results_short_dict[key] for key in sel}


plot_results_dict = plot_results.to_dict(orient='records')
for record in plot_results_dict:
        record['_id'] = str(record['_id'])


####################################################
##Ratings recommendations ##
ratings_data = pd.read_csv(r"C:\Users\Nabeera\Documents\GitHub\476-movie-recs\film-finder\src\python\movie_reviews.csv")
##test to get a movie for ratings 
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
    
    return rec_percentages.head(10).merge(movies,left_on="movieId", right_on="movie_id")[["score", "Title_Year", "plot"]]

ratingdf = recommend_ratings(movie_id)
ratings_results_dict = ratingdf.to_dict(orient='records')


#app = Flask(__name__)
CORS(app)

# Movies API route
@app.route("/movies2")
def movies():
    
    return jsonify({"movies": results_dict})
     #shows eveything in our databse 
    #return jsonify({"movies": movies22_dict})


    #return {"movies2": ["IT", "Works","YIPEE"]}



@app.route("/plot_recommend")
def movies_recommend():
    #recommend_ratings(movie_id)
    return jsonify({"plot_recommendations": selected_data})
    #return {"movies2": ["IT", "Works","YIPEE"]}

@app.route("/rating_recommend")
def rating_recommend():
    
    return jsonify({"plot_recommendations": ratings_results_dict})
    #return {"movies2": ["IT", "Works","YIPEE"]}

@app.route("/enter-movie", methods=["POST"])
def enter_movie():
    data = request.get_json()

    return jsonify(data), 201




if __name__ == "__main__":
    app.run(debug=True)