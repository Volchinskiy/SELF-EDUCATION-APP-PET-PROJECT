SET client_encoding TO 'utf8';

CREATE TABLE person (
    id             BIGSERIAL      NOT NULL   PRIMARY KEY,
    password       VARCHAR(150)   NOT NULL,
    email          VARCHAR(150)   NOT NULL
);

CREATE TABLE repeat_status (
    id             INTEGER        NOT NULL   PRIMARY KEY,
    repeat_1_done  BOOLEAN        NOT NULL,
    repeat_2_done  BOOLEAN        NOT NULL,
    repeat_3_done  BOOLEAN        NOT NULL,
    repeat_4_done  BOOLEAN        NOT NULL,
    repeat_5_done  BOOLEAN        NOT NULL,
    repeat_6_done  BOOLEAN        NOT NULL,
    repeat_7_done  BOOLEAN        NOT NULL,
    repeat_8_done  BOOLEAN        NOT NULL
);

CREATE TABLE question (
    id             BIGSERIAL      NOT NULL   PRIMARY KEY,
    person_id      INTEGER        NOT NULL   REFERENCES person (id)                    DEFAULT 1,
    title          VARCHAR(150)   NOT NULL   DEFAULT '',  
    text           VARCHAR(1000)  NOT NULL   DEFAULT '', 
    topic          VARCHAR(150)   NOT NULL   DEFAULT '',  
    repeat_1       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '3 HOURS',
    repeat_2       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '3 HOURS 17.5 MINUTES',  
    repeat_3       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '10 HOURS',
    repeat_4       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '1 DAY 3 HOURS',
    repeat_5       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '3 DAYS 3 HOURS',
    repeat_6       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '7 DAYS 3 HOURS',
    repeat_7       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '17.5 DAYS 3 HOURS',
    repeat_8       TIMESTAMP      NOT NULL   DEFAULT NOW() + INTERVAL '2.5 MONTHS 3 HOURS',
    repeat_status  INTEGER        NOT NULL   REFERENCES repeat_status (id)             DEFAULT 0
);

INSERT INTO person (password, email) VALUES ('some_password', 'some_email');

INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (0, false, false, false, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (1, true, false, false, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (2, true, true, false, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (3, true, true, true, false, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (4, true, true, true, true, false, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (5, true, true, true, true, true, false, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (6, true, true, true, true, true, true, false, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (7, true, true, true, true, true, true, true, false);
INSERT INTO repeat_status (id, repeat_1_done, repeat_2_done, repeat_3_done, repeat_4_done, repeat_5_done, repeat_6_done, repeat_7_done, repeat_8_done) VALUES (8, true, true, true, true, true, true, true, true);

INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как джуну найти работу?', 'Очень стараться и развиватся!', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как выглядит структура импорта одного файла SCSS в другой файл SCSS?', '@import `Относительная ссылка`;', 'SCSS');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое CRUD?', 'Create Read Update Delete Операции.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое "Предохранители" в React?', 'Тема которая выводит какой-то JSX при ошибке рендера.', 'REACT');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое ESlint?', 'Доп прога которая ругается когда ты пишешь кот который не соответсвует определенному код стайлу.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как нужно оформлять гит репозиторий проекта?', 'Нужно создать файл readme.md и написать в нем на английском языке. Что этот проект делает? На чем он написан? Как его запустить?', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как выглядит запись React Фрагмента?', '<React.Fragment></React.Fragment>', 'REACT');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как выглядит сокращенная запись React Фрагмента?', '<></>', 'REACT');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое React фрагменты?', 'Это такой React компонент который возвращает элементы без создания нового дом узла. Он может возвращать несколько несколько элементов. Пример: Есть компонент в котором есть div в котором есть таблица. Нам нужно вставить компонентом теги <td></td> их много а мы знаем что реакт компонент возвращает только идин дом узел. Для таких случаев существуют <React.Fragment></React.Fragment> в эту конструкцию вставляем все теги <td></td> и наша задача выполнена потому что наш компонент вернет только теги <td></td>.', 'REACT');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Зачем нужны React фрагменты?', 'Чтобы не создавать лишних DOM узлов.', 'REACT');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как хендлить промис?', 'Методом .then() .catch() или async await.', 'JS');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Чем миксин отличается от шаблона в SASS/SCSS.', 'Миксин это как функция которая принимает в себя данные, шаблон это фиксорованные стили.', 'SCSS');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое Redux?', 'Redux это JS библиотека которая добавляет возможность хранить общее состояние приложения и предсказуемо изменять его.', 'REDUX');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое WebSocket?', 'WebSocket это протокол соеденения по сети как и http, но работает он по другому, в http чтоб получить данные их нужно сначала запросить, в WebSocket этого не нужно две машины устанавливают связь с сервером и при отправки данных с одной машины  на сервер, сервер автоматически отправлеят эти данные другой машине без каких либо запросов.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как создать React приложение с встроиным Redux?', 'Используя этот шаблон "npx create-react-app my-app --template redux" и даже можно с тайпскриптом "npx create-react-app my-app --template redux-typescript".', 'REACT');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как переводится слово `Thirty`?', 'Тридцать.', 'ENGLISH');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как переводится слово `Cheap`?', 'Дешовый.', 'ENGLISH');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как переводится слово `Successful`?', 'Успешный.', 'ENGLISH');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Как составлять алгоритм?', 'Алгоритм нужно составлять таким образом чтобы в нём не было ни одного непонятного действия для исполнителя.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Переменная`?', 'Переменная в императивном программировании — поименованная, либо адресуемая иным способом область памяти, адрес которой можно использовать для осуществления доступа к данным. Данные, находящиеся в переменной (то есть по данному адресу памяти), называются значением этой переменной (короче: переменная — именованный участок памяти, обладающий некоторым типом). В других парадигмах программирования, например, в функциональной и логической, понятие переменной оказывается несколько иным. В таких языках переменная определяется как имя, с которым может быть связано значение, или даже как место (location) для хранения значения. Если говорить простыми словами Переменная это как контейнер в который можно сложить какоето значения чтобы потом его использовать. Исход из своего опыта могу еще добавить что у переменной может менятся знанчение.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Константа`?', 'Константа в програмирование это тоже способ адресации данных(как переменная) но значение константы менять нельзя.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Идентификатор`?', 'Индификатор это Имена, использующиеся для переменных, функций, меток, методов, классов, и других определяемых пользователем объектов, Как внутренние, так и импортируемые из других модулей так и глобальные. По сути любая переменная это Индификатор она индифицирует значение в памяти.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Условие`?', 'Условие это выражение которое может быть либо true либо false. Также условие обязательно содержит в себе логические операторы.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Цикл`?', 'Цикл — разновидность управляющей конструкции в высокоуровневых языках программирования, предназначенная для организации многократного исполнения набора инструкций. Также циклом может называться любая многократно исполняемая последовательность инструкций. Простыми словами цикл это кусочек кода который многократно повторяется.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Итерирование`?', 'Итерация в программировании — в широком смысле — организация обработки данных, при которой действия повторяются многократно, не приводя при этом к вызовам самих себя (в отличие от рекурсии). В узком смысле — один шаг итерационного, циклического процесса.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Процедура`?', 'Процедура — это независимая именованная часть программы, которую после однократного описания можно многократно вызвать по имени из последующих частей программы для выполнения определенных действий.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Функция`?', 'Функция это фрагмент программного кода, к которому можно обратиться из другого места программы. Функции, которые возвращают пустое значение, часто называют процедурами.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Чем `Процедура` отличается от `Функции`?', 'Процедура представляет собой последовательность операторов, которая имеет имя, список параметров и может быть вызвана из различных частей программы. Функции, в отличие от процедур, в результате своего выполнения возвращают значение, которое может быть использовано в выражении.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Массив`?', 'Массив — структура данных, хранящая набор значений, идентифицируемых по индексу или набору индексов.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Матрица`?', 'Не понял что это. Нужно понять!', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Обьект`?', 'Объект в программировании — некоторая сущность в цифровом пространстве, обладающая определённым состоянием и поведением, имеющая определенные свойства и операции над ними. Как правило, при рассмотрении объектов выделяется то, что объекты принадлежат одному или нескольким классам, которые определяют поведение объекта.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Класс`?', 'Класс — в объектно-ориентированном программировании, представляет собой шаблон для создания объектов, обеспечивающий начальные значения состояний: инициализация полей-переменных и реализация поведения функций или методов.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Метод`?', 'Метод в объектно-ориентированном программировании — это функция или процедура, принадлежащая какому-то классу или объекту. Как и процедура в процедурном программировании, метод состоит из некоторого количества операторов для выполнения какого-то действия и имеет набор входных аргументов. Простыми словами Функция у обьекта.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Свойство`?', 'Свойство — способ доступа к внутреннему состоянию объекта, имитирующий переменную некоторого типа. Простыми словами Переменная у обьекта.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Лексический Контекст`?', 'Проще говоря, лексическое окружение — это структура, которая хранит сведения о соответствии идентификаторов и переменных. Под «идентификатором» здесь понимается имя переменной или функции, а под «переменной» — ссылка на конкретный объект (в том числе — на функцию) или примитивное значение.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Структура Данных`?', 'Структура данных — программная единица, позволяющая хранить и обрабатывать множество однотипных и/или логически связанных данных в вычислительной технике.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Система Типов`?', 'Система типов — совокупность правил в языках программирования, назначающих свойства, именуемые типами, различным конструкциям, составляющим программу — таким как переменные, выражения, функции или модули.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Член Класса`?', 'В классах и структурах есть члены, представляющие их данные и поведение. Члены класса включают все члены, объявленные в этом классе, а также все члены (кроме конструкторов и методов завершения), объявленные во всех классах в иерархии наследования данного класса.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Операция`?', 'Опера́ция — конструкция в языках программирования, аналогичная по записи математическим операциям, то есть специальный способ записи некоторых действий. Наиболее часто применяются арифметические, логические и строковые операции.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Команда`?', 'Кома́нда — это указание компьютерной программе действовать как некий интерпретатор для решения задачи. В более общем случае, команда — это указание некоему интерфейсу командной строки, такому как shell. В частности, термин команда используется в языках императивного программирования.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Оператор`?', 'Оператор или Инструкция - наименшая синтаксическая часть языка программирования исполняемая интерпретатором, средой или компилируемой в машинный код.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Директива`?', 'В программировании термин «директива» по использованию похож на термин «команда», также используется для описания некоторых конструкций языка программирования.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Интерпретатор`?', 'Интерпретатор — программа разновидность транслятора, выполняющая интерпретацию. Интерпретация — построчный анализ, обработка и выполнение исходного кода программы или запроса, в отличие от компиляции, где весь текст программы, перед запуском анализируется и транслируется в машинный или байт-код без её выполнения.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Компилятор`?', 'Компиля́тор — программа, переводящая текст, написанный на языке программирования, в набор машинных кодов.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Синтаксис`?', 'Синтаксис это правила постороения программного кода из символов, но не затрагивающие смысловую нагрузку кода. Синтаксис определяет только формальную структуру кода.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Какие есть группы можно разделить `Statements(Операторы)`?', 'Операторы присваивания, Оператры Сравнения, Арефметические Операторы, Бинарные и логические операторы, Строковые операторы, операторы вызова функции, Унарные и Тернарные операторы.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Выражение`?', 'Выражение это синтаксическая констркуция языка предназначенное для виполнения вычислений. Выражение состоить из индификаторов, значений, операторов, и вызова функций.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Значение`?', 'Значение это Величина записанная в определенное место памяти и определенном формате, также значение представляет собой данные которыми может манипулировать программа.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Тип`?', 'Тип это множество значений и операций которые могут быть произведеный над этим значением. Например в JS тип Boolean подразумивает собой значение true или false и логические операции над этими значениями.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Литерал`?', 'Литерал это запись занчения в коде программы. Пример true это литерал записи истины, а `` литирал записи строки.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Скаляр`?', 'Скаляр это значение примитивного типа number, string, boolean.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Структурные Типы`?', 'Это композитные типы или структуры которые состоят из нескольких значений объединенных в одно таким образом чтобы над этим объединенным значением можно было выполнять операции. Пример: Массив, Обьект, Множество, Кортеж.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Алгоритм`?', 'Это формальное описание порядка вычислений для определенного класса задач за конечное время (способность завершится для любого множества входных данных).', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Программа`?', 'Это программный код и данные, объединенные в одно целое для вычисления и управления ЭВМ.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Инженерия`?', 'Это извлечение практической пользы из имеющихся ресурсов при помощи науки, техники, различных методик, организационной структуры, а также приемов и знаний.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Программирование`?', 'Это искусство и инженерия решения задач при помощи вычислительной техники.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Кодирование`?', 'Это написание исходного кода программы при помощи определенного синтаксиса, стиля, парадигмы, по готовому ТЗ.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Блок Кода`?', 'Это логически связанная группа инструкций или оператооров, блоки создают область видимости.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Парадигма Програмирования`?', 'Это то что задает набор идей, понятий, допущений и ограничений, концепций, принципов, постулатов, приемов и техник программирования для решения задачь ЭВМ.', 'FUNDAMENTAL');
INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое `Абстракции`?', '', 'FUNDAMENTAL');

-- INSERT INTO question (person_id, title, text, topic) VALUES (1, 'Что такое ``?', '', 'FUNDAMENTAL');
-- INSERT INTO question (person_id, title, text, topic) VALUES (1, '', '', '');
-- DROP TABLE question;
-- DROP TABLE repeat_status;
-- DROP TABLE person;
-- \i C:/Users/TTT/Desktop/Programming-Maxim-Volchinskiy/Web/SELF-EDUCATION-APP-PET-PROJECT/server-nest/src/database/entities.sql;