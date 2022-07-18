# ticket-search-react-laravel

## Getting started

### Installation

Please check the official react and laravel installation guide for server requirements before you start. [Official Documentation](https://www.positronx.io/how-to-install-react-js-in-laravel-with-bootstrap/)

Alternative installation is possible without local dependencies relying on [Docker](#docker).

Clone the repository

    git clone https://github.com/galaxy-comet/ticket-search-react-laravel.git

Switch to the repo folder

    cd ticket-search-react-laravel

Install all the dependencies using composer

    composer install

Install all the style modules

    npm install

Copy the example env file and make the required configuration changes in the .env file

    rename .env.example .env

Generate a new application key

    php artisan key:generate

Insert OPEN API KEY on API_KEY of .env file

    API_KEY = //"here"

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

**TLDR command list**

    git clone https://github.com/galaxy-comet/ticket-search-react-laravel.git
    cd ticket-search-react-laravel
    composer install
    npm install
    rename .env.example .env
    php artisan key:generate

**start server**

    php artisan serve
