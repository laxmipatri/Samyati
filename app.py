from flask import Flask, render_template, session
import testgpt

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'
app.config['TIMEOUT'] = 600



@app.route('/')
def index():
    session['message'] = testgpt.show_my_itirenary()
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)