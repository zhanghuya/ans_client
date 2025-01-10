-- 基本設定テーブル
-- テーブルの削除
DROP TABLE IF EXISTS BASIC_SETTING_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS BASIC_SETTING_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE BASIC_SETTING_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE BASIC_SETTING_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('BASIC_SETTING_INFO_SEQ'),
    COMPANY_NAME VARCHAR(255),
    COMPANY_LOGO VARCHAR(255),
    ADDRESS_1 VARCHAR(255),
    ADDRESS_2 VARCHAR(255),
    BANK_NAME VARCHAR(255),
    BRANCH_NAME VARCHAR(255),
    BRANCH_CODE VARCHAR(50),
    ACCOUNT_FLAG VARCHAR(1),
    ACCOUNT_NUMBER VARCHAR(50),
    INVOICE_NUMBER VARCHAR(50),
    CONSUMPTION_TAX_RATE VARCHAR(50),
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- 注釈の追加
COMMENT ON COLUMN BASIC_SETTING_INFO.COMPANY_NAME IS '会社名';
COMMENT ON COLUMN BASIC_SETTING_INFO.COMPANY_LOGO IS '会社ロゴ';
COMMENT ON COLUMN BASIC_SETTING_INFO.ADDRESS_1 IS '住所1';
COMMENT ON COLUMN BASIC_SETTING_INFO.ADDRESS_2 IS '住所2';
COMMENT ON COLUMN BASIC_SETTING_INFO.BANK_NAME IS '銀行名';
COMMENT ON COLUMN BASIC_SETTING_INFO.BRANCH_NAME IS '支店名';
COMMENT ON COLUMN BASIC_SETTING_INFO.BRANCH_CODE IS '支店コード';
COMMENT ON COLUMN BASIC_SETTING_INFO.ACCOUNT_FLAG IS '口座フラグ';
COMMENT ON COLUMN BASIC_SETTING_INFO.ACCOUNT_NUMBER IS '口座番号';
COMMENT ON COLUMN BASIC_SETTING_INFO.INVOICE_NUMBER IS 'インボイス番号';
COMMENT ON COLUMN BASIC_SETTING_INFO.CONSUMPTION_TAX_RATE IS '消費税率';
COMMENT ON COLUMN BASIC_SETTING_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN BASIC_SETTING_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN BASIC_SETTING_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN BASIC_SETTING_INFO.LAST_UPDATER IS '最終更新者';


-- 取引先情報テーブル
-- テーブルの削除
DROP TABLE IF EXISTS BUSINESS_PARTNER_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS BUSINESS_PARTNER_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE BUSINESS_PARTNER_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE BUSINESS_PARTNER_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('BUSINESS_PARTNER_INFO_SEQ'),
    COMPANY_NAME VARCHAR(255),
    ADDRESS VARCHAR(255),
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- 注釈の追加
COMMENT ON COLUMN BUSINESS_PARTNER_INFO.COMPANY_NAME IS '会社名';
COMMENT ON COLUMN BUSINESS_PARTNER_INFO.ADDRESS IS '住所';
COMMENT ON COLUMN BUSINESS_PARTNER_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN BUSINESS_PARTNER_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN BUSINESS_PARTNER_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN BUSINESS_PARTNER_INFO.LAST_UPDATER IS '最終更新者';


-- 取引先店舗情報テーブル
-- テーブルの削除
DROP TABLE IF EXISTS BUSINESS_PARTNER_STORE CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS BUSINESS_PARTNER_STORE_SEQ;

-- シークエンスの作成
CREATE SEQUENCE BUSINESS_PARTNER_STORE_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE BUSINESS_PARTNER_STORE (
    ID INT PRIMARY KEY DEFAULT nextval('BUSINESS_PARTNER_STORE_SEQ'),
    PARTNER_ID INT,
    STORE_NAME VARCHAR(255),
    ESTIMATE_CC_FLAG BOOLEAN,
    SAME_AS_ESTIMATE_FLAG BOOLEAN,
    BILLING_CC_FLAG BOOLEAN,
    STORE_ADDRESS VARCHAR(255),
    SAME_AS_WEEKDAYS_FLAG BOOLEAN,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- 注釈の追加
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.PARTNER_ID IS '取引先ID';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.STORE_NAME IS '店舗名';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.ESTIMATE_CC_FLAG IS '見積Cc不要フラグ';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.SAME_AS_ESTIMATE_FLAG IS '見積送付先と同じフラグ';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.BILLING_CC_FLAG IS '請求Cc不要フラグ';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.STORE_ADDRESS IS '店舗アドレス';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.SAME_AS_WEEKDAYS_FLAG IS '平日と同じフラグ';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.CREATION_DATE IS '作成日';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.CREATOR IS '作成者';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN BUSINESS_PARTNER_STORE.LAST_UPDATER IS '最終更新者';

-- 外鍵の追加
ALTER TABLE BUSINESS_PARTNER_STORE ADD CONSTRAINT FK_PARTNER_ID FOREIGN KEY (PARTNER_ID) REFERENCES BUSINESS_PARTNER_INFO(ID);


----------------------------------------------------
-- 単価情報
-- テーブルの削除
DROP TABLE IF EXISTS UNIT_PRICE_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS UNIT_PRICE_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE UNIT_PRICE_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE UNIT_PRICE_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('UNIT_PRICE_INFO_SEQ'),
    PARTNER_STORE_ID INT,
    ORDER_TYPE VARCHAR(255),
    UNIT_PRICE VARCHAR(255),
    WEEK_FLAG INT,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);
-- 外鍵の追加例
ALTER TABLE UNIT_PRICE_INFO ADD CONSTRAINT FK_PARTNER_STORE_ID FOREIGN KEY (PARTNER_STORE_ID) REFERENCES BUSINESS_PARTNER_STORE(ID);

-- テーブルのコメント追加
COMMENT ON COLUMN UNIT_PRICE_INFO.PARTNER_STORE_ID IS '取引先店舗ID';
COMMENT ON COLUMN UNIT_PRICE_INFO.ORDER_TYPE IS 'オーダー';
COMMENT ON COLUMN UNIT_PRICE_INFO.UNIT_PRICE IS '単価';
COMMENT ON COLUMN UNIT_PRICE_INFO.WEEK_FLAG IS '平日週末フラグ';
COMMENT ON COLUMN UNIT_PRICE_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN UNIT_PRICE_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN UNIT_PRICE_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN UNIT_PRICE_INFO.LAST_UPDATER IS '最終更新者';
-- 案件マスタ情報
-- テーブルの削除
DROP TABLE IF EXISTS MATTER_MASTER_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS MATTER_MASTER_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE MATTER_MASTER_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE MATTER_MASTER_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('MATTER_MASTER_INFO_SEQ'),
    MATTER_MASTER_EXE_ID BIGINT,
    NO VARCHAR(255),
    REJECTION VARCHAR(255),
    STAFF_OPERATION_DETAILS VARCHAR(255),
    AGENT_BY_NAME VARCHAR(255),
    VAR_DATE VARCHAR(255),
    WEEKDAY_WEEKEND VARCHAR(1),
    BUSINESS_TRIP VARCHAR(1),
    EVENT_LOCATION VARCHAR(255),
    LOCATION_RESERVATION VARCHAR(255),
    SB_STORE VARCHAR(255),
    AGENT_ID INT,	--代理店ID
    AGENT VARCHAR(255),
    ORDER_TYPE VARCHAR(255),
    BY_NAME VARCHAR(255),
    SALES_MEMO VARCHAR(255),
    ASSIGN_MEMO VARCHAR(255),
    UNIT_PRICE VARCHAR(255),
    DAYS INT,
    SALES VARCHAR(255),
    CREATION_POSSIBLE VARCHAR(1),
    ESTIMATE_SENT VARCHAR(1),
    BILL_SENT VARCHAR(1),
    JUDGMENT VARCHAR(1),
    EXISTENCE VARCHAR(1),
    AGENT_COMPANY_NAME VARCHAR(255),
    AGENT_PERSON_IN_CHARGE VARCHAR(255),
    IMPLEMENTATION_SCHEDULE DATE,
    INTEGRATION_FLAG VARCHAR(1),
    MONTHLY_PAYMENT_FLAG VARCHAR(1),
    EXECUTION_FLAG VARCHAR(1),
    ITEM_NAME VARCHAR(255),
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255),
    GOOGLE_EXCEL_NAME VARCHAR(255),
	GOOGLE_EXCEL_SHEET_NAME VARCHAR(255),
    -- 取得条件年
    conditions_year	 VARCHAR(255),
    --  取得条件月
    conditions_month VARCHAR(255),
    -- 取得条件週
    conditions_week VARCHAR(255),
    -- 取得条件代理店
    conditions_agency VARCHAR(255)

);

-- テーブルのコメント追加
COMMENT ON COLUMN MATTER_MASTER_INFO.NO IS 'No';
COMMENT ON COLUMN MATTER_MASTER_INFO.MATTER_MASTER_EXE_ID IS '案件情報取得処理ID';
COMMENT ON COLUMN MATTER_MASTER_INFO.REJECTION IS 'お断り';
COMMENT ON COLUMN MATTER_MASTER_INFO.STAFF_OPERATION_DETAILS IS 'スタッフ向け稼働詳細';
COMMENT ON COLUMN MATTER_MASTER_INFO.AGENT_BY_NAME IS '代理店向けバイネーム';
COMMENT ON COLUMN MATTER_MASTER_INFO.VAR_DATE IS '日付';
COMMENT ON COLUMN MATTER_MASTER_INFO.WEEKDAY_WEEKEND IS '平日/週末';
COMMENT ON COLUMN MATTER_MASTER_INFO.BUSINESS_TRIP IS '出張';
COMMENT ON COLUMN MATTER_MASTER_INFO.EVENT_LOCATION IS 'イベント実施場所';
COMMENT ON COLUMN MATTER_MASTER_INFO.LOCATION_RESERVATION IS '場所取り';
COMMENT ON COLUMN MATTER_MASTER_INFO.SB_STORE IS 'SB開催店舗';
COMMENT ON COLUMN MATTER_MASTER_INFO.AGENT_ID IS '代理店ID';
COMMENT ON COLUMN MATTER_MASTER_INFO.AGENT IS '代理店';
COMMENT ON COLUMN MATTER_MASTER_INFO.ORDER_TYPE IS 'オーダー';
COMMENT ON COLUMN MATTER_MASTER_INFO.BY_NAME IS 'バイネーム';
COMMENT ON COLUMN MATTER_MASTER_INFO.SALES_MEMO IS '営業担当メモ';
COMMENT ON COLUMN MATTER_MASTER_INFO.ASSIGN_MEMO IS 'アサイン担当メモ';
COMMENT ON COLUMN MATTER_MASTER_INFO.UNIT_PRICE IS '単価';
COMMENT ON COLUMN MATTER_MASTER_INFO.DAYS IS '日数';
COMMENT ON COLUMN MATTER_MASTER_INFO.SALES IS '売り上げ';
COMMENT ON COLUMN MATTER_MASTER_INFO.CREATION_POSSIBLE IS '作成可';
COMMENT ON COLUMN MATTER_MASTER_INFO.ESTIMATE_SENT IS '見積送付済';
COMMENT ON COLUMN MATTER_MASTER_INFO.BILL_SENT IS '請求送付済';
COMMENT ON COLUMN MATTER_MASTER_INFO.JUDGMENT IS '判定';
COMMENT ON COLUMN MATTER_MASTER_INFO.EXISTENCE IS '有無';
COMMENT ON COLUMN MATTER_MASTER_INFO.AGENT_COMPANY_NAME IS '代理店会社名';
COMMENT ON COLUMN MATTER_MASTER_INFO.AGENT_PERSON_IN_CHARGE IS '代理店担当者';
COMMENT ON COLUMN MATTER_MASTER_INFO.IMPLEMENTATION_SCHEDULE IS '実施日程';
COMMENT ON COLUMN MATTER_MASTER_INFO.INTEGRATION_FLAG IS '統合フラグ';
COMMENT ON COLUMN MATTER_MASTER_INFO.MONTHLY_PAYMENT_FLAG IS '月支払いフラグ';
COMMENT ON COLUMN MATTER_MASTER_INFO.EXECUTION_FLAG IS '実行済みフラグ';
COMMENT ON COLUMN MATTER_MASTER_INFO.ITEM_NAME IS '品目名';
COMMENT ON COLUMN MATTER_MASTER_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN MATTER_MASTER_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN MATTER_MASTER_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN MATTER_MASTER_INFO.LAST_UPDATER IS '最終更新者';
COMMENT ON COLUMN MATTER_MASTER_INFO.GOOGLE_EXCEL_NAME IS 'googleEXCELファイル名';
COMMENT ON COLUMN MATTER_MASTER_INFO.GOOGLE_EXCEL_SHEET_NAME IS 'googleEXCELファイルシート名';
COMMENT ON COLUMN MATTER_MASTER_INFO.conditions_year IS '取得条件年';
COMMENT ON COLUMN MATTER_MASTER_INFO.conditions_month IS '取得条件月';
COMMENT ON COLUMN MATTER_MASTER_INFO.conditions_week IS '取得条件週';
COMMENT ON COLUMN MATTER_MASTER_INFO.conditions_agency IS '取得条件代理店';
----------------------------------------------------------
-- 見積情報
-- テーブルの削除
DROP TABLE IF EXISTS ESTIMATION_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS ESTIMATION_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE ESTIMATION_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE ESTIMATION_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('ESTIMATION_INFO_SEQ'),
    NO INT,
    MATTER_MASTER_EXE_ID BIGINT,
    REJECTION VARCHAR(255),
    STAFF_OPERATION_DETAILS VARCHAR(255),
    AGENT_BY_NAME VARCHAR(255),
    VAR_DATE VARCHAR(255),
    WEEKDAY_WEEKEND VARCHAR(1),
    BUSINESS_TRIP VARCHAR(1),
    EVENT_LOCATION VARCHAR(255),
    LOCATION_RESERVATION VARCHAR(1),
    SB_STORE VARCHAR(255),
    AGENT_ID INT,
    AGENT VARCHAR(255),
    ORDER_TYPE VARCHAR(255),
    BY_NAME VARCHAR(255),
    SALES_MEMO VARCHAR(255),
    ASSIGN_MEMO VARCHAR(255),
    UNIT_PRICE VARCHAR(255),
    DAYS INT,
    SALES VARCHAR(255),
    CREATION_POSSIBLE VARCHAR(1),
    ESTIMATE_SENT VARCHAR(1),
    BILL_SENT VARCHAR(1),
    JUDGMENT VARCHAR(1),
    EXISTENCE VARCHAR(1),
    AGENT_COMPANY_NAME VARCHAR(255),
    AGENT_PERSON_IN_CHARGE VARCHAR(255),
    IMPLEMENTATION_SCHEDULE DATE,
    INTEGRATION_FLAG VARCHAR(1),
    MONTHLY_PAYMENT_FLAG VARCHAR(1),
    EXECUTION_FLAG VARCHAR(1),
    ITEM_NAME VARCHAR(255),
    COUNT INT,
    MASTER_ID INT,
    SENT_FLAG VARCHAR(1),
    PAGE_DIVISION_1 VARCHAR(1),
    PAGE_DIVISION_2 VARCHAR(1),
    TAX_EXEMPT VARCHAR(1),
    EMAIL_CREATION_ID INT,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    TEMPORARY_SAVE_FLG VARCHAR(1),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255),
    GOOGLE_EXCEL_NAME VARCHAR(255),
	GOOGLE_EXCEL_SHEET_NAME VARCHAR(255),
    -- 取得条件年
    conditions_year	 VARCHAR(255),
    --  取得条件月
    conditions_month VARCHAR(255),
    -- 取得条件週
    conditions_week VARCHAR(255),
    -- 取得条件代理店
    conditions_agency VARCHAR(255)
);

-- テーブルのコメント追加
COMMENT ON COLUMN ESTIMATION_INFO.NO IS 'No';
COMMENT ON COLUMN ESTIMATION_INFO.MATTER_MASTER_EXE_ID IS '案件情報取得処理ID';

COMMENT ON COLUMN ESTIMATION_INFO.REJECTION IS 'お断り';
COMMENT ON COLUMN ESTIMATION_INFO.STAFF_OPERATION_DETAILS IS 'スタッフ向け稼働詳細';
COMMENT ON COLUMN ESTIMATION_INFO.AGENT_BY_NAME IS '代理店向けバイネーム';
COMMENT ON COLUMN ESTIMATION_INFO.VAR_DATE IS '日付';
COMMENT ON COLUMN ESTIMATION_INFO.WEEKDAY_WEEKEND IS '平日/週末';
COMMENT ON COLUMN ESTIMATION_INFO.BUSINESS_TRIP IS '出張';
COMMENT ON COLUMN ESTIMATION_INFO.EVENT_LOCATION IS 'イベント実施場所';
COMMENT ON COLUMN ESTIMATION_INFO.LOCATION_RESERVATION IS '場所取り';
COMMENT ON COLUMN ESTIMATION_INFO.SB_STORE IS 'SB開催店舗';
COMMENT ON COLUMN ESTIMATION_INFO.AGENT_ID IS '代理店ID';
COMMENT ON COLUMN ESTIMATION_INFO.AGENT IS '代理店';
COMMENT ON COLUMN ESTIMATION_INFO.ORDER_TYPE IS 'オーダー';
COMMENT ON COLUMN ESTIMATION_INFO.BY_NAME IS 'バイネーム';
COMMENT ON COLUMN ESTIMATION_INFO.SALES_MEMO IS '営業担当メモ';
COMMENT ON COLUMN ESTIMATION_INFO.ASSIGN_MEMO IS 'アサイン担当メモ';
COMMENT ON COLUMN ESTIMATION_INFO.UNIT_PRICE IS '単価';
COMMENT ON COLUMN ESTIMATION_INFO.DAYS IS '日数';
COMMENT ON COLUMN ESTIMATION_INFO.SALES IS '売り上げ';
COMMENT ON COLUMN ESTIMATION_INFO.CREATION_POSSIBLE IS '作成可';
COMMENT ON COLUMN ESTIMATION_INFO.ESTIMATE_SENT IS '見積送付済';
COMMENT ON COLUMN ESTIMATION_INFO.BILL_SENT IS '請求送付済';
COMMENT ON COLUMN ESTIMATION_INFO.JUDGMENT IS '判定';
COMMENT ON COLUMN ESTIMATION_INFO.EXISTENCE IS '有無';
COMMENT ON COLUMN ESTIMATION_INFO.AGENT_COMPANY_NAME IS '代理店会社名';
COMMENT ON COLUMN ESTIMATION_INFO.AGENT_PERSON_IN_CHARGE IS '代理店担当者';
COMMENT ON COLUMN ESTIMATION_INFO.IMPLEMENTATION_SCHEDULE IS '実施日程';
COMMENT ON COLUMN ESTIMATION_INFO.INTEGRATION_FLAG IS '統合フラグ';
COMMENT ON COLUMN ESTIMATION_INFO.MONTHLY_PAYMENT_FLAG IS '月支払いフラグ';
COMMENT ON COLUMN ESTIMATION_INFO.EXECUTION_FLAG IS '実行済みフラグ';
COMMENT ON COLUMN ESTIMATION_INFO.ITEM_NAME IS '品目名';
COMMENT ON COLUMN ESTIMATION_INFO.COUNT IS '件数';
COMMENT ON COLUMN ESTIMATION_INFO.MASTER_ID IS '案件マスタID';
COMMENT ON COLUMN ESTIMATION_INFO.SENT_FLAG IS '送信済みフラグ';
COMMENT ON COLUMN ESTIMATION_INFO.PAGE_DIVISION_1 IS 'ページ分け1';
COMMENT ON COLUMN ESTIMATION_INFO.PAGE_DIVISION_2 IS 'ページ分け2';
COMMENT ON COLUMN ESTIMATION_INFO.TAX_EXEMPT IS '非課税';
COMMENT ON COLUMN ESTIMATION_INFO.EMAIL_CREATION_ID IS 'メール作成ID';
COMMENT ON COLUMN ESTIMATION_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN ESTIMATION_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN ESTIMATION_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN ESTIMATION_INFO.LAST_UPDATER IS '最終更新者';
COMMENT ON COLUMN ESTIMATION_INFO.TEMPORARY_SAVE_FLG IS '一時保存フラグ';
COMMENT ON COLUMN ESTIMATION_INFO.GOOGLE_EXCEL_NAME IS 'googleEXCELファイル名';
COMMENT ON COLUMN ESTIMATION_INFO.GOOGLE_EXCEL_SHEET_NAME IS 'googleEXCELファイルシート名';
COMMENT ON COLUMN ESTIMATION_INFO.conditions_year IS '取得条件年';
COMMENT ON COLUMN ESTIMATION_INFO.conditions_month IS '取得条件月';
COMMENT ON COLUMN ESTIMATION_INFO.conditions_week IS '取得条件週';
COMMENT ON COLUMN ESTIMATION_INFO.conditions_agency IS '取得条件代理店';
-- 見積請求作成情報
-- テーブルの削除
DROP TABLE IF EXISTS QUOTATION_CLAIM_CREATION_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS QUOTATION_CLAIM_CREATION_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE QUOTATION_CLAIM_CREATION_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE QUOTATION_CLAIM_CREATION_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('QUOTATION_CLAIM_CREATION_INFO_SEQ'),
    SUBJECT_1 VARCHAR(255),
    BED VARCHAR(255),
    SUBJECT_2 VARCHAR(255),
    MAIN_TEXT TEXT,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- テーブルのコメント追加
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.SUBJECT_1 IS '件名1';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.BED IS 'ベッダ';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.SUBJECT_2 IS '件名2';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.MAIN_TEXT IS '本文';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.LAST_UPDATER IS '最終更新者';


-- PDF作成情報
-- テーブルの削除
DROP TABLE IF EXISTS PDF_CREATION_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS PDF_CREATION_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE PDF_CREATION_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE PDF_CREATION_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('PDF_CREATION_INFO_SEQ'),
    URL VARCHAR(255),
    ESTIMATE_CLAIM_CREATION_ID INT,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- 外鍵の追加例
ALTER TABLE PDF_CREATION_INFO ADD CONSTRAINT FK_ESTIMATE_CLAIM_CREATION_ID FOREIGN KEY (ESTIMATE_CLAIM_CREATION_ID) REFERENCES QUOTATION_CLAIM_CREATION_INFO(ID);

-- テーブルのコメント追加
COMMENT ON COLUMN PDF_CREATION_INFO.URL IS 'URL';
COMMENT ON COLUMN PDF_CREATION_INFO.ESTIMATE_CLAIM_CREATION_ID IS '見積請求作成ID';
COMMENT ON COLUMN PDF_CREATION_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN PDF_CREATION_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN PDF_CREATION_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN PDF_CREATION_INFO.LAST_UPDATER IS '最終更新者';

-- 見積請求設定情報
-- テーブルの削除
DROP TABLE IF EXISTS QUOTATION_CLAIM_SETTING_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS QUOTATION_CLAIM_SETTING_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE QUOTATION_CLAIM_SETTING_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE QUOTATION_CLAIM_SETTING_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('QUOTATION_CLAIM_SETTING_INFO_SEQ'),
    FORMAT VARCHAR(255),
    ISSUANCE_RULE VARCHAR(255),
    ITEM_NAME_RULE VARCHAR(255),
    DUE_MONTH_STATUS INT,
    DUE_MONTH INT,
    DUE_DATE_STATUS INT,
    DUE_DATE INT,
    WEEKEND_PREVIOUS_STATUS INT,
    WEEKEND_NEXT_STATUS INT,
    WEEKEND_IGNORE_STATUS INT,
    EMAIL_CREATION_RULE VARCHAR(255),
    SAVE_LOCATION VARCHAR(255),
    CLIENT_COMPANY_NAME VARCHAR(255),
    CLIENT_ESTIMATE_DESTINATION VARCHAR(255),
    TYPE_FLAG INT,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- テーブルのコメント追加
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.FORMAT IS 'フォーマット';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.ISSUANCE_RULE IS '発番ルール';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.ITEM_NAME_RULE IS '品目名記載ルール';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.DUE_MONTH_STATUS IS '振込期日月ステータス';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.DUE_MONTH IS '振込期日月';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.DUE_DATE_STATUS IS '振込期日日付ステータス';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.DUE_DATE IS '振込期日日付';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.WEEKEND_PREVIOUS_STATUS IS '土日祝ステータス前営業日';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.WEEKEND_NEXT_STATUS IS '土日祝ステータス後営業日';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.WEEKEND_IGNORE_STATUS IS '土日祝ステータス考慮しない';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.EMAIL_CREATION_RULE IS 'メール作成ルール';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.SAVE_LOCATION IS '保存先';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.CLIENT_COMPANY_NAME IS '取引先会社名';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.CLIENT_ESTIMATE_DESTINATION IS '取引先見積送付先';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.TYPE_FLAG IS '種別フラグ';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN QUOTATION_CLAIM_SETTING_INFO.LAST_UPDATER IS '最終更新者';

-- 請求減算ルール情報
-- テーブルの削除
DROP TABLE IF EXISTS CLAIM_SUBTRACTION_RULE CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS CLAIM_SUBTRACTION_RULE_SEQ;

-- シークエンスの作成
CREATE SEQUENCE CLAIM_SUBTRACTION_RULE_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE CLAIM_SUBTRACTION_RULE (
    ID INT PRIMARY KEY DEFAULT nextval('CLAIM_SUBTRACTION_RULE_SEQ'),
    SETTING_INFO_ID INT,
    SUBTRACTION_RULE VARCHAR(255),
    SUBTRACTION_ITEM VARCHAR(255),
    SUBTRACTION_AMOUNT VARCHAR(255),
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- 外鍵の追加例
ALTER TABLE CLAIM_SUBTRACTION_RULE ADD CONSTRAINT FK_SETTING_INFO_ID FOREIGN KEY (SETTING_INFO_ID) REFERENCES QUOTATION_CLAIM_SETTING_INFO(ID);

-- テーブルのコメント追加
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.SETTING_INFO_ID IS '設定情報ID';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.SUBTRACTION_RULE IS '減算ルール';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.SUBTRACTION_ITEM IS '減算項目';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.SUBTRACTION_AMOUNT IS '減算額';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.CREATION_DATE IS '作成日';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.CREATOR IS '作成者';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN CLAIM_SUBTRACTION_RULE.LAST_UPDATER IS '最終更新者';



-- 担当者情報テーブル
-- テーブルの削除
DROP TABLE IF EXISTS PERSON_CHARGE_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS PERSON_CHARGE_INFO_SEQ;

-- シークエンスの作成
CREATE SEQUENCE PERSON_CHARGE_INFO_SEQ START WITH 1 INCREMENT BY 1;

-- テーブルの作成
CREATE TABLE PERSON_CHARGE_INFO (
    ID INT PRIMARY KEY DEFAULT nextval('PERSON_CHARGE_INFO_SEQ'),
    LAST_NAME VARCHAR(255),
    FIRST_NAME VARCHAR(255),
    EMAIL VARCHAR(255),
    PARTNER_STORE_ID INT,
    TYPE_FLAG INT,
    QUOTATION_CLAIM_CREATION_ID INT,
    CREATION_DATE DATE,
    CREATOR VARCHAR(255),
    LAST_UPDATE_DATE DATE,
    LAST_UPDATER VARCHAR(255)
);

-- 注釈の追加
COMMENT ON COLUMN PERSON_CHARGE_INFO.LAST_NAME IS '担当者姓';
COMMENT ON COLUMN PERSON_CHARGE_INFO.FIRST_NAME IS '担当者名';
COMMENT ON COLUMN PERSON_CHARGE_INFO.EMAIL IS 'アドレス';
COMMENT ON COLUMN PERSON_CHARGE_INFO.PARTNER_STORE_ID IS '取引先店舗ID';
COMMENT ON COLUMN PERSON_CHARGE_INFO.TYPE_FLAG IS '種別フラグ';
COMMENT ON COLUMN PERSON_CHARGE_INFO.QUOTATION_CLAIM_CREATION_ID IS '見積請求作成ID';
COMMENT ON COLUMN PERSON_CHARGE_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN PERSON_CHARGE_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN PERSON_CHARGE_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN PERSON_CHARGE_INFO.LAST_UPDATER IS '最終更新者';

-- 外鍵の追加
ALTER TABLE PERSON_CHARGE_INFO ADD CONSTRAINT FK_PARTNER_STORE_ID FOREIGN KEY (PARTNER_STORE_ID) REFERENCES BUSINESS_PARTNER_STORE(ID);

-- 一時保存記録
-- テーブルの削除
DROP TABLE IF EXISTS temporary_save_info CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS temporary_save_info_seq;
-- 创建 SEQUENCE
CREATE SEQUENCE temporary_save_info_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- 创建表
CREATE TABLE temporary_save_info (
    id INT DEFAULT nextval('temporary_save_info_seq') PRIMARY KEY, -- 主键，使用 SEQUENCE 自动递增
    matter_master_exe_id BIGINT,
    google_excel_name VARCHAR(255), -- googleEXCELファイル名
    google_excel_sheet_name VARCHAR(255), -- googleEXCELファイルシート名
    temporary_save_type VARCHAR(255), -- 一時保存タイプ
    exe_date DATE, -- 実行日
    exe_name VARCHAR(255), -- 名称
    creation_date DATE, -- 作成日
    creator VARCHAR(255), -- 作成者
    del_flg VARCHAR(1), -- 削除フラグ
    last_update_date DATE, -- 最終更新日
    last_updater VARCHAR(255) -- 最終更新者
);
-- 添加注释
COMMENT ON TABLE temporary_save_info IS '一時保存記録';
COMMENT ON COLUMN temporary_save_info.id IS 'ID';
COMMENT ON COLUMN temporary_save_info.matter_master_exe_id IS '案件情報取得処理ID';
COMMENT ON COLUMN temporary_save_info.google_excel_name IS 'googleEXCELファイル名';
COMMENT ON COLUMN temporary_save_info.google_excel_sheet_name IS 'googleEXCELファイルシート名';
COMMENT ON COLUMN temporary_save_info.temporary_save_type IS '一時保存タイプ';
COMMENT ON COLUMN temporary_save_info.exe_date IS '実行日';
COMMENT ON COLUMN temporary_save_info.exe_name IS '名称';
COMMENT ON COLUMN temporary_save_info.creation_date IS '作成日';
COMMENT ON COLUMN temporary_save_info.creator IS '作成者';
COMMENT ON COLUMN temporary_save_info.del_flg IS '削除フラグ';
COMMENT ON COLUMN temporary_save_info.last_update_date IS '最終更新日';
COMMENT ON COLUMN temporary_save_info.last_updater IS '最終更新者';
-- 设置 SEQUENCE 和主键关联
ALTER SEQUENCE temporary_save_info_seq OWNED BY temporary_save_info.id;

-- 创建送付情報表
-- テーブルの削除
DROP TABLE IF EXISTS delivery_info CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS delivery_info_id_seq;
-- 创建自定义的 sequence
CREATE SEQUENCE delivery_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- 创建送付情報表
CREATE TABLE delivery_info (
    -- ID: 主键，自动递增
    ID INT PRIMARY KEY DEFAULT nextval('delivery_info_id_seq'),

    -- 送付対象标志
    delivery_flg VARCHAR(1),

    -- 送付先地址
    shipping_address VARCHAR(255),

    -- 会社id
    company_id INT,

    -- 会社名称
    company_name VARCHAR(255),

    -- 店铺地址设置
    store_address_settings VARCHAR(255),
    STORE_ID  VARCHAR(255),
    STORE_name  VARCHAR(255),
    -- 代理店id
    agent_id INT,

    -- 代理店名称
    agent_name VARCHAR(255),

    -- 件名
    subject_name VARCHAR(255),

    -- 金额
    amount NUMERIC(10, 2),

    -- 第1週の合計金額
    WEEK1_AMOUNT NUMERIC(10, 2),

    -- 第2週の合計金額
    WEEK2_AMOUNT NUMERIC(10, 2),

    -- 第3週の合計金額 
    WEEK3_AMOUNT NUMERIC(10, 2), 

    -- 第4週の合計金額
    WEEK4_AMOUNT NUMERIC(10, 2),

    -- 第5週の合計金額 
    WEEK5_AMOUNT NUMERIC(10, 2), 

    -- 見積請求区分（例: 見積または請求）
    ESTIMATION_REQUEST_TYPE INT,
    -- excel作成ファイル名
    EXCEL_FILE_NAME VARCHAR(255),
    -- PDF作成パス
    FILE_PATH VARCHAR(255),
    -- PDF作成ファイル名
    PDF_FILE_NAME VARCHAR(255),
    -- 日期
    var_date VARCHAR(255),

    -- 案件信息获取处理ID
    MATTER_MASTER_EXE_ID BIGINT,

    -- Google Excel 文件名
    GOOGLE_EXCEL_NAME VARCHAR(255),

    -- Google Excel 文件的表单名称
    GOOGLE_EXCEL_SHEET_NAME VARCHAR(255),

    -- 创建日期
    CREATION_DATE DATE,

    -- 创建者
    CREATOR VARCHAR(255),

    -- 删除标志
    DEL_FLG VARCHAR(1),

    -- 最后更新时间
    LAST_UPDATE_DATE DATE,

    -- 最后更新者
    LAST_UPDATER VARCHAR(255),
    -- 取得条件年
    conditions_year	 VARCHAR(255),
    --  取得条件月
    conditions_month VARCHAR(255),
    -- 取得条件週
    conditions_week VARCHAR(255),
    -- 取得条件代理店
    conditions_agency VARCHAR(255),
    -- 送付状態
    delivery_status VARCHAR(1)

);

-- 为表添加注释
COMMENT ON TABLE delivery_info IS '送付情報テーブル';

-- 为列添加注释
COMMENT ON COLUMN delivery_info.ID IS 'ID';
COMMENT ON COLUMN delivery_info.delivery_flg IS '送付対象';
COMMENT ON COLUMN delivery_info.shipping_address IS '送付先';
COMMENT ON COLUMN delivery_info.company_id IS '会社id';
COMMENT ON COLUMN delivery_info.company_name IS '会社名';
COMMENT ON COLUMN delivery_info.store_address_settings IS '店舗アドレス設定';
COMMENT ON COLUMN delivery_info.agent_id IS '代理店id';
COMMENT ON COLUMN delivery_info.agent_name IS '代理店名';
COMMENT ON COLUMN delivery_info.STORE_ID IS '店舗ID';
COMMENT ON COLUMN delivery_info.STORE_name IS '店舗名';
COMMENT ON COLUMN delivery_info.subject_name IS '件名';
COMMENT ON COLUMN delivery_info.amount IS '金額';
COMMENT ON COLUMN delivery_info.WEEK1_AMOUNT IS '第1週合計金額';
COMMENT ON COLUMN delivery_info.WEEK2_AMOUNT IS '第2週合計金額';
COMMENT ON COLUMN delivery_info.WEEK3_AMOUNT IS '第3週合計金額';
COMMENT ON COLUMN delivery_info.WEEK4_AMOUNT IS '第4週合計金額';
COMMENT ON COLUMN delivery_info.WEEK5_AMOUNT IS '第5週合計金額';
COMMENT ON COLUMN delivery_info.ESTIMATION_REQUEST_TYPE IS '第5週合計金額';
COMMENT ON COLUMN delivery_info.var_date IS '日付';
COMMENT ON COLUMN delivery_info.MATTER_MASTER_EXE_ID IS '案件情報取得処理ID';
COMMENT ON COLUMN delivery_info.GOOGLE_EXCEL_NAME IS 'googleEXCELファイル名';
COMMENT ON COLUMN delivery_info.GOOGLE_EXCEL_SHEET_NAME IS 'googleEXCELファイルシート名';
COMMENT ON COLUMN delivery_info.conditions_year IS '取得条件年';
COMMENT ON COLUMN delivery_info.conditions_month IS '取得条件月';
COMMENT ON COLUMN delivery_info.conditions_week IS '取得条件週';
COMMENT ON COLUMN delivery_info.conditions_agency IS '取得条件代理店';
COMMENT ON COLUMN delivery_info.delivery_status  IS '送付状態';
COMMENT ON COLUMN delivery_info.CREATION_DATE IS '作成日';
COMMENT ON COLUMN delivery_info.CREATOR IS '作成者';
COMMENT ON COLUMN delivery_info.DEL_FLG IS '削除フラグ';
COMMENT ON COLUMN delivery_info.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN delivery_info.LAST_UPDATER IS '最終更新者';



-- 見積請求集計テーブル
-- テーブルの削除
DROP TABLE IF EXISTS ESTIMATION_REQUEST_SUMMARY;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS ESTIMATION_REQUEST_SUMMARY_SEQ;

-- シークエンスの作成
CREATE SEQUENCE ESTIMATION_REQUEST_SUMMARY_SEQ
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

-- テーブルの作成
CREATE TABLE ESTIMATION_REQUEST_SUMMARY (
    ID INT DEFAULT NEXTVAL('ESTIMATION_REQUEST_SUMMARY_SEQ') PRIMARY KEY,  -- プライマリキー
    CONDITIONS_YEAR VARCHAR(255),           -- 取得条件年
    CONDITIONS_MONTH VARCHAR(255),          -- 取得条件月
    CONDITIONS_AGENCY VARCHAR(255),         -- 取得条件代理店
    COMPANY_ID INT,                         -- 会社名ID（取引先の会社ID）
    COMPANY_NAME VARCHAR(255),              -- 会社名（取引先の会社名）
    STORE_ID INT,                           -- 店舗ID
    STORE_NAME VARCHAR(255),                -- 店舗名
    WEEK1_AMOUNT NUMERIC(10, 2),            -- 第1週合計金額
    WEEK2_AMOUNT NUMERIC(10, 2),            -- 第2週合計金額
    WEEK3_AMOUNT NUMERIC(10, 2),            -- 第3週合計金額
    WEEK4_AMOUNT NUMERIC(10, 2),            -- 第4週合計金額
    WEEK5_AMOUNT NUMERIC(10, 2),            -- 第5週合計金額
    ESTIMATION_REQUEST_TYPE INT,            -- 見積請求区分（例: 1=見積, 2=請求）
    TOTAL_AMOUNT NUMERIC(10, 2),            -- 総金額（総合計金額）
    CREATION_DATE DATE,                     -- 作成日
    CREATOR VARCHAR(255),                   -- 作成者
    LAST_UPDATE_DATE DATE,                  -- 最終更新日
    LAST_UPDATER VARCHAR(255)               -- 最終更新者
);

-- 注釈の追加
COMMENT ON TABLE ESTIMATION_REQUEST_SUMMARY IS '見積請求集計テーブル';

COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.CONDITIONS_YEAR IS '取得条件年';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.CONDITIONS_MONTH IS '取得条件月';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.CONDITIONS_AGENCY IS '取得条件代理店';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.COMPANY_ID IS '会社名ID（取引先の会社ID）';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.COMPANY_NAME IS '会社名（取引先の会社名）';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.STORE_ID IS '店舗ID';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.STORE_NAME IS '店舗名';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.WEEK1_AMOUNT IS '第1週合計金額';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.WEEK2_AMOUNT IS '第2週合計金額';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.WEEK3_AMOUNT IS '第3週合計金額';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.WEEK4_AMOUNT IS '第4週合計金額';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.WEEK5_AMOUNT IS '第5週合計金額';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.ESTIMATION_REQUEST_TYPE IS '見積請求区分（例: 1=見積, 2=請求）';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.TOTAL_AMOUNT IS '総金額（総合計金額）';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.CREATION_DATE IS '作成日';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.CREATOR IS '作成者';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN ESTIMATION_REQUEST_SUMMARY.LAST_UPDATER IS '最終更新者';


-- テーブルの削除
DROP TABLE IF EXISTS QUOTATION_CLAIM_CREATION_INFO CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS quotation_claim_creation_info_id_seq;
-- 创建自定义的 sequence
CREATE SEQUENCE quotation_claim_creation_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
CREATE TABLE QUOTATION_CLAIM_CREATION_INFO (
    ID  INT PRIMARY KEY DEFAULT nextval('delivery_info_id_seq'),
    delivery_id INT, -- 送付情報ID
    SUBJECT_1 VARCHAR(255), -- 件名1
    BED VARCHAR(255), -- ベッダ
    SUBJECT_2 VARCHAR(255), -- 件名2
    MAIN_TEXT TEXT, -- 本文
    excel_file_name VARCHAR(255), -- ファイル名 (Excel)
    file_path VARCHAR(255), -- ファイルパス
    pdf_file_name VARCHAR(255), -- ファイル名 (PDF)
    CREATION_DATE DATE, -- 作成日
    CREATOR VARCHAR(255), -- 作成者
    LAST_UPDATE_DATE DATE, -- 最終更新日
    LAST_UPDATER VARCHAR(255) -- 最終更新者
);
-- 设置 ID 列的默认值为序列值
COMMENT ON TABLE QUOTATION_CLAIM_CREATION_INFO IS '見積請求集計テーブル';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.delivery_id IS '送付情報ID';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.SUBJECT_1 IS '件名1';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.BED IS 'ベッダ';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.SUBJECT_2 IS '件名2';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.MAIN_TEXT IS '本文';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.excel_file_name IS 'ファイル名 (Excel)';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.file_path IS 'ファイルパス';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.pdf_file_name IS 'ファイル名 (PDF)';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.CREATION_DATE IS '作成日';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.CREATOR IS '作成者';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.LAST_UPDATE_DATE IS '最終更新日';
COMMENT ON COLUMN QUOTATION_CLAIM_CREATION_INFO.LAST_UPDATER IS '最終更新者';


-- テーブルの削除
DROP TABLE IF EXISTS to_mail_info CASCADE;

-- シークエンスの削除
DROP SEQUENCE IF EXISTS to_mail_info_id_seq;
-- 创建自定义的 sequence
CREATE SEQUENCE to_mail_info_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
CREATE TABLE to_mail_info (
    id   INT PRIMARY KEY DEFAULT nextval('to_mail_info_id_seq'),
    quotation_claim_creation_id INT,
    last_name VARCHAR(255),
    first_name VARCHAR(255),
    email VARCHAR(255),
    type_flag INT, -- 1:見積TO, 2:請求TO, 3:見積CC, 4:請求CC
    creation_date DATE,
    creator VARCHAR(255),
    last_update_date DATE,
    last_updater VARCHAR(255)
);

COMMENT ON COLUMN to_mail_info.quotation_claim_creation_id IS '求作成情報ID';
COMMENT ON COLUMN to_mail_info.last_name IS '担当者姓';
COMMENT ON COLUMN to_mail_info.first_name IS '担当者名';
COMMENT ON COLUMN to_mail_info.email IS 'メール';
COMMENT ON COLUMN to_mail_info.type_flag IS '種別フラグ: 1:見積TO, 2:請求TO, 3:見積CC, 4:請求CC';
COMMENT ON COLUMN to_mail_info.creation_date IS '作成日';
COMMENT ON COLUMN to_mail_info.creator IS '作成者';
COMMENT ON COLUMN to_mail_info.last_update_date IS '最終更新日';
COMMENT ON COLUMN to_mail_info.last_updater IS '最終更新者';
