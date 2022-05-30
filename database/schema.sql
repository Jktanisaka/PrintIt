set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"username" TEXT NOT NULL,
	"hashedPassword" TEXT NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."entries" (
	"entryId" serial NOT NULL,
	"userId" int NOT NULL,
	"description" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"printer" TEXT NOT NULL,
	"totalFilamentUsed" int NOT NULL,
	"timeToPrint" int NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"printSpeed" int NOT NULL,
	"supports" BOOLEAN NOT NULL,
	"layerHeight" float4,
	"wallThickness" float4,
	"additionalDetails" TEXT,
	"imageUrl" TEXT NOT NULL,
	CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."favorites" (
	"userId" int NOT NULL,
	"entryId" int NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."files" (
	"entryId" int NOT NULL,
	"fileUrl" int NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."tags" (
	"tagId" serial NOT NULL,
	"label" TEXT NOT NULL,
	CONSTRAINT "tags_pk" PRIMARY KEY ("tagId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."entryTags" (
	"entryId" int NOT NULL,
	"tagId" int NOT NULL
) WITH (
  OIDS=FALSE
);




ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_fk1" FOREIGN KEY ("entryId") REFERENCES "entries"("entryId");

ALTER TABLE "files" ADD CONSTRAINT "files_fk0" FOREIGN KEY ("entryId") REFERENCES "entries"("entryId");


ALTER TABLE "entryTags" ADD CONSTRAINT "entryTags_fk0" FOREIGN KEY ("entryId") REFERENCES "entries"("entryId");
ALTER TABLE "entryTags" ADD CONSTRAINT "entryTags_fk1" FOREIGN KEY ("tagId") REFERENCES "tags"("tagId");
