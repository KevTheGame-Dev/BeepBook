import os

class Config(object):
    DATABASE_SCHEMA_NAME = 'beepbook'
    DATABASE_URI = 'localhost'
    DATABASE_USERNAME = 'root'
    DATABASE_PASSWORD = os.environ.get('BEEPBOOK_MYSQLSERVER_PASSWORD')