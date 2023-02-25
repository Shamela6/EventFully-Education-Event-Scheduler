import mysql.connector
mydb=mysql.connector.connect(host='localhost',user='user',password='root',database='new',autocommit=True)
cursor=mydb.cursor()
cursor.execute()