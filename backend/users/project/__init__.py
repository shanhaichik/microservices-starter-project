from flask import Flask, jsonify

# instantiate the app
app = Flask(__name__);

# set config
app.config.from_object('project.config.DevConfig')

@app.route('/users/ping', methods=['GET'])
def ping():
    return jsonify({
        'status': 'success',
        'message': 'pong!!!'
    })