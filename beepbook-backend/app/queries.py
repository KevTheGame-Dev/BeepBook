from app import app
import mysql.connector

DB = mysql.connector.connect(
    host=app.config['DATABASE_URI'],
    user=app.config['DATABASE_USERNAME'],
    passwd=app.config['DATABASE_PASSWORD'],
    database=app.config['DATABASE_SCHEMA_NAME']
)

print(DB)

cursor = DB.cursor()

cursor.execute('SHOW TABLES')
tables = cursor.fetchall()
print(tables)