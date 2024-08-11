build:
	docker compose build

up:
	docker compose up

down:
	docker compose down

# node userとして sh を実行
nextapp:
	docker compose exec next-app gosu node sh

test:
	docker compose exec next-app gosu node npm run test

ps:
	docker compose exec next-app gosu node npx prisma studio

tsx:
	docker compose exec next-app gosu node npx tsx script/$(q).ts

db:
	docker compose exec db sh

migrate:
	docker compose exec next-app gosu node npx prisma migrate dev

prodbuild:
	docker compose -f docker-compose-prod.yml build

produp:
	docker compose -f docker-compose-prod.yml up

prodown:
	docker compose -f docker-compose-prod.yml down

.PHONY: build up down nextapp test ps tsx db migrate prodbuild produp prodown
