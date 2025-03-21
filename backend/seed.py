from models import db, InsurancePolicy
from app import app

def seed_data():
    with app.app_context():
        db.session.add_all([
            InsurancePolicy(policy_number='POL123', holder_name='John Doe', premium_amount=500.0, policy_type='Life'),
            InsurancePolicy(policy_number='POL456', holder_name='Jane Smith', premium_amount=700.0, policy_type='Health'),
            InsurancePolicy(policy_number='POL789', holder_name='Alice Johnson', premium_amount=600.0, policy_type='Auto')
        ])
        db.session.commit()
        print('Database seeded successfully!')

if __name__ == '__main__':
    seed_data()