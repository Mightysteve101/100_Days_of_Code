# Import the Dropbox module
import os
import dropbox
from flask import Flask, render_template

#Environment variable that grabs temperary token. Will need to update token every terminal use.
access_key = os.environ.get('ACCESS_KEY')
# Create an instance of the Flask class
app = Flask(__name__)

@app.route('/')
def index():
    # Grabs the video and places it in index.html
    video_path = '/static/videos/bleed_the_kid_laroi.mp4'
    return render_template('index.html', video_path=video_path)

if __name__ == '__main__':
    app.run(debug=True)