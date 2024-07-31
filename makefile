build:
	docker compose build

up:
	docker compose up

down:
	docker compose down

# node userとして sh を実行
sh:
	docker compose exec next-app gosu node sh

test:
	docker compose exec next-app gosu node npm run test

prodbuild:
	docker compose -f docker-compose-prod.yml build

produp:
	docker compose -f docker-compose-prod.yml up

prodown:
	docker compose -f docker-compose-prod.yml down
