// Content Roulette — Data Arrays
// All data sourced from the Figma plugin (code.ts)
// Used by index.html as a global DATA object

const DATA = {

  firstNames: [
    // East Asian First Names (Alphabetical)
    'Aki', 'Dae-hyun', 'Doyun', 'Eun-ji', 'Feng', 'Hana', 'Hanzo', 'Haruto', 'Hiroshi',
    'Jiao', 'Jin', 'Jing', 'Jun', 'Kai', 'Kei', 'Kenji', 'Linh', 'Lixin', 'Megumi',
    'Mei-Ling', 'Minh', 'Misako', 'Niran', 'Qiang', 'Rei', 'Ren', 'Rong', 'Ryo',
    'Sakura', 'Shinji', 'Sohyeon', 'Sung-min', 'Takumi', 'Wei-Ming', 'Xiao-Yu', 'Yin',
    'Yuki', 'Zhi-Wei',

    // South Asian First Names (Alphabetical)
    'Aarav', 'Akash', 'Amit', 'Anand', 'Asha', 'Anish', 'Anjali', 'Ari', 'Arjun',
    'Arya', 'Avni', 'Divya', 'Diya', 'Ira', 'Jaya', 'Kavya', 'Kiran', 'Manish',
    'Meera', 'Neel', 'Naveen', 'Nikhil', 'Niraj', 'Nisha', 'Nylah', 'Piyush', 'Pooja',
    'Pradeep', 'Preet', 'Raghav', 'Raj', 'Rashika', 'Ravi', 'Riya', 'Rohit', 'Sanjay',
    'Shaan', 'Shreya', 'Sonal', 'Suresh', 'Swati', 'Varun', 'Vikram',

    // Middle Eastern/North African First Names (Alphabetical)
    'Ahmed', 'Amani', 'Amira', 'Bassam', 'Dina', 'Eden', 'Fatima', 'Farah', 'Fouad', 'Hala',
    'Hassan', 'Iman', 'Jamal', 'Karim', 'Laith', 'Lamar', 'Lana', 'Layla', 'Leila',
    'Marwan', 'Mazen', 'Mona', 'Musa', 'Nadia', 'Nasser', 'Noor', 'Nour', 'Omar', 'Rami',
    'Rana', 'Rania', 'Reza', 'Salam', 'Salem', 'Salim', 'Samar', 'Soraya', 'Tariq',
    'Walid', 'Yasmin', 'Yusuf', 'Zahra', 'Ziad', 'Zuri',

    // Latino/Hispanic First Names (Alphabetical)
    'Adrián', 'Alejandro', 'Andrea', 'Andrés', 'Camila', 'Carlos', 'Carmen', 'Cecilia',
    'César', 'Daniela', 'Diego', 'Elena', 'Éloïse', 'Emilio', 'Esperanza', 'Fabian', 'Fernando',
    'Gabriel', 'Gabriella', 'Isabella', 'Isaú', 'Joaquín', 'Katalina', 'Lidia', 'Lucía',
    'Luis', 'Marisa', 'Mateo', 'Miguel', 'Natalia', 'Pablo', 'Rafael', 'Santiago',
    'Sofía', 'Tomás',

    // European First Names (Alphabetical)
    'Alessandro', 'Anja', 'Anneliese', 'Amélie', 'Anton', 'Armando', 'Astrid', 'Beatrice', 'Brigitte', 'Camille',
    'Cecilie', 'Claudia', 'Dimitri', 'Dominik', 'Dorothea', 'Elodie', 'Elsa', 'Emma', 'Erik', 'Enzo',
    'Fabienne', 'Francesca', 'Freja', 'Giovanni', 'Gregor', 'Hans', 'Heidi', 'Henrik', 'Hugo', 'Inés',
    'Ingrid', 'Ivo', 'Ivan', 'Janek', 'Julián', 'Katarina', 'Katya', 'Klaus', 'Leonie', 'Luca',
    'Larssen', 'Martina', 'Marco', 'Mathias', 'Mireille', 'Natasha', 'Nico', 'Nikolai', 'Olga', 'Olivia',
    'Pietro', 'Pierre', 'Rafaela', 'Romain', 'Sabine', 'Sergei', 'Simone', 'Sophie', 'Søren', 'Thierry',
    'Tiago', 'Tobias', 'Valentina', 'Viktor', 'Yvette',

    // Other First Names (Alphabetical)
    'Abigail', 'Abraham', 'Amara', 'Amari', 'Aria', 'Atlas', 'Aurora', 'Avery', 'Calvin',
    'Celeste', 'Charlotte', 'Cora', 'Dante', 'Darby', 'Darius', 'Denise', 'Desmond',
    'Dorian', 'Ember', 'Emery', 'Erezabet', 'Ezra', 'Felix', 'Geralt', 'Harper', 'Hayden',
    'Imani', 'Indigo', 'Iris', 'Isaiah', 'Ivy', 'Jamison', 'Jasmine', 'Jasper',
    'Jerome', 'Jillian', 'Juniper', 'Kaia', 'Keisha', 'Kofi', 'Leo', 'Luna', 'Lyra',
    'Malcolm', 'Mason', 'Nia', 'Nova', 'Orion', 'Parker', 'Paxton', 'Quinn',
    'Philip', 'Philippa', 'Phoenix', 'Riley', 'Ronan', 'Sage', 'Sebastian', 'Serena', 'Stella',
    'Tarkus', 'Tasha', 'Terrell', 'Tristan', 'Valen', 'Vera', 'Wren', 'Zara', 'Zephyr', 'Zion',
  ],

  lastNames: [
    // East Asian Last Names (Alphabetical)
    'Bae', 'Cha', 'Chen', 'Choi', 'Dao', 'Fan', 'Fujiwara', 'Hasashi', 'Han', 'Huang', 'Jang', 'Jeong',
    'Kang', 'Kim', 'Kitada', 'Kobayashi', 'Koh', 'Kwok', 'Lam', 'Li', 'Liang',
    'Lim', 'Liu', 'Nakamura', 'Nguyen', 'Park', 'Pham', 'Qing', 'Sato', 'Soh',
    'Song', 'Shin', 'Takagi', 'Takahashi', 'Tanaka', 'Tao', 'Thanh', 'Tian', 'Tran', 'Tsai',
    'Tsao', 'Watanbe', 'Wei', 'Wu', 'Yamada', 'Yamamoto', 'Zhang', 'Zhou', 'Zhu',

    // South Asian Last Names (Alphabetical)
    'Agarwal', 'Ahsan', 'Banerjee', 'Banu', 'Bhagat',
    'Chandra', 'Chatterjee', 'Chopra', 'Das', 'Desai', 'Dutta', 'Ghosh', 'Gupta',
    'Iyer', 'Joshi', 'Kapoor', 'Khanna', 'Krishnan', 'Kulkarni', 'Kumar', 'Majumdar',
    'Malhotra', 'Mehta', 'Menon', 'Mishra', 'Mukherjee', 'Nair', 'Pandey', 'Patel',
    'Prasad', 'Raghavan', 'Rao', 'Reddy', 'Shah', 'Sharma',
    'Singh', 'Srinivasan', 'Sood', 'Thakur', 'Tiwari', 'Verma', 'Yadav',

    // Middle Eastern/North African Last Names (Alphabetical)
    'Abadi', 'Abdelaziz', 'Adnan', 'Aziz',
    'Azouri', 'Barakat', 'Bashara', 'Basir', 'Dawood', 'El-Sayed', 'Farouk', 'Gamal',
    'Habib', 'Hakim', 'Hashim', 'Issa', 'Jafari', 'Joudi',
    'Kanaan', 'Karimi', 'Kassab', 'Khalil', 'Khoury', 'Maalouf', 'Mansour', 'Mousa',
    'Mustafa', 'Najjar', 'Nasr', 'Nazir', 'Obeid', 'Qureshi', 'Rashid', 'Saleh',
    'Samir', 'Salim', 'Shihab', 'Sharif', 'Taleb', 'Tabbara', 'Youssef', 'Zahran', 'Zaki',

    // Latino/Hispanic Last Names (Alphabetical)
    'Aguilar', 'Benítez', 'Caballero', 'Calderón', 'Campos', 'Castillo', 'Cervantes',
    'Chavez', 'Contreras', 'Cordova', 'Coronado', 'Costa', 'Delgado', 'Domínguez',
    'Espinoza', 'Estrada', 'Fernandez', 'Figueroa', 'Fuentes', 'Garcia', 'Guerrero',
    'Gutierrez', 'Heredia', 'Hernández', 'Herrera', 'Jiménez', 'Maldonado', 'Medina',
    'Mendoza', 'Montoya', 'Morales', 'Moreno', 'Navarro', 'Ortega', 'Pacheco', 'Pereira',
    'Perez', 'Ramos', 'Restrepo', 'Rivera', 'Rojas', 'Ruiz', 'Sandoval', 'Santos',
    'Solis', 'Torres', 'Vargas', 'Vasquez', 'Vega', 'Velasco', 'Vicente', 'Villareal',

    // European Last Names (Alphabetical)
    'Almeida', 'Åkesson', 'Andersson', 'Becker', 'Bauer', 'Bernard', 'Bianchi', 'Blanc', 'Bogdanovic', 'Brenner', 'Cruz', 'Conti', 'Cvetkovic', 'De Luca',
    'Durand', 'Dubois', 'Dunne', 'Dahl', 'Delgado', 'Ekström',
    'Eriksson', 'Fabbri', 'Fontaine', 'Fischer', 'Garrido', 'Gauthier', 'Gruber', 'Hoffman', 'Ivanovic', 'Jensen', 'Jennings',
    'Jenson', 'Johansson', 'Kowalski', 'Krawczyk', 'Laurent', 'Larsson', 'Leroy', 'Lundberg', 'Makris', 'Meier',
    'McPierce', 'Miller', 'Millington', 'Moreau', 'Muller', 'Nelson', 'Nielsen', 'Novak',
    'Nowak', "O'Connor", 'Makarov', 'Papadopoulos', 'Pearson', 'Petrov', 'Ricci', 'Rossi', 'Ribeiro', 'Roux', 'Rousseau',
    'Santoro', 'Santos', 'Silvestri', 'Salvadori', 'Schneider', 'Sokolova', 'Stein', 'Volkov', 'Wagner', 'Weber', 'Zappa', 'Zervos',

    // Other Last Names (Alphabetical)
    'Adams', 'Asante', 'Ashworth', 'Ashcroft', 'Bailey', 'Baker', 'Brooks', 'Butler', 'Byers',
    'Campbell', 'Carter', 'Chambers', 'Christensen', 'Clark', 'Collins', 'Cooper', 
    'Cross', 'Davis', 'Edwards', 'Elliott', 'Finch', 'Fletcher', 'Ford', 'Goodwin',
    'Griffin', 'Grant', 'Gibson', 'Graves', 'Gilroy',
    'Gray', 'Green', 'Grey', 'Hall', 'Hamilton', 'Hammond', 'Hanson', 'Harris', 
    'Hoover', 'Hopper', 'Hill', 'Hobbes', 'Howard', 'Hutch', 'Hutchinson', 'Jackson', 'Johnson', 'Kohl', 'Knight', 'Keller',
    'Kirby', 'Klein', 'Knox', 'Kirkland', 'Lewis', 'Lucas', 'Lane', 'Layne', 'Locke',
    'Martin', 'McKnight', 'Mensah', 'Mercado', 'Mitchell', 'Monroe', 'Montgomery', 
    'Moore', 'Morrison', 'Mooney', 'Okonkwo', 'Ravencroft', 'Reed', 'Reeves', 'Reitman',
    'Richardson', 'Robinson', 'Roper', 'Rossman', 'Russell', 'Sanford', 'Saunders', 'Scott', 'Silverton', 
    'Smith', 'Sterling', 'Stewart', 'Stone', 'Tatum', 'Ternes', 'Tawny', 'Towers',
    'Thompson', 'Thornfield', 'Turner', 'Walters', 'Wales', 'Walker', 'Wells',
    'Warner', 'Washington', 'Webber', 'Whitmore', 'Wilkinson', 'Wilson', 'Willis',
    'Wolfslayer', 'Zeller', 'Zimmerman', 'Zanders'
  ],

  jobTitlePrefixes: ['Senior', 'Sr.', 'Lead', 'Associate', 'Assoc.', 'Staff', 'Principal', 'Junior', 'Jr.'],

  jobTitleRoles: [
    // Engineering
    'Software Engineer', 'Backend Engineer', 'Frontend Engineer', 'Full Stack Engineer',
    'DevOps Engineer', 'Site Reliability Engineer', 'Machine Learning Engineer',
    'Data Engineer', 'Security Engineer', 'Platform Engineer', 'Mobile Engineer',
    // Design
    'Product Designer', 'UX Designer', 'UI Designer', 'Visual Designer',
    'Brand Designer', 'Motion Designer', 'Design Systems Engineer',
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
    // Funny
    'Detective', 'Tamer', 'Wrangler', 'Inspector', 'Whisperer', 'Debugger',
    'Overlord', 'Evangelist', 'Ninja', 'Watcher', 'Side Eyer'
  ],

  jobTitleFunnyNouns: [
    'Narwhal', 'Sock Puppet', 'Naptime', 'Snack', 'Rubber Duck',
    'Waffle', 'Dragon', 'Unicorn', 'Biscuit', 'Glitter', 'Bubble Wrap',
    'Printer', 'Spreadsheet', 'Hamster Wheel', 'Cat', 'Moonbeam', 'Thunderbolt',
    'Meme', 'Emoji', 'Cereal', 'Existential Dread', 'Chaos', 'Synergy',
    'Office Plant', 'Time Travel', 'Left Shark', 'Wifi Password', 'Meeting',
    'Hover Board', 'Conspiracy Theory', 'Parking Spot', 'Pen Cap', 'Deadline',
  ],

  jobTitleSuffixes: ['II', 'III'],

  jobTitleExecutive: [
    'VP of Engineering', 'VP of Product', 'VP of Marketing', 'VP of Sales',
    'VP of Operations', 'VP of People & Culture', 'VP of Data & Analytics',
    'VP of Snack Operations', 'VP of Overthinking',
    'VP of Untangling Headphones', 'VP of Making Things Look Busy',
    'Director of Engineering', 'Director of Product', 'Director of Design',
    'Director of Marketing', 'Director of Sales', 'Director of Customer Success',
    'Director of Data Engineering', 'Director of Cat Herding', 'Director of Office Plants',
    'Director of Existential Crisis Management', 'Director of Explaining Things Twice',
    'Engineering Manager', 'Design Manager', 'Product Marketing Manager',
    'Chief Information Security Officer', 'Chief Compliance Officer', 'General Counsel',
    'Chief Wizard', 'Chief Happiness Officer', 'Chief Procrastination Officer',
    'Chief Nap Advisor', 'Chief Fun Police', 'Chief Microwave Timer Expert',
    'Puppy Concierge', 'Professional Nap Taker', 'Sock Puppet Strategist',
    'Director of Side Eyeing', 'VP of Left Sharking', 'Alligator Wrestler'
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
    'Oakland', 'Ashland', 'Burlington', 'Manchester', 'Oxford', 'Clayton', 'Hudson', 'Kingston', 'Funky Town',
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
    'swift', 'dark', 'neo', 'cyber', 'turbo', 'ghost', 'solar', 'storm', 'pixel', 'neon',
    'lunar', 'silent', 'blazing', 'frozen', 'golden', 'iron', 'lost', 'wild', 'tiny', 'epic',
    'fuzzy', 'sleepy', 'happy', 'grumpy', 'zesty', 'sneaky', 'mighty', 'brave', 'clever', 'quirky'
  ],

  usernameNouns: [
    'falcon', 'wanderer', 'ninja', 'fox', 'wolf', 'panda', 'hawk', 'blade', 'comet', 'ranger',
    'coder', 'pilot', 'ghost', 'knight', 'sage', 'monk', 'raven', 'viper', 'lynx', 'echo',
    'noodle', 'unicorn', 'waffle', 'biscuit', 'narwhal', 'penguin', 'sloth', 'otter', 'capybara', 'duck'
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
