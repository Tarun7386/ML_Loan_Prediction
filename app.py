import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# Define a simple route to ensure the server is working
@app.route('/')
def home():
    return "Flask server is running!"

# Load the pickled model
with open('navisb_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    input_features = [
        data['ApplicantIncome'],
        data['CoapplicantIncome'],
        data['LoanAmount'],
        data['Loan_Amount_Term'],
        data['Credit_History'],
        data['Married_Yes'],
        data['Dependents_1'],
        data['Property_Area_Semiurban']
    ]
    print("Input Features:", input_features)  # Log the input features
    prediction = model.predict([input_features])
    print("Prediction:", prediction)  # Log the prediction
    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)







