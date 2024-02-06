# Import the Dropbox module
import dropbox
from flask import Flask, render_template

#Create an instance of the Dropbox class and pass the access token
dbx = dropbox.Dropbox('sl.BvHVV6vfcB0VlPCPAgC7dhnYgEXmOeutPQlQ5rsPq1DYeYlkwPAQej2C9hmj8uI8ABZu7Ez958dJ-4FN5DxqXaFqZIvqxNiuvmgj2OGTydwnJw9xN4IYTmwD6S0B3UrCImGu59bIkMRePuFvOnVJdlQ')

# Create an instance of the Flask class
app = Flask(__name__)

# List files in the root folder and print their names
for entry in dbx.files_list_folder('').entries:
    print(entry.name)

@app.route('/')
def index():
    # List files in the root folder
    files = [entry.name for entry in dbx.files_list_folder('').entries]
    return render_template('index.html', files=files)

if __name__ == '__main__':
    app.run(debug=True)