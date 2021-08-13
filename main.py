# to run 
#python3 main.py
import webview #pip install pywebview 

html_str = """
<h1>hello world </h1>
"""

webview.create_window("Pytest", html=html_str)
webview.start(debug=True)