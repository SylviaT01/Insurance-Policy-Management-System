from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, InsurancePolicy

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///insurance.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

with app.app_context():
    db.create_all()

@app.route('/policies', methods=['GET'])
def get_policies():
    policies = InsurancePolicy.query.all()
    return jsonify([{
        'id': p.id,
        'policy_number': p.policy_number,
        'holder_name': p.holder_name,
        'premium_amount': p.premium_amount,
        'policy_type': p.policy_type
    } for p in policies])

@app.route('/policy', methods=['POST'])
def add_policy():
    data = request.json
    new_policy = InsurancePolicy(
        policy_number=data['policy_number'],
        holder_name=data['holder_name'],
        premium_amount=data['premium_amount'],
        policy_type=data['policy_type']
    )
    db.session.add(new_policy)
    db.session.commit()
    return jsonify({'message': 'Policy added successfully'}), 201

@app.route('/policy/<int:id>', methods=['PUT'])
def update_policy(id):
    policy = InsurancePolicy.query.get(id)
    if not policy:
        return jsonify({'error': 'Policy not found'}), 404

    data = request.json
    policy.policy_number = data.get('policy_number', policy.policy_number)
    policy.holder_name = data.get('holder_name', policy.holder_name)
    policy.premium_amount = data.get('premium_amount', policy.premium_amount)
    policy.policy_type = data.get('policy_type', policy.policy_type)
    db.session.commit()
    return jsonify({'message': 'Policy updated successfully'})

@app.route('/policy/<int:id>', methods=['DELETE'])
def delete_policy(id):
    policy = InsurancePolicy.query.get(id)
    if not policy:
        return jsonify({'error': 'Policy not found'}), 404
    db.session.delete(policy)
    db.session.commit()
    return jsonify({'message': 'Policy deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
