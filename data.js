// Content Roulette — Data Arrays
// All data sourced from the Figma plugin (code.ts)
// Used by index.html as a global DATA object

const DATA = {

  firstNames: [
    // East Asian (Chinese, Japanese, Korean)
    'Aki', 'Aiko', 'An', 'Ayaka', 'Bo', 'Byung-ho', 'Cheng',
    'Dae-hyun', 'Daiki', 'Dong-hyun', 'Doyun', 'Eun-ji', 'Eun-young',
    'Feng', 'Hana', 'Hanzo', 'Haoran', 'Haruto', 'Hiroshi', 'Hyun', 'Hyun-woo', 'Hye-jin',
    'Jae-won', 'Ji', 'Ji-yeon', 'Jiao', 'Jin', 'Jing', 'Jun',
    'Kai', 'Kazuki', 'Kei', 'Kenji', 'Koharu', 'Lan', 'Lixin',
    'Megumi', 'Meihua', 'Mei-Ling', 'Minoru', 'Misako',
    'Qiang', 'Rei', 'Ren', 'Rong', 'Rui', 'Ryo', 'Ryota',
    'Sakura', 'Seojun', 'Shinji', 'Sohyeon', 'Soyeon', 'Sung-min',
    'Takumi', 'Taro', 'Tomoko', 'Wei-Ming', 'Xiao-Yu', 'Xin', 'Xinyu', 'Xiulan',
    'Yao', 'Yeong-su', 'Yin', 'Yuki', 'Yuna', 'Yuto', 'Zhen', 'Zhenwei', 'Zhi-Wei',

    // Southeast Asian (Vietnamese, Thai, Filipino, Indonesian/Malay)
    'Anh', 'Anchana', 'Angelica', 'Anuwat', 'Araya', 'Agus', 'Bao', 'Budi',
    'Chalee', 'Corazon', 'Dewi', 'Dian', 'Duc', 'Eko',
    'Hendra', 'Hoa', 'Huy', 'Indah', 'Jose', 'Juan', 'Katrina',
    'Linh', 'Lourdes', 'Mai', 'Malee', 'Maria', 'Minh', 'Nam',
    'Nattawut', 'Niran', 'Nittaya', 'Phuong', 'Putri', 'Ramon',
    'Ratna', 'Rizki', 'Rowena', 'Sari', 'Somchai',
    'Thanh', 'Thu', 'Wahyu', 'Wulandari',

    // South Asian (Indian, Pakistani, Bangladeshi, Sri Lankan)
    'Aarav', 'Abhishek', 'Aditya', 'Ajay', 'Akash', 'Alok', 'Amit', 'Anand',
    'Anika', 'Anish', 'Anjali', 'Ari', 'Arjun', 'Arya', 'Asha', 'Avni',
    'Bhavna', 'Chitra', 'Daksh', 'Deepa', 'Dev', 'Divya', 'Diya',
    'Gaurav', 'Gauri', 'Harsh', 'Harsha', 'Ira', 'Ishan', 'Ishita',
    'Jatin', 'Jaya', 'Kartik', 'Kavya', 'Kiran', 'Lakshman', 'Lakshmi',
    'Madhav', 'Malini', 'Manish', 'Meera', 'Mohan', 'Nandini', 'Naveen',
    'Neel', 'Nikhil', 'Niraj', 'Nisha', 'Nitin', 'Padma', 'Piyush', 'Pooja',
    'Pradeep', 'Pranav', 'Preet', 'Prem', 'Priya', 'Raghav', 'Rahul', 'Raj',
    'Rashika', 'Ratan', 'Ravi', 'Rekha', 'Riya', 'Rohit', 'Sanjay', 'Shaan',
    'Shalini', 'Shiv', 'Shreya', 'Siddharth', 'Sonal', 'Sunita', 'Suresh',
    'Swati', 'Tarun', 'Tej', 'Uma', 'Usha', 'Varun', 'Veer', 'Vidya', 'Vikram', 'Vivek',

    // Middle Eastern & North African
    'Abdullah', 'Adel', 'Ahmed', 'Aisha', 'Ali', 'Amal', 'Amani', 'Amir', 'Amira',
    'Arwa', 'Bassam', 'Bassem', 'Bilal', 'Bushra',
    'Dalal', 'Dana', 'Dina', 'Eden', 'Faris', 'Fatima', 'Farah', 'Fouad',
    'Ghada', 'Hala', 'Hamza', 'Hani', 'Hassan', 'Hiba',
    'Ibrahim', 'Iman', 'Jad', 'Jamal', 'Jana', 'Karam', 'Karim', 'Khalid',
    'Laith', 'Lana', 'Layla', 'Leila', 'Lujain',
    'Mahmoud', 'Majid', 'Manal', 'Marwan', 'Maryam', 'Mazen', 'Mona', 'Musa',
    'Nabil', 'Nadia', 'Nadine', 'Najwa', 'Nasser', 'Nizar', 'Noor', 'Nour',
    'Omar', 'Qasim', 'Rami', 'Rana', 'Rania', 'Reem', 'Reza', 'Rim',
    'Saad', 'Salam', 'Salem', 'Salim', 'Sami', 'Samar', 'Sana', 'Sari',
    'Soraya', 'Tala', 'Tarek', 'Tariq',
    'Wael', 'Wafa', 'Walid', 'Yasmin', 'Yousef', 'Yusuf', 'Zahra', 'Zainab', 'Ziad',

    // Sub-Saharan African (West, East & Southern)
    'Adaeze', 'Afia', 'Aissatou', 'Ama', 'Amara', 'Chidinma', 'Dayo', 'Emeka',
    'Fatou', 'Femi', 'Folake', 'Imani', 'Jabari', 'Juma', 'Kamau', 'Kemi',
    'Kofi', 'Kwame', 'Lebo', 'Lekan', 'Makena', 'Mariama', 'Moussa',
    'Naledi', 'Ngozi', 'Obinna', 'Sekou', 'Seun', 'Sipho', 'Thabo',
    'Thandiwe', 'Tunde', 'Wanjiru', 'Wole', 'Yaw', 'Yetunde', 'Zuri',

    // Latino / Hispanic
    'Adrián', 'Adriana', 'Alejandro', 'Alicia', 'Alexis', 'Álvaro', 'Andrea',
    'Andrés', 'Arturo', 'Beatriz', 'Bernardo', 'Camila', 'Carlos', 'Carmen',
    'Cecilia', 'César', 'Cruz', 'Daniela', 'Diego', 'Eduardo', 'Elena',
    'Emilio', 'Enrique', 'Esperanza', 'Esteban', 'Fabian', 'Fernanda', 'Fernando',
    'Gabriel', 'Gabriella', 'Gloria', 'Guadalupe', 'Héctor', 'Ignacio', 'Inés', 'Inez',
    'Isabella', 'Isaú', 'Javier', 'Joaquín', 'Jorge', 'Katalina',
    'Laura', 'Leonardo', 'Lidia', 'Lorena', 'Lucía', 'Luis', 'Magdalena',
    'Manuel', 'Marcos', 'Marisa', 'Mateo', 'Miguel', 'Mónica', 'Natalia',
    'Pablo', 'Paz', 'Pilar', 'Rafael', 'Rocío', 'Rodrigo', 'Rosa',
    'Santiago', 'Sofía', 'Tomás', 'Trinidad', 'Valentín', 'Verónica',

    // European
    'Ada', 'Adriaan', 'Agnieszka', 'Aleksei', 'Alessandro', 'Alex', 'Alfred',
    'Amélie', 'Anastasia', 'Anja', 'Anya', 'Anneliese', 'Anne', 'Anna',  'Anton', 'Armin', 'Armando', 'Astrid',
    'Axel', 'Beatrice', 'Benedict', 'Bianca', 'Björn', 'Brigitte',
    'Camille', 'Cecilie', 'Charlie', 'Chiara', 'Christoph', 'Claudio', 'Claudia',
    'Dimitri', 'Dominik', 'Dorothea', 'Éloïse', 'Einar', 'Eleni', 'Elodie',
    'Elke', 'Elsa', 'Emile', 'Emma', 'Enzo', 'Erik', 'Ernst',
    'Fabienne', 'Finn', 'Florian', 'Francesca', 'Frederica', 'Freja', 'Friedrich',
    'Giovanni', 'Gregor', 'Greta', 'Gunnar', 'Hans', 'Heidi', 'Helena',
    'Hendrik', 'Hilde', 'Hugo', 'Ingrid',
    'Irena', 'Irina', 'Ivo', 'Ivan', 'Jan', 'Janek', 'Jesse', 'Julia',
    'Julián', 'Katarina', 'Katrin', 'Katya', 'Kim', 'Klaus', 'Konrad',
    'Lars', 'Larssen', 'Lasse', 'Lena', 'Lennox', 'Leonie', 'Liselotte', 'Luca',
    'Luciano', 'Madeleine', 'Marco', 'Marika', 'Martina', 'Mathias', 'Mika', 'Mikael',
    'Mireille', 'Miriam', 'Monika', 'Morgan', 'Nadja', 'Natasha', 'Nico',
    'Nikolai', 'Nils', 'Olga', 'Olivia', 'Oskar', 'Pietro', 'Pierre',
    'Rafaela', 'Rainer', 'Robin', 'Romain', 'Rudolf', 'Sabine',
    'Sasha', 'Sergei', 'Sigrid', 'Simone', 'Sophie', 'Søren', 'Stefan',
    'Sven', 'Svenja', 'Thierry', 'Tiago', 'Tobias', 'Valentina', 'Viktor', 'Yvette',

    // Turkish & Central Asian
    'Ahmet', 'Alibek', 'Aylin', 'Bahar', 'Bekzod', 'Burak', 'Ceylan',
    'Daniyar', 'Deniz', 'Derya', 'Elif', 'Emre', 'Esra', 'Fatma',
    'Furkan', 'Gül', 'Hakan', 'Kemal', 'Malika', 'Melek', 'Mert',
    'Nazgul', 'Nurlan', 'Ömer', 'Serkan', 'Sevgi', 'Timur', 'Tolga',
    'Zarina', 'Zeynep',

    // English-speaking / American
    'Aaron', 'Abigail', 'Abraham', 'Adelaide', 'Addison', 'Adrian', 'Ainsley',
    'Alistair', 'Amari', 'Amelia', 'Archer', 'Aria', 'Atlas', 'Aurora', 'Avery',
    'Beatrix', 'Benjamin', 'Blake', 'Brianna', 'Brooklyn',
    'Caden', 'Callum', 'Calvin', 'Cameron', 'Casey', 'Cassidy',
    'Celeste', 'Charlotte', 'Claire', 'Colton', 'Connor', 'Cora', 'Crew',
    'Dahlia', 'Dakota', 'Dante', 'Darby', 'Darius', 'Daphne', 'Declan',
    'Denise', 'Desmond', 'Dorian', 'Drew',
    'Elijah', 'Elise', 'Eloise', 'Ember', 'Emery', 'Erezabet', 'Ethan', 'Ezra',
    'Felix', 'Finley', 'Finnian', 'Fiona', 'Freya',
    'Garrett', 'Georgia', 'Geralt', 'Gregory',
    'Harper', 'Hayden', 'Haven', 'Hazel', 'Hudson', 'Hunter', 'Heather', 'Harrison',
    'Indigo', 'Iris', 'Isaiah', 'Ivy',
    'Jade', 'James','Jamie', 'Jamison', 'Jasmine', 'Jasper', 'Jaxon', 'Jerome',
    'Jillian', 'Jordan', 'Julian', 'June', 'Juniper',
    'Kaia', 'Keisha', 'Kendall', 'Lindsay', 'Lincoln',
    'Lachlan', 'Laila', 'Lamar', 'Laurel', 'Leo', 'Levi', 'Logan', 'Luna', 'Lyra',
    'Maeve', 'Malcolm', 'Margot', 'Mason', 'Naomi', 'Nathan', 'Nia', 'Nolan', 'Nora', 'Nova', 'Nylah',
    'Opal', 'Orion', 'Owen',
    'Parker', 'Paxton', 'Penelope', 'Philip', 'Philippa', 'Phoenix', 'Preston',
    'Quinn', 'Reese', 'Riley', 'River', 'Ronan',
    'Sage', 'Sebastian', 'Serena', 'Skye', 'Stella',
    'Tarkus', 'Tasha', 'Terrell', 'Theodore', 'Tristan',
    'Valen', 'Vera', 'Violet', 'Wren',
    'Zara', 'Zephyr', 'Zion', 'Zoey',
  ],

  lastNames: [
    // East Asian Last Names (Chinese, Japanese, Korean)
    'Abe', 'Ahn', 'Bae', 'Cai', 'Cao', 'Cha', 'Chen', 'Choi', 'Fan', 'Fujiwara',
    'Guo', 'Han', 'Hasashi', 'Hayashi', 'He', 'Huang', 'Inoue', 'Ito', 'Jang', 'Jeon',
    'Jeong', 'Jo', 'Kang', 'Kato', 'Kim', 'Kitada', 'Ko', 'Kobayashi', 'Koh', 'Kwok',
    'Lam', 'Lee', 'Li', 'Liang', 'Lim', 'Lin', 'Liu', 'Lu', 'Ma', 'Matsumoto',
    'Moon', 'Mori', 'Nakamura', 'Oh', 'Ogawa', 'Park', 'Qing', 'Ryu', 'Saito', 'Sasaki',
    'Sato', 'Seo', 'Shimizu', 'Shin', 'Soh', 'Song', 'Su', 'Sun', 'Suzuki', 'Takagi',
    'Takahashi', 'Tanaka', 'Tang', 'Tao', 'Tian', 'To', 'Tsai', 'Tsao', 'Ueda', 'Wang',
    'Watanbe', 'Wei', 'Wu', 'Xie', 'Xu', 'Yamaguchi', 'Yamada', 'Yamamoto', 'Yang', 'Ye',
    'Yoshida', 'Yoo', 'Yoon', 'Yu', 'Zhang', 'Zhao', 'Zheng', 'Zhou', 'Zhu', 'Zuo',

    // Southeast Asian Last Names (Vietnamese, Thai, Filipino, Indonesian/Malay)
    'Aquino', 'Bautista', 'Buenaventura', 'Bui', 'Charoenwong', 'Dao', 'Dela Cruz',
    'Do', 'Espiritu', 'Gunawan', 'Hidayat', 'Hoang', 'Kasem', 'Kusuma', 'Lazaro',
    'Le', 'Luu', 'Manalo', 'Ngo', 'Nguyen', 'Pham', 'Prasetyo', 'Santoso', 'Setiawan',
    'Srisawat', 'Thanh', 'Thongchai', 'Tran', 'Villanueva', 'Vo', 'Vuong', 'Wibowo', 'Wijaya',

    // South Asian Last Names
    'Agarwal', 'Ahsan', 'Ahuja', 'Anand', 'Arora', 'Balaji', 'Banerjee', 'Banu',
    'Bedi', 'Bhagat', 'Bhatt', 'Bhatnagar', 'Bose', 'Chandra', 'Chatterjee', 'Chauhan',
    'Chopra', 'Choudhary', 'Das', 'Desai', 'Dev', 'Dubey', 'Dutta', 'Gandhi', 'Ghosh',
    'Gill', 'Goswami', 'Goyal', 'Gupta', 'Iyer', 'Jain', 'Joshi', 'Kapoor', 'Kaur',
    'Khan', 'Khanna', 'Krishnan', 'Kulkarni', 'Kumar', 'Lal', 'Majumdar', 'Malhotra',
    'Mathur', 'Mehta', 'Menon', 'Mistry', 'Mishra', 'Modi', 'Mohan', 'Mukherjee',
    'Naidu', 'Naik', 'Nair', 'Nanda', 'Pandey', 'Patel', 'Pillai', 'Prasad', 'Qureshi',
    'Raghavan', 'Rai', 'Ranganathan', 'Rao', 'Reddy', 'Roy', 'Saxena', 'Sen', 'Shah',
    'Sharma', 'Shukla', 'Siddiqui', 'Singh', 'Sood', 'Srinivasan', 'Thakur', 'Tiwari',
    'Tripathi', 'Upadhyay', 'Verma', 'Vyas', 'Walia', 'Warsi', 'Yadav', 'Zaman',

    // Middle Eastern & North African Last Names
    'Abadi', 'Abbas', 'Abdelaziz', 'Adnan', 'Ahmadi', 'Alam', 'Alawi', 'Allam', 'Aoun',
    'Asad', 'Aziz', 'Azouri', 'Badawi', 'Barakat', 'Bashara', 'Basir', 'Basha', 'Dawood',
    'Diab', 'El-Sayed', 'Fadel', 'Farhat', 'Farouk', 'Gamal', 'Habib', 'Haddad', 'Hakim',
    'Hamdan', 'Hamoud', 'Hariri', 'Hassan', 'Hashim', 'Haydar', 'Hilal', 'Hossein',
    'Husseini', 'Issa', 'Jadid', 'Jafari', 'Jomaa', 'Joudi', 'Kanaan', 'Karimi', 'Kassab',
    'Kassem', 'Kateb', 'Khalil', 'Khoury', 'Khouri', 'Kurdi', 'Maalouf', 'Mansour', 'Masri',
    'Mohsen', 'Mousa', 'Mrad', 'Mustafa', 'Naffah', 'Najjar', 'Nasr', 'Nassar', 'Nazir',
    'Nour', 'Obeid', 'Ramadan', 'Rashid', 'Sabbagh', 'Sadek', 'Salama', 'Saleh', 'Salim',
    'Samir', 'Sawaya', 'Shamoun', 'Sharif', 'Shihab', 'Suleiman', 'Tabbara', 'Taleb',
    'Touma', 'Younes', 'Youssef', 'Zahran', 'Zaki', 'Zubaidi',

    // Sub-Saharan African Last Names (West, East & Southern African)
    'Abiodun', 'Adeyemi', 'Agyemang', 'Asante', 'Camara', 'Diallo', 'Diop',
    'Dlamini', 'Kamara', 'Kamau', 'Kariuki', 'Keita', 'Khumalo', 'Khoza', 'Konaté',
    'Maina', 'Mensah', 'Mokoena', 'Molefe', 'Mwangi', 'Ndiaye', 'Ndlovu', 'Njoroge',
    'Nkosi', 'Odhiambo', 'Okafor', 'Okonkwo', 'Osei', 'Otieno', 'Owusu',
    'Sesay', 'Sithole', 'Traore', 'Wambua', 'Yeboah', 'Zulu',

    // Latino / Hispanic Last Names
    'Acosta', 'Aguilar', 'Alvarado', 'Álvarez', 'Arce', 'Arias', 'Arredondo',
    'Barragan', 'Barrera', 'Benítez', 'Bermúdez', 'Blanco', 'Bravo', 'Caballero',
    'Cabrera', 'Calderón', 'Campos', 'Carrasco', 'Castillo', 'Castro', 'Cervantes',
    'Chavez', 'Contreras', 'Cordova', 'Coronado', 'Costa', 'Cortés', 'Cuevas',
    'Delgado', 'Domínguez', 'Duarte', 'Duran', 'Espinoza', 'Estrada', 'Fernandez',
    'Figueroa', 'Flores', 'Franco', 'Fuentes', 'Galvez', 'Garcia', 'Garza', 'Gil',
    'Gómez', 'Guerrero', 'Gutierrez', 'Heredia', 'Hernández', 'Herrera', 'Jiménez',
    'Leal', 'León', 'López', 'Luna', 'Maldonado', 'Medina', 'Mejía', 'Mendoza',
    'Mercado', 'Miranda', 'Molina', 'Montes', 'Montoya', 'Mora', 'Morales', 'Moreno',
    'Muñoz', 'Navarro', 'Nieto', 'Núñez', 'Ocampo', 'Orozco', 'Ortega', 'Ortiz',
    'Pacheco', 'Palacios', 'Pereira', 'Perez', 'Quiroga', 'Ramos', 'Rangel', 'Restrepo',
    'Reyes', 'Rivera', 'Rojas', 'Ruiz', 'Salazar', 'Salinas', 'Sandoval', 'Santos',
    'Serrano', 'Solis', 'Suárez', 'Tapia', 'Torres', 'Trujillo', 'Valencia', 'Vargas',
    'Vasquez', 'Vega', 'Velasco', 'Vera', 'Vicente', 'Villareal', 'Zamora',

    // European Last Names
    'Aberg', 'Adler', 'Åkesson', 'Almeida', 'Andersen', 'Anderssen', 'Andersson',
    'Bakke', 'Barone', 'Bauer', 'Becker', 'Berg', 'Berger', 'Bergmann', 'Bernard',
    'Bianchi', 'Blanc', 'Bogdanovic', 'Bonnet', 'Braun', 'Brenner', 'Brouwer',
    'Carlsson', 'Christodoulou', 'Colombo', 'Conti', 'Cruz', 'Cvetkovic',
    'Dahl', 'De Luca', 'Decker', 'Dubois', 'Dunne', 'Durand',
    'Ekström', 'Engel', 'Eriksson', 'Esposito', 'Fabbri', 'Ferrari', 'Ferraro',
    'Fischer', 'Fontaine', 'Franke', 'Gallo', 'Garrido', 'Gauthier', 'Georgiou',
    'Greco', 'Gruber', 'Hansen', 'Hartmann', 'Haug', 'Heinrich', 'Hess', 'Hoffman',
    'Holm', 'Holmberg', 'Huber', 'Ivanovic', 'Ivanova', 'Janssen', 'Jensen', 'Jennings',
    'Jenson', 'Johansson', 'Kaiser', 'Knudsen', 'Koch', 'Kowalski', 'Krause', 'Krawczyk',
    'Kuhn', 'Larsen', 'Larsson', 'Laurent', 'Leroy', 'Lindgren', 'Lindqvist', 'Lombardi',
    'Lund', 'Lundberg', 'Maas', 'Madsen', 'Magnusson', 'Makris', 'Makarov', 'Mancini',
    'Marino', 'Mayer', 'McPierce', 'Meier', 'Miller', 'Millington', 'Moreau', 'Morin',
    'Muller', 'Nelson', 'Nielsen', 'Nissen', 'Novak', 'Nowak', "O'Connor", 'Olsen',
    'Pappas', 'Papadopoulos', 'Pearson', 'Persson', 'Peters', 'Petit', 'Petrov', 'Picard',
    'Popov', 'Ricci', 'Ribeiro', 'Richter', 'Romano', 'Rossi', 'Roux', 'Rousseau',
    'Salvadori', 'Santoro', 'Schneider', 'Silvestri', 'Sokolova', 'Stein', 'Strand',
    'Svensson', 'Thomsen', 'Tomasini', 'Vandenberghe', 'Verstappen', 'Vogt', 'Volkov',
    'Wagner', 'Weber', 'Werner', 'Westerberg', 'Wolf', 'Zappa', 'Zervos', 'Zimmermann',

    // Turkish & Central Asian Last Names
    'Akhmetov', 'Arslan', 'Aydın', 'Çelik', 'Demir', 'Dzhaksybekov', 'Güneş',
    'Karimov', 'Kaya', 'Koç', 'Kurt', 'Nazarov', 'Nurmagambetov', 'Şahin',
    'Şimşek', 'Umarov', 'Yıldız', 'Yılmaz',

    // English-speaking / American Last Names
    'Adams', 'Allen', 'Armstrong', 'Ashcroft', 'Ashworth', 'Atkinson',
    'Bailey', 'Baker', 'Barker', 'Barnes', 'Barrett', 'Bell', 'Bennett', 'Bernette', 'Bolton',
    'Booth', 'Bowman', 'Bradley', 'Brennan', 'Briggs', 'Brooks', 'Brown', 'Burke', 'Burns',
    'Butler', 'Byers', 'Campbell', 'Carroll', 'Carter', 'Chambers', 'Chase', 'Christensen',
    'Clark', 'Clayton', 'Cole', 'Coleman', 'Collins', 'Conway', 'Cooper', 'Crawford',
    'Cross', 'Curtis', 'Davis', 'Dean', 'Dixon', 'Drake', 'Duncan', 'Dunn',
    'Edwards', 'Elliott', 'Evans', 'Everett', 'Ferguson', 'Fields', 'Finch', 'Fisher',
    'Fleming', 'Fletcher', 'Ford', 'Foster', 'Franklin', 'Fuller', 'Garrett', 'Garrison', 'George',
    'Gibson', 'Gibbs', 'Gilmore', 'Gilroy', 'Glover', 'Goodwin', 'Gordon', 'Graham', 'Grant',
    'Graves', 'Gray', 'Green', 'Gregory', 'Grey', 'Griffin', 'Griffith',
    'Hall', 'Hamilton', 'Hammond', 'Hanson', 'Harmon', 'Harris', 'Hart', 'Harvey',
    'Hayes', 'Henderson', 'Henry', 'Hicks', 'Hill', 'Hobbes', 'Holmes', 'Hoover',
    'Hopper', 'Howard', 'Hughes', 'Hunt', 'Hunter', 'Hutch', 'Hutchinson',
    'Jackson', 'Jenkins', 'Johnson', 'Jones', 'Jordan', 'Kane', 'Keller', 'Kelso', 'King',
    'Kirby', 'Kirkland', 'Klein', 'Knight', 'Knox', 'Kohl',
    'Lane', 'Lawson', 'Layne', 'Lewis', 'Locke', 'Logan', 'Long', 'Lucas', 'Lynch',
    'Maddox', 'Manning', 'Marsh', 'Marshall', 'Martin', 'Maxwell', 'McCarthy', 'McCoy',
    'McGregor', 'McKnight', 'McKinley', 'Miles', 'Mitchell', 'Monroe', 'Montgomery', 'Mooney',
    'Moore', 'Morrison', 'Murphy', 'Murray', 'Myers',
    'Nash', 'Neal', 'Newman', 'Newton', 'Nichols', 'Norris', "O'Brien", 'Oliver', 'Owens',
    'Page', 'Patterson', 'Payne', 'Pierce', 'Porter', 'Powell', 'Price',
    'Ramsey', 'Ravencroft', 'Ray', 'Reed', 'Reeves', 'Reid', 'Reitman', 'Reynolds',
    'Richardson', 'Roberts', 'Robinson', 'Rogers', 'Roper', 'Ross', 'Rossman', 'Russell',
    'Ryan', 'Sanford', 'Saunders', 'Scott', 'Shaw', 'Silverton', 'Smith', 'Spencer',
    'Sterling', 'Stewart', 'Stone', 'Sullivan', 'Sutton',
    'Tatum', 'Tawny', 'Ternes', 'Thompson', 'Thornfield', 'Towers', 'Turner',
    'Venkman', 'Vickers', 'Vincent', 'Wagner',
    'Wales', 'Walker', 'Walters', 'Warner', 'Washington', 'Webber', 'Wells',
    'Whitmore', 'Wilkinson', 'Wilson', 'Willis', 'Wolfslayer',
    'Zanders', 'Zeller', 'Zimmerman',
  ],

  jobTitlePrefixes: ['Senior', 'Sr.', 'Lead', 'Associate', 'Assoc.', 'Staff', 'Principal', 'Junior', 'Jr.'],

  jobTitleRoles: [
    // Engineering
    'Software Engineer', 'Backend Engineer', 'Frontend Engineer', 'Full Stack Engineer',
    'DevOps Engineer', 'Site Reliability Engineer', 'Machine Learning Engineer',
    'Data Engineer', 'Security Engineer', 'Platform Engineer', 'Mobile Engineer',
    // Design
    'Product Designer', 'UX Designer', 'UI Designer', 'Visual Designer',
    'Brand Designer', 'Motion Designer', 'Design Systems Engineer', 'Graphic Designer',
    // Product & Analytics
    'Product Manager', 'Technical Product Manager', 'Data Analyst', 'Data Scientist',
    'Business Intelligence Analyst', 'Analytics Engineer', 'Growth Analyst',
    // Business & Ops
    'Business Analyst', 'Operations Manager', 'Project Manager', 'Program Manager',
    'Account Manager', 'Account Executive', 'Customer Success Manager',
    'Marketing Manager', 'Content Strategist', 'Sales Representative',
    // Finance & Legal
    'Financial Analyst', 'Accountant', 'Tax Specialist', 'Compliance Officer',
    'Corporate Counsel', 'Legal Operations Manager',
    // HR & IT
    'HR Generalist', 'Talent Acquisition Specialist', 'People Operations Manager',
    'Systems Administrator', 'Network Engineer', 'IT Specialist', 'Cloud Architect',
  ],

  jobTitleFunnyRoles: [
    'Detective', 'Tamer', 'Wrangler', 'Inspector', 'Whisperer', 'Debugger',
    'Overlord', 'Evangelist', 'Ninja', 'Watcher', 'Side Eyer', 'Wizard', 'Sensei',
    'Herder', 'Enthusiast', 'Connoisseur', 'Goblin', 'Gremlin', 'Oracle',
  ],

  jobTitleFunnyNouns: [
    'Narwhal', 'Sock Puppet', 'Naptime', 'Snack', 'Rubber Duck',
    'Waffle', 'Dragon', 'Unicorn', 'Biscuit', 'Glitter', 'Bubble Wrap',
    'Printer', 'Spreadsheet', 'Hamster Wheel', 'Cat', 'Moonbeam', 'Thunderbolt',
    'Meme', 'Emoji', 'Cereal', 'Existential Dread', 'Chaos', 'Synergy',
    'Office Plant', 'Time Travel', 'Left Shark', 'Wifi Password', 'Meeting',
    'Hover Board', 'Conspiracy Theory', 'Parking Spot', 'Pen Cap', 'Deadline',
    'Paperclip', 'Llama', 'Pogo Stick', 'Bubble Tea', 'Koala'
  ],

  jobTitleSuffixes: ['II', 'III'],

  jobTitleVPDepts: [
    // Real
    'Engineering', 'Product', 'Marketing', 'Sales', 'Operations',
    'People & Culture', 'Data & Analytics', 'Design', 'Customer Success',
    'Finance', 'Legal', 'Security', 'Growth', 'Partnerships',
    // Funny
    'Snack Operations', 'Overthinking', 'Untangling Headphones',
    'Making Things Look Busy', 'Left Sharking', 'Napping',
    'Chaos Management', 'Vibes', 'Feelings',
  ],

  jobTitleDirectorDepts: [
    // Real
    'Engineering', 'Product', 'Design', 'Marketing', 'Sales',
    'Customer Success', 'Data Engineering', 'Finance', 'Operations',
    'People & Culture', 'Security', 'Growth', 'Partnerships',
    // Funny
    'Cat Herding', 'Office Plants', 'Existential Crisis Management',
    'Explaining Things Twice', 'Side Eyeing', 'Snack Procurement',
    'Overthinking', 'Synergy', 'Vibes',
  ],

  jobTitleChiefTitles: [
    // Real
    'Information Security Officer', 'Compliance Officer', 'Technology Officer',
    'Operating Officer', 'Financial Officer', 'Marketing Officer',
    'People Officer', 'Product Officer', 'Revenue Officer',
    // Funny
    'Wizard', 'Happiness Officer', 'Procrastination Officer',
    'Nap Advisor', 'Fun Police', 'Microwave Timer Expert',
    'Chaos Coordinator', 'Snack Officer', 'Vibe Curator',
  ],

  jobTitleExecutiveStandalone: [
    'Engineering Manager', 'Design Manager', 'Product Marketing Manager',
    'General Counsel', 'Puppy Concierge', 'Professional Nap Taker',
    'Sock Puppet Strategist', 'Alligator Wrestler',
  ],

  personalEmailDomains: [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com'
  ],

  workEmailDomainNames: [
    'abccompany', 'techcorp', 'innovate', 'globaldynamics', 'nexus', 'brightideas',
    'catalyst', 'northstar', 'bluesky', 'acme', 'zenith', 'apex', 'vantage', 'meridian',
    'ironclad', 'cobalt', 'forgehq', 'horizongroup', 'summit', 'vertex', 'novadash',
    'pulsetech', 'fluxlabs', 'orbitco', 'prismsys', 'arccloud', 'luminary', 'onyxsolutions',
    'aeroinc', 'crestworks', 'keystoneio', 'upliftgroup', 'wavecrest', 'pathfinder',
    'trailhead', 'redwoodtech', 'sandstone', 'threshold', 'daybreak', 'springboard'
  ],

  workEmailTLDs: ['com', 'net', 'io', 'co', 'org', 'tech', 'ai', 'biz', 'app', 'dev'],

  organizationNames: [
    'Apex', 'Global', 'Metro', 'Elite', 'Prime', 'Summit', 'Stellar', 'Ripple', 'Advanced', 'Strategic',
    'Premier', 'Progressive', 'Delta', 'Digital', 'Future', 'Smart', 'Quantum', 'Alpha', 'Omega',
    'Nexus', 'Catalyst', 'Pinnacle', 'Zenith', 'Vertex', 'Phoenix', 'Titan', 'Atlas', 'Vector',
    'Capybara', 'Griffin', 'Mosaic', 'Flare', 'Echo', 'Synergy', 'Fusion', 'Velocity', 'Momentum',
    'Paradigm', 'Infinity', 'Unity', 'Zen', 'Vantage', 'Horizon', 'Meridian', 'Crestwood', 'Ironclad',
    'Cobalt', 'Ember', 'Solace', 'Ardent', 'Cascade', 'Drift', 'Forge', 'Haven', 'Keystone', 'Lumen',
    'Luminary', 'Nova', 'Onyx', 'Orbit', 'Prism', 'Pulse', 'Radiant', 'Reverie', 'Sapphire', 'Shadow', 'Silver',
    'Skyline', 'Solaris', 'Spectra', 'Stratus', 'Summit', 'Synergy', 'Tidal', 'Vortex', 'Zenith',
    'Arc', 'Beacon', 'Crest', 'Eclipse', 'Frontier', 'Gateway', 'Harbor', 'Ignite',
    'Northgate', 'Obsidian', 'Paragon', 'Quorum', 'Redwood', 'Sandstone', 'Threshold',
    'Trilogy', 'Vanguard', 'Vertex', 'Vista', 'Wavelength', 'Windward',
    'Dynamic', 'Synergy', 'Titan','Paradigm', 'Ascend', 'Overwatch', 'Helix', 'Sentinel',
    'Cipher', 'Enigma', 'Evolve', 'Flux', 'Ignite', 'Noble', 'Radiance', 'Synapse', 'Umbra',
    'Arcane', 'Parallax', 'Quantum', 'Tempest', 'Equinox', 'Obelisk', 'Aeon', 'Aether', 'Celestial',
    'Uplift', 'Waterfall', 'Crossroads', 'Daybreak', 'Frontline', 'Greenfield', 'Highpoint',
    'Landmark', 'Overture', 'Pathfinder', 'Ridgeline', 'Springboard', 'Trailhead', 'Wavecrest',
    'Super', 'Jazzy', 'Fluffy', 'Snappy', 'Zesty', 'Wobbly', 'Chunky', 'Plucky', 'Spunky', 'Cheerful',
    'Squirrel', 'Narwhal', 'Platypus', 'Bumblebee', 'Hedgehog', 'Capybara', 'Wombat',
    'Naptime', 'Biscuit', 'Noodle', 'Waffle', 'Muffin', 'Pretzel', 'Sprinkle', 'Pudding', 'French Toast',
    'Hashbrown', 'Corndog', 'Avocado', 'Kimchi', 'Wasabi',
    'Thunderbolt', 'Rocketship', 'Moonbeam', 'Stardust', 'Lightning', 'Tornado', 'Avalanche',
    'Nimbus', 'Gale', 'Sploot', 'Cloud', 'Willow', 'Clover', 'Neon',
    'Cactus', 'Flamingo', 'Otter', 'Penguin', 'Sloth', 'Llama', 'Axolotl',
    'Unicorn', 'Dragon', 'Griffin', 'Phoenix', 'Mermaid', 'Centaur', 'Minotaur', 'Sphinx',
    'Undead', 'Shamen', 'Hippogryph', 'Golem', 'Gargoyle', 'Spiral',
    'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn',
    'Pegasus', 'Siren', 'Fairy', 'Kaleidoscope', 'Maven', 'Oracle', 'Sage', 'Seer', 
    'Gryphon', 'Chimera', 'Hydra', 'Kraken', 'Leviathan', 'Basilisk', 'Wyvern', 'Cerberus',
    'Bigfoot', 'Fizzy', 'Triforce', 'Colossal', 'Meme', 'Chaos', 'Rubber Duck', 'Andromeda',
    'Jive', 'Zigzag', 'Doodle', 'Snicker', 'Gizmo', 'Hamburger', 'Sushi', 'Pizza', 'Dumpling',
    'Cupcake', 'Firefly', 'Marshmallow', 'Ramen', 'Tofu', 'Dim Sum', 'Churro', 'Cheddar', 'Mozzarella',
    'Doodad', 'Gadget', 'Alpaca', 'SkyNet', 'Umbrella', 'Weyland-Yutani', 'Wayne', 'Stark', 'Hooli', 'Oscorp',
  ],

  organizationTypes: [
    'Inc.', 'LLC', 'Ltd.', 'Group', 'Ent', 'Solutions', 'Systems',
    'Techs', 'Industries', 'Partners', 'Assoc.', 'Holdings', 'Ventures', 'Corp.',
    'AI', 'Labs', 'Consulting', 'Services', 'Collective', 'Agency', 'Studio', 'Network', 'Capital',
    '& Friends', 'Co.', 'Etc.', 'and Such', 'Unlimited'
  ],

  appNameAdjectives: [
    'Epic', 'Ultra', 'Apex', 'Swift', 'Bold', 'Hyper', 'Prime', 'Nano', 'Cyber', 'Quantum',
    'Turbo', 'Atomic', 'Stellar', 'Rapid', 'Agile', 'Dynamic', 'Vivid', 'Radiant', 'Surge', 'Peak',
    'Omni', 'Aero', 'Magna', 'Neo', 'Zen', 'Alpha', 'Blaze', 'Core', 'Drift', 'Edge',
    'Fluffy', 'Cozy', 'Snappy', 'Bouncy', 'Zesty', 'Wiggly', 'Jolly', 'Fizzy',
    'Fuzzy', 'Plucky', 'Spunky', 'Wobbly', 'Chunky', 'Giggly'
  ],

  appNameModifiers: [
    'Max', 'Pro', 'Flow', 'Stack', 'Sync', 'Boost', 'Flex', 'Link', 'Shift', 'Wave',
    'Spark', 'Grid', 'Forge', 'Scope', 'Pulse', 'Track', 'Scale', 'Hub', 'Loop', 'Bridge',
    'Drive', 'Base', 'Core', 'Node', 'Path', 'Layer', 'Port', 'Beam', 'Chain', 'Vault'
  ],

  appNameNouns: [
    'Accelerator', 'Platform', 'Engine', 'Suite', 'Studio', 'Navigator', 'Dashboard', 'Connector',
    'Automator', 'Workflow', 'Manager', 'Launcher', 'Monitor', 'Builder', 'Optimizer', 'Gateway',
    'Integrator', 'Analyzer', 'Controller', 'Processor', 'Orchestrator', 'Commander', 'Dispatcher',
    'Aggregator', 'Transformer', 'Coordinator', 'Visualizer', 'Synthesizer', 'Deployer', 'Scheduler',
    'Wrangler', 'Whisperer', 'Napper', 'Herder', 'Tamer', 'Tool', 'App', 'Thingy', 'Widget',
    'Toaster', 'Shuffler', 'Wobbler', 'Doodler', 'Snacker',
  ],

  streets: [
    'Springfield', 'Georgetown', 'Arlington', 'Fairview', 'Brookfield', 'Richmond', 'Aurora',
    'Oakland', 'Ashland', 'Burlington', 'Manchester', 'Oxford', 'Clayton', 'Hudson', 'Kingston',
    'Baybrook', 'Forestdale', 'Jade Harbor', 'Echo Valley', 'Ironwood', 'Fox Run', 'Bluewater',
    'Hawkins', 'Stepford', 'Mountainview', 'Darkwood', "Raven's Hollow", 'River',
    'Elm', 'Pineapple', 'Cherry Blossom', 'Dragonfly', 'Enchanted Forest', 'Sunset',
    'Galaxy', 'Neon', 'Pixel', 'Rainbow', 'Twilight', 'Wookiee', 'Xandar', 'Yoda', 'Zelda',
    'Baker', 'Wallaby', 'Sesame', "Frodo", "Gandalf", 'Narnia', 'Westeros', 'Hogwarts',
    'Diagon', 'Mordor', 'Asgard', 'Funky Town', 'Sleepy Hollow', 'Hobbiton', 'Liberty',
    'Lego Bay', 'Cantina'
  ],

  streetTypes: [
    'Ave.', 'Blvd.', 'Ct.', 'Cir.', 'Dr.', 'Ln.', 'Loop', 'Path',
    'Pkwy.', 'Pl.', 'Rd.', 'St.', 'Ter.', 'Way', 'Cres.', 'Alley'
  ],

  cities: [
    'Springfield', 'Georgetown', 'Arlington', 'Fairview', 'Brookfield', 'Richmond', 'Aurora Bay',
    'Oakland', 'Ashland', 'Burlington', 'Manchester', 'Oxford', 'Clayton', 'Hudson', 'Kingston',
    'Baybrook', 'Forestdale', 'Cyclone Valley', 'Cosmos City', 'Kaleidoscope Falls', 'Jade Harbor',
    'Echo Valley', 'Thunderbluff', 'Orgrimmar', 'Mos Eisley', 'Gotham City', 'Metropolis', 'Silent Hill',
    'Vice City', 'Raccoon City', 'Hyrule', 'Derry', 'Sleepy Hollow', 'Liberty City', 'Hobbiton',
    'River City', "Raven's Hollow", 'Darkwood', 'Brookfield', 'Awkwardville', 'Mountainview',
    'Hawkins', 'Kakariko Village', 'Citadel', 'Stepford', 'Boston', 'Chicago', 'Denver', 'Phoenix',
    'Portland', 'Seattle', 'Austin', 'Nashville', 'Charlotte', 'Raleigh', 'Tampa', 'Miami',
    'Atlanta', 'Detroit', 'Minneapolis', 'St. Louis', 'Kansas City', 'Oklahoma City', 'Las Vegas',
    'San Diego', 'San Francisco', 'Los Angeles', 'Sacramento', 'Fresno', 'Bakersfield', 'Riverside',
    'Anaheim', 'Santa Ana', 'Stockton', 'Irvine', 'Fremont', 'San Jose', 'Long Beach',
    'Virginia Beach', 'Norfolk', 'Chesapeake', 'Newport News', 'Alexandria', 'Hampton',
    'Portsmouth', 'Suffolk', 'Lynchburg', 'Roanoke', 'Blacksburg', 'Harrisonburg', 'Winchester',
    'New York', 'Buffalo', 'Rochester', 'Syracuse', 'Albany', 'New Rochelle', 'Mount Vernon',
    'White Plains', 'Hempstead', 'Troy', 'Niagara Falls', 'Binghamton',
    'Mushroom Kingdom', 'Zootopia', 'San Fransokyo', 'Emerald City', 'Gotham City', 'Metropolis',
    'Lego City', 'Cantina', 'Narnia', 'Westeros', 'Hogwarts', 'Diagon Alley',
    'Mordor', 'Asgard', 'Funky Town', 'Sleepy Hollow', 'Liberty City', 'River City', 'Gondor', 'Rohan',
    'Mount. Olymppus', 'Camelot', 'Elysium', 'Mega City One', 'Cloud City', 'Bikini Bottom', 'Bedrock'
  ],

  states: [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
    'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY',
    'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ],

  deviceBrands: [
    "Dell",
    "HP",
    "Lenovo",
    "ASUS",
    "Microsoft",
    "Acer",
    "Razer",
    "Samsung",
    "Alienware"
  ],

  windowsModels: [
    "XPS 13",
    "XPS 15",
    "Spectre x360",
    "Pavilion 15",
    "ThinkPad X1 Carbon",
    "ThinkPad T14",
    "ZenBook 14",
    "ROG Zephyrus G14",
    "Surface Laptop 5",
    "Surface Laptop Studio 2",
    "Legion 5 Pro",
    "Inspiron 16 Plus"
  ],

  windowsDeviceBases: [
    // Dell
    'Dell XPS', 'Dell Inspiron', 'Dell Latitude', 'Dell Precision', 'Dell Vostro',
    // HP
    'HP Spectre x360', 'HP Pavilion', 'HP Envy', 'HP EliteBook', 'HP ProBook', 'HP Omen',
    // Lenovo
    'Lenovo ThinkPad', 'Lenovo ThinkPad X1 Carbon', 'Lenovo ThinkPad E', 'Lenovo IdeaPad',
    'Lenovo Legion', 'Lenovo Yoga',
    // ASUS
    'ASUS ZenBook', 'ASUS ZenBook Pro', 'ASUS VivoBook', 'ASUS ExpertBook',
    'ASUS ROG Zephyrus', 'ASUS ROG Strix',
    // Microsoft
    'Microsoft Surface Pro', 'Microsoft Surface Laptop', 'Microsoft Surface Go',
    // Acer
    'Acer Swift', 'Acer Aspire', 'Acer Predator Helios', 'Acer Nitro',
    // Razer
    'Razer Blade',
    // Samsung
    'Samsung Galaxy Book', 'Samsung Galaxy Book Pro', 'Samsung Galaxy Book 360',
    // Alienware
    'Alienware m-Series', 'Alienware x-Series',
  ],

  windowsDeviceSizes: ['13', '14', '15', '16', '17'],

  assetBrands: [
    'Hyper', 'Maven', 'Nexus', 'Aero', 'Vega', 'Pulse', 'Flux', 'Orbit', 'Nova', 'Apex',
    'Titan', 'Zephyr', 'Lynx', 'Prism', 'Arc', 'Kova', 'Stryx', 'Crest', 'Lumin', 'Onyx'
  ],

  assetDescriptors: [
    'Box', 'Tech', 'Pro', 'Elite', 'Ultra', 'Max', 'Air', 'Turbo', 'Smart', 'Wireless',
    'Gaming', 'Nano', 'Slim', 'Compact', 'Dual', 'Mesh', 'Portable', 'Optical', 'Mechanical', 'Precision'
  ],

  assetDeviceNouns: [
    'Router', 'Headphones', 'Monitor', 'Keyboard', 'Mouse', 'Hub', 'Webcam', 'Speaker',
    'SSD', 'Microphone', 'Switch', 'Adapter', 'Charger', 'Headset', 'Display', 'Trackpad',
    'Docking Station', 'Access Point', 'NAS Drive', 'Numpad'
  ],

  usernameAdjectives: [
    'swift', 'dark', 'neo', 'cyber', 'turbo', 'ghost', 'solar', 'storm', 'pixel', 'neon', 'funky', 'chunky', 'sassy',
    'lunar', 'silent', 'blazing', 'frozen', 'golden', 'iron', 'lost', 'wild', 'tiny', 'epic', 'doom', 'that',
    'fuzzy', 'sleepy', 'happy', 'grumpy', 'zesty', 'sneaky', 'mighty', 'brave', 'clever', 'quirky', 'rocky',
    'clumsy', 'wobbly', 'goofy', 'derpy', 'wiggly', 'soggy', 'squishy', 'jittery', 'wacky', 'bonky', 'toasty', 'random',
    'loopy', 'wonky', 'blobby', 'bumbling', 'rambunctious',
    'cozy', 'sunny', 'fluffy', 'bubbly', 'cheerful', 'sparkly', 'jolly',
    'radiant', 'caring', 'hopeful', 'dreamy', 'sweet', 'whimsical', 'playful', 'snuggly', 'adorable', 'charming', 'delightful', 'enchanting', 'glowing', 'huggable', 'lovely', 'retro', 'musical', 'spicy', 'bouncy',
    'ancient', 'cosmic', 'digital', 'electric', 'galactic', 'hidden', 'infinite', 'magnetic', 'orbital', 'quantum', 'spooky', 'broody', 'fantastic', 
    'rapid', 'stealth', 'stellar', 'thermal', 'vibrant', 'azure', 'cobalt', 'crimson', 'frosty', 'velvet'
  ],

  usernameNouns: [
    'falcon', 'wanderer', 'ninja', 'fox', 'wolf', 'panda', 'hawk', 'blade', 'comet', 'ranger', 'spoon', 'spork', 'sword', 'shield', 'phoenix', 'griffin', 'mermaid', 'centaur', 'minotaur', 'sphinx', 'golem', 'gargoyle', 'soup',
    'coder', 'pilot', 'ghost', 'knight', 'sage', 'monk', 'raven', 'viper', 'lynx', 'echo', 'berry', 'pineapple', 'bobble', 'knickknack', 'panda',
    'noodle', 'unicorn', 'waffle', 'biscuit', 'narwhal', 'penguin', 'sloth', 'otter', 'capybara', 'duck', 'dingbat', 'bunny', 'llama', 'wombat', 
    'pretzel', 'muffin', 'goblin', 'hamster', 'turnip', 'gremlin', 'taco', 'burrito', 'donut', 'snorkel', 'codex', 'squid', 'doodle',
    'yeti', 'platypus', 'quokka', 'axolotl', 'blobfish', 'bear', 'dumpling',
    'sunflower', 'meadow', 'cookie', 'pebble', 'lantern', 'blanket', 'pudding', 'dewdrop', 'marshmallow', 'acorn', 'scone', 'teacup', 'puff',
    'flame', 'breeze', 'tulip', 'rainbow', 'kitten', 'corndog', 'tofu',
    'voyager', 'cipher', 'vertex', 'nomad', 'vector', 'phantom', 'signal', 'hero', 'drifter', 'nexus', 'corgi',
    'oracle', 'specter', 'cosmos', 'ember'
  ],

  statusLabels: [
    'Active', 'Inactive', 'Pending', 'Archived', 'Suspended', 'In Review',
    'Approved', 'Rejected', 'Draft', 'Published', 'Closed', 'Open',
    'Processing', 'Completed', 'Failed', 'Expired', 'On Hold', 'Cancelled'
  ],

  urlSubdomains: ['app', 'portal', 'admin', 'dashboard', 'api', 'my', 'hub', 'dev', 'staging', 'go'],

  urlDomains: [
    'nexuslabs', 'techcorp', 'getapex', 'tryorbit', 'usevega', 'gopulse', 'fluxhq',
    'cobaltapp', 'heliohq', 'novadash', 'arccloud', 'keystoneio', 'luminary', 'forgehq'
  ],

  urlTLDs: ['io', 'com', 'co', 'app', 'net'],

  urlPaths: [
    'dashboard', 'settings', 'profile', 'users', 'reports', 'account',
    'overview', 'admin', 'home', 'devices', 'activity', 'billing', 'integrations', 'alerts'
  ],
};