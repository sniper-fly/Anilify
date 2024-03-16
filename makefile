init: build install

build:
	docker compose build

install:
	docker compose run next-app npm ci

up:
	docker compose up

down:
	docker compose down

# node userとして sh を実行
sh:
	docker compose exec next-app su-exec node sh
