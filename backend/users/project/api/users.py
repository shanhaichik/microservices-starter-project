from flask import Blueprint, jsonify

users_blueprint = Blueprint('users', __name__)

@users_blueprint.route('/users/ping', methods=['GET'])
def ping():
    return jsonify({
        'status': 'success',
        'message': 'pong!!'
    })