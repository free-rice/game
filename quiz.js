//Array of objects
const quiz = [{'q': 'scream means:', 'options': ['shut', 'make better', 'hide', 'yell'], 'answer': 3}, {'q': 'grateful means:', 'options': ['exhausted', 'thankful', 'very sad', 'harsh'], 'answer': 1}, {'q': 'gift means:', 'options': ['task', 'alarm', 'present', 'hotel'], 'answer': 2}, {'q': 'happening means:', 'options': ['creek', 'dirt', 'trust', 'occurrence'], 'answer': 3}, {'q': 'under means:', 'options': ['afterwards', 'luckily', 'perhaps', 'beneath'], 'answer': 3}, {'q': 'sudden means:', 'options': ['quick', 'kindling', 'jester', 'grief'], 'answer': 0}, {'q': 'fear means:', 'options': ['dread', 'gown', 'film', 'pupil'], 'answer': 0}, {'q': 'attached means:', 'options': ['connected', 'green', 'increased', 'happy'], 'answer': 0}, {'q': 'autograph means:', 'options': ['freezing rain', 'automobile', 'climate', 'signature'], 'answer': 3}, {'q': 'confidence means:', 'options': ['stamps', 'pupil', 'assurance', 'brook'], 'answer': 2}, {'q': 'trash means:', 'options': ['rubbish', 'village', 'autumn', 'cab'], 'answer': 0}, {'q': 'labor means:', 'options': ['work', 'dirt', 'silence', 'pill'], 'answer': 0}, {'q': 'central means:', 'options': ['middle', 'terrible', 'speedy', 'unhappy'], 'answer': 0}, {'q': 'extra means:', 'options': ['inexpensive', 'additional', 'very tired', 'bad'], 'answer': 1}, {'q': 'physician means:', 'options': ['rundown', 'heist', 'doctor', 'blackmail'], 'answer': 2}, {'q': 'unite means:', 'options': ['join', 'give up', 'act', 'rely'], 'answer': 0}, {'q': 'elevation means:', 'options': ['cider', 'tool', 'altitude', 'kettle'], 'answer': 2}, {'q': 'format means:', 'options': ['two', 'street', 'unfriendliness', 'arrangement'], 'answer': 3}, {'q': 'creek means:', 'options': ['lamb', 'work', 'brook', 'pill'], 'answer': 2}, {'q': 'predict means:', 'options': ['foretell', 'contain', 'shut', 'appear'], 'answer': 0}, {'q': 'miniature means:', 'options': ['celebratory', 'small-scale', 'gentle', 'permanent'], 'answer': 1}, {'q': 'cinema means:', 'options': ['icebox', 'bag', 'movies', 'clunk'], 'answer': 2}, {'q': 'limited means:', 'options': ['hectic', 'parched', 'restricted', 'singsong'], 'answer': 2}, {'q': 'breathtaking means:', 'options': ['numb', 'astonishing', 'wily', 'tuneful'], 'answer': 1}, {'q': 'feast means:', 'options': ['outskirts', 'car', 'gorge', 'banquet'], 'answer': 3}, {'q': 'quantity means:', 'options': ['carpet', 'myth', 'picture', 'amount'], 'answer': 3}, {'q': 'paycheck means:', 'options': ['intersection', 'salary', 'bias', 'pillar'], 'answer': 1}, {'q': 'suicidal means:', 'options': ['self-destructive', 'old', 'priceless', 'very tasty'], 'answer': 0}, {'q': 'district means:', 'options': ['insect', 'freedom', 'bucket', 'region'], 'answer': 3}, {'q': 'forbidden means:', 'options': ['evil', 'celebratory', 'antique', 'prohibited'], 'answer': 3}, {'q': 'bizarre means:', 'options': ['worried', 'strange', 'delighted', 'very tired'], 'answer': 1}, {'q': 'outer means:', 'options': ['appropriate', 'illegal', 'external', 'bad'], 'answer': 2}, {'q': 'possibly means:', 'options': ['rarely', 'perhaps', 'again', 'besides'], 'answer': 1}, {'q': 'analysis means:', 'options': ['wrestling hold', 'liking', 'remnant', 'examination'], 'answer': 3}, {'q': 'skillet means:', 'options': ['hogwash', 'frying pan', 'pedestrian', 'splotch'], 'answer': 1}, {'q': 'sac means:', 'options': ['rejoicing', 'small pouch', 'preparation', 'fury'], 'answer': 1}, {'q': 'acknowledge means:', 'options': ['blaze', 'admit', 'peep', 'delete'], 'answer': 1}, {'q': 'activate means:', 'options': ['start', 'heal', 'pout', 'reveal'], 'answer': 0}, {'q': 'infrequent means:', 'options': ['homicidal', 'lighthearted', 'incredible', 'uncommon'], 'answer': 3}, {'q': 'idolize means:', 'options': ['worship', 'meet', 'blab', 'defeat'], 'answer': 0}, {'q': 'abnormality means:', 'options': ['pilgrim', 'manual', 'sentry', 'irregularity'], 'answer': 3}, {'q': 'weeny means:', 'options': ['tiny', 'bewitching', 'poor', 'derisive'], 'answer': 0}, {'q': 'jumpy means:', 'options': ['spotless', 'impish', 'obedient', 'nervous'], 'answer': 3}, {'q': 'hideous means:', 'options': ['concurrent', 'sassy', 'impending', 'ugly'], 'answer': 3}, {'q': 'depress means:', 'options': ['inoculate', 'sadden', 'release', 'pivot'], 'answer': 1}, {'q': 'approximation means:', 'options': ['robber', 'detention', 'estimate', 'periphery'], 'answer': 2}, {'q': 'wriggle means:', 'options': ['squirm', 'ensure', 'yawn', 'divulge'], 'answer': 0}, {'q': 'triumphant means:', 'options': ['victorious', 'presumptuous', 'few', 'ready'], 'answer': 0}, {'q': 'crave means:', 'options': ['desire', 'propose', 'immerse', 'worsen'], 'answer': 0}, {'q': 'barrier means:', 'options': ['obstacle', 'carpet', 'fury', 'sea'], 'answer': 0}, {'q': 'magician means:', 'options': ['flapjack', 'engine', 'records', 'sorcerer'], 'answer': 3}, {'q': 'boulevard means:', 'options': ['plaything', 'chow', 'avenue', 'registration'], 'answer': 2}, {'q': 'severe means:', 'options': ['weary', 'crippled', 'harsh', 'untrue'], 'answer': 2}, {'q': 'scratchy means:', 'options': ['appreciative', 'representative', 'prickly', 'tense'], 'answer': 2}, {'q': 'appear means:', 'options': ['seem', 'run away', 'creep', 'try'], 'answer': 0}, {'q': 'depressing means:', 'options': ['speedy', 'dreary', 'holy', 'vicious'], 'answer': 1}, {'q': 'decompose means:', 'options': ['disagree', 'rot', 'stay around', 'tempt'], 'answer': 1}, {'q': 'buffoon means:', 'options': ['fluid', 'daybreak', 'brilliancy', 'clown'], 'answer': 3}, {'q': 'almost means:', 'options': ['luckily', 'nearly', 'maybe', 'again'], 'answer': 1}, {'q': 'flimsy means:', 'options': ['revolting', 'delighted', 'needy', 'weak'], 'answer': 3}, {'q': 'patch means:', 'options': ['mend', 'flunk', 'call off', 'shriek'], 'answer': 0}, {'q': 'functional means:', 'options': ['working', 'snug', 'dense', 'innovative'], 'answer': 0}, {'q': 'significant means:', 'options': ['speedy', 'active', 'important', 'unknown'], 'answer': 2}, {'q': 'elegant means:', 'options': ['real', 'sagging', 'graceful', 'distrustful'], 'answer': 2}, {'q': 'likelihood means:', 'options': ['iciness', 'clatter', 'probability', 'mama'], 'answer': 2}, {'q': 'deceive means:', 'options': ['creep', 'solve', 'nap', 'mislead'], 'answer': 3}, {'q': 'protection means:', 'options': ['gem', 'cable', 'refuge', 'village'], 'answer': 2}, {'q': 'nauseate means:', 'options': ['disgust', 'make', 'lean back', 'patch'], 'answer': 0}, {'q': 'isle means:', 'options': ['infant', 'gash', 'small island', 'free time'], 'answer': 2}, {'q': 'also means:', 'options': ['besides', 'rapidly', 'entirely', 'afterward'], 'answer': 0}, {'q': 'purpose means:', 'options': ['aim', 'laborer', 'pupil', 'bucket'], 'answer': 0}, {'q': 'gush means:', 'options': ['tell', 'oversee', 'spurt', 'deteriorate'], 'answer': 2}, {'q': 'external means:', 'options': ['thankful', 'gifted', 'outside', 'droopy'], 'answer': 2}, {'q': 'playful means:', 'options': ['proportionate', 'worrisome', 'frolicsome', 'old'], 'answer': 2}, {'q': 'ultra means:', 'options': ['teenage', 'ashen', 'unfamiliar', 'extreme'], 'answer': 3}, {'q': 'commotion means:', 'options': ['translator', 'youngster', 'disturbance', 'smithereens'], 'answer': 2}, {'q': 'advise means:', 'options': ['prohibit', 'counsel', 'trickle', 'strand'], 'answer': 1}, {'q': 'deuce means:', 'options': ['two', 'counselor', 'motto', 'squad'], 'answer': 0}, {'q': 'overstate means:', 'options': ['retain', 'delete', 'exaggerate', 'get'], 'answer': 2}, {'q': 'hoodlum means:', 'options': ['action', 'preview', 'faith', 'thug'], 'answer': 3}, {'q': 'sympathetic means:', 'options': ['compassionate', 'speedy', 'fake', 'initial'], 'answer': 0}, {'q': 'restless means:', 'options': ['phenomenal', 'wide', 'uneasy', 'terrible'], 'answer': 2}, {'q': 'gourmet means:', 'options': ['struggle', 'obligation', 'food connoisseur', 'chore'], 'answer': 2}, {'q': 'inaccuracy means:', 'options': ['mania', 'amphitheater', 'struggle', 'error'], 'answer': 3}, {'q': 'ajar means:', 'options': ['slightly open', 'impolite', 'juicy', 'terrific'], 'answer': 0}, {'q': 'braid means:', 'options': ['interweave', 'suggestion', 'umpire', 'artisan'], 'answer': 0}, {'q': 'crafty means:', 'options': ['cunning', 'miniature', 'thankful', 'full-grown'], 'answer': 0}, {'q': 'budge means:', 'options': ['occur', 'remain', 'disconnect', 'move'], 'answer': 3}, {'q': 'nauseous means:', 'options': ['queasy', 'steamy', 'durable', 'ripe'], 'answer': 0}, {'q': 'pester means:', 'options': ['harass', 'grab', 'eclipse', 'yawn'], 'answer': 0}, {'q': 'hurl means:', 'options': ['roost', 'breathe in', 'throw', 'depress'], 'answer': 2}, {'q': 'ferocity means:', 'options': ['helper', 'advance showing', 'relatives', 'fierceness'], 'answer': 3}, {'q': 'foamy means:', 'options': ['in good spirits', 'chatty', 'frothy', 'peculiar'], 'answer': 2}, {'q': 'negligence means:', 'options': ['rod', 'carelessness', 'stance', 'toy'], 'answer': 1}, {'q': 'topple means:', 'options': ['enlist', 'regard highly', 'overturn', 'spy'], 'answer': 2}, {'q': 'bison means:', 'options': ['buffalo', 'kindliness', 'injustice', 'conviction'], 'answer': 0}, {'q': 'bet means:', 'options': ['chart', 'wager', 'undertaking', 'permission'], 'answer': 1}, {'q': 'gash means:', 'options': ['supplement', 'originality', 'cut', 'barrier'], 'answer': 2}, {'q': 'column means:', 'options': ['pillar', 'work', 'existence', 'attention'], 'answer': 0}, {'q': 'dread means:', 'options': ['amaze', 'twist', 'exchange', 'fear'], 'answer': 3}, {'q': 'seep means:', 'options': ['meet', 'admire', 'ooze', 'tell'], 'answer': 2}, {'q': 'wacky means:', 'options': ['high', 'convincing', 'dirty', 'zany'], 'answer': 3}, {'q': 'degraded means:', 'options': ['lowered in value', 'famous', 'reliable', 'pricey'], 'answer': 0}, {'q': 'abduction means:', 'options': ['ricochet', 'introduction', 'souvenir', 'kidnapping'], 'answer': 3}, {'q': 'downfall means:', 'options': ['gangster', 'ruin', 'hospital', 'font'], 'answer': 1}, {'q': 'lasting means:', 'options': ['pleasant', 'outrageous', 'durable', 'innovative'], 'answer': 2}, {'q': 'profession means:', 'options': ['occupation', 'moisture', 'reserve', 'heroism'], 'answer': 0}, {'q': 'holy means:', 'options': ['not many', 'accurate', 'sacred', 'gentle'], 'answer': 2}, {'q': 'aggression means:', 'options': ['student', 'vendor', 'pocketbook', 'hostility'], 'answer': 3}, {'q': 'pierce means:', 'options': ['brief sleep', 'forsake', 'dampen', 'penetrate'], 'answer': 3}, {'q': 'timid means:', 'options': ['inexpensive', 'happy', 'pathetic', 'shy'], 'answer': 3}, {'q': 'disadvantageous means:', 'options': ['triple', 'detached', 'active', 'unfavourable'], 'answer': 3}, {'q': 'affair means:', 'options': ['young child', 'matter', 'couch', 'tablet'], 'answer': 1}, {'q': 'occurrence means:', 'options': ['secret writing', 'tadpole', 'happening', 'freight'], 'answer': 2}, {'q': 'raging means:', 'options': ['junior', 'absurd', 'furious', 'main'], 'answer': 2}, {'q': 'swap means:', 'options': ['shovel', 'exchange', 'disclose', 'regard highly'], 'answer': 1}, {'q': 'enchantment means:', 'options': ['spell', 'map', 'conduct', 'journal'], 'answer': 0}, {'q': 'lunatic means:', 'options': ['environment', 'distribution', 'madman', 'bias'], 'answer': 2}, {'q': 'deserving means:', 'options': ['mammoth', 'charmed', 'worthy', 'imperious'], 'answer': 2}, {'q': 'plateau means:', 'options': ['dreamer', 'prediction', 'old-timer', 'elevated flatland'], 'answer': 3}, {'q': 'conscious means:', 'options': ['depressing', 'bright', 'aware', 'chubby'], 'answer': 2}, {'q': 'empire means:', 'options': ['chance', 'work', 'realm', 'mama'], 'answer': 2}, {'q': 'blunt means:', 'options': ['few', 'dull', 'lovely', 'exclusive'], 'answer': 1}, {'q': 'burden means:', 'options': ['hypothesis', 'load', 'mist', 'bunny'], 'answer': 1}, {'q': 'sufficient means:', 'options': ['towering', 'male', 'comical', 'enough'], 'answer': 3}, {'q': 'overcome means:', 'options': ['hide', 'surmount', 'mourn', 'cite'], 'answer': 1}, {'q': 'tangle means:', 'options': ['list', 'introduce', 'snarl', 'oversee'], 'answer': 2}, {'q': 'rebellion means:', 'options': ['stance', 'blizzard', 'uprising', 'autobiography'], 'answer': 2}, {'q': 'deprive means:', 'options': ['take away', 'regard highly', 'approach', 'seek'], 'answer': 0}, {'q': 'contradiction means:', 'options': ['advisor', 'inconsistency', 'daddy', 'jealousy'], 'answer': 1}, {'q': 'envision means:', 'options': ['clutch', 'imagine', 'subtract', 'evade'], 'answer': 1}, {'q': 'epic means:', 'options': ['heroic', 'pitiful', 'tiresome', 'secret'], 'answer': 0}, {'q': 'dismantle means:', 'options': ['take apart', 'revert', 'inquire', 'announce'], 'answer': 0}, {'q': 'toxin means:', 'options': ['diversion', 'chocolate sprinkles', 'poison', 'fragments'], 'answer': 2}, {'q': 'timepiece means:', 'options': ['sugar', 'jester', 'watch', 'canal'], 'answer': 2}, {'q': 'enthusiastic means:', 'options': ['continuous', 'eager', 'not good', 'peculiar'], 'answer': 1}, {'q': 'renovate means:', 'options': ['compress', 'restore', 'marshal', 'depress'], 'answer': 1}, {'q': 'insomnia means:', 'options': ['experiment', 'sleeplessness', 'vapor', 'charge'], 'answer': 1}, {'q': 'equivalence means:', 'options': ['depiction', "baby's bed", 'teamwork', 'sameness'], 'answer': 3}, {'q': 'thug means:', 'options': ['lyre', 'moisture', 'ruffian', 'frying pan'], 'answer': 2}, {'q': 'blockade means:', 'options': ['candidate', 'booze', 'sweepstakes', 'obstruction'], 'answer': 3}, {'q': 'psychotic means:', 'options': ['deranged', 'rotten', 'slow', 'plump'], 'answer': 0}, {'q': 'stash means:', 'options': ['cache', 'mishandle', 'laugh quietly', 'ruin'], 'answer': 0}, {'q': 'incapacitate means:', 'options': ['disable', 'beckon', 'mix', 'heckle'], 'answer': 0}, {'q': 'sinister means:', 'options': ['irrational', 'beautiful', 'evil', 'ungainly'], 'answer': 2}, {'q': 'compatible means:', 'options': ['sarcastic', 'choppy', 'assuming', 'harmonious'], 'answer': 3}, {'q': 'abundant means:', 'options': ['misshapen', 'approximate', 'luscious', 'plentiful'], 'answer': 3}, {'q': 'slack means:', 'options': ['loose', 'strange', 'faultfinding', 'wrathful'], 'answer': 0}, {'q': 'teal means:', 'options': ['interfering', 'blue-green', 'fatherly', 'deficient'], 'answer': 1}, {'q': 'authentic means:', 'options': ['appalling', 'genuine', 'diplomatic', 'filthy'], 'answer': 1}, {'q': 'daring means:', 'options': ['fierce', 'bold', 'wealthy', 'snug'], 'answer': 1}, {'q': 'grievance means:', 'options': ['alumnus', 'rider', 
'complaint', 'pattern'], 'answer': 2}, {'q': 'exhilarate means:', 'options': ['commandeer', 'present', 'defeat', 'thrill'], 'answer': 3}, {'q': 'blemish means:', 'options': ['flaw', 'bassinet', 'eyesight', 'watchman'], 'answer': 0}, {'q': 'introductory means:', 'options': ['wondrous', 'extremely funny', 'preliminary', 'invaluable'], 'answer': 2}, {'q': 'brow means:', 'options': ['catastrophe', 'deceit', 'forehead', 'archives'], 'answer': 2}, {'q': 'stronghold means:', 'options': ['fortress', 'pain', 'secret writing', 'license'], 'answer': 0}, {'q': 'tabloid means:', 'options': ['commitment', 'enthusiasm', 'outsider', 'newspaper'], 'answer': 3}, {'q': 'overcast means:', 'options': ['cloudy', 'vivid', 'appalling', 'remarkable'], 'answer': 0}, {'q': 'plentiful means:', 'options': ['destined', 'abundant', 'sagging', 'revolting'], 'answer': 1}, {'q': 'endanger means:', 'options': ['inform', 'achieve', 'drop sharply', 'jeopardize'], 'answer': 3}, {'q': 'snare means:', 'options': ['workman', 'military', 'alliance', 'trap'], 'answer': 3}, {'q': 'invigorate means:', 'options': ['holler', 'energize', 'smack', 'rip'], 'answer': 1}, {'q': 'familiarity means:', 'options': ['award', 'intimacy', 'logo', 'rattle'], 'answer': 1}, {'q': 'contrary means:', 'options': ['opposite', 'thankful', 'bright', 'puny'], 'answer': 0}, {'q': 'moral means:', 'options': ['monetary', 'ethical', 'sad', 'confidential'], 'answer': 1}, {'q': 'prevail means:', 'options': ['sprint', 'mutilate', 'triumph', 'yawn'], 'answer': 2}, {'q': 'disinterested means:', 'options': ['advisable', 'needy', 'impartial', 'pricey'], 'answer': 2}, {'q': 'lunge means:', 'options': ['analysis', 'booty', 'thrust', 'creek'], 'answer': 2}, {'q': 'revolt means:', 'options': ['fasten', 'worsen', 'rebel', 'dampen'], 'answer': 2}, {'q': 'obnoxious means:', 'options': ['muted', 'highly annoying', 'ambitious', 'expired'], 'answer': 1}, {'q': 'scuffle means:', 'options': ['glee', 'struggle', 'completeness', 'duty'], 'answer': 1}, {'q': 'disagreeable means:', 'options': ['foamy', 'unpleasant', 'peculiar', 'catching'], 'answer': 1}, {'q': 'snippet means:', 'options': ['translator', 'attention', 'freight', 'small piece'], 'answer': 3}, {'q': 'marine means:', 'options': ['extraordinary', 'idiotic', 'polished', 'oceanic'], 'answer': 3}, {'q': 'modification means:', 'options': ['assistant', 'realm', 'wretchedness', 'change'], 'answer': 3}, {'q': 'attorney means:', 'options': ['wickedness', 'lawyer', 'talk', 'vacuum'], 'answer': 1}, {'q': 'pillar means:', 'options': ['grump', 'column', 'ranch', 'pretender'], 'answer': 1}, {'q': 'imbecile means:', 'options': ['tub', 'idiot', 'windfall', 'chunk'], 'answer': 1}, {'q': 'fabulous means:', 'options': ['incredible', 'alluring', 'unhurried', 'enthusiastic'], 'answer': 0}, {'q': 'symmetry means:', 'options': ['inmate', 'daze', 'balance', 'light meal'], 'answer': 2}, {'q': 'blackmail means:', 'options': ['papa', 'extortion', 'durability', 'gibberish'], 'answer': 1}, {'q': 'boast means:', 'options': ['brag', 'jump', 'decay', 'escape'], 'answer': 0}, {'q': 'stunning means:', 'options': ['chunky', 'impatient', 'striking', 'fainthearted'], 'answer': 2}, {'q': 'exclude means:', 'options': ['zap', 'investigate', 'blab', 'omit'], 'answer': 3}, {'q': 'delusion means:', 'options': ['attacker', 'backtalk', 'salamander', 'false belief'], 'answer': 3}, {'q': 'reek means:', 'options': ['jolt', 'laugh quietly', 'meddle', 'stink'], 'answer': 3}, {'q': 'fringe means:', 'options': ['reply', 'border', 'mama', 'lamb'], 'answer': 1}, {'q': 'exasperate means:', 'options': ['slouch', 'accompany', 'greatly irritate', 'delete'], 'answer': 2}, {'q': 'wholehearted means:', 'options': ['minuscule', 'uptight', 'enthusiastic', 'scornful'], 'answer': 2}, {'q': 'hectic means:', 'options': ['frenzied', 'not capable', 'jelly-like', 'unworried'], 'answer': 0}, {'q': 'seize means:', 'options': ['blend', 'inquire', 'furnish', 'grab'], 'answer': 3}, {'q': 'heartrending means:', 'options': ['odd', 'accurate', 'determined', 'sorrowful'], 'answer': 3}, {'q': 'transcript means:', 'options': ['doctor', 'copy', 'youngster', 'impostor'], 'answer': 1}, {'q': 'continuous means:', 'options': ['mental', 'intelligent', 'uninterrupted', 'costly'], 'answer': 2}, {'q': 'surrender means:', 'options': ['yield', 'terrify', 'gasp', 'stare'], 'answer': 0}, {'q': 'ridicule means:', 'options': ['large leaf', 'derision', 'chick', 'surgical knife'], 'answer': 1}, {'q': 'mournful means:', 'options': ['misshapen', 'canine', 'endearing', 'sad'], 'answer': 3}, {'q': 'frequently means:', 'options': ['actually', 'quickly', 'specially', 'often'], 'answer': 3}, {'q': 'blockage means:', 'options': ['obstruction', 'sack', 'killing', 'crossing'], 'answer': 0}]
