### Requirements

- Python 3.7.0
- Pip 3

### Installation
```sh
  $ pip3 install pipenv
  $ pipenv shell
```

### Commands - Django
- Install depedency
```sh
  $ pipenv install django djangorestframework django-rest-knox
```

- Create project in Django
```sh
  $ django-admin startproject ${project name}
```

- Create modules to project
```sh
  $ python manage.py startapp ${module name}
```

- Migrations
```sh
  $ python manage.py makemigrations ${module name}
  $ python manage.py migrate
```

- Frontend requirements
```sh
  $ npm i -D webpack webpack-cli
  $ npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties
  $ npm i react react-dom prop-types
```

# Commands

- Run
```sh
  $ python manage.py runserver
```


| Route                     | Methods |
| ------------------------- | ------- |
| **HOST**/api/leads        | GET     |
| **HOST**/api/leads/**ID** | GET     |
| **HOST**/api/leads/       | POST    |
| **HOST**/api/leads/**ID** | DELETE  |
