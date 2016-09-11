git #Imports
from flask import Flask, render_template, redirect, url_for, request

#Initial setup
app = Flask(__name__)


@app.route('/')
def Home():
    return render_template('Site.html')


if __name__ == '__main__':
    app.run(debug=True)
