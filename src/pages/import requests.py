import requests

from bs4 import BeautifulSoup

url = "https://www.modularhomesweb.com/catalogue"  # Your website URL
response = requests.get(url)

# Parse the HTML content
soup = BeautifulSoup(response.text, "html.parser")

# Find the relevant products (example: if products are in <div class="product">)
products = soup.find_all("div", class_="product")  # Update with the correct class name

for product in products:
    title = product.find("h2").text  # Update with correct tag and class for title
    price = product.find("span", class_="price").text  # Update with the correct class
    image_url = product.find("img")["src"]  # Update with the correct tag for image

    print(f"Title: {title}, Price: {price}, Image URL: {image_url}")
