-- AlterTable
CREATE SEQUENCE linktotext_id_seq;
ALTER TABLE "LinkToText" ALTER COLUMN "id" SET DEFAULT nextval('linktotext_id_seq');
ALTER SEQUENCE linktotext_id_seq OWNED BY "LinkToText"."id";

-- AlterTable
CREATE SEQUENCE text_id_seq;
ALTER TABLE "Text" ALTER COLUMN "id" SET DEFAULT nextval('text_id_seq');
ALTER SEQUENCE text_id_seq OWNED BY "Text"."id";
