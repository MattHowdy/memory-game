from flask import Flask, render_template, url_for, redirect, request


app = Flask(__name__)

@app.route('/')
def index():
    seq = list(range(1,22))
    return render_template('index.html', seq=seq)


@app.route('/game', methods=['GET', 'POST'])
def game():
    number = int(request.form.get('comp_select'))*2
    cards = list(range(1, int(number)+1))

    return render_template('the-game.html', cards=cards)



if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True
    )