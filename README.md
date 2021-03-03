# Gymkhana Inventory ![](https://img.shields.io/badge/Status-Active%20development-blue) ![](https://img.shields.io/badge/Django-v3.1.7-orange) ![](https://img.shields.io/badge/Python-v3.8.5-green)
WebApp to manage Gymkhana Inventory

To make contributions to this repo, check out [contribution.md](contribution.md)

## Project Setup
1. Clone this repository.<br/>
`git clone https://github.com/devlup-labs/gymkhana-inventory.git`
2. Make sure Python and pip are installed else install it.
3. Open up your IDE.
4. Create a virtual environment and activate it. (For windows use following code)<br/>
`python -m venv myenv`<br/>
`myenv\Scripts\activate` (for windows)<br/>
`source env/bin/activate` (for mac)
5. Go to backend folder and install all the required libraries in terminal.<br/>
`cd backend`<br/>
`pip install -r requirements.txt`
6. Now migrate the models.<br/>
`python manage.py makemigrations`<br/>
`python manage.py migrate`
7. Create the superuser(Admin).<br/>
`python manage.py createsuperuser`
8. Type in following command to run project locally now at http://127.0.0.1:8000/<br/>
`python manage.py runserver`

## Built with
- Django
- React js

## Collaborators
| Name              | Year          |Role   |
| ----------------- |:-------------|:----------|
|[Anshul Tilondiya](https://github.com/Anshultilondiya)|Pre-final Year|Mentor|
|[Yashvi Ramanuj](https://github.com/YashviRamanuj)|Pre-final Year|Mentor|
|[Hard Savani](https://github.com/HardSavani)|Sophomore|Develepor|
|[Bhawna Chopra ](https://github.com/bhawnachopra2002)|Sophomore|Develepor|
|[Darsh Patel](https://github.com/patel-16)|Sophomore|Develepor|
|[Dhruv Kakadiya](https://github.com/dhruv-kakadiya)|Sophomore|Develepor|
|[Suyash Agrnihotri](https://github.com/suyashagno3)|Sophomore|Develepor|
|[Neeraj Anand](https://github.com/neeraj-2)|Sophomore|Develepor|
|[Sarthak Raj Jindal](https://github.com/SarthakRajJindal)|Sophomore|Develepor|
|[Akshay Jyani](https://github.com/AkshayJyani)|Sophomore|Develepor|
|[Nimit](https://github.com/Nimit3-droid)|Sophomore|Develepor|
|[Niharika Manhar](https://github.com/niharikamanhar)|Freshman|Develepor|

