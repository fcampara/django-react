### Requirements

- Python 3.7.0
- Pip 3

### Installation
```sh
  $ pip3 install pipenv
  $ pipenv shell
```

### Commands
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

- Create

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
