from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def Home():
    return render_template('Home.html')

@app.route('/Projects')
def Projects():
    return render_template('Projects.html')
if __name__ == '__main__':
    app.run(debug=True)
