from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

from selenium import webdriver 
import selenium
from selenium.webdriver.common import keys
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome(executable_path = r'/Users/noyechan/Desktop/JavaScript/personal_Prac/weatherFood/venv/chromedriver')
driver.get("https://www.google.co.kr/maps/@37.053745,125.6553969,5z?hl=ko")

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

    # API 역할을 하는 부분
@app.route('/city', methods=['POST'])
def write_review():
    city_receive = request.form['city_name']

    searchBar = driver.find_element_by_css_selector("input.tactile-searchbox-input")
    searchBar.clear();
    searchBar.send_keys(city_receive) # 서치바에 도시 입력
    searchIcon = driver.find_element_by_xpath("//*[@id='searchbox-searchbutton']")
    searchIcon.click();
    # searchBar.send_keys(Keys.ENTER) # 서치바 엔터
    wait = WebDriverWait(driver, 10)
    wait.until(EC.element_to_be_clickable((By.CLASS_NAME, 'F8J9Nb-LfntMc-header-HiaYvf-LfntMc')))

    imageURL = driver.find_element_by_xpath("//*[@id='pane']/div/div[1]/div/div/div[1]/div[1]/button/img").get_attribute('src')
    # tmp = driver.find_element_by_xpath("//*[@id='pane']/div/div[1]/div/div/div[2]/div[1]/div[2]/div/div[2]/div[1]").text.split(' ')

    doc = {
        'image': imageURL,
        'name' : city_receive
        # 'temperature':  tmp[-1],
    }

    db.weatherfood.insert_one(doc)

    return jsonify({'msg': '검색완료!'})


@app.route('/city', methods=['GET'])
def read_reviews():
    info = list(db.weatherfood.find({}, {'_id': False}))
    print(info)
    return jsonify({'result':'success','information': info})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)