### Requirements

- Python 3.7.0
- Pip 3

### Installation
```sh
  $ sudo apt install python3-pip python3-dev
  $ pip3 install --user pipenv
  echo "PATH=$HOME/.local/bin:$PATH" >> ~/.bashrc
  source ~/.bashrc
  $ pip3 install pipenv
  $ pipenv shell
```
# Commands

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


- Run
```sh
  $ python manage.py runserver
```

### Commands - React

```sh
  $ npm run dev
```

# Routes

| Route                     | Methods |
| ------------------------- | ------- |
| **HOST**/api/leads        | GET     |
| **HOST**/api/leads/**ID** | GET     |
| **HOST**/api/leads/       | POST    |
| **HOST**/api/leads/**ID** | DELETE  |
