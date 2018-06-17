from flask import Flask, render_template, url_for, redirect, request


app = Flask(__name__)

@app.route('/')
def index():
    seq = list(range(1,21))
    return render_template('index.html', seq=seq)


@app.route('/game', methods=['GET', 'POST'])
def game():
    number = request.form.get('comp_select')

    return render_template('the-game.html', number=number)



if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True
    )