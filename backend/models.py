from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class InsurancePolicy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    policy_number = db.Column(db.String(100), unique=True, nullable=False)
    holder_name = db.Column(db.String(100), nullable=False)
    premium_amount = db.Column(db.Float, nullable=False)
    policy_type = db.Column(db.String(50), nullable=False)