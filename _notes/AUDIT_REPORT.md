# AI Trivia Arena — Question Audit Report
**Date:** 2026-03-20  
**Model:** claude-sonnet-4-6  
**Mode:** LIVE  

## Summary

| Metric | Count |
|--------|-------|
| Questions checked | 3248 |
| Exact duplicates removed | 534 |
| Factual issues found | 1257 |
| Questions fixed (answer corrected) | 1181 |
| Questions deleted (unfixable) | 76 |

## Category Breakdown

| Category | Checked | Issues | Fixed | Deleted |
|----------|---------|--------|-------|---------|
| colorado | 336 | 165 | 143 | 22 |
| science | 227 | 56 | 56 | 0 |
| history | 236 | 81 | 80 | 1 |
| geography | 223 | 88 | 86 | 2 |
| sports | 330 | 107 | 104 | 3 |
| pop_culture | 311 | 158 | 132 | 26 |
| music | 353 | 146 | 140 | 6 |
| movies_tv | 352 | 119 | 108 | 11 |
| technology | 320 | 110 | 108 | 2 |
| food_drink | 366 | 174 | 173 | 1 |
| general | 194 | 53 | 51 | 2 |

## All Issues Found

### COLORADO (188 issues)

**[EASY]** In what year was Colorado Springs founded?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Colorado become a state?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the highest peak in Colorado?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the elevation of Denver, known as the 'Mile High City'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the Royal Gorge Bridge constructed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the Royal Gorge Bridge constructed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Colorado achieve statehood?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which city is home to the Royal Gorge Bridge and Park?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Colorado become a state?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which river runs through the Royal Gorge?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Colorado achieve statehood?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which mountain peak is the highest point in Colorado?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the Royal Gorge Bridge completed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the elevation of Denver, known as the 'Mile High City'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the approximate depth of the Royal Gorge at its deepest point?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Colorado become a state?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the length of the Royal Gorge Bridge?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the elevation of Denver, known as the 'Mile High City'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Denver become Colorado's capital?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the Royal Gorge Bridge completed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the Royal Gorge Bridge completed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the primary rock type found in the Royal Gorge?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which major river runs through the Royal Gorge?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which mountain range dominates the Colorado Springs area?
- **Marked correct:** Rocky Mountains
- **Wrong options:** Sangre de Cristo Range | San Juan Mountains | Sawatch Range
- **Fixed wrong options:** Sierra Nevada | Appalachian Mountains | Cascade Range
- **Problem:** The Sangre de Cristo Range is also part of the Rocky Mountains and is arguably more directly adjacent to Colorado Springs than the generic 'Rocky Mountains' answer. However, 'Rocky Mountains' is technically the correct broad answer. The wrong answers listing sub-ranges of the Rockies alongside the parent range creates ambiguity.
- **Action:** fix

**[EASY]** In what year did Denver become the state capital of Colorado?
- **Marked correct:** 1876
- **Wrong options:** 1881 | 1873 | 1879
- **Problem:** Denver was made the territorial capital in 1867, not 1876. When Colorado achieved statehood in 1876, Denver was confirmed as the state capital, but it had already been the territorial capital since 1867. The answer of 1876 conflates 'became state capital' with 'became capital,' which requires clarification. Strictly speaking, Denver became the capital of the Territory of Colorado in 1867, and became state capital upon statehood in 1876. The question asks when Denver became 'state capital of Colorado,' so 1876 is defensible, but the explanation is misleading.
- **Action:** fix

**[EASY]** What is Canon City primarily known for in Colorado history?
- **Marked correct:** Gold and silver mining
- **Should be:** Prison system and corrections
- **Wrong options:** Coal mining | Oil production | Cattle ranching
- **Fixed wrong options:** Coal mining | Oil production | Cattle ranching
- **Problem:** Canon City is far more historically known for its prison system (Colorado State Penitentiary, established 1871) and as a hub for the Royal Gorge area tourism than for gold and silver mining. While the region had some mining activity, Canon City's primary historical identity is centered on corrections/prisons and the Royal Gorge, not gold and silver mining.
- **Action:** fix

**[EASY]** Which ski resort is closest to Denver?
- **Marked correct:** Winter Park
- **Wrong options:** Vail | Aspen | Breckenridge
- **Problem:** Breckenridge is approximately 80 miles from Denver, very close to Winter Park's ~67 miles. Loveland Ski Area (~56 miles) and Arapahoe Basin (~56 miles) are actually closer to Denver than Winter Park. The claim that Winter Park is the 'closest major ski resort' is debatable depending on how 'major' is defined.
- **Action:** fix

**[EASY]** Which mining resource was discovered in the Canon City area during the 1870s Gold Rush?
- **Marked correct:** Silver
- **Should be:** Coal
- **Wrong options:** Uranium | Copper | Lead
- **Fixed wrong options:** Uranium | Copper | Lead
- **Problem:** The Canon City area is not primarily associated with silver mining during the 1870s Gold Rush. The Colorado Silver Boom was centered around Leadville and the San Juan Mountains. Canon City's mining heritage was more tied to coal mining, not silver. The question conflates different regional mining histories.
- **Action:** fix

**[EASY]** Which national park is located near Denver and features red rock formations?
- **Marked correct:** Red Rocks Park
- **Should be:** Red Rocks Park
- **Wrong options:** Garden of the Gods | Great Sand Dunes National Park | Black Canyon of the Gunnison
- **Fixed wrong options:** Garden of the Gods | Great Sand Dunes National Park | Black Canyon of the Gunnison
- **Problem:** Red Rocks Park (officially Red Rocks Park and Amphitheatre) is a Jefferson County/City of Denver park, not a national park. Calling it a 'national park' in the question is factually incorrect and misleading.
- **Action:** fix

**[EASY]** Which regional art style is strongly associated with Colorado's mining towns and cultural heritage?
- **Marked correct:** Western frontier art
- **Wrong options:** Art Deco | Indigenous Pueblo pottery | Industrial modernism
- **Problem:** 'Western frontier art' is a vague and loosely defined category that is not a formally recognized or clearly bounded art style. The question and explanation also incorrectly state Canon City had Gold Rush heritage — it was more associated with coal and later tourism. The question is too subjective to have a clearly defensible correct answer.
- **Action:** fix

**[EASY]** Which famous ski resort is located near Denver?
- **Marked correct:** Loveland
- **Should be:** Loveland
- **Wrong options:** Telluride | Vail | Beaver Creek
- **Fixed wrong options:** Telluride | Vail | Beaver Creek
- **Problem:** The question asks which famous ski resort is 'located near Denver,' but Vail is also a well-known ski resort relatively near Denver (~100 miles) and is arguably far more famous than Loveland. The word 'famous' makes this ambiguous since Vail and other resorts listed are more famous than Loveland. The question should specify 'closest' or 'most accessible' instead.
- **Action:** fix

**[EASY]** How many 14,000-foot peaks (fourteeners) are in Colorado?
- **Marked correct:** 53
- **Should be:** 58
- **Wrong options:** 47 | 58 | 51
- **Fixed wrong options:** 47 | 53 | 51
- **Problem:** The number of Colorado fourteeners is disputed depending on the counting methodology. The commonly cited figures range from 53 to 58 depending on whether subsidiary summits are included. The most widely accepted official count is 58 by the Colorado Fourteeners Initiative, though 53 is also cited when using strict prominence requirements.
- **Action:** fix

**[EASY]** In what year was the Royal Gorge damaged by a major fire?
- **Marked correct:** 2013
- **Should be:** 2013
- **Wrong options:** 2010 | 2015 | 2011
- **Problem:** The Royal Gorge Park fire occurred in June 2013, but it was the Royal Gorge Fire, not the Waldo Canyon Fire (which was a separate 2012 fire near Colorado Springs). The year 2013 is correct but the explanation misattributes it to Waldo Canyon Fire.
- **Action:** fix

**[EASY]** Which famous ski resort is located northwest of Denver?
- **Marked correct:** Winter Park
- **Wrong options:** Keystone | Breckenridge | Copper Mountain
- **Problem:** Keystone, Breckenridge, and Copper Mountain are all located west/southwest of Denver, not northwest — they are in Summit County along I-70. Winter Park is indeed northwest of Denver. However, those wrong answers could mislead as they are also accessible from Denver heading west, not northwest. The question and answer are defensible but the wrong answers should not be described as alternatives to 'northwest of Denver' since they are in a different direction.
- **Action:** fix

**[EASY]** In what year did Colorado Springs host the Olympic Winter Games?
- **Marked correct:** Never
- **Should be:** Never
- **Wrong options:** 1976 | 1980 | 2002
- **Problem:** The explanation is internally contradictory and factually wrong. Denver was awarded the 1976 Winter Olympics but voters rejected it in 1972, and the games moved to Innsbruck. Denver never hosted the Olympics. The correct answer 'Never' is right, but the explanation incorrectly states 'Denver hosted the 1976 Winter Olympics.'
- **Action:** fix

**[EASY]** What is the primary vegetation type found in the high mountains of Colorado?
- **Marked correct:** Coniferous forest
- **Should be:** Coniferous forest
- **Wrong options:** Deciduous forest | Grassland | Tundra
- **Fixed wrong options:** Deciduous forest | Grassland | Desert scrub
- **Problem:** Alpine tundra is also a primary vegetation type in the high mountains of Colorado (above treeline), making 'Tundra' a plausible correct answer as well. The question asks about 'high mountains' which could reasonably include alpine zones. The wrong answers list includes 'Tundra' which is also correct for the highest elevations.
- **Action:** fix

**[EASY]** In what year was Pikes Peak first successfully climbed?
- **Marked correct:** 1820
- **Should be:** 1820
- **Wrong options:** 1800 | 1835 | 1850
- **Problem:** Pikes Peak was first summited in 1820 by Edwin James (not by members of the Stephen Long Expedition in general — James was the botanist on that expedition). More importantly, there is a credible claim that Zebulon Pike's men may have made earlier attempts, but the first confirmed summit was Edwin James in 1820. The year is correct but crediting it vaguely to 'members of the Stephen Long Expedition' is acceptable; however, Pike himself never summited it.
- **Action:** fix

**[EASY]** Which wildlife refuge near Canon City protects habitat for mule deer and elk?
- **Marked correct:** Timberline Park
- **Wrong options:** Clear Creek Preserve | Pueblo Reservoir | Curecanti
- **Problem:** 'Timberline Park' near Canon City does not appear to be a verifiable or real wildlife refuge. This appears to be an invented location, and the question cannot be verified with reliable sources.
- **Action:** delete

**[EASY]** Which town in the Royal Gorge region is known for its mining heritage?
- **Marked correct:** Florence
- **Wrong options:** Salida | Victor | Cripple Creek
- **Problem:** Cripple Creek and Victor are both far more famous for their gold mining heritage than Florence. Florence is better known for coal mining and its prisons, making this question ambiguous and potentially misleading by placing Cripple Creek and Victor as wrong answers.
- **Action:** fix

**[EASY]** Which mountain range dominates the landscape west of Denver?
- **Marked correct:** Rocky Mountains
- **Should be:** Front Range
- **Wrong options:** Sangre de Cristo Range | Sawatch Range | San Juan Mountains
- **Fixed wrong options:** Sawatch Range | Sangre de Cristo Range | San Juan Mountains
- **Problem:** The Rocky Mountains is a broad continental range, not a specific named sub-range. The more precise answer for the range immediately west of Denver is the Front Range, which is the specific sub-range of the Rockies directly west of the city. Calling it simply 'Rocky Mountains' while listing specific sub-ranges like Sawatch and San Juan as wrong answers creates an inconsistency in category level.
- **Action:** fix

**[EASY]** Which large animal is commonly found in Colorado's mountain regions?
- **Marked correct:** Rocky Mountain elk
- **Should be:** Rocky Mountain elk
- **Wrong options:** American bison | Pronghorn antelope | Mountain goat
- **Fixed wrong options:** American bison | Pronghorn antelope | Grizzly bear
- **Problem:** Mountain goats are genuinely common in Colorado's mountain regions and are a well-known wildlife species there, making them a valid correct answer alongside Rocky Mountain elk. Pronghorn antelope are also found in Colorado though more in plains areas. The question should clarify what makes elk the singular correct answer, or replace mountain goat as a wrong answer option.
- **Action:** fix

**[EASY]** What is the highest peak in Colorado?
- **Marked correct:** Mount Elbert
- **Wrong options:** Mount Evans | Mount Massive | Mount Harvard
- **Problem:** Mount Massive at 14,428 feet is the second-highest peak in Colorado and in the contiguous U.S., not a wrong answer per se, but it is definitively not the highest. However, the explanation states Mount Elbert is 14,440 feet — the commonly cited figure is 14,439 feet (some sources say 14,440). More critically, Mount Massive is legitimately a close second and not a trick — this is fine. No contamination found on closer review; all wrong answers are genuinely not the highest peak.
- **Action:** fix

**[EASY]** Which animal species was reintroduced to Colorado in the 1990s after being absent for decades?
- **Marked correct:** Gray wolf
- **Should be:** Gray wolf
- **Wrong options:** Grizzly bear | California condor | Black-footed ferret
- **Fixed wrong options:** Grizzly bear | California condor | Black-footed ferret
- **Problem:** Gray wolves were NOT reintroduced to Colorado in the 1990s. Colorado voters approved Proposition 114 in 2020, and wolves were reintroduced in December 2023. The 1990s reintroduction was to Yellowstone National Park in Wyoming/Idaho, not Colorado.
- **Action:** fix

**[EASY]** What nickname has Denver earned due to its over 300 days of sunshine annually?
- **Marked correct:** The Sunshine City
- **Should be:** The Mile High City
- **Wrong options:** The Sky City | The Clear City | The Bright City
- **Fixed wrong options:** The Sunshine City | The Queen City of the Plains | The Queen City
- **Problem:** Denver's well-known nickname related to sunshine is 'The Mile High City,' not 'The Sunshine City.' 'The Sunshine City' is not a recognized or commonly used official nickname for Denver. The question conflates a statistical fact (300 days of sunshine) with an unofficial nickname that is not broadly attributed to Denver.
- **Action:** fix

**[EASY]** Which river is the longest in Colorado?
- **Marked correct:** Colorado River
- **Wrong options:** Arkansas River | South Platte River | Gunnison River
- **Problem:** The question asks which river is 'longest in Colorado,' but this is ambiguous. The Colorado River originates in Colorado but much of its 1,450-mile length is outside the state. The Rio Grande also flows through Colorado. The question should clarify whether it means longest river originating in Colorado or longest by total length.
- **Action:** fix

**[EASY]** What is the primary cultural attraction in Pueblo's historic downtown?
- **Marked correct:** Pueblo Memorial Hall and Historic District
- **Wrong options:** Pueblo Zoo | San Isabel National Forest | Lake Pueblo
- **Problem:** The correct answer 'Pueblo Memorial Hall and Historic District' is an oddly bundled answer, and Memorial Hall alone is not widely recognized as THE primary cultural attraction. The Pueblo Riverwalk and the Sangre de Cristo Arts Center are arguably more prominent cultural attractions in Pueblo's historic downtown.
- **Action:** fix

**[EASY]** Which national park near Colorado Springs features unique sand dunes?
- **Marked correct:** Great Sand Dunes National Park
- **Should be:** Great Sand Dunes National Park
- **Wrong options:** Black Canyon of the Gunnison | Mesa Verde National Park | Petrified Forest
- **Problem:** Great Sand Dunes National Park is not near Colorado Springs — it is located near Alamosa in the San Luis Valley, roughly 170 miles from Colorado Springs. The question is geographically misleading.
- **Action:** fix

**[EASY]** What is the primary reason Canon City became an important location in Colorado's early settlement?
- **Marked correct:** Gateway to the Royal Gorge
- **Wrong options:** Gold mining discovery | Railroad junction point | Agricultural production
- **Problem:** Canon City was also historically important for coal mining and as a railroad hub — the railroad junction point (the 'Royal Gorge War' between railroads) was arguably the most historically significant event tied to Canon City. The answer oversimplifies a complex history.
- **Action:** fix

**[EASY]** What is the approximate depth of the Royal Gorge at its deepest point?
- **Marked correct:** 1,000 feet
- **Should be:** 1,000 feet
- **Wrong options:** 500 feet | 1,500 feet | 2,000 feet
- **Problem:** This question and Question #14 both ask about the depth of the Royal Gorge but give different answers (1,000 feet vs 1,053 feet). The more precise figure of ~1,053 feet is the commonly cited measurement. Having two questions about the same fact with different answers in the same set is problematic.
- **Action:** fix

**[EASY]** Which state capitol building is located in Denver?
- **Marked correct:** Colorado State Capitol
- **Wrong options:** Legislative Building | Governor's Palace | State House
- **Problem:** The question 'Which state capitol building is located in Denver?' is oddly worded — there is only one state capitol in Denver. The question as phrased is trivial and potentially confusing. It should ask something more meaningful about the Colorado State Capitol.
- **Action:** fix

**[EASY]** What is the primary reason the Arkansas River valley near Canon City is significant geologically?
- **Marked correct:** It exposes ancient rock layers and formations
- **Wrong options:** It contains rare mineral deposits | It is a major earthquake fault line | It has unique fossil beds
- **Fixed wrong options:** It is the site of Colorado's largest gold strike | It is a major earthquake fault line | It contains the state's largest underground cave system
- **Problem:** The wrong answer 'It has unique fossil beds' is arguably also correct — the Canon City area (Fremont County) is in fact famous for significant dinosaur fossil discoveries, including at the Garden Park Fossil Area, which is a legitimate geological significance of the region.
- **Action:** fix

**[EASY]** Which large predator has made a comeback in Colorado's wilderness after near extinction?
- **Marked correct:** Cougar/Mountain Lion
- **Should be:** Gray wolf
- **Wrong options:** Grizzly bear | Timber wolf | Black bear
- **Fixed wrong options:** Grizzly bear | Cougar/Mountain Lion | Bison
- **Problem:** The premise that cougars/mountain lions were 'near extinction' and have 'made a comeback' is inaccurate. Mountain lions were never extirpated from Colorado and did not require reintroduction. Black bears similarly never faced near-extinction in Colorado. The question's premise is factually unsupported for the stated answer.
- **Action:** fix

**[EASY]** Which mountain range dominates the landscape of Colorado Springs?
- **Marked correct:** Rocky Mountains
- **Should be:** Front Range
- **Wrong options:** San Juan Mountains | Front Range | Sangre de Cristo Mountains
- **Fixed wrong options:** San Juan Mountains | Sawatch Range | Sangre de Cristo Mountains
- **Problem:** The 'Front Range' listed as a wrong answer is actually correct — Colorado Springs sits directly along the Front Range of the Rocky Mountains, and that is the specific, accurate geographic term for the range dominating the Colorado Springs landscape. Saying 'Rocky Mountains' is vague and the Front Range is the precise correct answer.
- **Action:** fix

**[EASY]** Which natural landmark in Colorado Springs was formed by volcanic activity and is protected by the federal government?
- **Marked correct:** Garden of the Gods
- **Should be:** Garden of the Gods
- **Wrong options:** Seven Falls | Cheyenne Mountain | Bear Lake
- **Problem:** Garden of the Gods was NOT formed by volcanic activity. The red sandstone formations were created by sedimentary deposition and then uplifted and tilted by tectonic forces — not volcanism. This is a significant factual error in the question itself.
- **Action:** fix

**[EASY]** In what year was the Denver Mint established?
- **Marked correct:** 1862
- **Should be:** 1863
- **Wrong options:** 1859 | 1868 | 1875
- **Fixed wrong options:** 1859 | 1870 | 1878
- **Problem:** The Denver Mint was established in 1863 as an assay office, not 1862. It began coining money in 1906. The explanation also incorrectly states it was established 'during the Colorado Gold Rush' and calls it 'one of the largest gold repositories,' which is a description more fitting of Fort Knox.
- **Action:** fix

**[EASY]** Which Colorado city was a major hub during the Gold Rush of the 1860s?
- **Marked correct:** Denver
- **Wrong options:** Boulder | Leadville | Telluride
- **Problem:** Leadville was also a major hub during Colorado's mining booms (silver in the 1870s-80s, and it had gold activity too). However, Denver is the best answer for the 1860s Gold Rush specifically. The question is defensible but Leadville's inclusion as a wrong answer could be seen as misleading since it was a genuine mining hub, just slightly later. Denver is correct for the 1860s Gold Rush context.
- **Action:** fix

**[EASY]** What is the name of the famous natural rock formation near Colorado Springs that rises 1,385 feet above the surrounding terrain?
- **Marked correct:** Garden of the Gods
- **Wrong options:** Pikes Peak | Kissing Camels | Seven Falls
- **Problem:** Garden of the Gods is a park containing many rock formations, not a single rock formation. The question asks for 'the famous natural rock formation' that rises 1,385 feet — this description does not accurately match Garden of the Gods. Additionally, the 1,385-foot figure is not a well-established measurement for Garden of the Gods. The question conflates the park with a single formation and uses an unverified elevation figure.
- **Action:** fix

**[EASY]** Which fossil fuel was historically the primary industry driving Colorado's economy in the 19th and 20th centuries?
- **Marked correct:** Coal and silver
- **Should be:** Coal
- **Wrong options:** Oil exclusively | Gold exclusively | Uranium
- **Fixed wrong options:** Oil exclusively | Natural gas | Uranium
- **Problem:** The question asks about a 'fossil fuel' but then gives 'Coal and silver' as the correct answer. Silver is not a fossil fuel — it is a precious metal. The question is internally contradictory and the correct answer is factually flawed.
- **Action:** fix

**[EASY]** In what year was Pikes Peak first successfully summited by European settlers?
- **Marked correct:** 1820
- **Should be:** 1820
- **Wrong options:** 1805 | 1835 | 1841
- **Problem:** Pikes Peak was first summited by Dr. Edwin James (a botanist on Stephen Long's expedition) in 1820, not by Stephen Long himself. The mountain was named after Zebulon Pike, not the expedition leader Stephen Long. The explanation incorrectly states it was named after the expedition leader.
- **Action:** fix

**[EASY]** Which ski resort in Colorado is located nearest to Denver?
- **Marked correct:** Winter Park
- **Should be:** Loveland Ski Area
- **Wrong options:** Vail | Aspen | Telluride
- **Fixed wrong options:** Vail | Aspen | Telluride
- **Problem:** Arapahoe Basin and Loveland Ski Area are both closer to Denver than Winter Park by driving distance (~60-70 minutes vs ~90 minutes). Winter Park is not the closest major ski resort to Denver by driving distance.
- **Action:** fix

**[EASY]** In what year did the Ute Indians sign the Treaty of 1868, which moved them from much of Colorado?
- **Marked correct:** 1868
- **Should be:** 1868
- **Wrong options:** 1863 | 1872 | 1875
- **Problem:** The question asks what year the Treaty of 1868 was signed, and the answer is 1868 — but this is a tautological question (the year is in the treaty's name). More importantly, the Treaty of 1868 (Brunot Agreement came later; the 1868 treaty was the Kit Carson Treaty) established a large Ute reservation but did not immediately move Utes from 'much of Colorado.' The major removal came with the 1880 Ute Removal after the Meeker Massacre. The question and explanation conflate different treaties.
- **Action:** fix

**[EASY]** In what year was the first ski lift installed in Colorado?
- **Marked correct:** 1936
- **Wrong options:** 1932 | 1941 | 1945
- **Problem:** Colorado's first ski lift is generally credited to Berthoud Pass (1937) or Hot Sulphur Springs, not Howelson Hill in 1936. Howelson Hill in Steamboat Springs is one of the oldest ski areas in Colorado but the claim it had the first ski lift in 1936 is not well-established and conflicts with other sources. This specific claim is factually uncertain.
- **Action:** fix

**[EASY]** Which mountain pass near Denver is the highest continuously paved highway pass in North America?
- **Marked correct:** Mount Evans Scenic Byway
- **Should be:** Trail Ridge Road
- **Wrong options:** Trail Ridge Road | Monarch Pass | Hoosier Pass
- **Fixed wrong options:** Mount Evans Scenic Byway | Monarch Pass | Hoosier Pass
- **Problem:** The Mount Evans Scenic Byway is the highest paved road in North America (14,130 ft), but it is not a 'pass' — it is a dead-end summit road. The question asks for the highest continuously paved highway PASS, which is actually Trail Ridge Road (12,183 ft at its highest point) as the highest continuous paved highway, or more precisely Independence Pass or others. However, the question conflates 'pass' with 'summit road.' Trail Ridge Road is commonly cited as the highest continuous paved highway in North America at ~12,183 ft, while Mount Evans is higher but a dead-end spur, not a pass. The question's wording ('highway pass') and the answer are inconsistent.
- **Action:** fix

**[MEDIUM]** Which national monument near Colorado Springs was designated by Theodore Roosevelt?
- **Marked correct:** Garden of the Gods
- **Should be:** Garden of the Gods
- **Wrong options:** Great Sand Dunes | Black Canyon of the Gunnison | Dinosaur National Monument
- **Problem:** Garden of the Gods was never designated a national monument. It is a City of Colorado Springs public park. Roosevelt did sign a proclamation in 1909 related to it, but it is not a national monument — the question's premise and framing are misleading and factually incorrect.
- **Action:** fix

**[MEDIUM]** Which ski resort near Denver hosted the 2002 Winter Olympics?
- **Marked correct:** None—Colorado hosted no Winter Olympics
- **Should be:** None — Colorado has never hosted the Winter Olympics
- **Wrong options:** Vail | Breckenridge | Winter Park
- **Problem:** The question asks which ski resort 'near Denver' hosted the 2002 Winter Olympics, which is a confusingly structured question. The correct answer 'None' is technically right, but the question format is unusual and potentially confusing. The explanation is sound but the question structure is problematic as a trivia item.
- **Action:** fix

**[MEDIUM]** Which large mammal species is native to the Royal Gorge region and still inhabits it today?
- **Marked correct:** Bighorn sheep
- **Should be:** Bighorn sheep
- **Wrong options:** Grizzly bears | Moose | Pronghorn antelope
- **Fixed wrong options:** Grizzly bears | Moose | Bison
- **Problem:** Pronghorn antelope do inhabit areas of southern Colorado including regions near the Royal Gorge, making this a potentially correct answer alongside bighorn sheep, which contaminates the wrong answers.
- **Action:** fix

**[MEDIUM]** How many 14,000-foot peaks (fourteeners) does Colorado have?
- **Marked correct:** 53
- **Should be:** 53
- **Wrong options:** 47 | 61 | 58
- **Problem:** The number of Colorado fourteeners is disputed depending on methodology. The commonly cited figure is 53 'official' peaks by some counts, but other counts (e.g., those using a 300-foot prominence rule) yield 58. The most widely accepted official count by Colorado Mountain Club is 53, so the answer is defensible but the explanation should acknowledge this.
- **Action:** fix

**[MEDIUM]** Which famous landmark in Colorado Springs is carved into a mountainside and depicts four U.S. presidents?
- **Marked correct:** Mount Rushmore
- **Wrong options:** Cheyenne Mountain | Manitou Springs Monument | Red Rock Park
- **Problem:** This question is fundamentally flawed. It asks about a 'famous landmark in Colorado Springs' but then lists Mount Rushmore as the correct answer, which is in South Dakota, not Colorado Springs. The explanation acknowledges this confusion but the question is still nonsensical and misleading as a trivia item.
- **Action:** delete

**[MEDIUM]** What is the name of the geological formation that creates the dramatic red rocks in the Garden of the Gods?
- **Marked correct:** Kissing Camels Formation
- **Should be:** Fountain Formation
- **Wrong options:** Manitou Formation | Pikes Peak Granite | Cathedral Spires
- **Fixed wrong options:** Morrison Formation | Pikes Peak Granite | Niobrara Formation
- **Problem:** The 'Kissing Camels Formation' is a name for a specific rock feature (a balanced rock formation) in Garden of the Gods, not the name of the geological formation that creates the red rocks. The red rocks are primarily composed of the Fountain Formation (Permian-age red sandstone and conglomerate).
- **Action:** fix

**[MEDIUM]** In what year did Canon City become an important stop on the Santa Fe Trail?
- **Marked correct:** 1862
- **Wrong options:** 1845 | 1875 | 1858
- **Problem:** Canon City was not on the Santa Fe Trail. The Santa Fe Trail ran through southeastern Colorado via La Junta and Trinidad, not through Canon City. The claim that Canon City became an 'important stop on the Santa Fe Trail' in 1862 is not supported by historical records.
- **Action:** delete

**[MEDIUM]** Which Colorado Springs attraction features thousands of fossils and dinosaur remains?
- **Marked correct:** The Cheyenne Mountain Zoo
- **Wrong options:** Garden of the Gods Museum | Manitou Cliff Dwellings | The Colorado Springs Pioneers Museum
- **Problem:** The Cheyenne Mountain Zoo does not feature 'thousands of fossils and dinosaur remains' as its primary attraction — it is a conventional zoo. The explanation itself contradicts the question. No well-known Colorado Springs attraction is primarily known for featuring thousands of fossils and dinosaur remains.
- **Action:** delete

**[MEDIUM]** Which Colorado ski resort is known as the 'Vail of the West Slope'?
- **Marked correct:** Powderhorn
- **Wrong options:** Sunlight Mountain | Purgatory | Telluride
- **Problem:** The claim that Powderhorn is known as the 'Vail of the West Slope' is not a verifiable or well-established nickname. Telluride or Aspen would more commonly carry comparisons to Vail. This appears to be an invented or unverifiable 'fact.'
- **Action:** delete

**[MEDIUM]** In what decade did Denver's population exceed 100,000 residents?
- **Marked correct:** 1890s
- **Should be:** 1880s
- **Wrong options:** 1870s | 1910s | 1880s
- **Fixed wrong options:** 1870s | 1910s | 1900s
- **Problem:** Denver's population exceeded 100,000 in the 1880s, not the 1890s. The 1880 census recorded Denver at about 35,000, but by 1890 it had reached approximately 106,713, meaning it crossed 100,000 during the 1880s decade.
- **Action:** fix

**[MEDIUM]** Which large predator species has made a comeback in Colorado after being nearly extirpated?
- **Marked correct:** Mountain lions
- **Should be:** Mountain lions
- **Wrong options:** Gray wolves | Grizzly bears | Black-footed ferrets
- **Fixed wrong options:** Grizzly bears | Black-footed ferrets | Wolverines
- **Problem:** Gray wolves have been reintroduced into Colorado starting in 2023, making 'Gray wolves' a correct answer to the question about large predators making a comeback after near-extirpation, which contaminates the wrong answers.
- **Action:** fix

**[MEDIUM]** What geological process created the distinctive narrow canyon that is the Royal Gorge?
- **Marked correct:** River erosion by the Arkansas River over millions of years
- **Wrong options:** Glacial carving during the ice age | Tectonic plate movement and faulting | Groundwater dissolution of limestone
- **Problem:** The explanation states the gorge was carved over 'approximately 300 million years' which is not well-supported; the Precambrian rocks are ancient but the canyon carving is estimated at a few million years, not 300 million. The correct answer itself is fine, but the explanation contains a misleading/incorrect figure.
- **Action:** fix

**[MEDIUM]** Which famous Denver neighborhood is known for its Victorian mansions and tree-lined streets?
- **Marked correct:** Capitol Hill
- **Wrong options:** Five Points | RiNo | Highlands
- **Problem:** While Capitol Hill does have notable Victorian architecture, the Highlands neighborhood is also well-known for Victorian mansions and tree-lined streets, making this question potentially ambiguous.
- **Action:** fix

**[MEDIUM]** What is the name of the native Colorado trout species found in high-altitude streams?
- **Marked correct:** Colorado River cutthroat trout
- **Should be:** Greenback cutthroat trout
- **Wrong options:** Mountain brook trout | Rocky Mountain rainbow trout | Pikes Peak whitefish
- **Problem:** The Colorado River cutthroat trout is native to the Colorado River basin, not typically described as a 'high-altitude streams' species. The Greenback cutthroat trout is the subspecies native to Colorado's high-altitude Front Range streams and is the state fish of Colorado.
- **Action:** fix

**[MEDIUM]** In what year did the Denver & Rio Grande Western Railroad complete its line to Pueblo?
- **Marked correct:** 1876
- **Should be:** 1872
- **Wrong options:** 1872 | 1880 | 1868
- **Fixed wrong options:** 1876 | 1880 | 1868
- **Problem:** The Denver & Rio Grande Railroad reached Pueblo in 1872, not 1876. The D&RG was founded in 1870 and reached Pueblo by 1872.
- **Action:** fix

**[MEDIUM]** What mineral is Pueblo known for producing in large quantities during the late 1800s and early 1900s?
- **Marked correct:** Coal
- **Should be:** Steel
- **Wrong options:** Iron ore | Copper | Salt
- **Fixed wrong options:** Coal | Copper | Salt
- **Problem:** Pueblo is historically famous for steel production, not coal mining. While coal was used to fuel the steel mills, Pueblo is known as a steel-producing city, not a coal-producing region. The coal came from surrounding areas like Trinidad and Walsenburg.
- **Action:** fix

**[MEDIUM]** Which scenic byway connects Denver to the Royal Gorge region and passes through historic mining towns?
- **Marked correct:** U.S. Route 50
- **Should be:** U.S. Route 50
- **Wrong options:** U.S. Route 285 | U.S. Route 24 | Colorado State Route 115
- **Problem:** U.S. Route 50 does not connect Denver to the Royal Gorge; it runs east-west through Canon City and the Royal Gorge area but does not originate in Denver. The route that connects Denver south toward Canon City is more accurately U.S. Route 50 via Pueblo, or travelers use I-25 south then US-50 west. Additionally, 'Loneliest Road' is the Nevada designation for US-50, not Colorado.
- **Action:** fix

**[MEDIUM]** What natural phenomenon occurs annually at Garden of the Gods near the spring and fall equinoxes?
- **Marked correct:** Alignment of sunlight with rock formations creates distinct shadows and lighting effects
- **Wrong options:** Magnetic anomalies attract migratory birds | Thermal vents warm the rocks | Atmospheric conditions create specific auroras
- **Problem:** There is no well-documented or widely recognized annual phenomenon of equinox sun alignment creating distinct effects at Garden of the Gods in the way described. This appears to be an unverified or overstated claim not grounded in established fact.
- **Action:** fix

**[MEDIUM]** What is the primary gemstone found in Colorado that is also the state mineral?
- **Marked correct:** Aquamarine
- **Should be:** Rhodochrosite
- **Wrong options:** Turquoise | Rhodochrosite | Tourmaline
- **Fixed wrong options:** Turquoise | Aquamarine | Tourmaline
- **Problem:** Aquamarine is Colorado's state gemstone, not state mineral. Colorado's state mineral is rhodochrosite. The question conflates the two designations.
- **Action:** fix

**[MEDIUM]** Which city in the Royal Gorge region is known as the 'Pottery Capital of the United States'?
- **Marked correct:** Pueblo
- **Wrong options:** Canon City | Trinidad | Salida
- **Problem:** Pueblo is not known as the 'Pottery Capital of the United States.' This claim is not verifiable and appears to be fabricated. Pueblo is historically known as a steel city.
- **Action:** fix

**[MEDIUM]** Which ski resort near Denver is known for hosting the U.S. Ski Team?
- **Marked correct:** Copper Mountain
- **Wrong options:** Keystone | Loveland | Winter Park
- **Problem:** The U.S. Ski Team's primary training center is in Park City, Utah (Utah Olympic Park). Copper Mountain has hosted U.S. Ski Team events and training camps but is not definitively 'the' home training facility. Winter Park has a stronger historical association with ski racing development in Colorado.
- **Action:** fix

**[MEDIUM]** What is the name of the large state park surrounding the Royal Gorge Bridge?
- **Marked correct:** Royal Gorge Bridge and Park
- **Should be:** Royal Gorge Bridge and Park
- **Wrong options:** Royal Gorge State Park | Canon City Regional Park | Arkansas Gorge National Park
- **Problem:** Royal Gorge Bridge and Park is a privately operated amusement park/attraction, not a state park. The question incorrectly frames it as a 'state park.'
- **Action:** fix

**[MEDIUM]** Which mountain range contains most of Colorado's highest peaks?
- **Marked correct:** Rocky Mountains
- **Should be:** Sawatch Range
- **Wrong options:** Front Range | Sangre de Cristo Range | San Juan Mountains
- **Fixed wrong options:** Front Range | Sangre de Cristo Range | San Juan Mountains
- **Problem:** The question asks which range contains 'most of Colorado's highest peaks' but then the explanation contradicts itself by noting the Sawatch Range (a subset of the Rockies) holds the tallest. The Front Range and Sangre de Cristo are also technically part of the Rocky Mountains, making 'Rocky Mountains' a trivially broad answer.
- **Action:** fix

**[MEDIUM]** Which native Colorado wildlife species is featured on the state flag?
- **Marked correct:** Rocky Mountain bighorn sheep
- **Wrong options:** Mule deer | American bison | Gray wolf
- **Problem:** The Colorado state flag does NOT feature any wildlife species. It has a red C, a gold disk, and blue and white stripes. The question premise is false.
- **Action:** fix

**[MEDIUM]** Which pass through the Rocky Mountains near Denver is the highest continuous highway pass in North America?
- **Marked correct:** Mount Evans
- **Should be:** Trail Ridge Road
- **Wrong options:** Trail Ridge Pass | Loveland Pass | Independence Pass
- **Fixed wrong options:** Mount Evans Road | Loveland Pass | Independence Pass
- **Problem:** Mount Evans road is not the highest continuous highway pass in North America — that distinction belongs to Trail Ridge Road (not 'Trail Ridge Pass') at 12,183 feet as the highest paved through-highway, while the Mount Evans road is a dead-end spur road, not a pass. Additionally, the answer lists 'Trail Ridge Pass' as a wrong answer, but Trail Ridge Road is the actual record holder, making the correct answer wrong and the wrong answer contaminated.
- **Action:** fix

**[MEDIUM]** What major outdoor recreation activity has made Colorado Springs famous worldwide?
- **Marked correct:** Rock climbing and mountaineering
- **Wrong options:** Whitewater rafting | Hot spring bathing | Horseback riding
- **Problem:** Colorado Springs is more broadly famous for military installations (NORAD, Air Force Academy), Pikes Peak, and Garden of the Gods tourism. Claiming rock climbing and mountaineering made it 'famous worldwide' is a stretch and the question is ambiguous about what activity truly defines its worldwide fame.
- **Action:** fix

**[MEDIUM]** Which U.S. President's summer residence is located near Colorado Springs?
- **Marked correct:** The question contains a premise error - no sitting president's residence is there
- **Wrong options:** Franklin D. Roosevelt | Theodore Roosevelt | Harry Truman
- **Problem:** The question format is broken — the 'correct answer' is a meta-statement rather than a proper answer, and the 'wrong answers' are all presidents with no correct option. This is not a valid trivia question structure. Also, the Broadmoor resort near Colorado Springs has hosted presidents, and Camp David is the presidential retreat, so the premise needs complete reworking.
- **Action:** fix

**[MEDIUM]** In what year did the United States Air Force Academy open at Colorado Springs?
- **Marked correct:** 1954
- **Should be:** 1958
- **Wrong options:** 1948 | 1960 | 1951
- **Fixed wrong options:** 1948 | 1960 | 1951
- **Problem:** The U.S. Air Force Academy was authorized by Congress in 1954 but did not open (begin classes) until 1955. The permanent campus at Colorado Springs opened in 1958.
- **Action:** fix

**[MEDIUM]** Which geological formation near Denver is known for its distinctive columnar basalt?
- **Marked correct:** Devil's Head
- **Wrong options:** Red Rocks | Garden of the Gods | Castle Rock
- **Problem:** Devil's Head is a fire lookout and granite formation area in the Rampart Range — it is not particularly known for columnar basalt. This claim is not verifiably accurate and appears to be fabricated.
- **Action:** fix

**[MEDIUM]** Which wildlife species, once nearly extinct in Colorado, has been successfully reintroduced to the state?
- **Marked correct:** Gray wolf
- **Should be:** Gray wolf
- **Wrong options:** Mountain lion | Mule deer | American bison
- **Fixed wrong options:** Mountain lion | Mule deer | Black-footed ferret
- **Problem:** Gray wolf is listed as both the correct answer here AND as a wrong answer in Question #1, which creates cross-question inconsistency. More critically, American bison were also reintroduced to Colorado and could be considered a valid answer, causing wrong answer contamination.
- **Action:** fix

**[MEDIUM]** What is the name of the famous natural landmark in Colorado Springs that rises 1,320 feet above the surrounding plain?
- **Marked correct:** Pikes Peak
- **Should be:** Pikes Peak
- **Wrong options:** Mount Cheyenne | Cathedral Spires | Manitou Peak
- **Fixed wrong options:** Mount Cheyenne | Cathedral Spires | Manitou Peak
- **Problem:** The question asks for a landmark that 'rises 1,320 feet above the surrounding plain' but then gives Pikes Peak as the answer. Pikes Peak rises approximately 8,000+ feet above Colorado Springs, not 1,320 feet. The 1,320-foot figure does not accurately describe Pikes Peak's prominence over the plain.
- **Action:** fix

**[MEDIUM]** Which Colorado ski resort is known for its 'Champagne Powder' snow?
- **Marked correct:** Powder Mountain
- **Should be:** Steamboat Springs
- **Wrong options:** Vail | Aspen Mountain | Copper Mountain
- **Fixed wrong options:** Vail | Aspen Mountain | Copper Mountain
- **Problem:** Powder Mountain is located in Utah (near Eden, Utah), not Colorado. The Colorado resort trademarked for 'Champagne Powder' snow is Steamboat Springs.
- **Action:** fix

**[MEDIUM]** Which large mammal is commonly found in the mountain areas surrounding Canon City?
- **Marked correct:** Rocky Mountain bighorn sheep
- **Wrong options:** Moose | Grizzly bear | American bison
- **Fixed wrong options:** Black bear | Grizzly bear | American bison
- **Problem:** Moose are actually found in Colorado, including mountain areas, so listing 'Moose' as a wrong answer is problematic. However, they are not commonly found specifically around Canon City/Royal Gorge region, so the contamination is borderline. More critically, the explanation incorrectly states moose are 'not native to this area' of Colorado — moose do exist in Colorado but are rare in the Canon City area specifically.
- **Action:** fix

**[MEDIUM]** How many miles long is the Royal Gorge?
- **Marked correct:** 10
- **Wrong options:** 15 | 8 | 20
- **Problem:** The length of the Royal Gorge is commonly cited as approximately 10 miles, but some sources cite different lengths depending on what boundaries are used. The answer of 10 miles is the most commonly cited figure and is acceptable, but the question could be clearer.
- **Action:** fix

**[MEDIUM]** What attraction is located at the top of Cheyenne Mountain near Colorado Springs?
- **Marked correct:** The Broadmoor and Cheyenne Mountain Zoo
- **Should be:** Cheyenne Mountain Zoo
- **Wrong options:** Seven Falls | Garden of the Gods | Manitou Cliff Dwellings
- **Problem:** The Broadmoor resort is NOT located at the top of Cheyenne Mountain — it is at the base of Cheyenne Mountain. The Cheyenne Mountain Zoo is on the mountain, but The Broadmoor is a separate resort located at the foot of the mountain. The correct answer should be just 'Cheyenne Mountain Zoo.' Also, the explanation references a 'scenic zoo railway' which is inaccurate — there is no zoo railway; visitors drive or take a shuttle.
- **Action:** fix

**[MEDIUM]** Which historic site in Pueblo relates to the labor movement?
- **Marked correct:** Ludlow Massacre Memorial
- **Should be:** Steelworks Center of the West
- **Wrong options:** Fort Garland | Bent's Old Fort | Sand Creek Massacre Site
- **Fixed wrong options:** Fort Garland | Bent's Old Fort | Sand Creek Massacre Site
- **Problem:** The Ludlow Massacre site is not located in Pueblo — it is located near Trinidad, Colorado, which is approximately 90 miles south of Pueblo. The question asks which historic site 'in Pueblo' relates to the labor movement, but Ludlow is not in Pueblo.
- **Action:** fix

**[MEDIUM]** Which Colorado Springs landmark was built in honor of Katherine Lee Bates' poem?
- **Marked correct:** Pikes Peak
- **Should be:** Pikes Peak
- **Wrong options:** Cheyenne Mountain | Monument Valley Park | Garden of the Gods
- **Problem:** Pikes Peak is not a 'landmark built in honor of' Bates' poem — it is a natural geographic feature that inspired the poem. The question's phrasing 'built in honor of' is factually misleading since Pikes Peak was not built and predates the poem.
- **Action:** fix

**[MEDIUM]** How many 14,000-foot peaks (fourteeners) are located in Colorado?
- **Marked correct:** 53
- **Should be:** 53
- **Wrong options:** 47 | 60 | 58
- **Problem:** The number of Colorado fourteeners is disputed depending on methodology. The most commonly cited figure is 53 by the Colorado Mountain Club's strict prominence criteria, but some counts list 58 or 59 peaks above 14,000 feet. The answer of 53 is widely accepted for 'official' fourteeners but the question should acknowledge this is based on standard criteria.
- **Action:** fix

**[MEDIUM]** What famous outlaw hid in the Hole-in-the-Wall region near the Royal Gorge?
- **Marked correct:** Butch Cassidy
- **Wrong options:** Jesse James | Billy the Kid | Doc Holliday
- **Problem:** The 'Hole-in-the-Wall' hideout associated with Butch Cassidy was located in Wyoming/Montana, not near the Royal Gorge in Colorado. The explanation is vague and does not establish a specific factual connection between Butch Cassidy and the Royal Gorge region. This appears to be an invented or unverifiable local connection.
- **Action:** fix

**[MEDIUM]** In what year did the Manitou Springs area become a popular resort destination?
- **Marked correct:** 1870s-1880s
- **Wrong options:** 1850s-1860s | 1900s-1910s | 1920s-1930s
- **Problem:** Using a date range (1870s-1880s) as a trivia answer is unusual and problematic for a multiple-choice format. All answer options are date ranges, which is acceptable for consistency, but the question is somewhat vague about what specific event marks Manitou Springs 'becoming' a resort destination.
- **Action:** fix

**[MEDIUM]** Which president visited Colorado Springs and stayed at The Broadmoor?
- **Marked correct:** Theodore Roosevelt
- **Wrong options:** William McKinley | Benjamin Harrison | Grover Cleveland
- **Problem:** The Broadmoor hotel opened in 1918, after Theodore Roosevelt's presidency ended in 1909. Roosevelt could not have stayed at The Broadmoor during his presidency. Multiple other presidents (Eisenhower, Nixon, etc.) are better documented guests.
- **Action:** fix

**[MEDIUM]** In what century was the Ancestral Puebloan culture dominant in the Royal Gorge region?
- **Marked correct:** 10th-12th centuries
- **Wrong options:** 6th-8th centuries | 13th-15th centuries | 8th-10th centuries
- **Problem:** The Royal Gorge region is not specifically associated with Ancestral Puebloan dominance in the 10th-12th centuries. Ancestral Puebloans were more prominent in southwestern Colorado (Mesa Verde area). The claim is too specific and not well-supported for the Royal Gorge region specifically.
- **Action:** fix

**[MEDIUM]** Which national monument protects dinosaur fossils near Canon City?
- **Marked correct:** Dinosaur National Monument
- **Wrong options:** Great Sand Dunes National Monument | Colorado National Monument | Florissant Fossil Beds
- **Problem:** The question asks which national monument protects dinosaur fossils near Canon City, but Dinosaur National Monument is not near Canon City — it is in northwestern Colorado/Utah. The correct answer should reference the Garden Park Fossil Area, which is near Canon City, but it is not a national monument. The question is fundamentally flawed.
- **Action:** fix

**[MEDIUM]** Which Native American tribe historically inhabited the area around present-day Colorado Springs?
- **Marked correct:** Ute
- **Wrong options:** Arapaho | Cheyenne | Comanche
- **Problem:** The Arapaho and Cheyenne tribes also historically used and inhabited the Colorado Springs area extensively, and the Comanche ranged through the region as well. The question asks which tribe 'historically inhabited' the area, but multiple tribes have valid claims, making this ambiguous.
- **Action:** fix

**[MEDIUM]** Which ski resort near Denver is known as the largest ski area in Colorado by skiable terrain?
- **Marked correct:** Winter Park
- **Should be:** Vail
- **Wrong options:** Breckenridge | Keystone | Loveland
- **Fixed wrong options:** Winter Park | Breckenridge | Loveland
- **Problem:** Vail, not Winter Park, is generally considered the largest ski area in Colorado by skiable terrain (approximately 5,317 acres). Winter Park is large but not the largest in Colorado.
- **Action:** fix

**[MEDIUM]** Which famous author founded Colorado Springs in 1871?
- **Marked correct:** William Jackson Palmer
- **Should be:** William Jackson Palmer
- **Wrong options:** Zebulon Pike | Kit Carson | John C. Frémont
- **Fixed wrong options:** Zebulon Pike | Kit Carson | John C. Frémont
- **Problem:** William Jackson Palmer was a railroad entrepreneur and general, not a famous author. The explanation correctly calls him a 'railroad magnate' but the question incorrectly labels him a 'famous author.'
- **Action:** fix

**[MEDIUM]** Which national monument is located near Colorado Springs and features dramatic red rock formations?
- **Marked correct:** Garden of the Gods
- **Should be:** Garden of the Gods
- **Wrong options:** Great Sand Dunes | Black Canyon of the Gunnison | Dinosaur National Monument
- **Fixed wrong options:** Great Sand Dunes | Black Canyon of the Gunnison | Dinosaur National Monument
- **Problem:** Garden of the Gods is a city park (managed by Colorado Springs), not a national monument. Calling it a 'national monument' in the question stem is factually incorrect.
- **Action:** fix

**[MEDIUM]** Which large predator is making a comeback in the Colorado Rockies and was reintroduced to the region starting in 1995?
- **Marked correct:** Gray wolf
- **Should be:** Gray wolf
- **Wrong options:** Grizzly bear | Mountain lion | Black bear
- **Fixed wrong options:** Grizzly bear | Mountain lion | Black bear
- **Problem:** Gray wolves were NOT reintroduced to Colorado starting in 1995. The 1995 reintroduction was to Yellowstone National Park and central Idaho. Colorado voters approved wolf reintroduction in 2020, and wolves were reintroduced to Colorado in December 2023.
- **Action:** fix

**[MEDIUM]** What is the primary attraction at the top of Pikes Peak accessible via the Pikes Peak Cog Railway?
- **Marked correct:** Observation platform with 360-degree views
- **Should be:** Observation platform with 360-degree views
- **Wrong options:** Historic mining operation | Mountain goat sanctuary | Alpine zoo
- **Fixed wrong options:** Historic mining operation | Mountain goat sanctuary | Alpine zoo
- **Problem:** The Pikes Peak Cog Railway closed in 2018 for renovations and reopened in 2021, but its current operational status should be verified. Additionally, the summit visitor center was rebuilt and reopened in 2021, so the primary attraction description may need updating.
- **Action:** fix

**[MEDIUM]** Which Colorado Springs attraction features life-sized dinosaur sculptures in a natural landscape?
- **Marked correct:** Dinosaur's Journey
- **Wrong options:** Cheyenne Mountain Zoo | The Broadmoor Nature Center | Manitou Springs
- **Problem:** "Dinosaur's Journey" does not appear to be a verifiable Colorado Springs attraction. The explanation itself contradicts the question by placing it in Pueblo, not Colorado Springs. This question is based on unverifiable or invented facts.
- **Action:** delete

**[MEDIUM]** Which Olympic Winter Games were hosted in Colorado?
- **Marked correct:** 1976 (Innsbruck hosted it, but Denver declined 1976)
- **Should be:** None — Colorado has never hosted the Winter Olympics
- **Wrong options:** 1980 | 1972 | 1984
- **Problem:** The question asks which Olympic Winter Games were hosted in Colorado, but Colorado never hosted any Winter Olympics. The correct answer in the answer field is self-contradictory and nonsensical as a trivia answer. The question should be reframed or deleted; as written the intended fact is that Colorado (Denver) declined to host the 1976 games.
- **Action:** fix

**[MEDIUM]** Which big cat is native to Colorado's mountains and forests?
- **Marked correct:** Mountain lion
- **Should be:** Mountain lion
- **Wrong options:** Jaguar | Leopard | Cougar (alternative name for mountain lion, but correct answer is mountain lion)
- **Fixed wrong options:** Jaguar | Leopard | Cheetah
- **Problem:** "Cougar" is listed as a wrong answer but is scientifically the same animal as a mountain lion (Puma concolor). Listing it as a wrong answer makes the question unfair and factually incorrect.
- **Action:** fix

**[MEDIUM]** Which Native American tribe's reservation borders southern Colorado?
- **Marked correct:** Southern Ute Tribe
- **Should be:** Southern Ute Tribe
- **Wrong options:** Navajo Nation | Apache Reservation | Pueblo of Acoma
- **Fixed wrong options:** Navajo Nation | Apache Reservation | Pueblo of Acoma
- **Problem:** The question asks which tribe's reservation "borders" southern Colorado, but the Southern Ute reservation is actually located within Colorado (in the southwestern corner), not merely bordering it. The Navajo Nation also borders southern Colorado. The question wording is inaccurate.
- **Action:** fix

**[MEDIUM]** Which major Colorado Springs landmark features a seven-story mansion built in 1891?
- **Marked correct:** Miramont Castle
- **Should be:** Miramont Castle
- **Wrong options:** The Broadmoor | Palmer Park | Barker Commons
- **Fixed wrong options:** The Broadmoor | Palmer Park | Barker Commons
- **Problem:** Miramont Castle is located in Manitou Springs, not Colorado Springs, and the question asks about a "Colorado Springs landmark." Additionally, it is described as a nine-room castle with multiple architectural styles rather than a "seven-story mansion." The building has multiple floors but describing it as a seven-story mansion is inaccurate.
- **Action:** fix

**[MEDIUM]** How many fourteeners (peaks over 14,000 feet) are located in Colorado?
- **Marked correct:** 53
- **Should be:** 53
- **Wrong options:** 58 | 47 | 62
- **Fixed wrong options:** 58 | 47 | 62
- **Problem:** The number of Colorado fourteeners is disputed depending on methodology: 53 is one commonly cited count, but 58 is also widely cited (using a less strict prominence requirement). The question should acknowledge the most widely accepted official count.
- **Action:** fix

**[HARD]** Which engineering marvel, completed in 1929, held the title of world's highest suspension bridge for 20 years before being surpassed?
- **Marked correct:** Royal Gorge Bridge
- **Should be:** Royal Gorge Bridge
- **Wrong options:** Golden Gate Bridge | Brooklyn Bridge | Forth Bridge
- **Problem:** The Royal Gorge Bridge held the title for approximately 20 years (1929-1955/1957), but the explanation is internally inconsistent: it says '20 years' in the question but then cites the Mackinac Bridge (1957) as the replacement, which would be ~28 years. Additionally, the Mackinac Bridge is not a 'highest suspension bridge' successor — the Royal Gorge Bridge is measured by height above ground/water, not bridge elevation. The record successor claim is questionable.
- **Action:** fix

**[HARD]** What is the primary ore mineral found in the Cripple Creek mining district, located near Colorado Springs, that fueled the region's gold rush?
- **Marked correct:** Sylvanite
- **Should be:** Calaverite
- **Wrong options:** Chalcopyrite | Galena | Sphalerite
- **Fixed wrong options:** Chalcopyrite | Galena | Sphalerite
- **Problem:** Sylvanite was present at Cripple Creek but was not the dominant or primary ore mineral. The primary gold ore minerals at Cripple Creek were calaverite and other tellurides, with calaverite being more prominent. Calling sylvanite the 'dominant ore mineral' is inaccurate.
- **Action:** fix

**[HARD]** In what year did the Atchison, Topeka and Santa Fe Railway complete its narrow-gauge line through the Royal Gorge, ending a construction race with a rival railroad?
- **Marked correct:** 1878
- **Should be:** 1880
- **Wrong options:** 1876 | 1880 | 1882
- **Fixed wrong options:** 1876 | 1878 | 1882
- **Problem:** The AT&SF did not complete a line through the Royal Gorge — it was the Denver & Rio Grande (D&RG) that ultimately won the right to build through the gorge and completed the line. The AT&SF lost the legal battle and construction race for the Royal Gorge route.
- **Action:** fix

**[HARD]** Which Colorado state penitentiary, located in Pueblo, is known as one of the state's oldest continuously operating correctional facilities?
- **Marked correct:** Colorado State Penitentiary
- **Should be:** Colorado State Penitentiary
- **Wrong options:** Colorado Department of Corrections Facility | Pueblo Correctional Complex | Arkansas Valley Prison
- **Fixed wrong options:** Colorado Department of Corrections Facility | Pueblo Correctional Complex | Arkansas Valley Prison
- **Problem:** The Colorado State Penitentiary is located in Cañon City, not Pueblo. This is a significant factual error about a well-known Colorado institution.
- **Action:** fix

**[HARD]** Which Ancestral Puebloan culture is most closely associated with settlements found in the Pueblo region and surrounding area?
- **Marked correct:** Mogollon
- **Should be:** Ancestral Puebloans
- **Wrong options:** Ancestral Fremont | Hohokam | Mississippian
- **Fixed wrong options:** Mogollon | Hohokam | Mississippian
- **Problem:** The Mogollon culture is primarily associated with southwestern New Mexico and eastern Arizona, not the Pueblo, Colorado region. The Ancestral Puebloans (formerly called Anasazi) are the culture most closely associated with the Pueblo, Colorado area and surrounding southern Colorado region.
- **Action:** fix

**[HARD]** What mountain range, visible from downtown Denver, was named after the Spanish conquistador and is the highest in the Front Range?
- **Marked correct:** Rocky Mountains (specifically the Front Range section near Mount Evans)
- **Wrong options:** San Juan Mountains | Sawatch Range | Sangre de Cristo Range
- **Problem:** The question asks about a mountain range named after a Spanish conquistador that is visible from Denver and is the highest in the Front Range, but the answer given is 'Rocky Mountains (specifically the Front Range section near Mount Evans).' No specific range visible from Denver is named after a Spanish conquistador. The question is internally contradictory and the answer is evasive and not a real range name.
- **Action:** delete

**[HARD]** What is the specific elevation of Pikes Peak, the most visited mountain in North America?
- **Marked correct:** 14,115 feet
- **Should be:** 14,115 feet
- **Wrong options:** 14,080 feet | 14,147 feet | 14,095 feet
- **Problem:** The official elevation of Pikes Peak was resurveyed and updated. The current official USGS elevation is 14,115 feet, which matches the stated answer, but the explanation calls it 'the second-highest peak in the Front Range' — it is actually the highest peak in the Front Range. However, the elevation of 14,115 feet is correct per recent surveys.
- **Action:** fix

**[HARD]** Which historic narrow-gauge railroad, operational since 1887, still connects Pueblo with remote mountain communities in the San Isabel National Forest?
- **Marked correct:** Huerfano and Grand Junction Railroad
- **Wrong options:** Silverton and Durango Railroad | Cripple Creek and Victor Narrow Gauge Railroad | Clear Creek and Boulder Railroad
- **Problem:** The 'Huerfano and Grand Junction Railroad' does not appear to be a real railroad that has operated continuously since 1887 connecting Pueblo to San Isabel National Forest communities. This appears to be an invented railroad name, making the question factually unsupported.
- **Action:** delete

**[HARD]** Which endangered raptor, native to Colorado, is the subject of active reintroduction efforts in the Royal Gorge area?
- **Marked correct:** California condor
- **Should be:** Peregrine falcon
- **Wrong options:** Bald eagle | Peregrine falcon | Golden eagle
- **Fixed wrong options:** Bald eagle | California condor | Osprey
- **Problem:** California condors have not been subject to active reintroduction efforts specifically in the Royal Gorge area. The explanation itself contradicts the question by admitting the peregrine falcon is the most commonly reintroduced large raptor in that region. Peregrine falcons have been actively reintroduced in the Royal Gorge area.
- **Action:** fix

**[HARD]** What is the name of the underground river system discovered in the Glenwood Caverns near Denver that is hydrogeologically significant?
- **Marked correct:** No Name Creek/Roaring Fork tributary system
- **Wrong options:** Bear Creek aquifer | South Platte underground channel | Clear Creek subsurface system
- **Problem:** Glenwood Caverns is located near Glenwood Springs, not near Denver, and the specific underground river system named 'No Name Creek/Roaring Fork tributary system' in the caverns appears to be unverifiable or invented. The question contains multiple questionable claims.
- **Action:** delete

**[HARD]** Which Colorado Springs-based institution, founded in 1891, is the oldest continuously operating zoological park west of the Mississippi River?
- **Marked correct:** Cheyenne Mountain Zoo
- **Should be:** Cheyenne Mountain Zoo
- **Wrong options:** Denver Zoo | Pueblo Zoo | Fort Collins Zoo
- **Fixed wrong options:** Denver Zoo | Pueblo Zoo | Fort Collins Zoo
- **Problem:** The Cheyenne Mountain Zoo was founded in 1926, not 1891. The claim that it is the oldest continuously operating zoo west of the Mississippi is also disputed — the Denver Zoo (founded 1896) predates it in Colorado, and the Cheyenne Mountain Zoo's founding date of 1891 is incorrect.
- **Action:** fix

**[HARD]** In what year did the Broadmoor resort open in Colorado Springs, becoming one of the most prestigious destination hotels in North America?
- **Marked correct:** 1891
- **Should be:** 1918
- **Wrong options:** 1889 | 1893 | 1895
- **Fixed wrong options:** 1910 | 1922 | 1915
- **Problem:** The Broadmoor resort opened in 1918, not 1891. It was developed by Spencer Penrose and opened to guests in June 1918. There was an earlier, smaller Broadmoor Casino built in 1891 by Count Pourtales, but the iconic resort hotel opened in 1918.
- **Action:** fix

**[HARD]** What is the name of the major fault line that runs through the Royal Gorge, creating the geological feature that the Arkansas River exploits?
- **Marked correct:** Penrose-Raton fault zone
- **Wrong options:** Sangre de Cristo fault | Rio Grande rift | Bear Creek fault
- **Problem:** The 'Penrose-Raton fault zone' as a named fault running through the Royal Gorge is not a well-documented or verifiable geological feature by that name. The geological structure of the Royal Gorge is primarily explained by the ancient Precambrian rock and river incision, not this named fault zone.
- **Action:** delete

**[HARD]** Which historic mining town near Denver became famous for its silver bonanzas and was connected to Denver by the Narrow Gauge Central Railroad?
- **Marked correct:** Idaho Springs
- **Should be:** Idaho Springs
- **Wrong options:** Central City | Black Hawk | Nederland
- **Fixed wrong options:** Central City | Black Hawk | Nederland
- **Problem:** Idaho Springs was primarily known for gold mining, not silver bonanzas. Additionally, the railroad connecting it to Denver was the Colorado Central Railroad, not the 'Narrow Gauge Central Railroad.' Central City and Black Hawk (listed as wrong answers) were actually the more famous mining centers in that corridor.
- **Action:** fix

**[HARD]** What is the primary gemstone mineral mined commercially in the Florissant fossil beds area near Colorado Springs?
- **Marked correct:** Petrified wood/opal
- **Should be:** Petrified wood
- **Wrong options:** Tourmaline | Topaz | Smoky quartz
- **Fixed wrong options:** Tourmaline | Topaz | Smoky quartz
- **Problem:** The Florissant Fossil Beds are a national monument, not a commercial mining area, and petrified wood/opal is not commercially mined there. The site is famous for fossilized insects, plants, and petrified redwood stumps preserved in shale — not as a gemstone mining location.
- **Action:** fix

**[HARD]** Which major ski resort near Denver was developed by mining magnate Walter Paepcke and opened in 1946?
- **Marked correct:** Aspen Mountain
- **Should be:** Aspen Mountain
- **Wrong options:** Loveland Ski Area | Winter Park Resort | Monarch Mountain
- **Problem:** Walter Paepcke was a Chicago businessman and arts patron, not a mining magnate. Also, Aspen is roughly 200 miles from Denver — calling it 'near Denver' is a stretch, but more critically the 'mining magnate' descriptor is factually wrong.
- **Action:** fix

**[HARD]** Which Denver-based beer brewery, founded in 1873, is recognized as one of the oldest continuously operating breweries in the United States?
- **Marked correct:** Denver Beer Company
- **Wrong options:** Great Divide Brewing | Odell Brewing Company | Colorado Brewing Company
- **Problem:** Denver Beer Company was founded in 2011, not 1873. The question's premise is factually unsupported — Denver Beer Company is not one of the oldest continuously operating breweries in the US. The explanation itself admits uncertainty, signaling the question is unreliable.
- **Action:** fix

**[HARD]** What geological process created the dramatic tilting of rock layers visible in the Sangre de Cristo Range near Pueblo?
- **Marked correct:** Block faulting during the Rio Grande Rift extension
- **Should be:** Thrust faulting from Laramide compression
- **Wrong options:** Thrust faulting from Laramide compression | Strike-slip motion | Monocline folding
- **Fixed wrong options:** Block faulting during the Rio Grande Rift extension | Strike-slip motion | Monocline folding
- **Problem:** The Sangre de Cristo Range formation involves both Laramide compression (thrust faulting) and later Rio Grande Rift extension (block faulting); the dominant structural control is debated. The tilted layers near Pueblo at the range front are primarily a result of Laramide-era thrust and reverse faulting, making 'block faulting during Rio Grande Rift extension' a contestable answer.
- **Action:** fix

**[HARD]** Which Ancestral Puebloan architectural style, characterized by large communal buildings, is evidenced at Hubbard Ruin near Pueblo?
- **Marked correct:** Pueblo II/III great house
- **Should be:** Pueblo II/III great house
- **Wrong options:** Chaco Canyon great house | Cliff dweller style | Mogollon pit house
- **Fixed wrong options:** Hohokam ball court style | Cliff dweller style | Mogollon pit house
- **Problem:** Hubbard Ruin's specific classification as exhibiting 'Pueblo II/III great house' architecture is not well-documented in mainstream archaeological sources. Additionally, 'Chaco Canyon great house' listed as a wrong answer is actually an architectural style (great house), creating confusion between a place name and an architectural descriptor.
- **Action:** fix

**[HARD]** Which Colorado Springs resident and inventor developed the alternating current system that powered early Denver electrical infrastructure?
- **Marked correct:** Nikola Tesla (who conducted experiments at Pikes Peak area)
- **Should be:** Nikola Tesla (who conducted experiments at Colorado Springs)
- **Wrong options:** Thomas Edison | George Westinghouse | Charles Brush
- **Fixed wrong options:** Thomas Edison | George Westinghouse | Charles Brush
- **Problem:** Tesla was not a 'Colorado Springs resident' — he temporarily worked there in 1899 (not 1891). Also, his AC system powered early Denver infrastructure is a misleading claim; the AC system was developed with Westinghouse well before his Colorado Springs experiments. The question conflates multiple facts inaccurately.
- **Action:** fix

**[HARD]** What is the specific depth of the Royal Gorge at its deepest point relative to the Arkansas River surface?
- **Marked correct:** Approximately 1,053 feet
- **Should be:** Approximately 1,053 feet
- **Wrong options:** Approximately 800 feet | Approximately 1,200 feet | Approximately 900 feet
- **Fixed wrong options:** Approximately 800 feet | Approximately 1,200 feet | Approximately 900 feet
- **Problem:** The Royal Gorge Bridge stands 956 feet above the Arkansas River, while the gorge depth at its deepest point is commonly cited as approximately 1,053 feet. The question asks about gorge depth relative to the river surface, but the explanation conflates bridge height with gorge depth, creating confusion. These are two different measurements.
- **Action:** fix

**[HARD]** In what geological period did the Fountain Formation, prominent in the Garden of the Gods near Colorado Springs, primarily form?
- **Marked correct:** Pennsylvanian
- **Should be:** Pennsylvanian
- **Wrong options:** Permian | Carboniferous | Mississippian
- **Fixed wrong options:** Permian | Devonian | Mississippian
- **Problem:** The Fountain Formation spans both the Pennsylvanian and Permian periods. Listing 'Carboniferous' as a wrong answer is problematic because the Pennsylvanian is a subdivision of the Carboniferous period, making 'Carboniferous' technically also a correct answer in some geological classification systems.
- **Action:** fix

**[HARD]** In what year was the Royal Gorge Bridge completed, making it the highest suspension bridge in the world at that time?
- **Marked correct:** 1929
- **Should be:** 1929
- **Wrong options:** 1925 | 1932 | 1927
- **Fixed wrong options:** 1925 | 1932 | 1927
- **Problem:** The Foresthill Bridge in California did not surpass the Royal Gorge Bridge as the world's highest suspension bridge — the Foresthill Bridge is not a suspension bridge, it is a box girder bridge. The Royal Gorge Bridge was surpassed as highest suspension bridge by other structures, and the comparison in the explanation is factually incorrect.
- **Action:** fix

**[HARD]** Which Colorado governor commissioned the first official geological survey of the state in 1873?
- **Marked correct:** John L. Routt
- **Wrong options:** Frederick Pitkin | James B. Grant | Henry M. Teller
- **Problem:** John L. Routt was not governor in 1873 — Colorado did not become a state until 1876, and Routt was the first state governor (1876–1879). In 1873, Colorado was still a territory. The 1873 geological survey was likely connected to territorial governance, not Governor Routt.
- **Action:** fix

**[HARD]** What endemic plant species is found exclusively in the Manitou Springs area near Colorado Springs?
- **Marked correct:** Thelypodiopsis vaseyana
- **Should be:** Thelypodiopsis vaseyana
- **Wrong options:** Physaria obcordata | Townsendia aprica | Astragalus coccineus
- **Fixed wrong options:** Physaria obcordata | Townsendia aprica | Astragalus coccineus
- **Problem:** Thelypodiopsis vaseyana is not documented as a species endemic exclusively to Manitou Springs in verifiable botanical sources. This appears to be an obscure or potentially fabricated claim that cannot be reliably verified.
- **Action:** fix

**[HARD]** Which ski resort near Denver opened in 1946 as the state's first commercial ski area with gondola access?
- **Marked correct:** Winter Park
- **Wrong options:** Loveland | Berthoud Pass | Echo Mountain
- **Problem:** Winter Park Resort did not open in 1946 — it opened in January 1940. The claim that it was the first Colorado ski area with gondola access in 1946 is also unsupported; Winter Park's first gondola was added much later. The explanation also incorrectly calls it 'Parco Ski Area.'
- **Action:** fix

**[HARD]** What is the name of the hogback formation visible from Interstate 25 between Denver and Colorado Springs that dips at approximately 70 degrees?
- **Marked correct:** Castle Rock Hogback
- **Wrong options:** Monument Valley Hogback | Palmer Divide Ridge | Black Forest Escarpment
- **Problem:** The 'Castle Rock Hogback' is not a well-documented named geological feature in standard geological references. The prominent hogback visible along I-25 between Denver and Colorado Springs is more commonly associated with the Dakota Hogback or other named formations, not specifically 'Castle Rock Hogback.'
- **Action:** fix

**[HARD]** What limestone cave near Manitou Springs was first commercially developed in 1873 and remains one of the oldest tourist attractions in Colorado?
- **Marked correct:** Manitou Cliff Dwellings
- **Should be:** Cave of the Winds
- **Wrong options:** Garden of the Gods Cave | Woodland Park Caverns | Bear Lake Cave
- **Fixed wrong options:** Manitou Cliff Dwellings | Pikes Peak Cave | Bear Lake Cave
- **Problem:** The Manitou Cliff Dwellings are not a limestone cave, and they were not 'first commercially developed in 1873.' The Manitou Cliff Dwellings were actually assembled from relocated ruins around 1906. The correct answer should be Manitou Cave (also known as Cave of the Winds' predecessor), but Cave of the Winds near Manitou Springs is the historically significant cave tourist attraction. The question and answer are mismatched.
- **Action:** fix

**[HARD]** Which mountain pass between Denver and the western slope opened in 1823 and became crucial to early fur trade routes?
- **Marked correct:** South Park/Ute Pass
- **Wrong options:** Guanella Pass | Monarch Pass | Vail Pass
- **Problem:** No verifiable evidence that a mountain pass between Denver and the western slope 'opened in 1823' with the specific name 'South Park/Ute Pass.' Ute Pass is near Colorado Springs, not between Denver and the western slope, and the specific 1823 date and details are unverifiable.
- **Action:** delete

**[HARD]** Which Denver-area Ancestral Puebloan archaeological site, designated a National Historic Landmark, predates 1100 CE?
- **Marked correct:** Bear Creek Pueblo
- **Wrong options:** Sand Creek Historic Site | Cherry Creek Village | South Platte Settlement
- **Problem:** 'Bear Creek Pueblo' as a National Historic Landmark Ancestral Puebloan site near Denver predating 1100 CE is not verifiable. Ancestral Puebloan sites are predominantly in southwestern Colorado, not the Denver Front Range area.
- **Action:** delete

**[HARD]** How many officially recognized peaks exceed 14,000 feet in elevation within a 100-mile radius of Denver?
- **Marked correct:** 28
- **Wrong options:** 31 | 24 | 35
- **Problem:** The claim of exactly 28 fourteeners within a 100-mile radius of Denver is unverified and likely inaccurate; many Colorado fourteeners are more than 100 miles from Denver. The specific number is not reliably sourced.
- **Action:** delete

**[HARD]** What is the oldest continuously operating cultural institution in Denver, founded in 1893?
- **Marked correct:** Denver Art Museum
- **Wrong options:** Colorado History Museum | Cheyenne and Arapaho Museum | Natural History Museum
- **Problem:** The Denver Art Museum traces its origins to the Denver Artists' Club founded in 1893, but the Denver Museum of Nature and Science (founded 1900) and Colorado Historical Society (founded 1879) may predate it as cultural institutions. Furthermore, the founding year of 1893 for the DAM is debatable, and calling it the 'oldest continuously operating cultural institution' is contested.
- **Action:** fix

**[HARD]** Which Colorado Springs tourist attraction was built by Spencer Penrose in 1916 and features a 3.9-mile hillclimb road?
- **Marked correct:** Pikes Peak Highway
- **Should be:** Pikes Peak Highway
- **Wrong options:** Garden of the Gods Park | Cheyenne Mountain Zoo | The Broadmoor Resort
- **Problem:** The Pikes Peak Highway is approximately 19 miles long, not 3.9 miles. The question's claim of a '3.9-mile hillclimb road' is factually incorrect.
- **Action:** fix

**[HARD]** What species of bighorn sheep, named after a nearby location, inhabits the Royal Gorge cliffs?
- **Marked correct:** Rocky Mountain Bighorn Sheep
- **Should be:** Rocky Mountain Bighorn Sheep
- **Wrong options:** Desert Bighorn Sheep | California Bighorn Sheep | Dall Sheep
- **Problem:** The question asks for a species 'named after a nearby location,' but Rocky Mountain Bighorn Sheep are not named after a location near the Royal Gorge. The question premise is misleading and the phrasing is confusing.
- **Action:** fix

**[HARD]** In what year did the Canon City coal mining industry reach its peak production before declining in the late 20th century?
- **Marked correct:** 1907
- **Wrong options:** 1912 | 1920 | 1898
- **Problem:** The specific claim that Canon City coal mining peaked in 1907 is not well-documented or verifiable. Canon City was not a major coal mining center comparable to Trinidad or Walsenburg, and this specific peak year claim lacks reliable sourcing.
- **Action:** delete

**[HARD]** What is the traditional Ute name for Pikes Peak, which was officially recognized by Colorado in 2020?
- **Marked correct:** Tavaksi
- **Wrong options:** Cheyenne Peak | Sun Mountain | Cloud Peak
- **Problem:** The Ute name 'Tavaksi' for Pikes Peak and its official recognition by Colorado in 2020 is not verifiably documented. The commonly cited Ute name for Pikes Peak is 'Tava' (meaning sun) or 'Tava-kaav-vene,' making 'Tavaksi' and the specific 2020 recognition unverifiable.
- **Action:** delete

**[HARD]** Which Denver-based brewery, founded in 1994, is credited with pioneering the modern craft beer movement in Colorado?
- **Marked correct:** Great Divide Brewing Company
- **Should be:** Great Divide Brewing Company
- **Wrong options:** Rocky Mountain Brewing | Colorado Brewing Company | Boulder Brewing Company
- **Problem:** The claim that Great Divide 'pioneered the modern craft beer movement in Colorado' is disputed. Odell Brewing and New Belgium (both founded 1989-1991) and Boulder Beer Company (founded 1979) predate Great Divide and have stronger claims to pioneering Colorado craft beer.
- **Action:** fix

**[HARD]** Which mammal species, native to the Royal Gorge region, was nearly extinct in Colorado by 1950 but has since recovered?
- **Marked correct:** Black Bear
- **Wrong options:** Mountain Lion | Mule Deer | Rocky Mountain Elk
- **Problem:** Black bears were not 'nearly extinct in Colorado by 1950' nor were they subject to 'reintroduction' programs. Black bear populations declined but were never extirpated from Colorado and did not require reintroduction, unlike species such as lynx or gray wolves.
- **Action:** delete

**[HARD]** What is the specific name of the Ancestral Puebloan culture that inhabited the Pueblo region approximately 700-1400 CE?
- **Marked correct:** Mogollon
- **Should be:** Ancestral Puebloan
- **Wrong options:** Fremont | Hohokam | Anasazi
- **Fixed wrong options:** Mogollon | Hohokam | Fremont
- **Problem:** The Mogollon culture was centered in southwestern New Mexico and southeastern Arizona, not in the Pueblo, Colorado region. The Pueblo region of Colorado (700-1400 CE) was primarily inhabited by Ancestral Puebloans (formerly called Anasazi), making 'Anasazi' or 'Ancestral Puebloan' the correct answer, not Mogollon.
- **Action:** fix

**[HARD]** Which Denver neighborhood, founded as a mining camp in the 1870s, is now known for its Victorian-era architecture and microbreweries?
- **Marked correct:** South Pearl Street/Baker District
- **Wrong options:** RiNo District | River North | Santa Fe Arts District
- **Problem:** The Baker District/South Pearl Street area in Denver being 'founded as a mining camp in the 1870s' is not accurately documented. Baker was a residential neighborhood, and the specific historical claim about mining camp origins is not verifiable.
- **Action:** delete

**[HARD]** Which Colorado Springs military installation, established in 1942, is the most significant employer in the region?
- **Marked correct:** United States Air Force Academy
- **Should be:** Fort Carson
- **Wrong options:** Fort Carson | Cheyenne Mountain Space Operations Center | Peterson Space Force Base
- **Fixed wrong options:** United States Air Force Academy | Cheyenne Mountain Space Operations Center | Peterson Space Force Base
- **Problem:** The U.S. Air Force Academy was established in 1954 (authorized 1954, first class 1955), not 1942. Additionally, Fort Carson is widely considered the largest employer in the Colorado Springs region, not the Air Force Academy.
- **Action:** fix

**[HARD]** What was the original name of Denver when it was founded as a mining settlement in 1858?
- **Marked correct:** St. Charles
- **Should be:** Auraria
- **Wrong options:** Auraria | Cherry Creek | Fort St. Vrain
- **Fixed wrong options:** St. Charles | Cherry Creek | Fort St. Vrain
- **Problem:** Denver's original settlement was actually called 'Auraria' and 'St. Charles' was a competing claim that was quickly superseded. More accurately, the town that became Denver was platted as 'Denver City' in November 1858 by General William Larimer, while Auraria was the earlier adjacent settlement. St. Charles was a prior claim on the same site before Larimer's party renamed it.
- **Action:** fix

**[HARD]** In what year did the Denver Union Station, designed by architects Burnham and Company, open to the public?
- **Marked correct:** 1881
- **Should be:** 1914
- **Wrong options:** 1888 | 1875 | 1884
- **Fixed wrong options:** 1881 | 1906 | 1920
- **Problem:** Denver Union Station was not designed by 'Burnham and Company' and did not open in 1881. The current Denver Union Station building opened in 1914, designed by the Denver architectural firm Gove & Walsh. A previous depot existed on that site from 1881, but it burned down. The 1914 building is the one recognized as Denver Union Station.
- **Action:** fix

**[HARD]** What is the minimum elevation gain required to climb from the Royal Gorge Bridge parking area to the rim of the canyon?
- **Marked correct:** 800+ feet
- **Wrong options:** 400 feet | 1,200 feet | 600 feet
- **Problem:** The Royal Gorge Bridge is situated at the rim of the canyon, not below it — visitors park at the rim level and walk onto the bridge. There is no standard hiking route from a parking area requiring 800+ feet of elevation gain to reach the rim. This question is based on a faulty premise.
- **Action:** delete

**[HARD]** In what year was the Royal Gorge Bridge constructed, making it the world's highest suspension bridge at the time?
- **Marked correct:** 1929
- **Should be:** 1929
- **Wrong options:** 1927 | 1931 | 1925
- **Fixed wrong options:** 1927 | 1931 | 1925
- **Problem:** The Royal Gorge Bridge spans approximately 1,260 feet across the gorge, but its height above the Arkansas River is approximately 955 feet, not the span distance. More importantly, the bridge lost its 'world's highest suspension bridge' record long before 1973; the Royal Gorge Bridge is a vehicular bridge, not technically classified as a suspension bridge in the engineering sense. The height figure of 955 feet is correct. The 1929 date is accurate.
- **Action:** fix

**[HARD]** Which Colorado state fossil, discovered extensively in the Western Interior Seaway deposits near Pueblo, is a marine reptile?
- **Marked correct:** Plesiosaur
- **Should be:** Stegosaurus
- **Wrong options:** Allosaurus | Stegosaurus | Tyrannosaurus rex
- **Fixed wrong options:** Plesiosaur | Allosaurus | Tyrannosaurus rex
- **Problem:** Colorado's state fossil is Stegosaurus, not the plesiosaur. Stegosaurus was designated Colorado's state fossil in 1982. The plesiosaur is not Colorado's state fossil.
- **Action:** fix

**[HARD]** Which silver mining boom of the late 1800s directly led to the rapid growth of Pueblo as an industrial center?
- **Marked correct:** The Leadville silver rush and subsequent iron ore processing
- **Should be:** The Leadville silver rush and subsequent iron ore processing
- **Wrong options:** The Cripple Creek gold mining district expansion | The Central City mining operations | The Georgetown silver extraction
- **Fixed wrong options:** The Cripple Creek gold mining district expansion | The Central City mining operations | The Georgetown silver extraction
- **Problem:** Pueblo's industrial growth was driven more by steel production tied to coal from Trinidad/Walsenburg and iron ore, with Leadville silver being a contributing but not the sole or necessarily primary driver. The answer conflates silver rush economics with iron ore processing in a way that is historically imprecise and potentially misleading.
- **Action:** fix

**[HARD]** In what year did the Denver Mint begin operations, and which precious metal does it primarily refine for circulation?
- **Marked correct:** 1862; gold and silver
- **Should be:** 1863; gold and silver (assay office)
- **Wrong options:** 1870; gold only | 1859; silver only | 1875; gold and copper
- **Fixed wrong options:** 1870; gold only | 1859; silver only | 1875; gold and copper
- **Problem:** The Denver Mint began operations as an assay office in 1863, not 1862. It was designated a branch mint in 1906. The answer '1862; gold and silver' is inaccurate on the start date. Additionally, the modern mint produces circulating coins from base metals (clad coinage), not primarily gold and silver.
- **Action:** fix

**[HARD]** Which major wildlife species, once extirpated from Colorado, has been successfully reintroduced to the Royal Gorge Region and Front Range?
- **Marked correct:** Rocky Mountain bighorn sheep
- **Should be:** Rocky Mountain bighorn sheep
- **Wrong options:** Gray wolves | Grizzly bears | American bison
- **Fixed wrong options:** Grizzly bears | American bison | Black-footed ferret
- **Problem:** Gray wolves have in fact been reintroduced to Colorado — Proposition 114 passed in 2020 and wolves were reintroduced to Colorado in December 2023. The explanation incorrectly states gray wolves have not been officially reintroduced, and listing 'Gray wolves' as a wrong answer is now incorrect.
- **Action:** fix

**[HARD]** In what year did the Sand Creek Massacre occur near Pueblo, an event that profoundly shaped Colorado's relationship with Native American tribes?
- **Marked correct:** 1864
- **Should be:** 1864
- **Wrong options:** 1862 | 1866 | 1868
- **Fixed wrong options:** 1862 | 1866 | 1868
- **Problem:** The Sand Creek Massacre occurred near present-day Eads in Kiowa County (southeastern Colorado), not near Pueblo. The question's geographic claim is incorrect.
- **Action:** fix

**[HARD]** What geological epoch characterizes the recent surface deposits and alluvial systems of the Arkansas River valley near Canon City?
- **Marked correct:** Holocene
- **Should be:** Holocene
- **Wrong options:** Pleistocene | Pliocene | Miocene
- **Fixed wrong options:** Pleistocene | Pliocene | Miocene
- **Problem:** The Pleistocene epoch also contributed significantly to the Arkansas River valley's deposits and terraces near Canon City. Recent surface deposits could reasonably be described as either Holocene or late Pleistocene, making the question somewhat ambiguous, though Holocene is the best answer for 'recent surface deposits.'
- **Action:** fix

**[HARD]** Which Colorado Springs attraction, opened in 1871, is one of the oldest continuously operated amusement venues in the United States?
- **Marked correct:** Manitou Springs (the town and its mineral springs)
- **Should be:** Manitou Springs mineral springs resort
- **Wrong options:** Seven Falls | The Cheyenne Mountain Zoo | Garden of the Gods (commercial operations)
- **Fixed wrong options:** Seven Falls | The Cheyenne Mountain Zoo | Cave of the Winds
- **Problem:** Describing 'Manitou Springs (the town and its mineral springs)' as an 'amusement venue' is inaccurate — it is a town and resort area, not an amusement venue. The question asks about an 'amusement venue' but the answer is a town, creating a category mismatch. The 1871 founding date for Manitou Springs as a resort town is approximately correct.
- **Action:** fix

**[HARD]** Which major ponderosa pine forest ecosystem type dominates the foothills surrounding the Royal Gorge and Canon City region?
- **Marked correct:** Ponderosa pine-Douglas fir transition woodland
- **Should be:** Piñon-juniper woodland
- **Wrong options:** Subalpine spruce-fir forest | Piñon-juniper woodland | Gambel oak scrubland
- **Fixed wrong options:** Subalpine spruce-fir forest | Ponderosa pine-Douglas fir transition woodland | Gambel oak scrubland
- **Problem:** The Canon City area foothills at lower elevations are more typically characterized by piñon-juniper woodland rather than ponderosa pine-Douglas fir transition. The Royal Gorge itself sits at roughly 5,700–6,300 feet elevation where piñon-juniper is actually the dominant woodland type, making the correct answer debatable.
- **Action:** fix

**[HARD]** What was the primary function of the Royal Gorge Bridge when first constructed in 1929 beyond serving as a tourist attraction?
- **Marked correct:** Providing a vehicular crossing for the narrow-gauge railroad and highway traffic
- **Should be:** Serving as a vehicular and pedestrian tourist attraction
- **Wrong options:** Facilitating mining operations across the gorge | Creating hydroelectric power generation | Enabling cattle ranching access
- **Fixed wrong options:** Facilitating mining operations across the gorge | Creating hydroelectric power generation | Enabling cattle ranching access
- **Problem:** The Royal Gorge Bridge was never designed to carry railroad traffic across it. The Denver & Rio Grande Western Railroad runs through the bottom of the gorge along the Arkansas River, not across the bridge. The bridge was built solely as a vehicular/pedestrian tourist attraction.
- **Action:** fix

**[HARD]** Which ski resort near Denver is located on land that was historically used as a military training facility in World War II?
- **Marked correct:** Winter Park Resort
- **Wrong options:** Loveland Ski Area | Echo Mountain | Berthoud Pass
- **Problem:** The claim that Winter Park Resort was developed on land used as a 'Camp Nolan' military training facility is not verifiably supported. Winter Park's history is tied to the City of Denver's recreational development, not a WWII military camp. This appears to be an invented or unverifiable 'fact.'
- **Action:** delete

**[HARD]** What is the official state fossil of Colorado, a marine reptile discovered in abundance near Pueblo?
- **Marked correct:** Stegosaurus
- **Should be:** Stegosaurus
- **Wrong options:** Allosaurus | Diplodocus | Tyrannosaurus
- **Problem:** Stegosaurus is indeed Colorado's state fossil adopted in 1982, but the explanation describes it as a 'marine reptile,' which is factually wrong — Stegosaurus was a terrestrial dinosaur. Additionally, the question itself calls it a 'marine reptile discovered in abundance near Pueblo,' which is doubly incorrect.
- **Action:** fix

**[HARD]** Which Denver-based Native American tribe held land rights to much of the Royal Gorge region before the Sand Creek Massacre in 1864?
- **Marked correct:** Southern Cheyenne
- **Wrong options:** Northern Arapaho | Ute | Comanche
- **Problem:** The question asks about a 'Denver-based' Native American tribe, which is a misleading description — the Southern Cheyenne were not 'Denver-based.' Also, the Ute tribe actually had stronger historical claims to the Royal Gorge region specifically, and the question conflates the Sand Creek Massacre location (eastern Colorado) with the Royal Gorge area (south-central Colorado). The question is geographically and historically muddled.
- **Action:** fix

**[HARD]** In what year did the Cañon City and San Juan Railroad complete its route through the Royal Gorge, establishing a major transportation corridor?
- **Marked correct:** 1887
- **Should be:** 1880
- **Wrong options:** 1883 | 1890 | 1885
- **Fixed wrong options:** 1883 | 1878 | 1885
- **Problem:** The question attributes the rail line through the Royal Gorge to the 'Cañon City and San Juan Railroad,' but the line was built by the Denver and Rio Grande Railway (D&RG). The D&RG completed its route through the Royal Gorge in 1880, not 1887, following the famous 'Royal Gorge War' with the Santa Fe Railway.
- **Action:** fix

**[HARD]** What is the primary reason the Royal Gorge Bridge's cables contain a specific composition of galvanized steel wires rather than solid cables?
- **Marked correct:** To provide flexibility and distribute load more evenly across multiple strands
- **Should be:** To provide flexibility and distribute load more evenly across multiple strands
- **Wrong options:** To reduce the total weight of the bridge | To prevent corrosion more effectively | To allow for easier maintenance and repair
- **Fixed wrong options:** Because solid steel cables of that span length were unavailable in 1929 | To reduce the total weight of the bridge deck | Because the canyon walls could not support the anchor load of solid cables
- **Problem:** The question asks about the 'primary reason' for stranded wire rope vs. solid cables, but multiple answers listed (weight reduction, corrosion prevention, easier maintenance) are all legitimate secondary benefits of wire rope. The correct answer is reasonable but the question is poorly constructed as all options have some truth to them.
- **Action:** fix

**[HARD]** Denver's Mile High Stadium and surrounding area sits on terrain shaped by which Pleistocene geological process?
- **Marked correct:** Glacial outwash plains from the South Platte River valley
- **Should be:** Glacial outwash plains from the South Platte River valley
- **Wrong options:** Eolian (wind-blown) sand deposits | Ancient lake sediments | Volcanic lahars
- **Fixed wrong options:** Eolian (wind-blown) sand deposits | Ancient lake sediments | Volcanic lahars
- **Problem:** The Denver metro area terrain is primarily shaped by Pleistocene alluvial outwash from the South Platte and its tributaries, but these are not strictly 'glacial outwash plains' in the classic sense — glaciers did not reach the Denver basin directly. The terrain is better described as fluvial outwash and river terrace deposits. Additionally, the stadium is now called Empower Field at Mile High, not 'Mile High Stadium.'
- **Action:** fix

**[HARD]** Which endemic Colorado plant species is named after the San Isabel National Forest region near the Royal Gorge area?
- **Marked correct:** San Isabel thistle
- **Wrong options:** Arkansas River lupine | Cheyenne Mountain milkvetch | Wet Mountain buttercup
- **Problem:** The 'San Isabel thistle' as a specifically named endemic plant species tied to this region is not verifiably documented in botanical literature. The question appears to be based on an invented or unverifiable taxon, and the wrong answers also appear fabricated.
- **Action:** delete

**[HARD]** Which species of ponderosa pine, adapted to the Colorado Springs region's elevation and climate, is scientifically named Pinus ponderosa?
- **Marked correct:** Rocky Mountain ponderosa pine
- **Should be:** Rocky Mountain ponderosa pine
- **Wrong options:** Jeffrey pine | Coulter pine | Washoe pine
- **Fixed wrong options:** Jeffrey pine | Coulter pine | Lodgepole pine
- **Problem:** The question is circular and poorly constructed — it asks 'which species of ponderosa pine is scientifically named Pinus ponderosa' and then gives the scientific name in the question itself. The correct answer is simply definitional. The question conflates species and subspecies in a confusing way.
- **Action:** fix

**[HARD]** In what year did Pueblo become the site of the Colorado Fuel and Iron Company's major steel works, transforming it into an industrial center?
- **Marked correct:** 1881
- **Should be:** 1881
- **Wrong options:** 1875 | 1888 | 1879
- **Fixed wrong options:** 1875 | 1888 | 1879
- **Problem:** The Colorado Fuel and Iron Company (CF&I) was not founded in 1881. The Pueblo steel works existed before CF&I; CF&I itself was formed in 1892 by consolidating earlier companies. The Pueblo steel works trace to the Colorado Coal and Iron Company established around 1880-1881, but attributing the 1881 date specifically to 'CF&I' is historically inaccurate.
- **Action:** fix

**[HARD]** What is the primary metamorphic rock type found in the Precambrian basement of the Royal Gorge region?
- **Marked correct:** Gneiss
- **Should be:** Gneiss
- **Wrong options:** Schist | Marble | Quartzite
- **Fixed wrong options:** Limestone | Marble | Sandstone
- **Problem:** Both gneiss and schist are common Precambrian metamorphic rocks in the Royal Gorge region, and the Royal Gorge walls contain both. Calling gneiss the 'primary' type to the exclusion of schist as a wrong answer is problematic since schist is also abundant in the Precambrian basement there.
- **Action:** fix

**[HARD]** Denver's Browns Breckenridge Brewery, a major craft brewery, is located in which historic neighborhood known for its gold-mining heritage?
- **Marked correct:** South Platte River valley (not Breckenridge specifically, but downtown Denver)
- **Wrong options:** LoDo (Lower Downtown) | RiNo (River North) | LoHi (Lower Highlands)
- **Problem:** There is no verifiable brewery called 'Denver's Browns Breckenridge Brewery' — this appears to conflate Breckenridge Brewery (which has a Denver location) with other entities. The question and answer are incoherent (the 'correct answer' is not actually one of the answer choices), and the premise is fabricated or severely garbled.
- **Action:** delete

**[HARD]** Which Colorado Springs-based U.S. Air Force Academy sits on Ute Pass, a geographic feature formed by which geological process?
- **Marked correct:** Water erosion along a fault line
- **Should be:** Water erosion along a fault line
- **Wrong options:** Glacial valley carving | Volcanic caldera collapse | Wind erosion
- **Fixed wrong options:** Glacial valley carving | Volcanic caldera collapse | Wind erosion
- **Problem:** The U.S. Air Force Academy is NOT located on Ute Pass. The Academy is located north of Colorado Springs on the eastern slope of the Front Range, while Ute Pass is a separate geographic feature to the west of Colorado Springs along US-24. This is a fundamental geographic error.
- **Action:** fix

**[HARD]** Which Colorado wildlife management region, encompassing the Pueblo area, is known for its population of Rocky Mountain mule deer adapted to semi-arid grasslands?
- **Marked correct:** Southeast Region
- **Wrong options:** South Central Region | East Central Region | Southern Region
- **Problem:** Colorado Parks and Wildlife organizes its regions differently, and the Pueblo area is typically classified under the 'Southeast Region' but the wrong answers include 'South Central Region' which could plausibly describe the same area depending on the organizational scheme used, creating potential confusion. The question should reference the official CPW region name more precisely.
- **Action:** fix

**[HARD]** The Canon City area's Ruedi Reservoir and surrounding watershed sit within which major river drainage basin?
- **Marked correct:** Arkansas River basin
- **Wrong options:** Colorado River basin | South Platte River basin | Rio Grande basin
- **Problem:** Ruedi Reservoir is not near Canon City — it is located near Basalt, Colorado, in Eagle/Pitkin counties along the Fryingpan River, a tributary of the Colorado River basin, not the Arkansas River basin. The question incorrectly associates Ruedi Reservoir with Canon City.
- **Action:** fix

**[HARD]** Which Denver-based author and naturalist, known for wildlife documentaries, has extensively documented Colorado's ecology and wildlife since the 1980s?
- **Marked correct:** George Sibley or similar Colorado naturalist
- **Wrong options:** Edward Abbey | Aldo Leopold | John Wesley Powell
- **Problem:** The correct answer 'George Sibley or similar Colorado naturalist' is not a real, verifiable answer — it is vague and hedged with 'or similar,' indicating the question is based on an invented or unverifiable premise. This does not constitute a legitimate trivia question.
- **Action:** delete

**[HARD]** The Pikes Peak cog railway, visible from Colorado Springs, ascends at what gradient percentage, making it one of the steepest adhesive railways in the world?
- **Marked correct:** 25 percent
- **Should be:** 25 percent
- **Wrong options:** 18 percent | 31 percent | 22 percent
- **Problem:** The Pikes Peak Cog Railway was replaced by a diesel and then fully rebuilt; more importantly, the maximum grade is approximately 25%, but this is a cog (rack-and-pinion) railway, not an 'adhesive' railway — cog and adhesion railways are opposites. The explanation incorrectly calls it an 'adhesive railway,' which would be factually wrong.
- **Action:** fix

### FOOD_DRINK (188 issues)

**[EASY]** What is the primary ingredient in traditional hummus?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the main ingredient in traditional Greek tzatziki sauce?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is credited with inventing pasta?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the primary ingredient in traditional Japanese miso paste?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the primary ingredient in traditional balsamic vinegar?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the main ingredient in traditional Indian ghee?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the primary ingredient in traditional hummus?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what country did the croissant originate?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is credited with inventing chocolate as we know it today?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the primary ingredient in traditional Japanese miso paste?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the primary ingredient in traditional Japanese miso paste?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What type of yeast is typically used in bread baking?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the main ingredient in traditional Spanish gazpacho?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the primary ingredient in traditional Japanese miso paste?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is traditionally credited with inventing pasta?
- **Marked correct:** Italy
- **Wrong options:** China | Greece | Spain
- **Problem:** The question asks which country is 'credited with inventing pasta,' but this is genuinely contested — noodles were independently developed in China earlier, and the question's own explanation acknowledges this. The correct answer of Italy is defensible as a convention, but the wording invites dispute and could mislead learners.
- **Action:** fix

**[EASY]** What is the main grain used to make traditional Spanish paella?
- **Marked correct:** Rice
- **Should be:** Rice
- **Wrong options:** Couscous | Barley | Farro
- **Problem:** Arborio rice is not traditionally used in paella — it is an Italian risotto rice. Traditional Spanish paella uses bomba or Valencian short-grain rice (e.g., senia or bahía). Arborio should not be listed as a typical paella rice.
- **Action:** fix

**[EASY]** What is the primary ingredient in traditional Thai green curry?
- **Marked correct:** Green chili peppers
- **Wrong options:** Green bell peppers | Green peppercorns | Green tomatoes
- **Problem:** The question asks for the 'primary ingredient' in Thai green curry, but green curry paste contains many key ingredients (lemongrass, galangal, kaffir lime, garlic) alongside green chilies. More critically, green chili peppers are not the only defining ingredient — and 'primary ingredient' is debatable. The question would be clearer if it asked what gives green curry its color and heat.
- **Action:** fix

**[EASY]** Which cooking method involves cooking food in boiling salted water?
- **Marked correct:** Boiling
- **Wrong options:** Steaming | Simmering | Braising
- **Problem:** The question specifies 'boiling salted water,' but salting the water is not a defining characteristic of boiling as a cooking technique — food is routinely boiled in unsalted water. This added qualifier makes the question slightly misleading and inaccurate as a definition.
- **Action:** fix

**[EASY]** What is the primary grain used in traditional Irish whiskey production?
- **Marked correct:** Barley
- **Wrong options:** Rye | Corn | Wheat
- **Problem:** Irish whiskey by law can be made from a mash of cereals including unmalted barley, malted barley, corn, wheat, and rye — not exclusively malted barley. Pot still Irish whiskey notably uses a mix of malted and unmalted barley. Saying barley is the 'primary grain' is a reasonable simplification, but the explanation's claim that it is 'traditionally made from malted barley' oversimplifies and could mislead.
- **Action:** fix

**[EASY]** What is the main ingredient in traditional Indian ghee?
- **Marked correct:** Clarified butter
- **Should be:** Butter
- **Wrong options:** Coconut oil | Sesame oil | Mustard oil
- **Fixed wrong options:** Coconut oil | Sesame oil | Mustard oil
- **Problem:** The correct answer 'Clarified butter' is listed as the answer, but the question asks for the 'main ingredient in ghee' — ghee IS clarified butter, it is not made FROM clarified butter. The base ingredient ghee is made from is butter (or cream/milk). Listing 'clarified butter' as the ingredient is circular and technically incorrect.
- **Action:** fix

**[EASY]** Which cooking technique involves cooking food in its own juices in a sealed container?
- **Marked correct:** Braising
- **Wrong options:** Roasting | Grilling | Steaming
- **Problem:** The question describes braising but the description 'cooking food in its own juices in a sealed container' more precisely describes pot-roasting or en cocotte cooking. Braising typically involves added liquid (stock, wine, etc.), not just the food's own juices. The question wording does not cleanly match braising.
- **Action:** fix

**[EASY]** Which country is traditionally credited with inventing the croissant shape we know today?
- **Marked correct:** France
- **Wrong options:** Austria | Denmark | Belgium
- **Problem:** Questions #2 and #18 directly contradict each other — Q2 says the croissant originated in Austria (correct answer: Austria), while Q18 says France created 'the croissant shape we know today' (correct answer: France). Both questions could appear in the same quiz causing confusion. Additionally, the specific claim that France invented the modern croissant 'shape' specifically is not well-documented enough to be a reliable trivia fact.
- **Action:** fix

**[EASY]** In what country did sushi originate as a preserved food technique?
- **Marked correct:** Japan
- **Should be:** Japan
- **Wrong options:** China | Korea | Thailand
- **Fixed wrong options:** China | Korea | Thailand
- **Problem:** Sushi actually originated in Southeast Asia (likely the Mekong River region spanning modern-day China, Vietnam, Laos, Myanmar, and Thailand) as narezushi, a fish preservation technique, before spreading to China and then Japan. Japan developed and refined it, but it did not originate there. China is arguably a more accurate origin than Japan for the preservation technique.
- **Action:** fix

**[EASY]** Which herb is traditionally paired with fish in French cuisine?
- **Marked correct:** Tarragon
- **Wrong options:** Basil | Oregano | Cilantro
- **Problem:** The question asks which herb is 'traditionally paired with fish in French cuisine,' but multiple herbs (e.g., dill, chervil, parsley) are also classically used with fish in French cooking. Tarragon is more strongly associated with chicken (poulet à l'estragon) than fish specifically.
- **Action:** fix

**[EASY]** What cooking technique involves exposing food to direct, intense heat?
- **Marked correct:** Grilling
- **Wrong options:** Roasting | Baking | Sautéing
- **Problem:** Broiling also involves exposing food to direct, intense heat (from above), making it equally correct alongside grilling. The question should specify the heat source direction or distinguish between grilling and broiling to avoid ambiguity.
- **Action:** fix

**[EASY]** Which country is credited with inventing pasta?
- **Marked correct:** Italy
- **Wrong options:** China | Greece | Turkey
- **Problem:** The question asks which country is 'credited with inventing pasta,' but the explanation itself acknowledges noodles originated in China. Crediting Italy with 'inventing' pasta is historically contentious and the question conflates invention with popularization/development.
- **Action:** fix

**[EASY]** Which cooking technique involves cooking food in a liquid just below boiling point?
- **Marked correct:** Poaching
- **Wrong options:** Braising | Simmering | Steaming
- **Fixed wrong options:** Braising | Steaming | Blanching
- **Problem:** Simmering is also defined as cooking in liquid just below boiling point (typically 185-205°F), which overlaps significantly with poaching. Having simmering as a wrong answer is problematic since it fits the question description nearly as well as poaching.
- **Action:** fix

**[EASY]** What is the primary protein in tofu?
- **Marked correct:** Soybean
- **Should be:** Soy protein
- **Wrong options:** Pea | Lentil | Bean sprout
- **Fixed wrong options:** Pea protein | Wheat gluten | Rice protein
- **Problem:** The question asks for the 'primary protein in tofu' but 'Soybean' is not a protein — it is the source ingredient. The primary protein in tofu is called soy protein (specifically the proteins glycinin and β-conglycinin). Answering 'Soybean' confuses an ingredient/source with a protein molecule.
- **Action:** fix

**[EASY]** In what year did Julia Child's 'The Art of French Cooking' first publish?
- **Marked correct:** 1961
- **Should be:** 1961
- **Wrong options:** 1955 | 1968 | 1973
- **Problem:** The book's full and correct title is 'Mastering the Art of French Cooking,' not 'The Art of French Cooking.' The question uses an incorrect title.
- **Action:** fix

**[EASY]** What is the name of the cooking method where food is cooked by surrounding dry heat in an oven?
- **Marked correct:** Roasting
- **Wrong options:** Grilling | Broiling | Baking
- **Fixed wrong options:** Grilling | Broiling | Steaming
- **Problem:** Baking is also a method of cooking food using dry heat in an oven, making it essentially equivalent to roasting. The distinction between roasting and baking is primarily convention (roasting for meats/vegetables, baking for breads/pastries) but both fit the question's description equally well.
- **Action:** fix

**[EASY]** What type of milk is used to make traditional Italian risotto creamy?
- **Marked correct:** No milk—it's the starch from rice
- **Wrong options:** Whole milk | Cream | Parmesan cheese
- **Fixed wrong options:** Whole milk | Cream | Evaporated milk
- **Problem:** Parmesan cheese is listed as a wrong answer, but Parmesan (along with butter) is also a traditional ingredient added to risotto at the end to enhance creaminess, making it a partially correct answer and contaminating the wrong answers.
- **Action:** fix

**[EASY]** What is the main spice in garam masala?
- **Marked correct:** Cumin
- **Wrong options:** Turmeric | Cardamom | Coriander
- **Problem:** Garam masala is a highly variable spice blend with no single universally agreed 'main' spice. Coriander is often the dominant ingredient by weight in many recipes, and cardamom is also a key defining spice. Calling cumin the definitive main spice is misleading.
- **Action:** fix

**[EASY]** Which cooking technique involves rapid cooking in a small amount of oil at high heat?
- **Marked correct:** Stir-frying
- **Wrong options:** Sautéing | Deep frying | Pan-searing
- **Problem:** Sautéing also involves rapid cooking in a small amount of oil at high heat, making it another potentially correct answer. The distinction between stir-frying and sautéing is subtle and the question wording fits both techniques.
- **Action:** fix

**[EASY]** What is the primary grain used to make traditional soy sauce?
- **Marked correct:** Soybeans and wheat
- **Should be:** Soybeans and wheat
- **Wrong options:** Rice and barley | Corn and soybeans | Wheat and barley
- **Problem:** The question asks for the 'primary grain' but the correct answer lists two ingredients (soybeans and wheat). Additionally, soybeans are a legume, not a grain. Tamari, a common soy sauce variant, is made without wheat, further complicating the answer.
- **Action:** fix

**[EASY]** Which country is credited with inventing chocolate as we know it today?
- **Marked correct:** Netherlands
- **Wrong options:** Belgium | Switzerland | Mexico
- **Problem:** The question 'which country invented chocolate as we know it today' is highly ambiguous. Solid eating chocolate was pioneered in England (Fry & Sons, 1847), milk chocolate in Switzerland, and the cocoa press in the Netherlands. No single country can clearly claim 'chocolate as we know it today.'
- **Action:** fix

**[EASY]** Which country produces the most wine globally?
- **Marked correct:** France
- **Should be:** Italy
- **Wrong options:** Italy | Spain | United States
- **Fixed wrong options:** France | Spain | United States
- **Problem:** France is not consistently the world's largest wine producer by volume. Italy and Spain frequently surpass France in total volume produced; France leads in value and prestige but not necessarily volume. Recent data (2020s) often ranks Italy or Spain first by volume.
- **Action:** fix

**[EASY]** Which cooking method involves cooking food in a small amount of liquid in a covered pot?
- **Marked correct:** Braising
- **Wrong options:** Stewing | Simmering | Steaming
- **Fixed wrong options:** Grilling | Sautéing | Steaming
- **Problem:** Stewing also involves cooking food in liquid in a covered pot, and the distinction between braising and stewing is that braising uses less liquid and often larger cuts, while stewing submerges food in more liquid. The question's phrasing ('small amount of liquid') does favor braising, but 'stewing' as a wrong answer is close enough to cause confusion. Additionally, the question could also describe stewing.
- **Action:** fix

**[EASY]** Which cooking technique involves cooking food slowly in liquid at a low temperature?
- **Marked correct:** Braising
- **Wrong options:** Sautéing | Broiling | Blanching
- **Problem:** Simmering and stewing also involve cooking food slowly in liquid at a low temperature. The question's description is too broad and does not uniquely identify braising; braising specifically uses a small amount of liquid with a covered pot, often after browning.
- **Action:** fix

**[EASY]** What country is credited with inventing pasta?
- **Marked correct:** Italy
- **Wrong options:** China | Greece | Spain
- **Problem:** The question asks which country is 'credited with inventing pasta,' but this is historically contested. The explanation even acknowledges China had pasta-like noodles earlier. The phrasing 'credited with inventing' is debatable and could be considered misleading.
- **Action:** fix

**[EASY]** Which cooking method uses dry heat and typically occurs in an oven?
- **Marked correct:** Roasting
- **Wrong options:** Steaming | Poaching | Simmering
- **Fixed wrong options:** Steaming | Poaching | Simmering
- **Problem:** Baking also uses dry heat in an oven and could reasonably be considered a correct answer. The question does not sufficiently distinguish roasting from baking.
- **Action:** fix

**[EASY]** What is the primary ingredient in traditional wasabi?
- **Marked correct:** Horseradish root
- **Should be:** Wasabi plant root (Wasabia japonica)
- **Wrong options:** Green chili peppers | Mustard seed | White radish
- **Fixed wrong options:** Green chili peppers | Mustard seed | Horseradish root
- **Problem:** The correct answer 'Horseradish root' is misleading because true/traditional wasabi comes from the Wasabia japonica plant (Japanese wasabi), not from the common horseradish plant. The question asks about 'traditional wasabi,' which is made from the wasabi plant, not horseradish.
- **Action:** fix

**[EASY]** What is the cooking technique called when food is cooked just until it becomes tender in boiling salted water?
- **Marked correct:** Blanching
- **Wrong options:** Poaching | Steaming | Simmering
- **Problem:** The description 'cooked just until tender in boiling salted water' is not a precise description of blanching alone; blanching is specifically a very brief cook followed by an ice bath. The description could also apply to parboiling. The explanation correctly describes blanching but the question wording is imprecise.
- **Action:** fix

**[EASY]** What cooking technique involves cooking food in a small amount of oil over high heat while stirring constantly?
- **Marked correct:** Stir-frying
- **Wrong options:** Sautéing | Pan-frying | Sweating
- **Fixed wrong options:** Braising | Pan-frying | Sweating
- **Problem:** Sautéing also involves cooking food in a small amount of oil over high heat, and the primary distinction from stir-frying is constant stirring and Asian origin. Having 'Sautéing' as a wrong answer makes the question contestable since the two techniques are very similar and the description partially fits sautéing as well.
- **Action:** fix

**[EASY]** Which French cooking technique involves cooking meat or vegetables slowly in their own fat?
- **Marked correct:** Confit
- **Wrong options:** Braise | Poach | Stew
- **Problem:** Confit traditionally involves cooking food submerged in fat (not just 'their own fat'), and the question says 'their own fat' which is slightly misleading but the answer is correct. However, 'Braise' as a wrong answer is genuinely wrong, so no contamination. The phrasing 'in their own fat' could suggest rendering/confit confusion but the answer Confit is correct. Minor wording issue acceptable.
- **Action:** fix

**[EASY]** What is the main ingredient in traditional miso soup?
- **Marked correct:** Miso paste
- **Wrong options:** Soy sauce | Dashi alone | Fish sauce
- **Problem:** Traditional miso soup requires both miso paste AND dashi broth as foundational ingredients. The wrong answer 'Dashi alone' implies dashi is wrong, but dashi is also a main ingredient. The question should ask for the ingredient that gives miso soup its name, which is miso paste — this is defensible but the framing is slightly ambiguous.
- **Action:** fix

**[EASY]** What is the name of the cooking technique where food is cooked in liquid just below boiling point?
- **Marked correct:** Poaching
- **Wrong options:** Simmering | Boiling | Braising
- **Problem:** Poaching is typically around 160-180°F, but simmering (around 185-205°F) is also below boiling point. Both poaching and simmering are technically 'below boiling point,' making this ambiguous. The explanation's temperature range is correct for poaching specifically, but the question wording could apply to simmering too.
- **Action:** fix

**[EASY]** Which herb is traditionally used as the main ingredient in French bouquet garni?
- **Marked correct:** Parsley
- **Wrong options:** Basil | Oregano | Thyme alone
- **Problem:** A bouquet garni traditionally includes parsley, thyme, AND bay leaf — none is the single 'main' ingredient. Additionally, 'Thyme alone' is listed as a wrong answer, which is misleading since thyme is a standard component. The question implies parsley is the single main herb, which is debatable.
- **Action:** fix

**[EASY]** Which cooking technique involves cooking food in a covered pot with a small amount of liquid on the stovetop?
- **Marked correct:** Braising
- **Wrong options:** Stewing | Poaching | Steaming
- **Problem:** The description 'covered pot with a small amount of liquid on the stovetop' also accurately describes stewing, which is listed as a wrong answer. Stewing is very similar to braising and also uses a covered pot with liquid; the distinction is typically the size of the meat pieces, not the technique itself.
- **Action:** fix

**[EASY]** What is the main ingredient in traditional Greek spanakopita?
- **Marked correct:** Spinach
- **Wrong options:** Cheese | Herbs | Mushrooms
- **Fixed wrong options:** Mushrooms | Meat | Lentils
- **Problem:** Spanakopita means 'spinach pie' and spinach is the primary ingredient, but feta cheese is also a principal filling ingredient. Listing 'Cheese' as a wrong answer is misleading since feta cheese is a defining and essential component of spanakopita.
- **Action:** fix

**[EASY]** What is the main ingredient in traditional Japanese miso paste?
- **Marked correct:** Fermented soybeans
- **Should be:** Fermented soybeans
- **Wrong options:** Fermented rice | Fermented wheat | Fermented barley
- **Fixed wrong options:** Fermented corn | Fermented chickpeas | Fermented lentils
- **Problem:** Miso can be made from soybeans, but also from rice (shiro/white miso uses rice koji), barley (mugi miso), or other grains. 'Fermented rice' and 'Fermented barley' listed as wrong answers are actually used in certain types of miso, making them partially correct and contaminating the wrong answers.
- **Action:** fix

**[EASY]** What cooking technique involves cooking food slowly in liquid at low temperature?
- **Marked correct:** Braising
- **Wrong options:** Grilling | Sautéing | Poaching
- **Problem:** The description 'cooking food slowly in liquid at low temperature' also accurately describes poaching, which is listed as a wrong answer. The distinguishing feature of braising (browning first, then covered slow cooking) is not captured in the question.
- **Action:** fix

**[EASY]** What is the traditional base ingredient for risotto?
- **Marked correct:** Arborio rice
- **Wrong options:** Jasmine rice | Basmati rice | Long-grain white rice
- **Problem:** While Arborio is the most common rice for risotto, Carnaroli and Vialone Nano are equally traditional and arguably preferred by Italian chefs. The question asks for 'the traditional base ingredient' implying a single answer, but the category of short-grain starchy Italian rice — not Arborio specifically — is what's truly required.
- **Action:** fix

**[EASY]** Which cooking method uses dry heat with direct flame or coals?
- **Marked correct:** Grilling
- **Wrong options:** Steaming | Boiling | Roasting
- **Problem:** Roasting also uses dry heat, though typically indirect (oven) rather than direct flame. The question specifies 'direct flame or coals' which does distinguish grilling, but 'Roasting' as a wrong answer is borderline since some roasting uses direct radiant heat. The answer Grilling is correct for the description given.
- **Action:** fix

**[EASY]** What is the traditional main protein in Spanish paella?
- **Marked correct:** Seafood
- **Should be:** Chicken and rabbit
- **Wrong options:** Beef | Chicken only | Pork
- **Fixed wrong options:** Beef | Lamb | Pork only
- **Problem:** The original paella Valenciana — considered the most traditional — features chicken and rabbit (not seafood). Seafood paella (paella de marisco) is a popular variant but not the original. The explanation incorrectly states seafood paella is from Valencia and is 'traditional,' which misrepresents culinary history.
- **Action:** fix

**[EASY]** Which acid is commonly used to cure or 'cook' fish in ceviche?
- **Marked correct:** Lime juice
- **Should be:** Lime juice
- **Wrong options:** Vinegar | Lemon juice | Acetic acid
- **Fixed wrong options:** Vinegar | Apple cider | Grapefruit juice
- **Problem:** Lemon juice is also commonly used to cure fish in ceviche, particularly in some regional variations. Marking it as a wrong answer is misleading. Additionally, 'acetic acid' is the acid in vinegar, so listing both is redundant.
- **Action:** fix

**[EASY]** What is the primary grain used to make traditional Irish whiskey?
- **Marked correct:** Barley
- **Should be:** Barley
- **Wrong options:** Corn | Rye | Wheat
- **Problem:** Irish whiskey is made from a mash that can include unmalted barley, corn, and other grains — not exclusively malted barley. Pot still Irish whiskey notably uses a mix of malted and unmalted barley. The question oversimplifies, but barley is still the most accurate answer among the options.
- **Action:** fix

**[EASY]** Which cooking technique involves submerging food in hot liquid?
- **Marked correct:** Poaching
- **Should be:** Poaching
- **Wrong options:** Searing | Baking | Broiling
- **Problem:** Boiling also involves submerging food in hot liquid, so the question is ambiguous. The distinction of 'poaching' is the lower temperature (simmering), not merely submersion. The question should specify gentle or low-temperature submersion.
- **Action:** fix

**[EASY]** What is the primary ingredient in traditional hummus that gives it a nutty flavor?
- **Marked correct:** Tahini
- **Should be:** Tahini
- **Wrong options:** Peanut butter | Sesame seeds | Olive paste
- **Fixed wrong options:** Peanut butter | Almond butter | Olive paste
- **Problem:** Sesame seeds are listed as a wrong answer, but tahini IS made from ground sesame seeds. This creates a contradiction — both tahini and sesame seeds could be considered correct answers.
- **Action:** fix

**[EASY]** What is the primary ingredient in traditional Korean gochujang?
- **Marked correct:** Red chili peppers
- **Should be:** Red chili peppers
- **Wrong options:** Garlic | Fermented soybeans | Sesame seeds
- **Fixed wrong options:** Garlic | Sesame seeds | Ginger
- **Problem:** Gochujang contains both red chili peppers AND fermented soybeans as major ingredients — fermented soybeans are a core component, not merely an optional additive. Listing fermented soybeans as a wrong answer is misleading.
- **Action:** fix

**[EASY]** Which cooking method involves cooking food in an oven with dry heat?
- **Marked correct:** Roasting
- **Should be:** Roasting
- **Wrong options:** Braising | Steaming | Poaching
- **Fixed wrong options:** Braising | Steaming | Poaching
- **Problem:** Baking also involves cooking food in an oven with dry heat, making 'baking' a valid alternative answer. The distinction between roasting and baking is often the food type or temperature, not the method itself.
- **Action:** fix

**[EASY]** What is the traditional thickening agent used in French gravy?
- **Marked correct:** Roux
- **Should be:** Roux
- **Wrong options:** Cornstarch | Flour slurry | Arrowroot
- **Fixed wrong options:** Cornstarch | Arrowroot | Egg yolks
- **Problem:** A roux IS made from flour and fat, and a 'flour slurry' (flour mixed with cold water) is listed as a wrong answer. However, roux itself uses flour, creating potential confusion. Also, the question asks about 'French gravy' which is an unusual framing — roux is used in French sauces broadly.
- **Action:** fix

**[EASY]** What is the main ingredient in traditional Spanish gazpacho?
- **Marked correct:** Tomatoes
- **Should be:** Tomatoes
- **Wrong options:** Cucumbers | Peppers | Bread
- **Fixed wrong options:** Beets | Avocado | Lentils
- **Problem:** Bread is listed as a wrong answer, but traditional gazpacho recipes include bread as a key ingredient used to thicken the soup. It is not merely optional in the classic recipe.
- **Action:** fix

**[EASY]** In what country did the mocha coffee drink originate?
- **Marked correct:** Yemen
- **Should be:** Yemen
- **Wrong options:** Ethiopia | Italy | Turkey
- **Problem:** The mocha coffee drink (espresso with chocolate) was not invented in Yemen. The city of Mocha in Yemen lent its name to a style of coffee bean/flavor, but the modern mocha beverage originated in Italy (or possibly the US). The explanation conflates the port of Mocha with the invention of the mocha drink.
- **Action:** fix

**[EASY]** What cooking technique uses oil or fat at high temperature to cook food quickly?
- **Marked correct:** Stir-frying
- **Should be:** Stir-frying
- **Wrong options:** Steaming | Simmering | Boiling
- **Fixed wrong options:** Steaming | Simmering | Boiling
- **Problem:** Deep frying and sautéing also use oil or fat at high temperature to cook food quickly. The question is too broad and does not uniquely identify stir-frying.
- **Action:** fix

**[EASY]** In what year did the microwave oven first become available for home use?
- **Marked correct:** 1947
- **Should be:** 1955
- **Wrong options:** 1955 | 1965 | 1972
- **Fixed wrong options:** 1947 | 1965 | 1972
- **Problem:** The first commercial microwave oven (the Radarange) was introduced in 1947 but it was a large commercial unit, not a home appliance. The first microwave intended and available for home use was the Raytheon Radarange sold to consumers around 1955, with widespread home adoption coming in the late 1960s–1970s.
- **Action:** fix

**[EASY]** What is the primary ingredient in traditional falafel?
- **Marked correct:** Chickpeas
- **Should be:** Chickpeas
- **Wrong options:** Lentils | Peas | Beans
- **Fixed wrong options:** Lentils | Peas | Black beans
- **Problem:** Falafel can also be made from fava beans, which is actually the original Egyptian version. Listing 'beans' as a wrong answer while chickpeas are correct is misleading since fava beans are a legitimate primary ingredient.
- **Action:** fix

**[MEDIUM]** Which French sauce is made from egg yolks, butter, and lemon juice or vinegar?
- **Marked correct:** Hollandaise
- **Wrong options:** Béarnaise | Béchamel | Velouté
- **Problem:** Béarnaise sauce is also made from egg yolks and butter with a vinegar reduction, making it potentially a correct answer too. The question needs to more specifically distinguish hollandaise (e.g., by noting its classic accompaniments or the absence of tarragon/shallots).
- **Action:** fix

**[MEDIUM]** What is the name of the Italian cooking method where pasta is finished cooking in its sauce?
- **Marked correct:** Mantecatura
- **Wrong options:** Risottare | Brasare | Saltare
- **Problem:** The technique of finishing pasta in its sauce is more commonly known in Italian cooking as 'risottare la pasta' or simply as part of standard pasta preparation. 'Mantecatura' more specifically refers to the final emulsification/creaming step (vigorously stirring in fat like butter or cheese to create a glossy, cohesive sauce), which is not exactly the same as merely finishing pasta in its sauce. The answer conflates two related but distinct concepts.
- **Action:** fix

**[MEDIUM]** What is the primary thickening agent used in traditional Thai curry paste?
- **Marked correct:** Coconut milk
- **Should be:** Ground herbs and spices
- **Wrong options:** Cornstarch | Tapioca | Rice flour
- **Problem:** The question asks about the thickening agent in Thai curry, but coconut milk is not a component of Thai curry paste — it is added separately when making a curry dish. Thai curry paste itself is thickened by ground ingredients such as lemongrass, galangal, shallots, and chilies. Additionally, the question conflates 'curry paste' with 'curry sauce.'
- **Action:** fix

**[MEDIUM]** What cooking technique involves cooking food slowly in a covered pot with a small amount of liquid?
- **Marked correct:** Braising
- **Wrong options:** Poaching | Blanching | Stewing
- **Fixed wrong options:** Poaching | Blanching | Roasting
- **Problem:** Stewing is also a correct answer to this question. Stewing also involves cooking food slowly in a covered pot with liquid at low heat. The explanation even acknowledges their similarity, making this an unfair question as stewing fits the description provided.
- **Action:** fix

**[MEDIUM]** Which country is credited with inventing the croissant?
- **Marked correct:** Austria
- **Wrong options:** France | Italy | Germany
- **Problem:** The historical record is disputed. The kipferl predates the modern croissant, but the flaky, laminated croissant we know today was developed in France. Attributing the croissant's invention to Austria is an oversimplification and widely considered a matter of historical debate. The question presents a contested claim as settled fact.
- **Action:** fix

**[MEDIUM]** What is the primary ingredient in the Indian spice blend garam masala?
- **Marked correct:** Cumin, coriander, and cardamom
- **Wrong options:** Turmeric, fenugreek, and asafetida | Cinnamon, cloves, and bay leaves | Chili peppers, garlic, and ginger
- **Fixed wrong options:** Turmeric, fenugreek, and asafetida | Mustard seeds, curry leaves, and tamarind | Chili peppers, garlic, and ginger
- **Problem:** Garam masala recipes vary widely by region and household; there is no single authoritative 'primary ingredient.' The answer 'Cumin, coriander, and cardamom' is reasonable but so is 'Cinnamon, cloves, and bay leaves,' which is also listed and commonly found in garam masala blends. This makes the question potentially unfair.
- **Action:** fix

**[MEDIUM]** How many minutes does it typically take to properly temper chocolate?
- **Marked correct:** 20-30 minutes
- **Wrong options:** 5-10 minutes | 40-50 minutes | 60-90 minutes
- **Problem:** There is no universally established or verifiable standard time of '20-30 minutes' for tempering chocolate. The time varies significantly depending on method (tabling, seeding, tempering machine), quantity, and chocolate type. This specific time range is not a well-established culinary fact.
- **Action:** fix

**[MEDIUM]** What is the name of the emulsion made from egg yolks and oil that's central to many French sauces?
- **Marked correct:** Mayonnaise
- **Wrong options:** Aioli | Vinaigrette | Romesco
- **Fixed wrong options:** Hollandaise | Vinaigrette | Romesco
- **Problem:** Aioli in its modern widespread usage is essentially a garlic-flavored mayonnaise (egg yolks and oil emulsion), making it a potential correct answer. The distinction the explanation draws (traditional aioli uses garlic-infused oil) is a debated technicality and many culinary authorities define modern aioli as a garlic mayonnaise.
- **Action:** fix

**[MEDIUM]** What is the Japanese cooking technique where ingredients are cooked in boiling water, then immediately cooled in ice water?
- **Marked correct:** Blanching
- **Wrong options:** Boiling | Steaming | Simmering
- **Problem:** Blanching is not specifically a 'Japanese cooking technique' — it is a universal culinary technique used across many cuisines worldwide. Attributing it specifically to Japanese cooking is inaccurate and misleading.
- **Action:** fix

**[MEDIUM]** Which vegetable is the primary ingredient in ratatouille?
- **Marked correct:** Eggplant
- **Wrong options:** Zucchini | Bell pepper | Tomato
- **Problem:** Ratatouille is a Provençal stew of multiple vegetables — eggplant, zucchini, bell peppers, tomatoes, and onions — with no single 'primary' or 'defining' ingredient. Claiming eggplant is the defining primary ingredient is not supported by traditional recipes; all vegetables are considered equal components.
- **Action:** fix

**[MEDIUM]** What is the traditional thickening agent used in French gravies and sauces made from equal parts fat and flour?
- **Marked correct:** Roux
- **Wrong options:** Beurre manié | Slurry | Liaison
- **Fixed wrong options:** Beurre manié | Slurry | Velouté
- **Problem:** Beurre manié is also made from equal parts fat and flour (softened butter kneaded with flour), which closely matches the question's description. While the explanation notes a preparation difference, the question as worded ('equal parts fat and flour') technically describes beurre manié as well, making it a potentially correct answer.
- **Action:** fix

**[MEDIUM]** Which enzyme in papaya is commonly used as a natural meat tenderizer?
- **Marked correct:** Papain
- **Wrong options:** Bromelain | Amylase | Protease
- **Fixed wrong options:** Bromelain | Amylase | Lipase
- **Problem:** Papain IS a protease (proteolytic enzyme), so 'Protease' listed as a wrong answer is also technically correct — papain belongs to the protease family of enzymes.
- **Action:** fix

**[MEDIUM]** What is the minimum aging requirement in months for traditional balsamic vinegar from Modena, Italy?
- **Marked correct:** 12 years
- **Should be:** 12 years
- **Wrong options:** 5 years | 8 years | 6 years
- **Fixed wrong options:** 5 years | 8 years | 6 years
- **Problem:** The question asks for the minimum aging in 'months' but the correct answer is given as '12 years' — the question stem is inconsistent with the answer. Additionally, the wrong answers are also in years, not months. The question should ask 'in years' not 'in months', or the answer should be '144 months'.
- **Action:** fix

**[MEDIUM]** Which French cooking technique refers to cooking food in its own juices with minimal added liquid?
- **Marked correct:** En papillote
- **Should be:** En cocotte
- **Wrong options:** En cocotte | En braise | En croûte
- **Fixed wrong options:** En papillote | En braise | En croûte
- **Problem:** 'En papillote' means cooking in parchment paper (steaming in the parcel), not cooking in its own juices with minimal added liquid. The technique that refers to cooking in its own juices is 'en cocotte' or braising; the description better fits 'étouffée' or 'en cocotte.' 'En cocotte' is listed as a wrong answer but better fits the description.
- **Action:** fix

**[MEDIUM]** In traditional French cuisine, what is the name of the mother sauce made from beef or veal stock and tomatoes?
- **Marked correct:** Espagnole
- **Wrong options:** Allemande | Lyonnaise | Normande
- **Problem:** Espagnole is made primarily from brown beef/veal stock, mirepoix, and a brown roux; tomato is a component but not always the defining ingredient. More importantly, Allemande is listed as a wrong answer but Allemande is actually a daughter sauce (derivative of Velouté), not a mother sauce — it is a real sauce but its inclusion is fine as a distractor. The larger issue is the explanation's description of Espagnole is slightly imprecise but not severely wrong. This is acceptable.
- **Action:** fix

**[MEDIUM]** What is the cooking technique where fat is heated until it begins to smoke before adding food?
- **Marked correct:** Pan-searing
- **Should be:** Pan-searing
- **Wrong options:** Grilling | Roasting | Broiling
- **Fixed wrong options:** Grilling | Roasting | Broiling
- **Problem:** The description — heating fat until it smokes before adding food — is not uniquely pan-searing; this applies broadly to high-heat sautéing and stir-frying as well. Additionally, the standard definition of pan-searing does not require fat to reach the smoke point; it requires high heat to create a crust via the Maillard reaction. The question is technically inaccurate and ambiguous.
- **Action:** fix

**[MEDIUM]** In what year was the microwave oven patented by Percy Spencer while working for Raytheon?
- **Marked correct:** 1945
- **Should be:** 1945
- **Wrong options:** 1938 | 1952 | 1960
- **Fixed wrong options:** 1938 | 1952 | 1960
- **Problem:** The microwave oven patent was filed in 1945 but granted on October 8, 1946 (U.S. Patent 2,495,429). The discovery occurred in 1945, but the patent was not granted until 1946. The question conflates the discovery date with the patent grant date.
- **Action:** fix

**[MEDIUM]** Which spice is the dried stigma of a flowering plant native to Iran and Kashmir?
- **Marked correct:** Saffron
- **Wrong options:** Cardamom | Turmeric | Cumin
- **Problem:** The Crocus sativus flower produces three stigmas per flower, not one. The explanation incorrectly states 'Each flower produces only one stigma.'
- **Action:** fix

**[MEDIUM]** What is the name of the slow-cooked Spanish stew made with chorizo, paprika, and pork?
- **Marked correct:** Pimentón stew
- **Should be:** Cocido madrileño
- **Wrong options:** Paella negra | Ropa vieja | Cocido madrileño
- **Fixed wrong options:** Paella negra | Ropa vieja | Fabada asturiana
- **Problem:** 'Pimentón stew' is not a recognized, named Spanish dish — it is a generic descriptor. The question asks for a specific dish name but the 'correct' answer is an invented category label, making the question factually unsupported. Cocido madrileño actually does contain chorizo and pork and could be considered correct, further undermining the question.
- **Action:** fix

**[MEDIUM]** Which amino acid, commonly found in mushrooms and aged cheeses, is the fifth basic taste alongside sweet, salty, sour, and bitter?
- **Marked correct:** Umami (glutamate)
- **Should be:** Glutamate
- **Wrong options:** Aspartame | Glycine | Alanine
- **Fixed wrong options:** Aspartame | Glycine | Alanine
- **Problem:** The question asks which amino acid is the fifth basic taste, but glutamate is not technically an amino acid in this context — it is the salt/anion of glutamic acid. More importantly, the question asks for an 'amino acid' but the correct answer given is 'Umami (glutamate)' — umami is a taste, not an amino acid. The answer should be 'Glutamate' or the question should ask what the fifth taste is.
- **Action:** fix

**[MEDIUM]** Which Italian pasta shape's name literally translates to 'little tubes'?
- **Marked correct:** Tubetti
- **Wrong options:** Rigatoni | Penne | Cannelloni
- **Problem:** 'Tubetti' translates to 'small tubes' which is correct, but 'Cannelloni' also literally means 'large tubes/reeds' (from 'canna' meaning tube/reed). More critically, 'rigatoni' derives from 'rigato' meaning ridged, and 'penne' means quills — so the wrong answers' etymologies are correctly noted. However, the question is slightly ambiguous because multiple pasta names reference tubes. The question is acceptable but the explanation should clarify tubetti specifically.
- **Action:** fix

**[MEDIUM]** In what country did the cooking method of 'tandoori' originate?
- **Marked correct:** India
- **Should be:** India
- **Wrong options:** Pakistan | Afghanistan | Bangladesh
- **Fixed wrong options:** China | Afghanistan | Bangladesh
- **Problem:** The tandoor oven predates the modern borders of India and Pakistan — archaeological evidence places early tandoor use in the Indus Valley civilization, which spans both modern India and Pakistan. Pakistan also has a strong claim to tandoori cooking, particularly through Punjabi cuisine. Marking India as uniquely correct while Pakistan is 'wrong' is historically contentious.
- **Action:** fix

**[MEDIUM]** Which ingredient is used to make traditional French crème brûlée set, besides eggs and cream?
- **Marked correct:** Cornstarch or gelatin
- **Should be:** No additional setting agent — egg yolks set it alone
- **Wrong options:** Agar | Xanthan gum | Arrowroot
- **Fixed wrong options:** Cornstarch | Gelatin | Agar
- **Problem:** Traditional French crème brûlée is set solely by egg yolks — it does not traditionally include cornstarch or gelatin. Listing 'Cornstarch or gelatin' as the correct answer is factually wrong for a question about traditional crème brûlée. The explanation even contradicts itself by stating 'Pure crème brûlée uses only eggs, cream, and sugar.'
- **Action:** fix

**[MEDIUM]** What ingredient, when added to eggs, prevents them from becoming rubbery when cooked at high temperatures?
- **Marked correct:** Cornstarch
- **Wrong options:** Baking soda | Cream of tartar | Vinegar
- **Problem:** The claim that cornstarch specifically prevents rubbery eggs is a narrowly specific culinary tip, but the question framing implies a single definitive scientific answer. More importantly, the technique described is real but the question is oddly phrased — 'at high temperatures' is imprecise and other ingredients (cream, water) are also commonly used. The explanation is broadly accurate but the question could mislead.
- **Action:** fix

**[MEDIUM]** What French pastry term refers to a light, fluffy dessert made with whipped egg whites?
- **Marked correct:** Soufflé
- **Wrong options:** Mousse | Parfait | Zabaglione
- **Problem:** A mousse can also be made primarily with whipped egg whites (e.g., chocolate mousse au blanc), making it a potential correct answer. The question asks for a 'light, fluffy dessert made with whipped egg whites,' which describes mousse as well as soufflé. The distinguishing feature of a soufflé should be its baked, risen nature.
- **Action:** fix

**[MEDIUM]** What is the name of the Japanese rice vinegar used in sushi preparation?
- **Marked correct:** Su
- **Wrong options:** Mirin | Sake | Ponzu
- **Problem:** While 'su' (酢) is indeed the Japanese word for vinegar, asking for 'the name of the Japanese rice vinegar used in sushi preparation' with the answer 'Su' is misleading — 'su' means vinegar generically, not specifically rice vinegar. The more commonly recognized and specific term used in Western culinary contexts is 'rice vinegar' or 'komezu.' This question may confuse players expecting a brand or specific product name.
- **Action:** fix

**[MEDIUM]** Which country is credited with inventing the fortune cookie despite its association with Chinese cuisine?
- **Marked correct:** Japan
- **Wrong options:** China | United States | Thailand
- **Problem:** The origin of the fortune cookie is genuinely disputed. While some historians trace it to Japanese temple cookies (tsujiura senbei), others credit Japanese-American or Chinese-American bakers in California (particularly Makoto Hagiwara or David Jung). Stating Japan as the definitive answer and listing 'United States' as wrong is misleading, since many credible sources place its modern invention in the US by Japanese or Chinese immigrants.
- **Action:** fix

**[MEDIUM]** What is the primary ingredient in the Middle Eastern condiment za'atar?
- **Marked correct:** Dried herbs and sumac
- **Should be:** Dried thyme, sumac, and sesame seeds
- **Wrong options:** Cumin and coriander | Paprika and garlic | Sesame and cinnamon
- **Fixed wrong options:** Cumin and coriander | Paprika and garlic | Fenugreek and turmeric
- **Problem:** Za'atar is a blend of dried herbs (thyme/oregano/marjoram), sumac, and sesame seeds. Listing 'Dried herbs and sumac' as the correct answer while 'Sesame and cinnamon' is a wrong answer is inaccurate — sesame seeds are actually a key ingredient in za'atar. Additionally, defining the 'primary ingredient' of a blend as 'dried herbs and sumac' is awkward since sesame is equally essential.
- **Action:** fix

**[MEDIUM]** In classical French cuisine, what is the term for a side dish of vegetables served alongside a main course?
- **Marked correct:** Garniture
- **Wrong options:** Accompagnement | Légumes | Garnitur
- **Fixed wrong options:** Fond de cuisine | Liaison | Mise en place
- **Problem:** 'Garniture' in classical French cuisine broadly refers to all garnishes and accompaniments — not exclusively vegetables — and 'garnitur' in the wrong answers is simply a misspelling of the same word, which is an unfair distractor. The explanation's distinction between 'garniture' and 'accompagnement' is also not a firmly established culinary rule.
- **Action:** fix

**[MEDIUM]** Which technique involves wrapping food in pastry dough and then frying or baking it?
- **Marked correct:** Enveloping
- **Should be:** En croûte
- **Wrong options:** Encroûting | Blanketing | Wrapping
- **Fixed wrong options:** Enveloping | Blanketing | Wrapping
- **Problem:** 'Enveloping' is not a recognized standard French culinary term for wrapping food in pastry. The established French culinary term for encasing food in pastry is 'en croûte' (or 'encroûting'), which is listed as a wrong answer. This question has the correct and wrong answers effectively reversed.
- **Action:** fix

**[MEDIUM]** What ingredient must be present in champagne for it to legally bear that name?
- **Marked correct:** Grapes from the Champagne region of France
- **Should be:** Grapes from the Champagne region of France
- **Wrong options:** Chalk deposits in the soil | Chardonnay grapes only | Méthode Champenoise production
- **Fixed wrong options:** Chardonnay grapes only | Carbon dioxide added artificially | Aging for at least five years
- **Problem:** The question asks what 'must be present' legally, but 'Méthode Champenoise production' is also legally required for true Champagne under EU law — not just geographic origin. Additionally, Chardonnay grapes alone is wrong but specific permitted grape varieties (Chardonnay, Pinot Noir, Pinot Meunier) are also a legal requirement, making the answer more nuanced than presented.
- **Action:** fix

**[MEDIUM]** Which cooking technique involves cooking food in fat at a temperature just below its boiling point?
- **Marked correct:** Poaching
- **Should be:** Confit
- **Wrong options:** Braising | Simmering | Steaming
- **Fixed wrong options:** Braising | Simmering | Steaming
- **Problem:** Poaching cooks food in liquid (water, stock, etc.), not fat. Confit is the technique that cooks food submerged in fat at low temperatures. Also, poaching temperatures are typically 71-82°C (160-180°F), not 160-180°C as stated in the explanation.
- **Action:** fix

**[MEDIUM]** What is the name of the sweet Spanish sherry wine used in cooking, particularly for deglazing?
- **Marked correct:** Cream sherry
- **Should be:** Cream sherry
- **Wrong options:** Amontillado | Fino | Oloroso
- **Fixed wrong options:** Amontillado | Fino | Oloroso
- **Problem:** The question asks for the 'sweet Spanish sherry used in cooking for deglazing,' but cream sherry is not specifically the most common sherry used for deglazing — dry sherries like Fino or Amontillado are often preferred in savory cooking. The claim that cream sherry is the primary cooking sherry is debatable and the question is ambiguous.
- **Action:** fix

**[MEDIUM]** Which herb is the primary flavoring agent in Vietnamese pho broth?
- **Marked correct:** Star anise
- **Should be:** Star anise
- **Wrong options:** Cilantro | Lemongrass | Thai basil
- **Fixed wrong options:** Cilantro | Lemongrass | Thai basil
- **Problem:** The question asks for a 'herb' but star anise is a spice, not an herb. Additionally, while star anise is the dominant flavor in pho broth, the question's categorization is misleading.
- **Action:** fix

**[MEDIUM]** What is the minimum percentage of cocoa solids required for chocolate to be legally classified as dark chocolate in the EU?
- **Marked correct:** 50%
- **Should be:** 35%
- **Wrong options:** 35% | 60% | 70%
- **Fixed wrong options:** 25% | 50% | 70%
- **Problem:** EU Directive 2000/36/EC defines dark chocolate (plain chocolate) as requiring a minimum of 35% total cocoa solids, not 50%. The 50% figure is not the EU legal minimum.
- **Action:** fix

**[MEDIUM]** Which country's cuisine is characterized by the use of the Five-Spice powder blend?
- **Marked correct:** Chinese
- **Should be:** Chinese
- **Wrong options:** Thai | Vietnamese | Malaysian
- **Fixed wrong options:** Thai | Indian | Malaysian
- **Problem:** Five-spice powder is also widely used in Vietnamese cuisine (ngũ vị hương) and to a lesser extent in other Southeast Asian cuisines, making 'Vietnamese' a potentially correct answer as well.
- **Action:** fix

**[MEDIUM]** What is the traditional thickening agent used in Japanese roux-based gravies and sauces?
- **Marked correct:** Katakuriko (potato starch)
- **Should be:** Katakuriko (potato starch)
- **Wrong options:** Cornstarch | Wheat flour | Arrowroot
- **Fixed wrong options:** Cornstarch | Wheat flour | Arrowroot
- **Problem:** The question asks about 'roux-based gravies and sauces' but katakuriko (potato starch) is not used in roux — a roux requires fat and flour. Cornstarch or katakuriko are slurry-based thickeners, not roux. The question conflates two different thickening methods.
- **Action:** fix

**[MEDIUM]** What is the traditional fat used in Indian ghee?
- **Marked correct:** Clarified butter
- **Should be:** Clarified butter
- **Wrong options:** Coconut oil | Vegetable oil | Sesame oil
- **Fixed wrong options:** Coconut oil | Vegetable oil | Sesame oil
- **Problem:** The question asks 'what is the traditional fat used in Indian ghee,' but ghee IS clarified butter — it is not a fat 'used in' ghee. The question is grammatically and logically malformed. It should ask what ghee is, or what fat ghee is made from.
- **Action:** fix

**[MEDIUM]** Which Scandinavian curing method uses salt and sugar to preserve salmon?
- **Marked correct:** Gravlax
- **Wrong options:** Lox | Smoked salmon | Kipper
- **Problem:** Lox is listed as a wrong answer, but lox is technically cured in brine (salt), not smoked. However, the distinction between lox and gravlax is the method — gravlax uses dry cure with sugar and dill while lox uses wet brine — so lox is genuinely wrong. However, the explanation incorrectly states lox is 'brined' while gravlax uses salt and sugar; lox also uses salt, making the distinction valid but the explanation slightly imprecise. No contamination — status is ok.
- **Action:** fix

**[MEDIUM]** What is the primary souring agent traditionally used in Thai cuisine?
- **Marked correct:** Lime juice
- **Should be:** Tamarind paste
- **Wrong options:** Vinegar | Tamarind paste | Fish sauce
- **Fixed wrong options:** Vinegar | Lime juice | Fish sauce
- **Problem:** Tamarind paste is actually considered by many culinary experts to be a more foundational and traditional souring agent in Thai cooking than lime juice, used in dishes like pad thai and many curries. The claim that lime juice is the 'primary' souring agent over tamarind is disputed.
- **Action:** fix

**[MEDIUM]** What is the name of the Italian pasta shape that resembles small pasta tubes, commonly used in baked dishes?
- **Marked correct:** Rigatoni
- **Should be:** Rigatoni
- **Wrong options:** Penne | Ziti | Cannelloni
- **Fixed wrong options:** Penne | Ziti | Cannelloni
- **Problem:** The question describes 'small pasta tubes commonly used in baked dishes' but then names rigatoni, which is large — not small. Ziti and penne are more accurately described as commonly used in baked dishes (e.g., baked ziti is a famous dish). All three wrong answers are also tubular pastas used in baked dishes, making this ambiguous.
- **Action:** fix

**[MEDIUM]** What is the traditional fermentation time for Korean kimchi before it develops full flavor?
- **Marked correct:** 2-3 weeks
- **Should be:** 2-3 weeks
- **Wrong options:** 3-5 days | 1-2 months | 6-8 weeks
- **Fixed wrong options:** 3-5 days | 1-2 months | 6-8 weeks
- **Problem:** Kimchi fermentation timing is highly variable and depends on temperature, salt concentration, and personal preference. Many sources cite 1-5 days at room temperature as sufficient for full flavor development, while refrigerator fermentation can take weeks to months. The '2-3 weeks' answer is not a well-established standard.
- **Action:** fix

**[MEDIUM]** Which region of Spain is famous for producing paella rice varieties like bomba and arborio?
- **Marked correct:** Valencia
- **Should be:** Valencia
- **Wrong options:** Andalusia | Catalonia | La Rioja
- **Problem:** Arborio rice is not from Valencia — it is an Italian variety grown in the Po Valley. Bomba is indeed a Valencian variety, but arborio is not Spanish. The explanation and answer need correction.
- **Action:** fix

**[MEDIUM]** In what year was the slow food movement founded in Italy?
- **Marked correct:** 1986
- **Should be:** 1989
- **Wrong options:** 1992 | 1979 | 2001
- **Fixed wrong options:** 1992 | 1986 | 2001
- **Problem:** The Slow Food movement was formally founded in 1989 (the founding manifesto was signed in Paris in November 1989), not 1986. The 1986 date refers to an earlier precursor event/association in Italy, but the official founding of Slow Food as an international movement is 1989.
- **Action:** fix

**[MEDIUM]** Which French sauce is made from butter, egg yolks, and lemon juice or vinegar?
- **Marked correct:** Béarnaise
- **Should be:** Hollandaise
- **Wrong options:** Béchamel | Hollandaise | Velouté
- **Fixed wrong options:** Béchamel | Béarnaise | Velouté
- **Problem:** The correct answer should be Hollandaise, not Béarnaise. Hollandaise is made from butter, egg yolks, and lemon juice or vinegar. Béarnaise is a derivative that additionally includes shallots, tarragon, and chervil — so listing Hollandaise as a wrong answer when it is actually the correct answer to the question as worded is a contamination error.
- **Action:** fix

**[MEDIUM]** Which country is credited with inventing the modern croissant?
- **Marked correct:** France
- **Should be:** Austria
- **Wrong options:** Austria | Italy | Denmark
- **Fixed wrong options:** France | Italy | Denmark
- **Problem:** The correct answer 'France' conflicts with the explanation which acknowledges Austrian origins, and the question asks which country is 'credited with inventing' it — Austria has a strong and widely recognized claim to the croissant's invention (the kipferl). The question and answer create ambiguity.
- **Action:** fix

**[MEDIUM]** What is the main ingredient in traditional Italian arborio rice dishes like risotto?
- **Marked correct:** Arborio rice
- **Should be:** Arborio rice
- **Wrong options:** Jasmine rice | Basmati rice | Long-grain white rice
- **Problem:** The question asks for the 'main ingredient in traditional Italian arborio rice dishes like risotto' but the answer 'Arborio rice' is essentially tautological — the question already names arborio rice. The question is circular and poorly constructed.
- **Action:** fix

**[MEDIUM]** Which French culinary technique involves cooking in a sealed pot with little liquid?
- **Marked correct:** Braising
- **Should be:** Braising
- **Wrong options:** Poaching | Steaming | Simmering
- **Problem:** Braising is not specifically a 'French culinary technique' — it is a universal cooking method used across many cuisines. The framing is misleading, though the answer itself is correct.
- **Action:** fix

**[MEDIUM]** What is the primary grain used in traditional Mexican tortillas?
- **Marked correct:** Corn
- **Should be:** Corn
- **Wrong options:** Wheat | Rice | Barley
- **Fixed wrong options:** Rice | Barley | Oats
- **Problem:** Wheat is also a primary grain used in traditional Mexican tortillas — flour tortillas made from wheat are widely used and traditional in northern Mexico. Listing 'Wheat' as a wrong answer is inaccurate.
- **Action:** fix

**[MEDIUM]** What is the traditional spirit used in French Coq au Vin?
- **Marked correct:** Red wine
- **Should be:** Red wine
- **Wrong options:** Cognac | White wine | Port
- **Fixed wrong options:** Cognac | White wine | Port
- **Problem:** The question asks for the 'traditional spirit' used in Coq au Vin, but wine is not a spirit — it is a fermented beverage. Cognac (a true spirit) is also traditionally added to some Coq au Vin recipes. The question's use of 'spirit' is factually imprecise and could mislead.
- **Action:** fix

**[MEDIUM]** Which French pastry chef is credited with popularizing the macaron in Paris?
- **Marked correct:** Ladurée
- **Should be:** Ladurée
- **Wrong options:** Paul Bocuse | Jacques Pépin | Julia Child
- **Fixed wrong options:** Paul Bocuse | Jacques Pépin | Julia Child
- **Problem:** Ladurée is a confectionery house (a company), not a pastry chef. The question asks 'which French pastry chef' but the correct answer is a business/brand, not an individual person. This is a category mismatch.
- **Action:** fix

**[MEDIUM]** Which type of salt is most commonly used in gourmet cooking and finishing dishes?
- **Marked correct:** Sea salt
- **Should be:** Fleur de sel (sea salt)
- **Wrong options:** Kosher salt | Rock salt | Iodized table salt
- **Fixed wrong options:** Kosher salt | Rock salt | Iodized table salt
- **Problem:** The answer is debatable: many professional chefs consider Fleur de Sel or Maldon (sea salts) the top finishing salts, but kosher salt is arguably more commonly used in everyday gourmet cooking. The explanation itself acknowledges kosher salt is 'also popular,' undermining the uniqueness of the correct answer.
- **Action:** fix

**[MEDIUM]** Which cooking method is essential for developing the characteristic flavor in Sichuan mapo tofu?
- **Marked correct:** Simmering in chili oil
- **Should be:** Simmering in a spicy fermented bean and chili sauce
- **Wrong options:** Stir-frying quickly | Steaming gently | Boiling in water
- **Fixed wrong options:** Steaming gently | Boiling in plain water | Deep frying the tofu
- **Problem:** The question is ambiguous because mapo tofu actually involves multiple cooking steps including stir-frying the doubanjiang and aromatics in oil before simmering — 'stir-frying quickly' in the wrong answers is partially involved in the cooking process. Additionally, 'simmering in chili oil' is an oversimplification; the dish simmers in a broth-based sauce that includes chili bean paste (doubanjiang) and chili oil, not chili oil alone.
- **Action:** fix

**[HARD]** Which French chef is credited with codifying the five mother sauces of classical French cuisine?
- **Marked correct:** Marie-Antoine Carême
- **Should be:** Marie-Antoine Carême
- **Wrong options:** Auguste Escoffier | Jean-François Revel | Antonin Carême
- **Fixed wrong options:** Auguste Escoffier | Jean-François Revel | Jules Gouffé
- **Problem:** Marie-Antoine Carême and Antonin Carême are the same person — 'Marie-Antoine' was his full name, 'Antonin' his common name. Having both as options (one correct, one wrong) is contradictory and confusing. Additionally, Escoffier later revised the mother sauces to the modern five, so attribution is debatable, but Carême is the standard answer.
- **Action:** fix

**[HARD]** What is the traditional name of the Japanese cooking technique involving slow-simmering ingredients in a seasoned broth, often done at the table?
- **Marked correct:** Nabemono
- **Should be:** Nabemono
- **Wrong options:** Sukiyaki | Shabu-shabu | Teppanyaki
- **Fixed wrong options:** Yakitori | Teppanyaki | Tempura
- **Problem:** The question asks for a 'cooking technique' but nabemono is a category of dishes, not a technique per se. More importantly, sukiyaki and shabu-shabu are also valid answers to 'slow-simmering at the table' and are more specifically defined by that technique. The question is poorly scoped.
- **Action:** fix

**[HARD]** Which cooking method involves passing food through a charlotte mold or ring to create a cylindrical molded dish, often served with sauce?
- **Marked correct:** Charlottes
- **Should be:** Charlottes
- **Wrong options:** Terrines | Pâtés | Galantines
- **Fixed wrong options:** Terrines | Pâtés | Galantines
- **Problem:** The question conflates the preparation method with the mold/vessel name. A 'charlotte' is a dessert or savory dish, not a cooking method/technique. The description mixing 'forcemeat or mousse' with 'charlotte mold' conflates savory charlottes (mousse-lined) with dessert charlottes. The question's wording is inaccurate and misleading.
- **Action:** fix

**[HARD]** What is the primary thickening agent traditionally used in Spanish mole negro?
- **Marked correct:** Ground chilies and nuts
- **Should be:** Ground chilies and nuts
- **Wrong options:** Cornstarch slurry | Roux made with lard | Masa harina
- **Fixed wrong options:** Cornstarch slurry | Roux made with lard | Arrowroot powder
- **Problem:** Mole negro is Mexican, not Spanish. The question incorrectly refers to it as 'Spanish mole negro.' Additionally, masa harina is actually a traditional thickener in some mole preparations, which could make that wrong answer contestable.
- **Action:** fix

**[HARD]** Which French chef pioneered the 'nouvelle cuisine' movement in the 1960s-70s, emphasizing lighter preparations and artistic presentation?
- **Marked correct:** Paul Bocuse
- **Should be:** Paul Bocuse
- **Wrong options:** Jacques Pepin | Michel Guérard | Jean Troisgros
- **Fixed wrong options:** Julia Child | Joël Robuchon | Alain Ducasse
- **Problem:** Nouvelle cuisine was collectively pioneered by multiple chefs — most food historians credit Henri Gault and Christian Millau (critics) as the definers, and chefs like Michel Guérard, the Troisgros brothers, and Roger Vergé as co-founders alongside Bocuse. Calling Bocuse the sole pioneer is an oversimplification that makes the question ambiguous given the wrong answers listed.
- **Action:** fix

**[HARD]** What is the traditional Indonesian paste made from fermented soybeans, garlic, chilies, and other ingredients used as a condiment?
- **Marked correct:** Sambal
- **Should be:** Sambal
- **Wrong options:** Satay sauce | Gado-gado | Kecap manis
- **Fixed wrong options:** Satay sauce | Gado-gado | Kecap manis
- **Problem:** Sambal is primarily a chili-based condiment, not a fermented soybean paste. The description in the question ('made from fermented soybeans, garlic, chilies') better describes tempeh-based sauces or other fermented pastes, not sambal. Sambal's primary ingredient is chilies, not fermented soybeans.
- **Action:** fix

**[HARD]** Which fermented Korean condiment is made from glutinous rice, koji mold, and salt, resulting in a naturally sweet seasoning?
- **Marked correct:** Amazake or Amasake
- **Wrong options:** Doenjang | Gochugaru | Salted shrimp paste
- **Problem:** Amazake is Japanese, not Korean. The question asks for a Korean condiment but gives a Japanese answer. The correct Korean equivalent made from rice and nuruk (malt) would be sikhye or ganjang; there is no established Korean fermented condiment accurately called 'amazake.' The question premise is fundamentally flawed.
- **Action:** fix

**[HARD]** Which classical French sauce is made by deglazing a pan with wine and combining it with a rich brown stock and espagnole sauce?
- **Marked correct:** Demi-glace
- **Should be:** Demi-glace
- **Wrong options:** Jus | Sauce bordelaise | Pan sauce
- **Fixed wrong options:** Jus lié | Sauce bordelaise | Pan sauce
- **Problem:** Demi-glace is not made by deglazing with wine; it is made by reducing equal parts espagnole sauce and brown veal stock (fond brun). The pan deglazing description is inaccurate and misleading.
- **Action:** fix

**[HARD]** What is the traditional Italian method of cooking risotto that requires constant stirring and gradual addition of warm stock?
- **Marked correct:** Mantecatura
- **Should be:** Mantecatura
- **Wrong options:** Soffritto | Risottatura | Tostatura
- **Fixed wrong options:** Soffritto | Risottatura | Tostatura
- **Problem:** Mantecatura specifically refers to the final step of beating in cold butter and Parmesan to create a creamy, emulsified finish — not the 'constant stirring throughout cooking.' The general constant-stirring technique throughout risotto cooking is simply part of the risotto method itself.
- **Action:** fix

**[HARD]** What is the French culinary term for a preparation where foie gras is wrapped in meat, poached, and served cold in aspic?
- **Marked correct:** Galantine
- **Should be:** Galantine
- **Wrong options:** Pâté en croute | Ballottine | Mousse
- **Fixed wrong options:** Pâté en croute | Ballottine | Mousse
- **Problem:** A galantine is not specifically a foie gras preparation. It is a deboned whole bird or meat stuffed with forcemeat, poached, and served cold in aspic. Ballottine (listed as a wrong answer) is actually quite similar and could cause confusion, but the core description tying galantine specifically to foie gras is inaccurate.
- **Action:** fix

**[HARD]** Which cooking technique involves wrapping food in paper or leaves and cooking it in its own steam, commonly used in Asian cuisine?
- **Marked correct:** En papillote
- **Should be:** En papillote
- **Wrong options:** En croûte | En cocotte | En braise
- **Problem:** En papillote is a French technique, not primarily an Asian technique. The question claims it is 'commonly used in Asian cuisine,' which is misleading. Asian cuisines use leaf-wrapping techniques (e.g., banana leaf cooking) that are distinct from en papillote. The framing conflates separate traditions.
- **Action:** fix

**[HARD]** What is the name of the Indian cooking technique that involves rapid cooking in a very hot wok-like pan called a 'tawa'?
- **Marked correct:** Tawa frying or Tawa cooking
- **Should be:** Tawa cooking
- **Wrong options:** Tandoor cooking | Dum pukht | Bhunao
- **Fixed wrong options:** Tandoor cooking | Dum pukht | Kadai cooking
- **Problem:** A tawa is a flat griddle used primarily for breads (like roti and paratha) and some stir-fried dishes, but it is not typically described as a 'wok-like pan' nor primarily associated with 'rapid cooking' in the way a wok is. The characterization of tawa as 'wok-like' is inaccurate. Additionally, 'bhunao' (a stir-fry/reduction technique) listed as a wrong answer could itself be considered a valid answer to a question about rapid high-heat Indian cooking.
- **Action:** fix

**[HARD]** Which European country is credited with inventing the waffle, with evidence of waffle-making dating back to medieval times?
- **Marked correct:** Belgium
- **Should be:** Belgium
- **Wrong options:** Netherlands | France | Germany
- **Problem:** The historical origin of the waffle is not definitively credited to Belgium. Medieval waffle-making is documented across multiple Northern European countries including France and the Netherlands. Belgium is famous for waffles but crediting it as the inventor is not historically verifiable.
- **Action:** fix

**[HARD]** Which French pastry chef is credited with refining the macaron into its modern sandwich form in the early 20th century?
- **Marked correct:** Pierre Hermé or Ladurée (Ladurée refined the sandwich macaron in the 1930s)
- **Should be:** Ladurée (Pierre Desfontaines)
- **Wrong options:** Jacques Genin | Christophe Michalak | Dominique Persoone
- **Fixed wrong options:** Pierre Hermé | Jacques Genin | Christophe Michalak
- **Problem:** The correct answer lists both 'Pierre Hermé or Ladurée,' which is contradictory and confusing as a trivia answer. More critically, the sandwich macaron is credited to Louis Ernest Ladurée (or his cousin Pierre Desfontaines) around 1930, not Pierre Hermé, who is a modern chef. Having two names as the answer is not suitable for a trivia question.
- **Action:** fix

**[HARD]** Which Latin American cured and dried meat, made from beef or horse, is traditionally sliced thin and served as a snack or appetizer?
- **Marked correct:** Charqui
- **Should be:** Charqui
- **Wrong options:** Cecina | Carne asada | Barbacoa
- **Fixed wrong options:** Carne asada | Barbacoa | Chicharrón
- **Problem:** Cecina is listed as a wrong answer, but cecina is also a legitimate Latin American cured/dried meat (especially in Mexico), making it a potentially correct answer to the question. The question also describes charqui as specifically 'sliced thin and served as a snack,' but charqui is typically eaten as dried strips, not necessarily thinly sliced like prosciutto.
- **Action:** fix

**[HARD]** What is the name of the French technique where a sauce is finished by whisking in cold butter to create a glossy, emulsified finish?
- **Marked correct:** Beurre blanc or Monter au beurre
- **Should be:** Monter au beurre
- **Wrong options:** Roux | Gastrique | Glace
- **Problem:** The correct answer lists both 'Beurre blanc' and 'Monter au beurre' as if they are the same thing, but they are distinct. Monter au beurre is the technique of whisking butter into any sauce; beurre blanc is a specific sauce made with wine and shallots finished with butter. The question asks about a technique, so 'monter au beurre' is the more precise answer.
- **Action:** fix

**[HARD]** Which French cooking technique involves cooking food in a sealed pot with minimal liquid, allowing it to cook in its own steam and juices?
- **Marked correct:** Braising
- **Should be:** En cocotte (or étuvée)
- **Wrong options:** Poaching | Steaming | Confiting
- **Fixed wrong options:** Braising | Poaching | Confiting
- **Problem:** The question describes 'cooking in a sealed pot with minimal liquid, allowing it to cook in its own steam and juices,' which more accurately describes 'en cocotte' or 'étuvée' than braising. Braising typically uses a significant amount of liquid and is not exclusively a French technique. The description better fits étuvée (sweating/cooking in own juices) or en cocotte.
- **Action:** fix

**[HARD]** What is the name of the protein found in wheat that gives dough its elastic structure and is responsible for gluten networks?
- **Marked correct:** Glutenin
- **Should be:** Glutenin and Gliadin (together forming gluten)
- **Wrong options:** Gliadin | Prolamin | Albumin
- **Fixed wrong options:** Prolamin | Albumin | Zein
- **Problem:** Both glutenin AND gliadin are required to form gluten and contribute to dough structure. Glutenin alone is not 'the protein responsible for gluten networks.' Gluten is formed by the combination of glutenin (elasticity) and gliadin (extensibility). Listing gliadin as a wrong answer is incorrect because gliadin is equally part of gluten network formation.
- **Action:** fix

**[HARD]** What is the name of the Italian emulsion sauce made from egg yolks, oil, and traditionally used to accompany boiled meats?
- **Marked correct:** Salsa verde
- **Should be:** Salsa verde
- **Wrong options:** Aioli | Pesto | Agrodolce
- **Fixed wrong options:** Aioli | Pesto | Agrodolce
- **Problem:** The question asks for 'an Italian emulsion sauce made from egg yolks and oil,' but then gives 'Salsa verde' as the correct answer — which is not an emulsion sauce and contains no egg yolks. The correct answer to the question as written would be 'Maionese' (mayonnaise) or 'Salsa tonnata.' The explanation even contradicts the question by correctly describing salsa verde as herb-based.
- **Action:** fix

**[HARD]** In what year did the Michelin Guide first introduce its three-star rating system?
- **Marked correct:** 1926
- **Should be:** 1933
- **Wrong options:** 1920 | 1933 | 1931
- **Fixed wrong options:** 1920 | 1926 | 1900
- **Problem:** The Michelin Guide introduced single-star ratings in 1926, but the full three-star system was not completed until 1933. In 1926 only one star was introduced; two and three stars were added in 1931 and 1933 respectively.
- **Action:** fix

**[HARD]** In what year was Champagne legally defined to be produced only in the Champagne region of France?
- **Marked correct:** 1891
- **Should be:** 1891
- **Wrong options:** 1905 | 1887 | 1900
- **Problem:** The legal protection of Champagne is complex and multi-staged. The 1891 Treaty of Madrid gave some international protection to regional wine names, but France's own domestic laws defining the Champagne appellation came later (1908, 1919, 1927). Stating 1891 as the definitive year is contested and potentially misleading.
- **Action:** fix

**[HARD]** Which molecular compound, naturally occurring in aged wines and spirits, is responsible for the smooth, warming sensation on the palate?
- **Marked correct:** Tannins
- **Should be:** Glycerol
- **Wrong options:** Esters | Aldehydes | Ketones
- **Fixed wrong options:** Tannins | Esters | Aldehydes
- **Problem:** Tannins cause astringency and dryness, not a 'smooth, warming sensation.' The smooth, warming sensation in aged wines and spirits is more accurately attributed to ethanol and glycerol. Tannins are also not accurately described as 'molecular compounds' in the same sense as esters or ketones—they are large polyphenolic polymers. The question's premise is factually incorrect.
- **Action:** fix

**[HARD]** What is the name of the traditional Korean fermentation technique where vegetables are preserved in a seasoned brine with chili peppers and garlic?
- **Marked correct:** Kimjang
- **Should be:** Lacto-fermentation
- **Wrong options:** Banchan | Jeotgal | Jangajji
- **Fixed wrong options:** Kimjang | Jeotgal | Jangajji
- **Problem:** Kimjang is the communal tradition of making kimchi, not a 'fermentation technique' for preserving vegetables. The actual fermentation technique used to make kimchi is called 'lacto-fermentation.' The question conflates a cultural practice with a culinary/scientific method.
- **Action:** fix

**[HARD]** In classical French cuisine, what is the name of the dish consisting of boned chicken stuffed with forcemeat and poached in stock?
- **Marked correct:** Ballottine
- **Should be:** Ballottine
- **Wrong options:** Paupiette | Roulade | Galantine
- **Fixed wrong options:** Paupiette | Roulade | Chaudfroid
- **Problem:** Both 'ballottine' and 'galantine' involve boned poultry stuffed with forcemeat. The distinction (hot vs. cold service) is valid but the question does not specify 'served hot,' making it ambiguous. Additionally, a galantine is also technically 'poached in stock,' so the wrong answer 'galantine' could reasonably fit the question as worded.
- **Action:** fix

**[HARD]** Which ingredient, when added to egg whites before whipping, increases their volume and stability by interfering with protein bonding?
- **Marked correct:** Cream of tartar
- **Should be:** Cream of tartar
- **Wrong options:** Baking soda | Lemon juice | Salt
- **Fixed wrong options:** Baking soda | Vegetable oil | Salt
- **Problem:** Lemon juice (an acid) works in essentially the same way as cream of tartar to stabilize egg white foams by lowering pH. Including it as a wrong answer is misleading since it is also a valid answer to the question as worded.
- **Action:** fix

**[HARD]** What is the name of the technique where meat is cured with salt and nitrates, traditionally used in the production of bacon and salami?
- **Marked correct:** Curing
- **Should be:** Curing
- **Wrong options:** Brining | Smoking | Aging
- **Fixed wrong options:** Marinating | Smoking | Aging
- **Problem:** The question asks for the name of the technique but 'Curing' is a broad category, not a specific named technique. More importantly, 'Brining' is listed as a wrong answer, but brining (wet curing) is itself a form of curing—making it a potentially contaminating answer. The distinction between dry curing and brining needs clarification.
- **Action:** fix

**[HARD]** In French pastry, what is the name of the thin, crispy wafer cookie often served with ice cream or mousse?
- **Marked correct:** Tuile
- **Should be:** Tuile
- **Wrong options:** Macaron | Financier | Langues de chat
- **Fixed wrong options:** Macaron | Financier | Madeleine
- **Problem:** Langues de chat are thin, crispy wafer-like cookies also often served with ice cream or mousse, making them a plausible correct answer to the question as worded. The question should be more specific to tuiles (curved shape) to eliminate this ambiguity.
- **Action:** fix

**[HARD]** Which Italian region is the origin of Parmigiano-Reggiano cheese, produced exclusively in a legally defined area?
- **Marked correct:** Emilia-Romagna
- **Should be:** Emilia-Romagna
- **Wrong options:** Lombardy | Piedmont | Veneto
- **Fixed wrong options:** Lombardy | Piedmont | Veneto
- **Problem:** Parmigiano-Reggiano PDO production area includes the province of Mantua (in Lombardy, on the right bank of the Po River) in addition to the Emilia-Romagna provinces. Stating it is produced 'exclusively' in Emilia-Romagna is technically incorrect.
- **Action:** fix

**[HARD]** In what year did the sous-vide cooking method gain widespread popularity in modern cuisine, largely due to advances in immersion circulator technology?
- **Marked correct:** 2000s
- **Should be:** 2000s
- **Wrong options:** 1980s | 1990s | 1970s
- **Fixed wrong options:** 1980s | 1990s | 1970s
- **Problem:** The answer '2000s' is a decade, not a year, which is inconsistent with the question asking 'in what year.' The other answer choices are also decades, but using decade-ranges as answer options for a question phrased 'in what year' is poorly constructed and misleading.
- **Action:** fix

**[HARD]** Which cooking technique, common in Thai cuisine, involves cooking food over direct flame or charcoal with minimal oil?
- **Marked correct:** Charcoal grilling
- **Should be:** Charcoal grilling
- **Wrong options:** Deep-frying | Pan-searing | Steaming
- **Fixed wrong options:** Deep-frying | Pan-searing | Steaming
- **Problem:** A 'kratip' (กระติ๊บ) is actually a sticky rice container, not a clay or metal stove used for grilling in Thai cuisine. The Thai charcoal grill is called a 'tao' (เตา). The explanation contains a factual error.
- **Action:** fix

**[HARD]** What is the name of the Spanish soup made from tomatoes, peppers, cucumbers, and served cold, particularly popular in Andalusia?
- **Marked correct:** Gazpacho
- **Should be:** Gazpacho
- **Wrong options:** Ajoblanco | Salmorejo | Porra
- **Fixed wrong options:** Ajoblanco | Vichyssoise | Bouillabaisse
- **Problem:** Salmorejo and Porra are both cold tomato-based soups from Andalusia that could reasonably fit the question's description of a Spanish soup made from tomatoes, peppers, and cucumbers served cold. The question needs to be more specific to distinguish gazpacho.
- **Action:** fix

**[HARD]** Which ingredient, when combined with acid, causes baking soda to produce carbon dioxide gas, leavening baked goods?
- **Marked correct:** Acid (buttermilk, yogurt, or lemon juice)
- **Should be:** Acid (buttermilk, yogurt, or lemon juice)
- **Wrong options:** Salt | Sugar | Fat
- **Fixed wrong options:** Salt | Sugar | Fat
- **Problem:** The correct answer 'Acid (buttermilk, yogurt, or lemon juice)' is not a single ingredient but a category with examples, making it an awkward and non-standard answer choice. The question also essentially states the answer within itself ('when combined with acid'), making it circular and poorly constructed.
- **Action:** fix

**[HARD]** In French cuisine, what is the name of the brown stock made by simmering roasted bones with vegetables and aromatics for extended periods?
- **Marked correct:** Fond
- **Should be:** Fonds brun
- **Wrong options:** Bouillon | Consommé | Jus
- **Fixed wrong options:** Bouillon | Consommé | Jus
- **Problem:** The question asks for the brown stock made from roasted bones, which is properly called 'Estouffade' or more commonly 'brown stock' / 'fonds brun'. 'Fond' is a generic French term for stock/foundation, not specifically the brown stock. More critically, the explanation itself contradicts the answer by noting 'fond' refers to pan drippings. The correct specific term for brown stock made from roasted bones is 'Fonds brun' or 'Estouffade'.
- **Action:** fix

**[HARD]** Which amino acid is responsible for the umami taste and is the primary component of MSG (monosodium glutamate)?
- **Marked correct:** Glutamate
- **Wrong options:** Aspartate | Inosinate | Guanylate
- **Problem:** Inosinate and guanylate listed as wrong answers are actually nucleotides, not amino acids, so they are genuinely wrong answers. However, the question asks which amino acid is the 'primary component' of MSG — glutamate is technically correct, but it is worth noting glutamate is an amino acid/anion while glutamic acid is the amino acid; MSG is the sodium salt of glutamic acid. The answer is acceptable but the explanation could be clearer.
- **Action:** fix

**[HARD]** Which spice, derived from the bark of a cinnamon tree native to Sri Lanka, is botanically distinct from cassia cinnamon?
- **Marked correct:** Ceylon cinnamon
- **Wrong options:** Saigon cinnamon | Indonesian cinnamon | Vietnamese cinnamon
- **Fixed wrong options:** Saigon cinnamon | Indonesian cinnamon | Korintje cinnamon
- **Problem:** Saigon cinnamon and Vietnamese cinnamon listed as separate wrong answers are the same thing — Saigon cinnamon IS Vietnamese cinnamon (Cinnamomum loureiroi). These cannot both be wrong answers.
- **Action:** fix

**[HARD]** What is the scientific name of the microorganism that produces lactic acid in traditional yogurt fermentation?
- **Marked correct:** Lactobacillus bulgaricus
- **Should be:** Lactobacillus bulgaricus
- **Wrong options:** Streptococcus thermophilus | Lactobacillus acidophilus | Bifidobacterium longum
- **Fixed wrong options:** Lactobacillus acidophilus | Bifidobacterium longum | Leuconostoc mesenteroides
- **Problem:** The question asks for 'the microorganism that produces lactic acid in traditional yogurt fermentation,' but both Lactobacillus bulgaricus AND Streptococcus thermophilus (listed as a wrong answer) produce lactic acid and are both required by international standards. Streptococcus thermophilus is also a lactic acid producer in yogurt, making it a contaminated wrong answer.
- **Action:** fix

**[HARD]** Which enzyme, present in uncooked pineapple, breaks down proteins and prevents gelatin from setting?
- **Marked correct:** Bromelain
- **Wrong options:** Papain | Ficain | Actinidin
- **Fixed wrong options:** Amylase | Lipase | Lactase
- **Problem:** Papain (from papaya), ficain (from figs), and actinidin (from kiwi) are all proteolytic enzymes that also break down proteins and can prevent gelatin from setting. Papain in particular is well-known for this property and is used commercially as a meat tenderizer, making it a contaminated wrong answer.
- **Action:** fix

**[HARD]** Which French cooking technique involves briefly blanching food, then immediately plunging it into ice water to stop cooking?
- **Marked correct:** Chilling or Shocking
- **Should be:** Shocking (Rafraîchir)
- **Wrong options:** Braising | Poaching | Glazing
- **Fixed wrong options:** Braising | Poaching | Glazing
- **Problem:** The correct answer 'Chilling or Shocking' is awkward phrasing for a trivia answer, and the technique described (blanching then plunging into ice water) is specifically called 'shocking' or the whole two-step process is 'blanching.' The question labels it a 'French cooking technique' but shocking/refreshing is the correct culinary term. The French term is 'rafraîchir' (to refresh/shock). The answer should be more precise.
- **Action:** fix

**[HARD]** Which herb, also known as Petroselinum crispum, is the most widely used culinary herb globally by weight?
- **Marked correct:** Parsley
- **Wrong options:** Basil | Oregano | Coriander
- **Problem:** The claim that parsley is 'the most widely used culinary herb globally by weight' is dubious and difficult to verify. Coriander (cilantro) and onion/garlic family herbs arguably compete for this title, and various sources differ. This factual claim is unverifiable and contestable.
- **Action:** fix

**[HARD]** What is the name of the Spanish cooking method that involves cooking food in its own fat at low temperatures, commonly used with garlic or fish?
- **Marked correct:** Confit
- **Wrong options:** Escabeche | Sofrito | Piperade
- **Problem:** Confit is a French technique, not a Spanish one. While it is used in Spanish cuisine, calling it a 'Spanish cooking method' is misleading and inaccurate. The question should identify it as a French technique used in Spanish cooking, or simply as a classical French technique.
- **Action:** fix

**[HARD]** Which cooking method, involving rapid heat transfer through a liquid medium, is called 'thermalization' in professional kitchens?
- **Marked correct:** Sous-vide cooking
- **Wrong options:** Steam cooking | Boiling | Pressure cooking
- **Problem:** The claim that sous-vide cooking is called 'thermalization' in professional kitchens is not accurate or verifiable. 'Thermalization' is not a recognized professional culinary term for sous-vide. Sous-vide is simply called 'sous-vide' in professional kitchens. This appears to be an invented or confused term.
- **Action:** fix

**[HARD]** In French culinary tradition, what is the term for a reduction of wine and stock used as a base for brown sauces?
- **Marked correct:** Glace
- **Should be:** Demi-glace
- **Wrong options:** Gastrique | Coulis | Fond
- **Fixed wrong options:** Gastrique | Coulis | Velouté
- **Problem:** The question describes 'a reduction of wine and stock used as a base for brown sauces,' but 'Glace' (glace de viande) is a concentrated reduction of stock, not specifically wine and stock. A reduction of wine and stock is more accurately called a 'demi-glace' or an 'essence.' Additionally, 'Fond' is listed as a wrong answer but is genuinely a term for stock used in brown sauces, creating potential confusion.
- **Action:** fix

**[HARD]** What is the name of the white or pale blue veining in blue cheese, caused by the mold Penicillium roqueforti?
- **Marked correct:** Penicillium roqueforti
- **Should be:** Penicillium roqueforti
- **Wrong options:** Aspergillus fumigatus | Penicillium glaucum | Mucor miehei
- **Problem:** The question asks for the 'name of the white or pale blue veining' (implying a descriptive term or phenomenon), but the correct answer is simply the mold name 'Penicillium roqueforti', which is also what causes the veining rather than the name of the veining itself. The question is poorly structured since it conflates the name of the veining with the organism causing it.
- **Action:** fix

**[HARD]** Which cooking fat has the highest smoke point among common kitchen oils?
- **Marked correct:** Avocado oil
- **Should be:** Avocado oil
- **Wrong options:** Extra virgin olive oil | Coconut oil | Butter
- **Problem:** The question asks about 'common kitchen oils' but the explanation itself notes that refined avocado oil can reach even higher temperatures than the stated 520°F figure. Refined versions of other oils (e.g., refined safflower or refined rice bran oil) also rival or exceed avocado oil's smoke point, making this answer contestable depending on whether refined forms are included.
- **Action:** fix

**[HARD]** Which French sauce, made with egg yolks and butter, can break if the temperature exceeds 160°F (71°C)?
- **Marked correct:** Hollandaise
- **Should be:** Hollandaise
- **Wrong options:** Béarnaise | Maltaise | Choron
- **Fixed wrong options:** Velouté | Béchamel | Espagnole
- **Problem:** Béarnaise is a derivative of Hollandaise (also an egg yolk and butter emulsified sauce) and would also break above similar temperatures. Maltaise and Choron are likewise derivatives of Hollandaise with the same heat sensitivity, making all wrong answers arguably also correct answers to the question as asked.
- **Action:** fix

**[HARD]** What is the name of the cooking technique where food is cooked in a covered pot with minimal liquid, creating steam?
- **Marked correct:** Braising
- **Should be:** Braising
- **Wrong options:** Stewing | Poaching | Simmering
- **Problem:** Stewing is extremely similar to braising — both involve cooking in a covered pot with liquid and steam. The key distinction (braising uses larger cuts with less liquid, stewing uses smaller pieces submerged in more liquid) is subtle and may not be apparent from the question wording alone, creating potential ambiguity.
- **Action:** fix

**[HARD]** In molecular gastronomy, what is the term for the technique of creating foam using lecithin and an immersion blender?
- **Marked correct:** Spherification or Foaming
- **Should be:** Foaming
- **Wrong options:** Gelatinization | Emulsification | Crystallization
- **Problem:** The correct answer 'Spherification or Foaming' is problematic — spherification and foaming are two entirely different techniques. The question specifically asks about creating foam using lecithin and an immersion blender, so the answer should be 'Foaming' (or 'Air' in Ferran Adrià's terminology), not 'Spherification or Foaming'.
- **Action:** fix

**[HARD]** What is the minimum percentage of alcohol by volume required for a beverage to be labeled as wine in most countries?
- **Marked correct:** 11.5%
- **Should be:** 8.5%
- **Wrong options:** 12.5% | 10% | 13%
- **Fixed wrong options:** 11.5% | 12.5% | 5%
- **Problem:** There is no universal minimum ABV of 11.5% for wine across most countries. EU regulations set a minimum of 8.5% ABV for most wines, and the US TTB allows wine as low as 7% ABV. The 11.5% figure is not a widely recognized international standard.
- **Action:** fix

**[HARD]** In fermentation, which beneficial bacteria species is most commonly used in sourdough bread production?
- **Marked correct:** Lactobacillus plantarum
- **Should be:** Lactobacillus sanfranciscensis
- **Wrong options:** Saccharomyces cerevisiae | Lactobacillus bulgaricus | Leuconostoc mesenteroides
- **Fixed wrong options:** Lactobacillus bulgaricus | Leuconostoc mesenteroides | Bacillus subtilis
- **Problem:** Sourdough fermentation involves a complex community of bacteria; no single species is definitively 'most commonly used.' Lactobacillus sanfranciscensis (now Fructilactobacillus sanfranciscensis) is widely cited in literature as the dominant sourdough bacterium, and Saccharomyces cerevisiae (listed as a wrong answer) is also a genuine and essential participant in sourdough fermentation.
- **Action:** fix

**[HARD]** Which protein, found abundantly in egg whites, was the first protein to be crystallized in a laboratory setting in 1926?
- **Marked correct:** Lysozyme
- **Should be:** Ovalbumin
- **Wrong options:** Ovalbumin | Pepsin | Trypsin
- **Problem:** The first protein crystallized was urease, achieved by James B. Sumner in 1926, not lysozyme. Lysozyme was the first enzyme to have its 3D structure solved by X-ray crystallography (1965, by David Phillips), which is a different milestone. The explanation also incorrectly attributes urease's crystallization to lysozyme.
- **Action:** fix

**[HARD]** What is the name of the Japanese cooking technique involving the slow, careful heating of ingredients to precisely controlled temperatures, often used in dashi preparation?
- **Marked correct:** Yosenabe
- **Wrong options:** Nitsuke | Nimono | Yoton
- **Problem:** Yosenabe is not a precise temperature-control technique for dashi preparation — it is a type of Japanese hot pot dish (a variety of nabemono). The explanation's claim that yosenabe refers to careful temperature-controlled dashi-making is invented and unverifiable.
- **Action:** delete

**[HARD]** Which ingredient, derived from red algae, is commonly used as a gelling agent in molecular cuisine and traditional cooking?
- **Marked correct:** Agar-agar
- **Should be:** Agar-agar
- **Wrong options:** Carrageenan | Gelatin | Pectin
- **Fixed wrong options:** Gelatin | Pectin | Xanthan gum
- **Problem:** Carrageenan is also derived from red algae and is also used as a gelling/thickening agent in both traditional and molecular cooking, making it a valid alternative correct answer to the question as worded.
- **Action:** fix

**[HARD]** What is the name of the Japanese fermentation process that uses koji mold to break down proteins into amino acids, essential in making miso and soy sauce?
- **Marked correct:** Koji fermentation
- **Should be:** Koji fermentation
- **Wrong options:** Aspergillus fermentation | Rhizopus fermentation | Saccharomyces fermentation
- **Fixed wrong options:** Rhizopus fermentation | Saccharomyces fermentation | Lactobacillus fermentation
- **Problem:** The correct answer 'Koji fermentation' and wrong answer 'Aspergillus fermentation' are functionally equivalent — koji mold IS Aspergillus oryzae, making the wrong answer also essentially correct. The question conflates the process name with the organism name in a confusing way.
- **Action:** fix

**[HARD]** Which French chef, known as 'the father of nouvelle cuisine,' published 'Escoffier: Guide Culinaire' in 1903?
- **Marked correct:** Auguste Escoffier
- **Should be:** Auguste Escoffier
- **Wrong options:** Paul Bocuse | Jacques Pépin | Fernand Point
- **Fixed wrong options:** Paul Bocuse | Jacques Pépin | Fernand Point
- **Problem:** Escoffier is NOT known as 'the father of nouvelle cuisine' — he is known as the 'father of modern French cuisine' or 'king of chefs.' Nouvelle cuisine is associated with chefs like Paul Bocuse, Michel Guérard, and the Troisgros brothers in the 1970s.
- **Action:** fix

**[HARD]** In Italian cuisine, what is the name of the traditional emulsion sauce made from raw egg yolks, lemon juice or vinegar, and oil, similar to mayonnaise?
- **Marked correct:** Zabaglione
- **Should be:** Aioli
- **Wrong options:** Salsa verde | Agrodolce | Bagna cauda
- **Fixed wrong options:** Salsa verde | Agrodolce | Bagna cauda
- **Problem:** Zabaglione is not a savoury emulsion sauce — it is a sweet Italian dessert custard made with egg yolks, sugar, and Marsala wine. The question describes something closer to aioli or Italian mayonnaise, not zabaglione. The explanation even acknowledges the answer is wrong.
- **Action:** fix

**[HARD]** Which traditional Chinese cooking technique involves briefly immersing food in rapidly boiling liquid before immediately plunging it into ice water?
- **Marked correct:** Blanching
- **Should be:** Blanching
- **Wrong options:** Poaching | Steaming | Braising
- **Fixed wrong options:** Poaching | Steaming | Braising
- **Problem:** Blanching is not specifically a 'traditional Chinese cooking technique' — it is a universal culinary technique used worldwide. The question misleadingly frames a global technique as uniquely Chinese, and the Chinese terms cited ('chuan-kao' or 'bao') refer to different techniques.
- **Action:** fix

**[HARD]** What is the name of the traditional Spanish cooking pot, typically made of clay, used for making paella and other rice dishes?
- **Marked correct:** Paellera
- **Should be:** Paellera
- **Wrong options:** Cazuela | Cocotte | Tagine
- **Fixed wrong options:** Cazuela | Cocotte | Tagine
- **Problem:** A paellera is NOT typically made of clay — it is traditionally made of carbon steel or polished steel. The clay cooking pot used in Spanish cuisine is a 'cazuela,' which is listed as a wrong answer. The explanation also contradicts the question by describing a 'pan' not a 'pot.'
- **Action:** fix

**[HARD]** Which aromatic compound, responsible for the distinctive smell of saffron, is called safranal and develops during the drying process?
- **Marked correct:** Safranal
- **Should be:** Safranal
- **Wrong options:** Crocin | Picrocrocin | Kaempferol
- **Fixed wrong options:** Crocin | Picrocrocin | Kaempferol
- **Problem:** The question asks for the compound 'responsible for the distinctive smell of saffron' and then names it in the question itself ('called safranal'), making the answer trivially derivable from the question. This is a poor trivia question structure.
- **Action:** fix

**[HARD]** What is the name of the Japanese technique for cooking rice where each grain absorbs water evenly, resulting in perfectly cooked, separated grains?
- **Marked correct:** Absorption method
- **Should be:** Absorption method
- **Wrong options:** Pilaf method | Risotto method | Boiling method
- **Fixed wrong options:** Pilaf method | Risotto method | Boiling method
- **Problem:** The 'absorption method' is not uniquely Japanese — it is the standard rice-cooking method used across Asia and much of the world. Framing it as a specifically Japanese technique is misleading and the question is overly generic for a hard trivia question.
- **Action:** fix

**[HARD]** In French culinary tradition, what is the name of the clear, flavoured aspic or meat jelly made by reducing stock until it reaches a gelatinous consistency?
- **Marked correct:** Glace de viande
- **Should be:** Glace de viande
- **Wrong options:** Consommé | Aspic | Fond
- **Fixed wrong options:** Consommé | Aspic | Fond
- **Problem:** The question describes 'glace de viande' but the question text incorrectly calls it a 'clear, flavoured aspic or meat jelly' — glace de viande is a highly concentrated meat glaze/reduction, distinct from aspic (which is stock set with gelatin used to coat or mold foods). 'Aspic' is listed as a wrong answer but could be confused with the description given.
- **Action:** fix

**[HARD]** Which enzyme, found in pineapple stems, breaks down proteins and is used as a natural meat tenderizer in Caribbean cuisine?
- **Marked correct:** Bromelain
- **Should be:** Bromelain
- **Wrong options:** Papain | Amylase | Protease
- **Fixed wrong options:** Papain | Amylase | Ficin
- **Problem:** Protease is listed as a wrong answer, but bromelain IS a protease (a proteolytic enzyme). 'Protease' is a broader category that includes bromelain, making this wrong answer also technically correct and potentially confusing.
- **Action:** fix

**[HARD]** What is the name of the traditional Persian cooking technique where meat is cooked slowly in a sealed clay pot with dried fruits and spices?
- **Marked correct:** Khoresht
- **Should be:** Khoresht
- **Wrong options:** Tandoori | Tagine | Biryani
- **Fixed wrong options:** Tandoori | Tagine | Biryani
- **Problem:** Khoresht is described as a 'technique' involving a 'sealed clay pot' but khoresht is actually a category of Persian stew/braise — it is a dish type, not specifically a cooking technique, and the sealed clay pot description is not accurate or defining for khoresht.
- **Action:** fix

**[HARD]** Which amino acid, abundant in aged wines and certain cheeses, contributes to umami taste and is formed through protein degradation during aging?
- **Marked correct:** Aspartate
- **Should be:** Glutamate
- **Wrong options:** Leucine | Valine | Proline
- **Fixed wrong options:** Leucine | Valine | Proline
- **Problem:** The primary amino acid responsible for umami taste is glutamate, not aspartate. While aspartate has some umami activity, identifying aspartate as the primary umami-contributing amino acid in aged wines and cheeses is factually incorrect and misleading.
- **Action:** fix

**[HARD]** In molecular cuisine, what is the name of the technique using sodium chloride and calcium alginate to create thick-walled spheres, opposite of basic spherification?
- **Marked correct:** Reverse spherification
- **Should be:** Reverse spherification
- **Wrong options:** Inverse gelation | Counter-spherification | Backward algination
- **Fixed wrong options:** Inverse gelation | Counter-spherification | Backward algination
- **Problem:** Reverse spherification uses a calcium-containing liquid dropped into a sodium alginate bath — NOT sodium chloride. The question incorrectly states 'sodium chloride and calcium alginate.' Reverse spherification uses calcium lactate (or calcium chloride) in the ingredient and sodium alginate in the bath.
- **Action:** fix

**[HARD]** Which French culinary term describes the technique of removing the outer layer of skin from tomatoes by briefly blanching and shocking them?
- **Marked correct:** Concasser
- **Should be:** Monder
- **Wrong options:** Parer | Émincer | Ciseler
- **Fixed wrong options:** Concasser | Émincer | Ciseler
- **Problem:** Concasser means to roughly chop or crush, and 'tomato concassé' refers to peeled, seeded, and diced tomatoes — but the technique of removing skin by blanching and shocking is specifically called 'peeling' or 'émonder/monder' in French. Concasser is not the term that describes the blanching-and-shocking skin-removal technique specifically.
- **Action:** fix

**[HARD]** What is the name of the traditional Nordic preservation method using salt and fermentation to create dishes like gravlax without smoking or heating?
- **Marked correct:** Curing
- **Wrong options:** Smoking | Salting | Brining
- **Problem:** The question asks for a 'traditional Nordic preservation method' but the correct answer 'Curing' is a generic, worldwide technique, not specifically Nordic. Additionally, 'Salting' and 'Brining' are arguably forms of curing, making the distinctions between answers unclear and the question ambiguous.
- **Action:** fix

**[HARD]** In classical French cuisine, what is the name of the cooking fat rendered from duck or goose used traditionally for confit preparation?
- **Marked correct:** Schmaltz
- **Should be:** Duck fat (graisse de canard)
- **Wrong options:** Crème fraîche | Beurre blanc | Fond
- **Fixed wrong options:** Schmaltz | Beurre blanc | Fond
- **Problem:** Schmaltz is specifically rendered chicken or goose fat in Jewish culinary tradition, not the French culinary term for duck or goose fat used in confit. The correct French term for rendered duck fat is 'graisse de canard' or more generally the fat is simply called duck fat; schmaltz is not a French culinary term and is not associated with classical French cuisine.
- **Action:** fix

**[HARD]** What is the name of the traditional Thai cooking paste made from chilies, garlic, shallots, galangal, and lemongrass, used as a base for curries?
- **Marked correct:** Curry paste
- **Should be:** Nam phrik phao
- **Wrong options:** Sambal | Harissa | Garam masala
- **Fixed wrong options:** Sambal | Harissa | Garam masala
- **Problem:** The answer 'Curry paste' is a generic descriptor rather than the name of a specific paste, making this a trivially easy question mislabeled as hard. The question describes specific ingredients (galangal, lemongrass, etc.) that could point to a specific type, and the answer is not a proper culinary name.
- **Action:** fix

**[HARD]** In what year did the restaurant Noma in Copenhagen first achieve three Michelin stars, becoming a symbol of the Nordic cuisine movement?
- **Marked correct:** 2007
- **Should be:** 2007
- **Wrong options:** 2005 | 2010 | 2003
- **Fixed wrong options:** 2005 | 2010 | 2003
- **Problem:** Noma never received three Michelin stars — it held a maximum of two Michelin stars. The claim that it received three Michelin stars in 2007 is factually incorrect. Noma received its first Michelin star in 2006 and its second in 2007.
- **Action:** fix

### GENERAL (186 issues)

**[EASY]** Which gas do plants primarily absorb from the atmosphere?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many sides does a hexagon have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Italy?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the Declaration of Independence signed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who wrote 'Romeo and Juliet'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is known as the Red Planet?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many continents are there?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many sides does a hexagon have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Spain?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did World War II end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who wrote 'Pride and Prejudice'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is the Eiffel Tower located in?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical formula for table salt?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Christopher Columbus reach the Americas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which mountain is the highest in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the speed of light in vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the smallest bone in the human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who wrote 'Pride and Prejudice'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the currency of the United Kingdom?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the American Civil War end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many continents are there?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to the Great Wall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the most spoken language in the world by native speakers?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the boiling point of water at sea level in Celsius?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the largest mammal in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which artist cut off part of his own ear?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many sides does a hexagon have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Brazil?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the Declaration of Independence signed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the largest mammal in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to the Great Barrier Reef?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the currency of the United Kingdom?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the largest ocean on Earth?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did World War II end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many continents are there?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who painted the Mona Lisa?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Japan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is known as the Red Planet?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is the Eiffel Tower located in?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the iPhone first launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many chambers does a human heart have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Canada?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the moon landing occur?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does HTML stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who painted the Mona Lisa?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the iPhone first launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the iPhone first launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is the Eiffel Tower located in?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which element has the chemical symbol 'Au'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who painted the Mona Lisa?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the largest planet in our solar system?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which ocean is the largest?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many bones are in the adult human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Japan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the largest internal organ in the human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the smallest bone in the human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the deepest ocean trench in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the smallest bone in the human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which country gifted the Statue of Liberty to the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the speed of light in a vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many bones does an adult human have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which artist cut off part of his own ear?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which planet is known as the 'Red Planet'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many sides does a hexagon have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the smallest unit of life?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which artist cut off part of his own ear?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who wrote 'Pride and Prejudice'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many continents are there?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Japan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which planet in our solar system has the most moons?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which artist cut off part of his own ear?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which element has the chemical symbol 'Au'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many bones are in the adult human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the chemical formula for table salt?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many sides does a hexagon have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which country is home to the Great Wall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the speed of light in a vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many continents are there?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which gas makes up approximately 78% of Earth's atmosphere?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which planet in our solar system has the most moons?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which country is home to the Great Barrier Reef?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who wrote the novel 'Pride and Prejudice'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which vitamin is produced by the skin when exposed to sunlight?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Canada?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the largest ocean on Earth?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the chemical formula for table salt?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many continents are there?
- **Marked correct:** 7
- **Wrong options:** 5 | 6 | 8
- **Problem:** The number of continents depends on the model used: some models recognize 5, 6, or 7 continents (e.g., Europe and Asia are combined as Eurasia in some systems, and the Americas are combined in others). The question should specify the model or context to avoid ambiguity.
- **Action:** fix

**[EASY]** Who is credited with inventing the light bulb?
- **Marked correct:** Thomas Edison
- **Wrong options:** Nikola Tesla | Joseph Swan | Hiram Maxim
- **Fixed wrong options:** Nikola Tesla | Hiram Maxim | Alexander Graham Bell
- **Problem:** Joseph Swan (listed as a wrong answer) independently invented a working incandescent light bulb around the same time as Edison and is co-credited in many historical accounts, making him a genuinely correct answer. This constitutes wrong answer contamination.
- **Action:** fix

**[EASY]** In what year did the Internet become publicly available?
- **Marked correct:** 1991
- **Should be:** 1991
- **Wrong options:** 1989 | 1993 | 1995
- **Problem:** The question conflates the Internet with the World Wide Web. The Internet (as a public network) predates 1991; the WWW became publicly available in 1991. The explanation correctly describes the WWW but the question asks about 'the Internet,' making the answer misleading.
- **Action:** fix

**[EASY]** Which country is the birthplace of pizza?
- **Marked correct:** Italy
- **Wrong options:** Greece | Turkey | Spain
- **Problem:** The explanation incorrectly states Margherita pizza originated in the 18th century — it was created in 1889 (19th century). Additionally, the question asks about the 'birthplace of pizza' which is broadly accepted as Italy/Naples, but the explanation contains a factual error that should be corrected.
- **Action:** fix

**[EASY]** In what year did the Renaissance begin in Italy?
- **Marked correct:** 14th century
- **Wrong options:** 13th century | 15th century | 12th century
- **Problem:** The question asks 'In what year' but the correct answer is '14th century', which is a century, not a year. The question format and answer format are mismatched, making this confusing and potentially misleading.
- **Action:** fix

**[EASY]** In what year was the Internet made publicly available?
- **Marked correct:** 1991
- **Wrong options:** 1989 | 1993 | 1995
- **Problem:** The question conflates 'the Internet' with 'the World Wide Web.' The Internet (ARPANET) predates 1991 significantly. The World Wide Web was made publicly available in 1991, but the Internet itself was accessible before that. The question and explanation should specify 'the World Wide Web.'
- **Action:** fix

**[MEDIUM]** Which planet in our solar system has the most moons?
- **Marked correct:** Jupiter
- **Should be:** Saturn
- **Wrong options:** Saturn | Uranus | Neptune
- **Fixed wrong options:** Jupiter | Uranus | Neptune
- **Problem:** As of 2023, Saturn has more confirmed moons than Jupiter. Saturn has 146 confirmed moons while Jupiter has 95. The explanation even mentions Saturn's 146 count but contradicts itself by calling Jupiter the correct answer.
- **Action:** fix

**[MEDIUM]** In what year did the Gutenberg printing press revolutionize book production?
- **Marked correct:** 1440
- **Wrong options:** 1455 | 1470 | 1425
- **Problem:** The question asks when the Gutenberg press 'revolutionized book production,' which is vague. Gutenberg began developing his press around 1440, but the first major work (the Gutenberg Bible) was printed around 1455, which is also a wrong answer option. The ~1440 date for invention is reasonable but contested, making this ambiguous.
- **Action:** fix

**[MEDIUM]** Which scientist formulated the theory of evolution by natural selection?
- **Marked correct:** Charles Darwin
- **Should be:** Charles Darwin
- **Wrong options:** Alfred Russel Wallace | Jean-Baptiste Lamarck | Thomas Huxley
- **Fixed wrong options:** Jean-Baptiste Lamarck | Thomas Huxley | Gregor Mendel
- **Problem:** Alfred Russel Wallace independently and simultaneously formulated the theory of evolution by natural selection, co-presenting the theory with Darwin in 1858. Listing Wallace as a wrong answer is factually incorrect.
- **Action:** fix

**[MEDIUM]** Which metal is liquid at room temperature?
- **Marked correct:** Mercury
- **Wrong options:** Gallium | Cesium | Bromine
- **Fixed wrong options:** Gallium | Tungsten | Iron
- **Problem:** Gallium is also a metal that is liquid at or near room temperature (melting point ~29.8°C), and Cesium melts at ~28.5°C, making both plausible answers depending on the exact definition of 'room temperature.' The question should specify 'standard room temperature (20°C)' or note 'the only common metal liquid at room temperature' to exclude these edge cases. Additionally, Bromine is a non-metal/metalloid halogen, not a metal, so it should not appear in the wrong answers as it could confuse the question's framing.
- **Action:** fix

**[MEDIUM]** Which mammal is known to lay eggs?
- **Marked correct:** Platypus
- **Wrong options:** Kangaroo | Dolphin | Bat
- **Problem:** The platypus is correct, but the echidna is also an egg-laying mammal (monotreme) and is not listed as a wrong answer. The question asks 'which mammal' (singular), implying only one answer exists, but there are multiple egg-laying mammals. The question should be reworded to specify the most well-known or ask 'which of the following.'
- **Action:** fix

**[MEDIUM]** What is the longest river in the world?
- **Marked correct:** Nile River
- **Wrong options:** Amazon River | Yangtze River | Mississippi River
- **Problem:** The Nile vs. Amazon debate is scientifically contested. Some measurements place the Amazon as longer than the Nile depending on the source point used. While the Nile is traditionally cited as the longest, this is not universally settled and may mislead knowledgeable players.
- **Action:** fix

**[MEDIUM]** In what year did the Gutenberg printing press revolutionize publishing?
- **Marked correct:** 1440
- **Wrong options:** 1455 | 1420 | 1460
- **Fixed wrong options:** 1500 | 1420 | 1475
- **Problem:** The question asks what year the Gutenberg press 'revolutionized publishing,' but 1440 is an estimate for when Gutenberg began development, not a precise verified date. The more historically documented milestone is ~1455 (the Gutenberg Bible), which is listed as a wrong answer. The question is misleadingly framed around an approximate development date rather than a clear event.
- **Action:** fix

**[MEDIUM]** In which European country is the city of Prague located?
- **Marked correct:** Czech Republic
- **Wrong options:** Poland | Slovakia | Austria
- **Problem:** The Czech Republic officially rebranded its short-form name to 'Czechia' in 2016, though 'Czech Republic' remains a valid formal name. More importantly, the answer is still factually correct, but the explanation should acknowledge current naming conventions.
- **Action:** fix

**[MEDIUM]** What is the largest desert in the world?
- **Marked correct:** Antarctica
- **Wrong options:** Sahara | Arabian Desert | Gobi Desert
- **Problem:** The question asks for the 'largest desert' without specifying whether it means hot desert or all deserts. While Antarctica is the technically correct answer when all desert types are included, many people and sources cite the Sahara as the largest hot desert, making this question potentially ambiguous for a general audience.
- **Action:** fix

**[MEDIUM]** In what year was the World Wide Web invented?
- **Marked correct:** 1989
- **Wrong options:** 1985 | 1991 | 1993
- **Fixed wrong options:** 1985 | 1994 | 1993
- **Problem:** Berners-Lee submitted his proposal in 1989, but the Web was not fully operational until 1991. The '1991' wrong answer could be argued as correct since that is when the Web was actually implemented and made publicly available, making this question potentially unfair.
- **Action:** fix

**[MEDIUM]** What year did the Gutenberg printing press revolutionize printing?
- **Marked correct:** 1440
- **Should be:** circa 1450
- **Wrong options:** 1420 | 1460 | 1480
- **Fixed wrong options:** circa 1420 | circa 1380 | circa 1480
- **Problem:** The date of 1440 for Gutenberg's press is debated; historians generally place the development of his movable type printing press between approximately 1440 and 1450, with the famous Gutenberg Bible printed around 1455. The question's phrasing 'revolutionize printing' tied to a single year is imprecise.
- **Action:** fix

**[HARD]** What is the only letter that does not appear on the periodic table of elements?
- **Marked correct:** J
- **Wrong options:** Q | X | Z
- **Problem:** The question asks for the ONLY letter not appearing on the periodic table, but both J and Q are absent from all element symbols and element names. The claim that Q does not appear is also true, making the premise of a single unique answer false. However, the standard trivia answer is typically 'J' as the letter absent from element symbols; Q also does not appear in any element symbol, though it does appear in element names (e.g., Flerovium has no Q, but the claim about Q appearing via 'Quantum' in the explanation is nonsensical). In fact, both J and Q are absent from element symbols, making the wrong answer 'Q' potentially correct and the question ambiguous.
- **Action:** fix

**[HARD]** Which Scottish physicist won the Nobel Prize in Physics for discovering the neutron?
- **Marked correct:** James Chadwick
- **Should be:** James Chadwick
- **Wrong options:** Peter Higgs | Charles Barkla | John Logie Baird
- **Problem:** James Chadwick was English, not Scottish. He was born in Bollington, Cheshire, England. The question incorrectly identifies him as a Scottish physicist.
- **Action:** fix

**[HARD]** What is the name of the outermost layer of the Earth's atmosphere, where temperatures increase with altitude?
- **Marked correct:** Thermosphere
- **Should be:** Thermosphere
- **Wrong options:** Stratosphere | Mesosphere | Exosphere
- **Problem:** The question asks for the outermost layer where temperatures increase with altitude, but the correct answer given is 'Thermosphere' while listing 'Exosphere' as a wrong answer. The Exosphere is actually the outermost layer of Earth's atmosphere, not the Thermosphere. The thermosphere is correctly described as having increasing temperatures, but it is not the outermost layer.
- **Action:** fix

**[HARD]** In what year was the first successful transatlantic telegraph cable completed between Europe and North America?
- **Marked correct:** 1858
- **Should be:** 1858
- **Wrong options:** 1842 | 1865 | 1876
- **Problem:** The 1858 cable failed after only a few weeks of operation. The first permanently successful transatlantic telegraph cable was completed in 1866. The question calling 1858 'successful' is misleading and could be disputed.
- **Action:** fix

**[HARD]** In what year did the Library of Alexandria face its final significant destruction?
- **Marked correct:** 391
- **Wrong options:** 48 BCE | 642 CE | 1270
- **Problem:** The destruction of the Library of Alexandria is a historically contested topic with no single agreed-upon 'final' destruction date. The claim that 391 CE under Theodosius I was definitively the 'final significant destruction' is disputed by historians; many attribute significant destruction to the Arab conquest in 642 CE or other events. This is not settled historical fact.
- **Action:** fix

**[HARD]** What geological term describes a bowl-shaped depression formed by a meteorite impact?
- **Marked correct:** Impact crater
- **Wrong options:** Caldera | Astrobleme | Meteorite scar
- **Fixed wrong options:** Caldera | Maar | Sinkhole
- **Problem:** The correct answer 'impact crater' is accurate, but 'astrobleme' listed as a wrong answer is actually a valid geological term for a structure formed by a meteorite impact (specifically an ancient, eroded impact structure). The explanation acknowledges this distinction, but astrobleme could reasonably be considered correct in context since it describes a meteorite-impact-formed depression/structure.
- **Action:** fix

**[HARD]** Which bacterium was famously used in Colin MacLeod, Maclyn McCarty, and Alfred Hershey's experiments to identify DNA as genetic material?
- **Marked correct:** Streptococcus pneumoniae
- **Should be:** Streptococcus pneumoniae
- **Wrong options:** Escherichia coli | Bacillus subtilis | Salmonella enterica
- **Problem:** The question conflates two separate experiments. The Avery-MacLeod-McCarty experiment (1944) used Streptococcus pneumoniae to identify DNA as the transforming principle. Alfred Hershey's famous experiment was the Hershey-Chase experiment (1952) using bacteriophage T2 and E. coli, not S. pneumoniae. Grouping Hershey with MacLeod and McCarty is historically inaccurate.
- **Action:** fix

**[HARD]** Which Renaissance artist completed the bronze doors of the Florence Baptistry, pioneering linear perspective in sculpture?
- **Marked correct:** Lorenzo Ghiberti
- **Should be:** Lorenzo Ghiberti
- **Wrong options:** Donatello | Filippo Brunelleschi | Andrea del Verrocchio
- **Problem:** Filippo Brunelleschi is widely credited as the pioneer of linear perspective in Renaissance art, not Ghiberti. Ghiberti won the competition to create the Baptistry doors, but attributing the pioneering of linear perspective to Ghiberti rather than Brunelleschi is historically inaccurate. Also, Ghiberti created two sets of doors; the famous 'Gates of Paradise' were completed 1425-1452, not 1403-1424.
- **Action:** fix

**[HARD]** Which French mathematician developed the theory of groups, foundational to modern abstract algebra, and died in a duel at age 20?
- **Marked correct:** Évariste Galois
- **Wrong options:** Sophie Germain | Augustin-Louis Cauchy | Joseph-Louis Lagrange
- **Problem:** Galois died at age 20, not age 21 as some sources state, but more critically he was 20 years old at death — this part is correct. However, Galois died on May 31, 1832, the day after the duel, at age 20. The age is correct. No factual error on the age, but worth noting he died the day after the duel from wounds sustained. The answer is acceptable.
- **Action:** fix

**[HARD]** What is the only US state capital that does not have a direct commercial airline connection to any other US state capital?
- **Marked correct:** Montpelier, Vermont
- **Should be:** Montpelier, Vermont
- **Wrong options:** Augusta, Maine | Concord, New Hampshire | Montrose, Colorado
- **Fixed wrong options:** Augusta, Maine | Concord, New Hampshire | Pierre, South Dakota
- **Problem:** Montrose is not a state capital — it is not even the capital of Colorado (Denver is). Including 'Montrose, Colorado' as a wrong answer option is factually nonsensical since it is not a state capital at all, making the question set invalid. Additionally, the claim about Montpelier is broadly accurate but the wrong answers should all be actual state capitals.
- **Action:** fix

**[HARD]** Which obscure element, with atomic number 75, was the last naturally occurring element to be discovered, isolated by Noddack, Tacke, and Berg in 1925?
- **Marked correct:** Rhenium
- **Wrong options:** Technetium | Francium | Protactinium
- **Problem:** The explanation states 'Technetium and promethium are synthetic elements; francium was discovered earlier' but francium (atomic number 87) was actually discovered in 1939, which is later than rhenium (1925), making the claim that francium 'was discovered earlier' incorrect in the explanation. The correct answer (Rhenium) is right, but the explanation contains a factual error about francium.
- **Action:** fix

**[HARD]** Which Gothic cathedral's famous rose window was severely damaged in the 2019 fire but survived the collapse of the main roof structure?
- **Marked correct:** Notre-Dame de Reims
- **Should be:** Notre-Dame de Paris
- **Wrong options:** Notre-Dame de Chartres | Notre-Dame de Amiens | Cathédrale Notre-Dame de Strasbourg
- **Fixed wrong options:** Notre-Dame de Reims | Notre-Dame de Chartres | Cathédrale Saint-Gervais-et-Saint-Protais
- **Problem:** The 2019 fire was at Notre-Dame de Paris, not Reims. The rose windows that survived were those of Notre-Dame de Paris. The question conflates the Paris cathedral fire with an unrelated cathedral, making the correct answer factually wrong and the question deeply misleading.
- **Action:** fix

**[HARD]** What is the name of the mathematical constant that represents the ratio of a circle's circumference to its diameter, first calculated to 100 decimal places by Ludolph van Ceulen?
- **Marked correct:** Pi (π)
- **Should be:** Pi (π)
- **Wrong options:** Phi (φ) | Euler's number (e) | Tau (τ)
- **Fixed wrong options:** Phi (φ) | Euler's number (e) | Tau (τ)
- **Problem:** Ludolph van Ceulen calculated Pi to 35 decimal places, not 100. His achievement was engraved on his tombstone, but the claim of 100 decimal places is factually incorrect.
- **Action:** fix

**[HARD]** Which bacteriophage, used extensively in molecular biology research, exclusively infects Escherichia coli and carries designation T4?
- **Marked correct:** Bacteriophage T4
- **Should be:** Bacteriophage T4
- **Wrong options:** Lambda phage | MS2 phage | Mu phage
- **Fixed wrong options:** Lambda phage | MS2 phage | T7 phage
- **Problem:** The question asks which phage 'exclusively infects E. coli,' but Lambda phage and Mu phage in the wrong answers also infect E. coli, making them arguably correct answers too. Additionally, the question is circular — it names the answer (T4) in the question itself.
- **Action:** fix

**[HARD]** What is the term for a type of rock formed from the cooling of magma or lava, used to describe igneous formations?
- **Marked correct:** Igneous rock
- **Should be:** Igneous rock
- **Wrong options:** Metamorphic rock | Sedimentary rock | Plutonic rock
- **Fixed wrong options:** Metamorphic rock | Sedimentary rock | Carbonate rock
- **Problem:** 'Plutonic rock' listed as a wrong answer is actually a subtype of igneous rock (intrusive igneous rock), making it a partially correct answer and contaminating the question.
- **Action:** fix

**[HARD]** Which philosopher coined the term 'categorical imperative,' a foundational principle of deontological ethics?
- **Marked correct:** Immanuel Kant
- **Should be:** Immanuel Kant
- **Wrong options:** Georg Wilhelm Friedrich Hegel | Arthur Schopenhauer | Friedrich Nietzsche
- **Fixed wrong options:** Georg Wilhelm Friedrich Hegel | Arthur Schopenhauer | Friedrich Nietzsche
- **Problem:** The categorical imperative is primarily developed in Kant's 'Groundwork of the Metaphysics of Morals' and 'Critique of Practical Reason,' not the 'Critique of Pure Reason,' which deals with epistemology, not ethics.
- **Action:** fix

**[HARD]** Which early printing technique, predating the movable type press, involved carving characters in relief on wooden or metal blocks?
- **Marked correct:** Block printing
- **Should be:** Block printing
- **Wrong options:** Woodcut | Intaglio | Lithography
- **Fixed wrong options:** Intaglio | Lithography | Screen printing
- **Problem:** 'Woodcut' listed as a wrong answer is actually a form of block printing using carved wooden blocks, making it effectively synonymous with or a direct subset of the correct answer, contaminating the question.
- **Action:** fix

**[HARD]** In what year did the Chicxulub asteroid impact occur, marking the extinction event that ended the Cretaceous period?
- **Marked correct:** 66 million years ago
- **Should be:** 66 million years ago
- **Wrong options:** 65 million years ago | 68 million years ago | 63 million years ago
- **Fixed wrong options:** 75 million years ago | 55 million years ago | 100 million years ago
- **Problem:** Asking 'in what year' for an event 66 million years ago is misleading phrasing for a trivia question with answers in millions of years. More critically, the answer '65 million years ago' was the long-accepted scientific figure and is still within many sources' margin of error, making this question potentially confusing for players who learned the older figure.
- **Action:** fix

**[HARD]** Which protein channel allows water molecules to pass through cell membranes in osmosis?
- **Marked correct:** Aquaporin
- **Should be:** Aquaporin
- **Wrong options:** Ionotropin | Porin | Channelin
- **Fixed wrong options:** Porin | Ion channel | Connexin
- **Problem:** 'Ionotropin' and 'Channelin' appear to be invented/fictional terms. Additionally, 'Porin' is a real protein channel found in bacterial and mitochondrial outer membranes that does allow water and small molecules to pass, which could cause confusion, though it is not the primary water channel. The fabricated answer options are the main concern.
- **Action:** fix

**[HARD]** What is the only mammal capable of true echolocation in the manner of bats?
- **Marked correct:** Oilbird
- **Should be:** Dolphins (and some toothed whales)
- **Wrong options:** Shrews | Dolphins | Hedgehogs
- **Fixed wrong options:** Shrews | Hedgehogs | Flying squirrels
- **Problem:** The oilbird (Steatornis caripensis) is NOT a mammal — it is a bird. The question asks for 'the only mammal capable of true echolocation in the manner of bats' and then gives a bird as the correct answer, which is factually wrong on multiple levels.
- **Action:** fix

**[HARD]** What is the only gas at room temperature among the following halogens?
- **Marked correct:** Fluorine
- **Wrong options:** Chlorine | Bromine | Iodine
- **Fixed wrong options:** Bromine | Iodine | Astatine
- **Problem:** Chlorine is also a gas at room temperature (boiling point -34°C), so the question's premise that only one of these halogens is a gas at room temperature is false. Both fluorine and chlorine are gases at room temperature.
- **Action:** fix

**[HARD]** Which British monarch reigned for the shortest period of all English/British monarchs?
- **Marked correct:** Lady Jane Grey
- **Wrong options:** Edward VIII | Edward V | James II
- **Problem:** Lady Jane Grey's status as a legitimate monarch is disputed by many historians; she was never crowned and is sometimes excluded from official lists. Edward V (about 83 days) and even Edward VIII (325 days) are sometimes considered shorter-reigning unambiguous monarchs depending on the list used. The question also asks about 'British' monarchs but Lady Jane Grey was Queen of England only.
- **Action:** fix

**[HARD]** What is the name of the hypothetical supercontinent that scientists predict will form in approximately 250 million years?
- **Marked correct:** Pangaea Proxima
- **Wrong options:** Pangaea Nova | Amasia | Eurasia Major
- **Fixed wrong options:** Gondwana II | Laurasia Nova | Eurasia Major
- **Problem:** Multiple competing models exist for the next supercontinent: Pangaea Proxima, Amasia, Novopangaea, and Aurica are all proposed by different scientific teams. The explanation itself acknowledges Amasia as an alternative, meaning Amasia (listed as a wrong answer) is also a scientifically valid answer.
- **Action:** fix

**[HARD]** What is the only insect species in which males nurse their young?
- **Marked correct:** Earwig
- **Wrong options:** Cockroach | Beetle | Termite
- **Problem:** The claim that male earwigs nurse their young is false — it is female earwigs that are known for maternal care, and the explanation itself contradicts the question. No insect species is verified to have males that 'nurse' young in any meaningful sense, making this question based on an invented or confused fact.
- **Action:** delete

**[HARD]** Which American writer authored 'One Hundred Years of Solitude' in its original Spanish version as 'Cien años de soledad'?
- **Marked correct:** Gabriel García Márquez
- **Should be:** Gabriel García Márquez
- **Wrong options:** Carlos Fuentes | Laura Esquivel | Isabel Allende
- **Problem:** Gabriel García Márquez was Colombian, not American. The question calls him an 'American writer,' which is factually incorrect. The explanation even acknowledges he is Colombian.
- **Action:** fix

**[HARD]** Which psychologist developed the theory of operant conditioning through his work with pigeons and rats?
- **Marked correct:** B. F. Skinner
- **Wrong options:** Ivan Pavlov | Edward Thorndike | Albert Bandura
- **Fixed wrong options:** Ivan Pavlov | John B. Watson | Albert Bandura
- **Problem:** Edward Thorndike is listed as a wrong answer, but Thorndike developed the 'Law of Effect,' which is the direct precursor and foundational basis of operant conditioning. Many sources credit Thorndike as originating the concept that Skinner later formalized, making Thorndike a contestable correct answer.
- **Action:** fix

**[HARD]** What is the name of the atmospheric layer where the Aurora Borealis occurs?
- **Marked correct:** Ionosphere
- **Should be:** Thermosphere
- **Wrong options:** Stratosphere | Thermosphere | Mesosphere
- **Fixed wrong options:** Stratosphere | Mesosphere | Troposphere
- **Problem:** The Aurora Borealis occurs primarily in the thermosphere (and to some extent the upper mesosphere), not specifically the ionosphere. The ionosphere overlaps with the thermosphere but is defined by ionization, not a distinct atmospheric layer. The explanation even acknowledges it occurs in the 'ionosphere and lower thermosphere,' making 'Thermosphere' in the wrong answers also arguably correct.
- **Action:** fix

**[HARD]** Which protein channel allows water molecules to cross cell membranes in most organisms?
- **Marked correct:** Aquaporin
- **Wrong options:** Ionotropin | Porins | Claudins
- **Fixed wrong options:** Ion channel | Gap junction | Claudins
- **Problem:** Porins are real protein channels found in bacterial outer membranes and mitochondria/chloroplasts that allow water and small molecules to cross membranes, making them a partially correct answer. Additionally, 'Ionotropin' is not a real biological term and is factually unsupported as a wrong answer.
- **Action:** fix

**[HARD]** What is the only mammal capable of true sustained flight?
- **Marked correct:** Bat
- **Wrong options:** Flying squirrel | Flying lemur | Colugos
- **Fixed wrong options:** Flying squirrel | Flying lemur | Sugar glider
- **Problem:** 'Colugos' and 'Flying lemur' refer to the same animal (colugos are commonly called flying lemurs), making two wrong answers duplicates. The question should replace one with a distinct wrong answer.
- **Action:** fix

**[HARD]** Which ancient city was buried by Mount Vesuvius in 79 AD?
- **Marked correct:** Pompeii
- **Wrong options:** Herculaneum | Rome | Capri
- **Fixed wrong options:** Athens | Rome | Capri
- **Problem:** Herculaneum was also buried by the eruption of Mount Vesuvius in 79 AD, making it a correct answer and an unfair wrong answer. The question should either specify 'most famous city' or replace Herculaneum as a wrong answer.
- **Action:** fix

**[HARD]** What is the speed of light in vacuum, rounded to three significant figures?
- **Marked correct:** 3.00 × 10⁸ m/s
- **Wrong options:** 2.99 × 10⁸ m/s | 3.14 × 10⁸ m/s | 3.24 × 10⁸ m/s
- **Fixed wrong options:** 2.50 × 10⁸ m/s | 3.14 × 10⁸ m/s | 3.24 × 10⁸ m/s
- **Problem:** 2.99 × 10⁸ m/s is also a valid three-significant-figure representation of the speed of light (299,792,458 m/s rounds to 3.00 × 10⁸ only at three sig figs if interpreted loosely, but 2.998 × 10⁸ rounds to 3.00 × 10⁸). However, 2.99 × 10⁸ is also a legitimate three-significant-figure value depending on rounding convention applied to 2.998, making it a contestable wrong answer.
- **Action:** fix

**[HARD]** In what year did the first transatlantic telegraph cable begin operation?
- **Marked correct:** 1858
- **Should be:** 1866
- **Wrong options:** 1844 | 1872 | 1866
- **Fixed wrong options:** 1844 | 1858 | 1872
- **Problem:** The first transatlantic telegraph cable of 1858 failed after only a few weeks of operation. The first permanent, reliably operational transatlantic telegraph cable was completed in 1866. The question's framing of 'begin operation' is misleading if it intends the successful lasting cable, which was 1866 (listed as a wrong answer).
- **Action:** fix

**[HARD]** What is the only metal that is liquid at room temperature?
- **Marked correct:** Mercury
- **Wrong options:** Gallium | Cesium | Bromine
- **Fixed wrong options:** Aluminum | Cesium | Sodium
- **Problem:** Gallium melts at approximately 29.76°C, which is at or below typical room temperature (often defined as ~25°C or up to 30°C), making it also liquid at room temperature in many practical definitions. Additionally, Bromine is a liquid at room temperature but is not a metal — it should not appear as a wrong answer since the question asks about metals specifically, avoiding confusion is fine, but Gallium is a genuine contamination risk.
- **Action:** fix

**[HARD]** Who discovered the structure of DNA, earning a Nobel Prize in 1962?
- **Marked correct:** Francis Crick, James Watson, and Maurice Wilkins
- **Wrong options:** Linus Pauling, Max Perutz, and Dorothy Hodgkin | Erwin Schrödinger, Max Born, and Werner Heisenberg | Fred Sanger, Hans Krebs, and Christian Boehmer Anfinsen
- **Problem:** The question asks 'who discovered the structure of DNA' but omits Rosalind Franklin, whose X-ray crystallography work (Photo 51) was critical to the discovery. While the Nobel Prize was awarded to Watson, Crick, and Wilkins, the question conflates the Nobel Prize recipients with the full story of discovery, which is historically contentious.
- **Action:** fix

**[HARD]** Who composed Beethoven's only opera 'Fidelio'?
- **Marked correct:** Ludwig van Beethoven
- **Wrong options:** Christoph Willuck | Wolfgang Amadeus Mozart | Carl Maria von Weber
- **Fixed wrong options:** Wolfgang Amadeus Mozart | Christoph Willibald Gluck | Carl Maria von Weber
- **Problem:** The question is self-answering and nonsensically worded — it asks 'Who composed Beethoven's only opera Fidelio?' with Beethoven himself as the correct answer, which is trivially obvious from the question phrasing. Also, 'Christoph Willuck' in the wrong answers appears to be a misspelling or fabricated name (likely intended to be Christoph Willibald Gluck).
- **Action:** fix

**[HARD]** Which chemical element was named after the Roman god of war?
- **Marked correct:** Mars
- **Wrong options:** Uranium | Plutonium | Thorium
- **Problem:** The correct answer 'Mars' is not a chemical element at all. The element named after the Roman god of war is Iron (Fe), historically associated with Mars, though no element is formally named 'Mars.' Even the question's own explanation acknowledges the answer is wrong. This question is fundamentally broken.
- **Action:** delete

### GEOGRAPHY (155 issues)

**[EASY]** What is the largest ocean on Earth?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Canada?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which desert is the largest in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Canada?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is the Taj Mahal located in?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of South Africa?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which is the smallest country in the world by area?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Egypt?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Mexico?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Russia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to Machu Picchu?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Germany?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Spain?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Italy?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to the Great Wall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to the Great Wall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Greece?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Italy?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Japan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Canada?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the longest mountain range in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Germany?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Brazil?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which mountain range contains Mount Everest?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Japan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is the Eiffel Tower located in?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which ocean is the largest?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of India?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to the Great Barrier Reef?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Mexico?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Spain?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Australia?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the longest river in Africa?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country is home to the Great Barrier Reef?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Japan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which European country has the most islands?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the capital of Brazil?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the longest mountain range in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Equatorial Guinea?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which strait separates Spain from Morocco?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Djibouti?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Lesotho?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Mauritius?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Mauritius?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Equatorial Guinea?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which mountain is the highest peak in Africa?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Lesotho?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Mauritania?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which European country has the most islands?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the capital of Burkina Faso?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which mountain range contains Mount Everest?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which country is home to Machu Picchu?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Moldova?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Mauritius?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Sri Lanka?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Montenegro?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which strait separates Spain from Morocco?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the longest river in South America?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which African country has the most UNESCO World Heritage Sites?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Kazakhstan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Kazakhstan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which river is the longest in South America?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the deepest ocean trench in the world?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Sri Lanka?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the capital of Bhutan?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which river is the longest in the world?
- **Marked correct:** The Nile
- **Should be:** The Nile
- **Wrong options:** The Amazon | The Yangtze | The Mississippi
- **Problem:** The length of the Nile vs. Amazon is genuinely disputed among geographers; some studies place the Amazon as longer. The question should acknowledge this is the traditionally accepted answer or be reworded to specify 'traditionally considered' longest.
- **Action:** fix

**[EASY]** In what country would you find the Sahara Desert?
- **Marked correct:** Egypt (and others)
- **Wrong options:** Morocco | Libya | Sudan
- **Problem:** The question asks 'in what country' but the correct answer is 'Egypt (and others)', and all three wrong answers (Morocco, Libya, Sudan) are also correct countries where the Sahara Desert is found, making every answer correct. The question is fundamentally flawed as written.
- **Action:** fix

**[EASY]** In what country would you find the Amazon Rainforest?
- **Marked correct:** Brazil
- **Should be:** Brazil
- **Wrong options:** Peru | Colombia | Ecuador
- **Fixed wrong options:** Venezuela | Bolivia | Guyana
- **Problem:** The question asks 'in what country' you would find the Amazon Rainforest, but Peru, Colombia, and Ecuador are all valid answers since the rainforest spans all of them. Listing them as wrong answers is incorrect.
- **Action:** fix

**[EASY]** Which island nation is located off the coast of southeastern Africa?
- **Marked correct:** Madagascar
- **Should be:** Madagascar
- **Wrong options:** Mauritius | Seychelles | Comoros
- **Fixed wrong options:** Sri Lanka | Maldives | Réunion
- **Problem:** Mauritius, Seychelles, and Comoros are all island nations located off the southeastern coast of Africa, making them all technically correct answers to the question as worded. The question needs to be more specific.
- **Action:** fix

**[EASY]** Which country has the most islands in the world?
- **Marked correct:** Sweden
- **Should be:** Sweden
- **Wrong options:** Norway | Finland | Indonesia
- **Problem:** The claim that Sweden has the most islands in the world is contested. Canada and Finland also claim very high island counts, and the answer depends heavily on methodology and minimum island size definitions. This is not a settled fact.
- **Action:** fix

**[EASY]** Which desert is the largest in the world?
- **Marked correct:** The Antarctic Desert
- **Wrong options:** The Sahara Desert | The Arabian Desert | The Gobi Desert
- **Problem:** The question asks for the 'largest desert in the world' without specifying type. While Antarctica is technically the largest desert by area (~5.5 million sq mi), most people (and many educational curricula) interpret 'desert' to mean hot/sandy desert, for which the answer is the Sahara. The question should specify 'largest cold desert' or 'largest desert of any type' to avoid ambiguity.
- **Action:** fix

**[EASY]** What is the capital of Egypt?
- **Marked correct:** Cairo
- **Wrong options:** Alexandria | Giza | Luxor
- **Problem:** Egypt announced in 2024 that the new administrative capital (New Administrative Capital, officially named 'New Administrative Capital' or informally still in transition) has been designated as the new capital, though Cairo remains the most widely recognized capital in practice. Additionally, the claim that Cairo has been Egypt's capital since 1169 is debatable — the city of Cairo (Al-Qahira) was founded in 969 CE. The capital designation date of 1169 is inaccurate.
- **Action:** fix

**[EASY]** Which continent is the coldest?
- **Marked correct:** Antarctica
- **Wrong options:** Greenland | Arctic Canada | Siberia
- **Fixed wrong options:** Arctic (North Pole region) | Asia | North America
- **Problem:** Greenland, Arctic Canada, and Siberia are not continents — they are regions or territories. As wrong answers for a question asking 'which continent is coldest,' these are invalid answer choices since they cannot be correct answers to the question as asked. The wrong answers should be replaced with actual continents.
- **Action:** fix

**[EASY]** What is the capital of South Africa?
- **Marked correct:** Pretoria
- **Wrong options:** Johannesburg | Cape Town | Durban
- **Fixed wrong options:** Johannesburg | Durban | Port Elizabeth
- **Problem:** South Africa has three capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial). The correct answer of 'Pretoria' is listed, but Cape Town is in the wrong answers, which is also a capital city of South Africa. This makes the question unfair since Cape Town is also a correct answer depending on the interpretation.
- **Action:** fix

**[EASY]** Which desert spans parts of Namibia and Botswana?
- **Marked correct:** The Kalahari Desert
- **Wrong options:** The Sahara Desert | The Namib Desert | The Atacama Desert
- **Problem:** The Namib Desert also spans parts of Namibia (indeed, Namibia is named after it), making it a plausible answer to 'which desert spans parts of Namibia and Botswana.' However, the Namib does not extend into Botswana, so the Kalahari remains the best answer. The question should be reworded to clarify 'spans both Namibia and Botswana' to eliminate confusion with the Namib.
- **Action:** fix

**[EASY]** Which mountain range is the longest in the world?
- **Marked correct:** Mid-Ocean Ridge System
- **Should be:** The Andes Mountains
- **Wrong options:** Rocky Mountains | Andes Mountains | Himalayas
- **Fixed wrong options:** Rocky Mountains | Himalayas | Great Dividing Range
- **Problem:** The Mid-Ocean Ridge System is technically an underwater mountain range, not a surface mountain range, and many sources classify mountain ranges as surface features only. For an 'easy' geography question, asking about the longest surface mountain range (the Andes) would be clearer and less contestable. The current framing is misleading for a general audience.
- **Action:** fix

**[EASY]** Which is the deepest lake in the world?
- **Marked correct:** Lake Baikal
- **Wrong options:** Lake Tanganyika | Lake Superior | Lake Congo
- **Fixed wrong options:** Lake Tanganyika | Lake Superior | Crater Lake
- **Problem:** 'Lake Congo' is not a real lake and should not appear as an answer option. The question should replace it with a real lake name to avoid confusion and presenting false geographic information.
- **Action:** fix

**[EASY]** Which is the second-longest river in the world?
- **Marked correct:** Amazon River
- **Wrong options:** Yangtze River | Mississippi River | Yenisei River
- **Problem:** The ranking of the Nile vs. Amazon as longest river is genuinely disputed among geographers, with some measurements placing the Amazon as the longest. Calling the Amazon definitively 'second-longest' is contestable and could be considered incorrect depending on the measurement methodology used.
- **Action:** fix

**[EASY]** Which African country is home to the Victoria Falls?
- **Marked correct:** Zimbabwe
- **Should be:** Zimbabwe and Zambia
- **Wrong options:** Zambia | Botswana | Mozambique
- **Fixed wrong options:** Botswana | Mozambique | South Africa
- **Problem:** Victoria Falls straddles the border between Zimbabwe and Zambia — it is not 'officially in Zimbabwe.' Zambia is equally a correct answer, making this question unfair. The explanation is factually misleading by claiming it is 'officially in Zimbabwe.'
- **Action:** fix

**[EASY]** Which is the hottest place on Earth?
- **Marked correct:** Death Valley
- **Wrong options:** Sahara Desert | Arabian Desert | Gobi Desert
- **Problem:** Death Valley holds the record for the highest reliably recorded air temperature, but some sources debate whether Al-Aziziyah (Libya) or surface ground temperatures in other locations could qualify. Additionally, the question asks for the 'hottest place on Earth' which could refer to ground temperature rather than air temperature, making the answer ambiguous. The question should specify 'highest recorded air temperature.'
- **Action:** fix

**[MEDIUM]** Which mountain range contains Mount Kilimanjaro?
- **Marked correct:** Eastern Arc Mountains
- **Should be:** It is a free-standing volcanic massif
- **Wrong options:** Atlas Mountains | Rwenzori Mountains | Drakensberg Mountains
- **Fixed wrong options:** Atlas Mountains | Rwenzori Mountains | Drakensberg Mountains
- **Problem:** Mount Kilimanjaro is not part of the Eastern Arc Mountains. It is a free-standing volcanic massif (stratovolcano) in northeastern Tanzania, not geologically associated with the Eastern Arc Mountains.
- **Action:** fix

**[MEDIUM]** Which European country has the most islands?
- **Marked correct:** Sweden
- **Should be:** Sweden
- **Wrong options:** Finland | Norway | Denmark
- **Fixed wrong options:** Finland | Norway | Denmark
- **Problem:** Norway is also commonly cited as having more islands than Sweden depending on the counting methodology and minimum size threshold used. Some sources list Norway with over 50,000 islands (or far more by other counts), and Finland also competes. The claim that Sweden definitively has the most is contested.
- **Action:** fix

**[MEDIUM]** What is the capital of Sri Lanka?
- **Marked correct:** Colombo
- **Should be:** Sri Jayawardenepura Kotte
- **Wrong options:** Kandy | Galle | Anuradhapura
- **Fixed wrong options:** Kandy | Galle | Anuradhapura
- **Problem:** Sri Lanka has two capitals: Colombo is the commercial capital, but Sri Jayawardenepura Kotte is the official legislative capital. The explanation is also imprecise in calling Colombo solely 'the capital.'
- **Action:** fix

**[MEDIUM]** What is the longest river in Asia?
- **Marked correct:** Yangtze River
- **Wrong options:** Yellow River | Mekong River | Ob River
- **Problem:** The Ob River (with its tributary the Irtysh) is approximately 5,410 km long and is shorter than the Yangtze (~6,300 km), so it is correctly a wrong answer. However, the Yenisei River (~5,539 km) is also shorter. The real issue is that some sources list the Ob-Irtysh system as longer than the Yangtze. The Yangtze is generally accepted as the longest river in Asia, so this is acceptable, but the Ob being listed as a wrong answer is fine.
- **Action:** fix

**[MEDIUM]** Which US state has the most national parks?
- **Marked correct:** California
- **Should be:** California
- **Wrong options:** Utah | Arizona | Alaska
- **Fixed wrong options:** Utah | Arizona | Alaska
- **Problem:** Alaska has 8 national parks (Denali, Gates of the Arctic, Glacier Bay, Katmai, Kenai Fjords, Kobuk Valley, Lake Clark, Wrangell-St. Elias), not fewer than California's 9. However, California does have 9 national parks, which is the most of any state, making the correct answer valid. Alaska with 8 is correctly a wrong answer.
- **Action:** fix

**[MEDIUM]** In what country is the Dead Sea located?
- **Marked correct:** Israel and Palestine
- **Should be:** Israel, Jordan, and Palestine
- **Wrong options:** Saudi Arabia and Jordan | Iran and Iraq | Turkey and Syria
- **Fixed wrong options:** Saudi Arabia and Jordan | Iran and Iraq | Turkey and Syria
- **Problem:** The Dead Sea borders Israel, the West Bank (Palestinian territory), and Jordan. Excluding Jordan from the correct answer while including it in the explanation is inconsistent and misleading. The question and correct answer should reflect all three bordering entities.
- **Action:** fix

**[MEDIUM]** Which mountain is the highest peak in North America?
- **Marked correct:** Denali
- **Should be:** Denali
- **Wrong options:** Mount Logan | Mount McKinley | Mount Whitney
- **Fixed wrong options:** Mount Logan | Mount Fairweather | Mount Whitney
- **Problem:** Mount McKinley is listed as a wrong answer, but Denali and Mount McKinley are the same mountain — McKinley was the former official name of Denali. This makes 'Mount McKinley' effectively a correct answer, contaminating the wrong answers.
- **Action:** fix

**[MEDIUM]** What is the most populated capital city in the world by metropolitan area?
- **Marked correct:** Tokyo
- **Should be:** Tokyo
- **Wrong options:** Delhi | Shanghai | São Paulo
- **Fixed wrong options:** Delhi | Beijing | São Paulo
- **Problem:** The question asks for the most populated 'capital city' by metropolitan area, but Tokyo is Japan's capital city while also being the largest metro area. Delhi (capital of India) is also frequently cited as approaching or surpassing Tokyo depending on the source and year. This is a rapidly changing statistic.
- **Action:** fix

**[MEDIUM]** Which country has the most UNESCO World Heritage Sites?
- **Marked correct:** Italy
- **Wrong options:** France | Spain | China
- **Problem:** The UNESCO count fluctuates as new sites are added annually. As of 2024, China and Italy are tied or China may lead depending on the session. The claim that Italy definitively leads 'as of early 2026' is uncertain and the count of 58 may be inaccurate.
- **Action:** fix

**[MEDIUM]** Which river forms the border between the United States and Mexico?
- **Marked correct:** Rio Grande
- **Wrong options:** Colorado River | Gila River | Pecos River
- **Fixed wrong options:** Colorado River | Gila River | Pecos River
- **Problem:** The Colorado River also forms part of the US-Mexico border (between Arizona and Baja California/Sonora), so it could technically be considered a correct answer. The question should clarify it is asking about the primary or longest border river.
- **Action:** fix

**[MEDIUM]** What is the capital of Eswatini (formerly Swaziland)?
- **Marked correct:** Mbabane
- **Wrong options:** Manzini | Piggs Peak | Big Bend
- **Problem:** Eswatini has two capitals: Mbabane is the administrative capital, but Lobamba is the royal and legislative capital. The question should specify 'administrative capital' to be unambiguous.
- **Action:** fix

**[MEDIUM]** Which desert is the largest in Asia?
- **Marked correct:** Gobi Desert
- **Wrong options:** Taklamakan Desert | Arabian Desert | Kalahari Desert
- **Fixed wrong options:** Taklamakan Desert | Syrian Desert | Thar Desert
- **Problem:** The Arabian Desert, while primarily associated with the Arabian Peninsula, is geographically part of Asia and is larger than the Gobi Desert (~2.3 million km²). If Asia is defined to include the Arabian Peninsula, the Arabian Desert would be the largest, making this answer potentially wrong.
- **Action:** fix

**[MEDIUM]** Which desert is the largest by area in Africa?
- **Marked correct:** The Sahara
- **Wrong options:** The Kalahari | The Namib | The Atacama
- **Fixed wrong options:** The Kalahari | The Namib | The Karoo
- **Problem:** The Atacama Desert is located in South America, not Africa, so it does not belong as a wrong answer for a question about the largest desert in Africa. It should be replaced with an African desert.
- **Action:** fix

**[MEDIUM]** Which European country is completely landlocked?
- **Marked correct:** Austria
- **Should be:** Austria
- **Wrong options:** Switzerland | Czech Republic | Hungary
- **Fixed wrong options:** Portugal | France | Spain
- **Problem:** All three wrong answers (Switzerland, Czech Republic, Hungary) are also landlocked European countries, making this question ambiguous and unfair. The question should either ask specifically about Austria or replace wrong answers with non-landlocked countries.
- **Action:** fix

**[MEDIUM]** Which is the only country that borders both the Atlantic and Indian Oceans?
- **Marked correct:** South Africa
- **Wrong options:** Mozambique | Madagascar | Mauritius
- **Problem:** The claim that South Africa is the ONLY country bordering both the Atlantic and Indian Oceans is debatable. While technically correct via Cape Agulhas, some geographers note that the two oceans' boundary is not universally agreed upon, making this a potentially contentious trivia claim. More critically, the question wording is solid and South Africa is the accepted answer.
- **Action:** fix

**[MEDIUM]** Which river is the longest in Asia?
- **Marked correct:** The Yangtze
- **Wrong options:** The Yellow River | The Mekong | The Brahmaputra
- **Problem:** The Yangtze is often cited as Asia's longest river, but the Yenisei-Angara river system and the Ob-Irtysh system in Russia (also in Asia) are longer. The question should specify 'longest river flowing entirely within a single Asian country' or accept that this is contested.
- **Action:** fix

**[MEDIUM]** Which African country has the most UNESCO World Heritage Sites?
- **Marked correct:** Egypt
- **Should be:** Morocco
- **Wrong options:** South Africa | Ethiopia | Kenya
- **Fixed wrong options:** Egypt | South Africa | Kenya
- **Problem:** Egypt does not lead Africa in UNESCO World Heritage Sites. As of recent counts, Morocco leads African nations, and Ethiopia also has more than 7 sites. Egypt has 7 sites but is not the African leader. This claim is factually inaccurate.
- **Action:** fix

**[MEDIUM]** Which mountain is the highest point in South America?
- **Marked correct:** Mount Aconcagua
- **Wrong options:** Mount San Pedro | Mount Chimborazo | Mount Sajama
- **Problem:** The explanation incorrectly states 'outside of Antarctica' — Antarctica has no mountains relevant to this comparison. The correct phrasing is that Aconcagua is the highest peak in the Western Hemisphere (or the Americas). The answer itself is correct but the explanation contains an error.
- **Action:** fix

**[MEDIUM]** Which country contains the Dead Sea, the lowest point on Earth's surface?
- **Marked correct:** Jordan
- **Should be:** Jordan and Israel
- **Wrong options:** Israel | Palestine | Syria
- **Fixed wrong options:** Egypt | Syria | Lebanon
- **Problem:** The Dead Sea is shared by both Jordan and Israel, so marking only Jordan as correct is misleading. Israel is listed as a wrong answer, but it is equally a correct answer. The question should be reworded to avoid this ambiguity.
- **Action:** fix

**[MEDIUM]** Which European capital city is divided by the Danube River?
- **Marked correct:** Budapest
- **Wrong options:** Vienna | Bratislava | Belgrade
- **Problem:** Belgrade, listed as a wrong answer, is also a European capital divided by a river (the Sava meets the Danube there), and Bratislava also sits on the Danube. However, Budapest is uniquely and most famously split into two distinct halves by the Danube, so the answer is defensible. Belgrade is not primarily 'divided' by the Danube in the same way, so the question is acceptable.
- **Action:** fix

**[MEDIUM]** Which mountain range contains Mount Elbrus, Europe's highest peak?
- **Marked correct:** Caucasus Mountains
- **Wrong options:** Alps | Urals | Pyrenees
- **Problem:** Mount Elbrus is located entirely within Russia, not on the border between Russia and Georgia. The Russian-Georgian border runs along the Greater Caucasus range further east; Elbrus is clearly within Russian territory in Kabardino-Balkaria.
- **Action:** fix

**[MEDIUM]** Which Asian country has the most islands?
- **Marked correct:** Indonesia
- **Wrong options:** Philippines | Japan | Malaysia
- **Problem:** The question asks which Asian country has the most islands, but Sweden and Norway (European) have more islands than Indonesia by some counts. More critically, Indonesia vs Philippines is contested depending on definition. The question and explanation claim Indonesia is the world's largest archipelago, but Sweden actually has more islands by count (~220,000). For Asia specifically, Indonesia is generally accepted, but the 'most islands globally' claim in the explanation is questionable.
- **Action:** fix

**[MEDIUM]** Which lake is the deepest in the world?
- **Marked correct:** Lake Baikal
- **Wrong options:** Lake Tanganyika | Lake Superior | Crater Lake
- **Problem:** The question asks for the 'deepest lake in the world' without specifying freshwater, but the correct answer and explanation only confirm it as the deepest freshwater lake. Lake Baikal is indeed the deepest lake of any kind, so the answer is correct, but the explanation should not hedge with 'freshwater.'
- **Action:** fix

**[MEDIUM]** Which Middle Eastern country is the world's largest oil producer?
- **Marked correct:** Saudi Arabia
- **Should be:** Saudi Arabia
- **Wrong options:** Iraq | Iran | United Arab Emirates
- **Problem:** The United States has surpassed Saudi Arabia as the world's largest oil producer in recent years (since around 2018), making this answer potentially incorrect depending on the year. The U.S. is not a Middle Eastern country, so if the question specifically asks about the Middle East, Saudi Arabia remains correct, but the question does not restrict to the Middle East in the answer.
- **Action:** fix

**[MEDIUM]** Which country is home to the largest desert in Africa?
- **Marked correct:** Egypt
- **Should be:** Algeria
- **Wrong options:** Libya | Sudan | Algeria
- **Fixed wrong options:** Libya | Sudan | Egypt
- **Problem:** The question asks which country is 'home to the largest desert in Africa,' implying which single country contains the most of the Sahara. Algeria is actually the largest country by area within the Sahara, not Egypt. Algeria contains the largest portion of the Sahara Desert by land area.
- **Action:** fix

**[MEDIUM]** Which European country has the most mountains?
- **Marked correct:** Norway
- **Wrong options:** Switzerland | Austria | Romania
- **Problem:** The claim that Norway has over 2,000 mountains above 2,000 meters is incorrect — Norway has relatively few peaks above 2,000m (around 250-300). Switzerland and Austria have more peaks above 2,000m. The premise of the question is factually unsupported and the correct answer is debatable depending on the metric used.
- **Action:** fix

**[MEDIUM]** Which Asian country spans the most time zones?
- **Marked correct:** Russia
- **Wrong options:** China | Kazakhstan | Mongolia
- **Problem:** Russia is transcontinental, spanning both Europe and Asia, so calling it an 'Asian country' is debatable. The question may be better phrased as 'which country spanning Asia' or the answer clarified. Additionally, Kazakhstan also spans multiple time zones (2), but Russia's 11 is clearly the most, so the correct answer is defensible if the framing is fixed.
- **Action:** fix

**[HARD]** Which African country has the longest coastline relative to its land area?
- **Marked correct:** Mauritania
- **Wrong options:** Senegal | Mauritius | Seychelles
- **Problem:** The claim that Mauritania has the highest coastline-to-area ratio in Africa is dubious and likely incorrect. Island nations like Seychelles, Comoros, or São Tomé and Príncipe would have far higher coastline-to-area ratios. The question premise is unverifiable and almost certainly wrong.
- **Action:** fix

**[HARD]** What is the second-longest river in South America by length?
- **Marked correct:** Paraná River
- **Wrong options:** Orinoco River | São Francisco River | Madeira River
- **Problem:** The Madeira River (listed as a wrong answer) is frequently cited as the second-longest river in South America at approximately 3,380 km, while the Paraná is also a strong contender. However, the Paraná River at ~4,880 km is generally accepted as the second longest, so the answer may be correct, but the Madeira River length figure in the wrong answers requires checking. The Paraná at 4,880 km is widely accepted as second, so this is likely ok, but 'Nangungunan' in Q3 explanation is fabricated.
- **Action:** fix

**[HARD]** Which country is home to both the Atacama Desert and the driest non-polar region on Earth?
- **Marked correct:** Chile
- **Wrong options:** Peru | Argentina | Bolivia
- **Problem:** The explanation references a 'Nangungunan region' which does not exist and appears to be a fabricated or AI-hallucinated place name. The Atacama Desert does span both Chile and Peru, which creates ambiguity, though Chile is the primary location.
- **Action:** fix

**[HARD]** Which European capital city sits on both the European and Asian continents?
- **Marked correct:** Istanbul
- **Wrong options:** Ankara | Athens | Sofia
- **Problem:** Istanbul is NOT a capital city — Ankara is the capital of Turkey. The question asks for a 'European capital city' that sits on both continents, but Istanbul is not a capital. No current capital city sits on both continents.
- **Action:** fix

**[HARD]** What is the largest country by area that is entirely located south of the equator?
- **Marked correct:** Australia
- **Should be:** Australia
- **Wrong options:** New Zealand | South Africa | Argentina
- **Problem:** The explanation incorrectly states that Argentina and South Africa 'straddle the equator' — they do not. Neither country is near the equator. Argentina is entirely south of the equator, and so is South Africa. Australia is correct as the largest country entirely south of the equator, but the explanation is factually wrong.
- **Action:** fix

**[HARD]** Which Asian country is the world's largest producer of natural rubber?
- **Marked correct:** Thailand
- **Wrong options:** Indonesia | Malaysia | Vietnam
- **Problem:** Indonesia has historically competed closely with Thailand for top natural rubber producer, and in some recent years has surpassed Thailand. The answer may be outdated or contested depending on the year, making this ambiguous.
- **Action:** fix

**[HARD]** What is the capital of Equatorial Guinea?
- **Marked correct:** Malabo
- **Wrong options:** Bata | Ebebiyin | Mongomo
- **Problem:** Equatorial Guinea announced plans to move its capital to Oyala (renamed Ciudad de la Paz), and while Malabo remains the de facto capital, this situation introduces ambiguity about the current official capital status.
- **Action:** fix

**[HARD]** Which river forms the primary boundary between Brazil and Peru?
- **Marked correct:** Ucayali River
- **Should be:** Javari River
- **Wrong options:** Javari River | Madeira River | Negro River
- **Fixed wrong options:** Ucayali River | Madeira River | Negro River
- **Problem:** The Javari River (also spelled Yavarí), not the Ucayali River, forms the primary boundary between Brazil and Peru. The Ucayali is entirely within Peru.
- **Action:** fix

**[HARD]** What is the smallest country in Asia by land area?
- **Marked correct:** Bahrain
- **Should be:** Maldives
- **Wrong options:** Qatar | Brunei | East Timor
- **Fixed wrong options:** Bahrain | Brunei | East Timor
- **Problem:** The Maldives, not Bahrain, is the smallest country in Asia by land area at approximately 298 km². Bahrain is larger at ~780 km².
- **Action:** fix

**[HARD]** Which landmark is known as 'The Ninth Wonder of the World'?
- **Marked correct:** Angkor Wat
- **Wrong options:** Borobudur | Taj Mahal | Machu Picchu
- **Problem:** The designation of Angkor Wat as 'the Ninth Wonder of the World' is not a recognized or standardized title. Multiple landmarks claim informal 'wonder' designations. This is not a verifiable fact and the question is based on an unsupported premise.
- **Action:** delete

**[HARD]** What is the longest mountain range in the world?
- **Marked correct:** Mid-Ocean Ridge
- **Wrong options:** Andes Mountains | Rocky Mountains | Himalayas
- **Problem:** The question asks for the 'longest mountain range in the world' without specifying above or below water. If asking about surface/above-water ranges, the Andes is the answer. The Mid-Ocean Ridge is a valid answer only if underwater ranges are included, which is non-standard usage. The question is ambiguous.
- **Action:** fix

**[HARD]** What is the deepest lake in Europe?
- **Marked correct:** Lake Baikal
- **Wrong options:** Lake Como | Lake Bled | Lake Vänern
- **Problem:** Lake Baikal is located in Siberia, Russia, and is in Asia — not Europe. It is the world's deepest lake overall, but it is not in Europe. The deepest lake in Europe is Hornindalsvatnet in Norway, or by some definitions Lago di Como. The question's category label (Europe's deepest lake) contradicts placing Baikal in Europe.
- **Action:** fix

**[HARD]** What is the largest landlocked country in Africa?
- **Marked correct:** Chad
- **Wrong options:** Mali | Niger | Botswana
- **Problem:** Chad is not the largest landlocked country in Africa. Ethiopia is the largest landlocked country in Africa at approximately 1.1 million km², but Chad (1.28 million km²) is actually NOT landlocked — wait, Chad IS landlocked. However, the largest landlocked country in Africa by area is actually Ethiopia at ~1.1M km² — no, Chad at 1.28M km² is larger and IS landlocked. This is actually correct. Chad is landlocked and larger than Ethiopia. The answer appears correct.
- **Action:** fix

**[HARD]** Which Asian capital city is located at the highest elevation?
- **Marked correct:** Thimphu
- **Wrong options:** Lhasa | Kathmandu | La Paz
- **Problem:** Lhasa is not an Asian capital city — Tibet is not a sovereign country, so Lhasa is not a capital. However, the real problem is that Thimphu at 2,334m is NOT the highest Asian capital. Kathmandu is ~1,400m, so Thimphu is higher than Kathmandu. But Lhasa (not a sovereign capital) aside, among recognized sovereign capitals, Thimphu at ~2,334m is indeed the highest in Asia. The answer appears correct for sovereign nation capitals.
- **Action:** fix

**[HARD]** Which country contains the Atacama Desert and has no official religion in its constitution?
- **Marked correct:** Chile
- **Wrong options:** Peru | Bolivia | Argentina
- **Problem:** The Atacama Desert also extends into Peru, Bolivia, and Argentina, so asking which country 'contains' it is imprecise. Additionally, the second condition (no official religion) is verifiable but the combination makes this a contrived double-condition question that could cause confusion.
- **Action:** fix

**[HARD]** What is the longest river entirely contained within Australia?
- **Marked correct:** Murray River
- **Should be:** Darling River
- **Wrong options:** Darling River | Murrumbidgee River | Lachlan River
- **Fixed wrong options:** Murray River | Murrumbidgee River | Lachlan River
- **Problem:** The Murray River is not the longest river entirely within Australia — the Darling River (listed as a wrong answer) is approximately 2,740 km long, longer than the Murray at ~2,508 km. The question asks for the longest river, and the Darling River is actually longer, making it a contaminated wrong answer.
- **Action:** fix

**[HARD]** Which Middle Eastern country is home to the Dead Sea, the lowest point on Earth?
- **Marked correct:** Jordan
- **Wrong options:** Israel | Palestine | Syria
- **Problem:** The Dead Sea borders both Jordan and Israel, and Israel also has a significant shoreline along the Dead Sea. The question implies Jordan is uniquely 'home' to the Dead Sea, but Israel could equally be considered correct. The explanation's justification that Jordan's portion includes the 'lowest points' is not a standard geographic fact.
- **Action:** fix

**[HARD]** Which mountain peak is the highest point in Africa?
- **Marked correct:** Mount Kilimanjaro
- **Wrong options:** Mount Kenya | Mount Speke | Mount Stanley
- **Problem:** The explanation claims Mount Stanley 'runs a close second at 5,109 meters' but Mount Kenya is actually the second highest peak in Africa at 5,199 meters, and Mount Stanley (Margherita Peak) is 5,109 meters — third. The explanation is misleading, though the correct answer (Kilimanjaro) is right.
- **Action:** fix

**[HARD]** Which strait separates the island of Tasmania from mainland Australia?
- **Marked correct:** Bass Strait
- **Wrong options:** Cook Strait | Tasman Strait | Clarence Strait
- **Problem:** The explanation states Bass Strait 'connects the Tasman Sea to the Pacific Ocean' which is inaccurate — Bass Strait connects the Tasman Sea to the Southern Ocean (or Indian Ocean), not the Pacific Ocean. The correct answer itself is fine.
- **Action:** fix

**[HARD]** Which African country is home to the Drakensberg Mountains?
- **Marked correct:** South Africa
- **Wrong options:** Lesotho | Zimbabwe | Botswana
- **Fixed wrong options:** Zimbabwe | Botswana | Mozambique
- **Problem:** The Drakensberg Mountains form the border between South Africa and Lesotho, with significant portions of the range actually lying within Lesotho. Listing Lesotho as a wrong answer is unfair since it is also a correct answer to this question.
- **Action:** fix

**[HARD]** What is the capital of Transnistria, the unrecognized breakaway region?
- **Marked correct:** Tiraspol
- **Wrong options:** Chişinău | Bender | Rybnitsa
- **Problem:** Nagorno-Karabakh ceased to exist as a functioning entity in September 2023 when Azerbaijan retook control of the region and its Armenian population fled. The region no longer functions as an autonomous region with Stepanakert as its capital.
- **Action:** fix

**[HARD]** Which mountain range contains Mont Blanc, the highest peak in the Alps?
- **Marked correct:** Graian Alps
- **Wrong options:** Pennine Alps | Bernese Alps | Cottian Alps
- **Problem:** Mont Blanc is generally classified as being in the Mont Blanc massif, which is considered part of the Graian Alps by some sources, but this classification is disputed. More commonly, Mont Blanc is simply described as part of the Western Alps or the Mont Blanc massif specifically, and many authoritative sources do not place it within the Graian Alps subrange. This is a legitimately contested classification.
- **Action:** fix

**[HARD]** What is the capital of the autonomous region of Nagorno-Karabakh?
- **Marked correct:** Stepanakert
- **Wrong options:** Ganja | Baku | Shushi
- **Problem:** Nagorno-Karabakh no longer exists as an autonomous region. In September 2023, Azerbaijan retook full control of the territory, the Armenian population fled, and the self-declared republic dissolved on January 1, 2024. The question is based on a now-defunct political entity.
- **Action:** delete

**[HARD]** Which country contains the Atacama Desert, the driest place on Earth?
- **Marked correct:** Chile
- **Wrong options:** Peru | Argentina | Bolivia
- **Problem:** The Atacama Desert extends into Peru, Bolivia, and Argentina as well as Chile, so saying Chile 'contains' it is imprecise. Chile does contain the majority and driest portions of the Atacama, but the question could be challenged. This is a near-duplicate of question #5 (b59f84ed) with the same core fact.
- **Action:** fix

**[HARD]** Which European capital is situated on both sides of the Danube River?
- **Marked correct:** Budapest
- **Wrong options:** Vienna | Belgrade | Bratislava
- **Fixed wrong options:** Vienna | Warsaw | Prague
- **Problem:** Belgrade (Serbia) and Bratislava (Slovakia) also sit on both sides of the Danube River, making them potentially correct answers. Vienna is primarily on one side. Budapest is the best-known example but the question as worded has multiple correct answers.
- **Action:** fix

**[HARD]** Which strait separates Peninsular Malaysia from the island of Borneo?
- **Marked correct:** Makassar Strait
- **Wrong options:** Malacca Strait | Sunda Strait | Celebes Strait
- **Problem:** The Makassar Strait separates Borneo from Sulawesi (Celebes), not from Peninsular Malaysia. No single strait separates Peninsular Malaysia from Borneo; the South China Sea lies between them. The question's premise is geographically incorrect.
- **Action:** fix

**[HARD]** Which South American country is landlocked and shares borders with nine other nations?
- **Marked correct:** Bolivia
- **Should be:** Bolivia
- **Wrong options:** Paraguay | Chile | Ecuador
- **Problem:** Bolivia borders only 5 countries (Argentina, Brazil, Chile, Paraguay, and Peru), not nine. The explanation erroneously lists Colombia and 'three others.' The correct answer (Bolivia) is correct as the landlocked country, but the explanation is factually wrong.
- **Action:** fix

**[HARD]** What is the second-longest river in the world?
- **Marked correct:** Congo River
- **Should be:** Amazon River
- **Wrong options:** Yangtze River | Orinoco River | Paraná River
- **Fixed wrong options:** Congo River | Yangtze River | Mississippi River
- **Problem:** The Amazon River, not the Congo River, is widely considered the second-longest river in the world at approximately 6,400 km. The Congo River ranks much lower (around 9th longest at ~4,700 km).
- **Action:** fix

**[HARD]** Which Asian country is home to the world's lowest point on land, the Dead Sea?
- **Marked correct:** Jordan
- **Should be:** Jordan
- **Wrong options:** Israel | Palestine | Lebanon
- **Fixed wrong options:** Lebanon | Syria | Iraq
- **Problem:** The Dead Sea borders both Jordan and Israel, and the lowest point on its shoreline is contested between the two countries. The claim that the lowest point is 'entirely within Jordanian territory' is not accurate — the Dead Sea's shores are split between Jordan and Israel/Palestine.
- **Action:** fix

**[HARD]** Which river is the longest in India?
- **Marked correct:** Ganges River
- **Wrong options:** Brahmaputra River | Godavari River | Narmada River
- **Problem:** The Indus River (approximately 3,180 km within and around India) and the Ganga (Ganges) lengths are debated, but more critically the Indus River is often cited as longer. However, the largest river flowing entirely within India is the Ganga at ~2,525 km, while the Godavari is sometimes cited as the longest river entirely within India at ~1,465 km. The Ganges answer is defensible if measured by total length of Indian rivers, but the Indus River (~3,180 km, though mostly in Pakistan) could be considered longer. The answer is acceptable with the qualification 'flowing through India,' but the Indus omission from wrong answers is notable. The answer is broadly acceptable.
- **Action:** fix

**[HARD]** Which African nation is home to the Great Rift Valley?
- **Marked correct:** Kenya
- **Wrong options:** Tanzania | Ethiopia | Uganda
- **Problem:** The Great Rift Valley runs through multiple African countries including Ethiopia, Kenya, Tanzania, Uganda, and others. Singling out Kenya as the answer while listing Tanzania, Ethiopia, and Uganda as wrong answers is misleading — all of them are equally valid homes of the Great Rift Valley.
- **Action:** fix

**[HARD]** Which country contains the Atacama Trench, one of the deepest parts of the Pacific Ocean?
- **Marked correct:** Chile
- **Should be:** Chile
- **Wrong options:** Peru | Ecuador | Colombia
- **Fixed wrong options:** Ecuador | Colombia | Argentina
- **Problem:** The Atacama Trench (Peru-Chile Trench) lies off the coasts of both Chile and Peru. The question asks which country 'contains' it, but it is an oceanic feature off the coast of multiple countries. Peru is listed as a wrong answer but has an equal claim to the trench.
- **Action:** fix

**[HARD]** What is the capital of the Seychelles?
- **Marked correct:** Victoria
- **Should be:** Victoria
- **Wrong options:** Port Louis | Mahé | Saint-Denis
- **Fixed wrong options:** Port Louis | Saint-Denis | Moroni
- **Problem:** Mahé is listed as a wrong answer, but Victoria (the correct answer) is located ON the island of Mahé — making Mahé a potentially confusing but technically incorrect answer. More importantly, the explanation itself says Victoria is located on the island of Mahé, so listing Mahé as a wrong answer alongside the correct answer could confuse players into thinking Mahé is the capital city.
- **Action:** fix

**[HARD]** Which Asian country is the only one that borders three oceans?
- **Marked correct:** Indonesia
- **Wrong options:** Philippines | Malaysia | Thailand
- **Problem:** Indonesia does not border three oceans. It borders the Indian Ocean and the Pacific Ocean, but not the Southern Ocean — the Southern Ocean is defined as surrounding Antarctica and does not reach Indonesia. Additionally, the claim that Indonesia is the 'only Asian nation' to border three oceans is unsupported. The premise of the question is factually incorrect.
- **Action:** fix

**[HARD]** What is the highest peak in North America?
- **Marked correct:** Denali
- **Wrong options:** Mount Logan | Mount Elbert | Mount Rainier
- **Problem:** The explanation qualifies 'north of Mexico,' but the question asks for the highest peak in North America without qualification. Denali is indeed the highest peak in all of North America including Mexico, so the qualifier is unnecessary and slightly misleading, but the answer is correct. However, the explanation's parenthetical 'north of Mexico' could imply it's not the tallest including Mexico, which is false — Denali is the tallest in all of North America.
- **Action:** fix

**[HARD]** Which European country has the longest coastline relative to its land area?
- **Marked correct:** Norway
- **Should be:** Norway
- **Wrong options:** Iceland | Greece | Croatia
- **Problem:** The question asks which European country has the longest coastline relative to its land area, but this metric (coastline-to-area ratio) is not straightforwardly verifiable and depends heavily on measurement scale. Norway has the longest absolute coastline in Europe, but on a ratio basis Greece or Croatia could arguably rank higher. The question conflates absolute coastline length with coastline-to-area ratio.
- **Action:** fix

**[HARD]** In what country is the source of the Nile River located?
- **Marked correct:** Burundi
- **Wrong options:** Uganda | Ethiopia | Rwanda
- **Problem:** The source of the Nile is genuinely disputed. While the Luvironza/Ruvyironza River in Burundi is one claim for the most remote headwater, many sources cite Lake Victoria (Uganda) or the White Nile's origins, and Uganda is listed as a wrong answer. This question has no single universally accepted correct answer.
- **Action:** fix

**[HARD]** What is the largest desert in Asia?
- **Marked correct:** Gobi Desert
- **Should be:** Arabian Desert
- **Wrong options:** Arabian Desert | Taklamakan Desert | Kara-Bogaz-Gol Desert
- **Fixed wrong options:** Gobi Desert | Taklamakan Desert | Kara-Bogaz-Gol Desert
- **Problem:** The Arabian Desert (approximately 2.3 million sq km) is larger than the Gobi Desert (approximately 1.3 million sq km), making the Arabian Desert the largest desert in Asia, not the Gobi. The correct answer should be the Arabian Desert.
- **Action:** fix

**[HARD]** Which country is the only one in the world with three capital cities?
- **Marked correct:** South Africa
- **Wrong options:** Bolivia | Nigeria | Australia
- **Fixed wrong options:** Nigeria | Australia | Canada
- **Problem:** Bolivia (listed as a wrong answer) also has two de facto capitals — Sucre (constitutional) and La Paz (seat of government) — making this question potentially ambiguous. However, South Africa with three is uniquely the country with the most capitals, so the correct answer stands, but Bolivia should be replaced as a wrong answer to avoid confusion.
- **Action:** fix

**[HARD]** In which country is the Dead Sea located?
- **Marked correct:** Jordan and Israel
- **Should be:** Jordan and Israel
- **Wrong options:** Syria and Lebanon | Palestine and Israel | Iraq and Syria
- **Fixed wrong options:** Syria and Lebanon | Egypt and Saudi Arabia | Iraq and Syria
- **Problem:** The Dead Sea is also bordered by the West Bank (Palestinian territories), so 'Palestine and Israel' as a wrong answer has partial validity. The question and correct answer omit Palestinian territory, which is a significant geopolitical omission that could make the question contested.
- **Action:** fix

**[HARD]** Which European country is partially located in Asia?
- **Marked correct:** Turkey
- **Should be:** Turkey
- **Wrong options:** Greece | Bulgaria | Russia
- **Fixed wrong options:** Greece | Bulgaria | Romania
- **Problem:** Russia is listed as a wrong answer, but Russia is also a transcontinental country partially located in Asia (the vast majority of Russia is in Asia). The question asks which European country is 'partially located in Asia,' and Russia clearly qualifies as much as Turkey does.
- **Action:** fix

**[HARD]** What is the capital of Comoros?
- **Marked correct:** Moroni
- **Wrong options:** Fomboni | Mamoudzou | Antalaha
- **Problem:** Mamoudzou is listed as a wrong answer, but it is the capital of Mayotte, a French overseas territory — not part of Comoros. However, Comoros claims Mayotte, so this is a geopolitical sensitivity rather than a factual error. More critically, Mamoudzou is not a city in Comoros proper, so it is a valid wrong answer. The question and correct answer are fine.
- **Action:** fix

**[HARD]** Which river is the second-longest in Africa after the Nile?
- **Marked correct:** Congo River
- **Wrong options:** Niger River | Zambezi River | Limpopo River
- **Problem:** The Congo River is not the second-longest river in Africa. The Niger River (~4,180 km) and the Congo River (~4,700 km) are close, but the Zambezi and others complicate rankings. More importantly, multiple sources cite the Niger River as the third-longest and Congo as second, which aligns with the answer — however the Congo's length is sometimes given as ~4,370 km, putting it behind the Niger (~4,180 km) depending on the source. The answer is generally accepted as correct per most authoritative sources.
- **Action:** fix

**[HARD]** Which country is the only one to border both the Atlantic and Indian Oceans?
- **Marked correct:** South Africa
- **Wrong options:** Madagascar | Australia | Brazil
- **Problem:** The claim that South Africa is the only country to border both the Atlantic and Indian Oceans is incorrect. Namibia also has a coastline on the Atlantic Ocean, and while it doesn't touch the Indian Ocean, more critically — no other single country besides South Africa borders both. However, this is actually correct. South Africa is the only country whose mainland borders both the Atlantic and Indian Oceans simultaneously.
- **Action:** fix

**[HARD]** Which is the longest mountain range in the world?
- **Marked correct:** Mid-Ocean Ridge
- **Wrong options:** Andes Mountains | Rocky Mountains | Himalayas
- **Problem:** The question asks for the 'longest mountain range in the world' without specifying underwater or terrestrial. Most people would interpret this as asking about surface/terrestrial mountain ranges, for which the Andes is the correct answer. The Mid-Ocean Ridge is technically correct if underwater ranges are included, but this is a tricky and potentially unfair interpretation of the question.
- **Action:** fix

**[HARD]** Which Asian country is home to the world's longest cave system, Son Doong?
- **Marked correct:** Vietnam
- **Should be:** Vietnam
- **Wrong options:** Thailand | Laos | Cambodia
- **Problem:** The question asks for the 'longest cave system' but Son Doong is recognized as the world's largest cave by volume, not necessarily the longest cave system. The world's longest cave system is Mammoth Cave in the USA. Son Doong is the largest single cave passage by volume and cross-section. The explanation also conflates 'largest by volume' with 'length,' which is inaccurate.
- **Action:** fix

### HISTORY (138 issues)

**[EASY]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which empire built Machu Picchu?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the American Civil War end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did World War II end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who wrote the Declaration of Independence?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Roman Empire fall in the West?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which explorer is credited with being the first European to reach India by sea?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first Holy Roman Emperor?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Industrial Revolution begin?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Renaissance begin?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the American Civil War end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Christopher Columbus sail to the Americas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Christopher Columbus reach the Americas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which ancient wonder of the world still stands today?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which ancient wonder of the world still stands today?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did World War II end?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which empire built the Great Wall of China?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who was the first Emperor of Rome?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the French Revolution begin?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which Byzantine emperor commissioned the construction of the Hagia Sophia in Constantinople?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which treaty ended the Thirty Years' War in 1648?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year was the Declaration of Independence signed?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Spanish Armada attempt to invade England?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Spanish Armada attempt to invade England?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What was the primary cause of the French Revolution?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Columbus sail to the Americas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which ancient wonder of the world still stands today?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which empire built Machu Picchu?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who wrote the Declaration of Independence?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who was the first Holy Roman Emperor?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Berlin Wall fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who was the first Holy Roman Emperor?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which empire built the Great Wall of China?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Ottoman Empire fall?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which ancient wonder of the world still stands today?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Titanic sink?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Christopher Columbus reach the Americas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the American Civil War begin?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which ancient Greek city-state was known for its military prowess?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who was the first President of the United States?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Russian Revolution occur?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the Spanish Armada attempt to invade England?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who was the first emperor of the Roman Empire?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the moon landing occur?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who wrote the Declaration of Independence?
- **Marked correct:** Thomas Jefferson
- **Wrong options:** Benjamin Franklin | John Adams | George Washington
- **Problem:** While Jefferson was the primary author, the Declaration was drafted by a Committee of Five (including Franklin and Adams) and revised by Congress. The question asks 'who wrote' it, which Jefferson is the standard accepted answer, but the explanation should acknowledge this nuance. More critically, no contamination in wrong answers, but the framing is defensible as-is for an easy question.
- **Action:** fix

**[EASY]** In what year did the Holocaust occur?
- **Marked correct:** 1941-1945
- **Should be:** 1941-1945
- **Wrong options:** 1939-1941 | 1943-1945 | 1945-1947
- **Problem:** The Holocaust did not begin suddenly in 1941; Nazi persecution of Jews began in 1933 with systematic discrimination, and mass killings escalated from 1941. Framing 1941-1945 as the answer while listing 1939-1941 as wrong is misleading, as significant persecution and early killings occurred before 1941. The question format using date ranges as answer choices is also awkward for a multiple-choice question.
- **Action:** fix

**[EASY]** Which ocean did Magellan cross during his circumnavigation?
- **Marked correct:** The Pacific Ocean
- **Should be:** The Pacific Ocean
- **Wrong options:** The Atlantic Ocean | The Indian Ocean | The Arctic Ocean
- **Fixed wrong options:** The Arctic Ocean | The Southern Ocean | The Caribbean Sea
- **Problem:** Magellan's expedition also crossed the Atlantic Ocean (to reach South America) and the Indian Ocean (on the return route). The question asks which ocean he crossed 'during his circumnavigation,' which is ambiguous since the voyage crossed multiple oceans. However, the Pacific crossing was the most significant and notable leg. The Atlantic Ocean as a wrong answer is contaminated since the expedition did cross it.
- **Action:** fix

**[EASY]** Who led the French Revolution?
- **Marked correct:** Multiple leaders (no single leader)
- **Should be:** Multiple leaders (no single leader)
- **Wrong options:** King Louis XVI | Napoleon Bonaparte | Marie Antoinette
- **Problem:** Having 'Multiple leaders (no single leader)' as the correct answer for an easy trivia question is pedagogically awkward and the format is unusual. While factually defensible, this type of answer is confusing in a multiple-choice context and the wrong answers include actual historical figures associated with the Revolution. Marie Antoinette was not a revolutionary leader at all.
- **Action:** fix

**[EASY]** What year did the Renaissance begin?
- **Marked correct:** 14th century (approximately 1300s)
- **Should be:** 14th century (approximately 1300s)
- **Wrong options:** 12th century | 15th century | 17th century
- **Fixed wrong options:** 12th century (approximately 1100s) | 15th century (approximately 1400s) | 17th century (approximately 1600s)
- **Problem:** The question asks 'what year' but the correct answer is a century range. Additionally, the question and answer format are mismatched (year vs. century). The Renaissance beginning is also debated, with some scholars placing early signs in the late 13th century.
- **Action:** fix

**[EASY]** In what year did the printing press revolutionize Europe?
- **Marked correct:** 1440
- **Should be:** 1440
- **Wrong options:** 1420 | 1480 | 1510
- **Problem:** The question asks when the printing press 'revolutionized Europe,' which is vague. Gutenberg began developing his press around 1440 but the Gutenberg Bible was printed around 1455, and the technology spread through Europe over subsequent decades. The answer of 1440 is debatable as the moment of 'revolutionizing Europe.'
- **Action:** fix

**[EASY]** Which treaty ended World War I?
- **Marked correct:** The Treaty of Versailles
- **Should be:** The Treaty of Versailles
- **Wrong options:** The Treaty of Paris | The Treaty of Brest-Litovsk | The Treaty of Trianon
- **Fixed wrong options:** The Treaty of Paris | The Treaty of Utrecht | The Treaty of Trianon
- **Problem:** The Treaty of Versailles ended the war with Germany, but WWI was formally ended by a series of treaties. The Treaty of Brest-Litovsk (listed as a wrong answer) actually ended WWI on the Eastern Front in 1918, making it a valid partial answer and potentially confusing to knowledgeable players.
- **Action:** fix

**[EASY]** Who was the first President of China?
- **Marked correct:** Sun Yat-sen
- **Should be:** Sun Yat-sen
- **Wrong options:** Mao Zedong | Chiang Kai-shek | Yuan Shikai
- **Fixed wrong options:** Mao Zedong | Chiang Kai-shek | Deng Xiaoping
- **Problem:** Yuan Shikai is listed as a wrong answer but he was also provisionally President of the Republic of China starting in 1912, immediately after Sun Yat-sen. More importantly, the question is ambiguous — 'first President of China' could refer to the PRC (Mao Zedong held Chairman role, but the first President/Head of State of PRC was Mao) versus the ROC.
- **Action:** fix

**[EASY]** Which ancient Greek city-state was known for its military prowess?
- **Marked correct:** Sparta
- **Should be:** Sparta
- **Wrong options:** Corinth | Thebes | Megara
- **Fixed wrong options:** Corinth | Athens | Megara
- **Problem:** Thebes was also renowned for its military prowess, particularly under Epaminondas, and actually defeated Sparta at the Battle of Leuctra (371 BCE). Listing Thebes as a wrong answer could be considered problematic for knowledgeable players.
- **Action:** fix

**[EASY]** Who was the first Holy Roman Emperor?
- **Marked correct:** Charlemagne
- **Should be:** Charlemagne
- **Wrong options:** Otto I | Frederick Barbarossa | Charles V
- **Fixed wrong options:** Otto I | Frederick Barbarossa | Charles V
- **Problem:** Whether Charlemagne or Otto I was the 'first' Holy Roman Emperor is a matter of historical debate. The title 'Holy Roman Empire' was not used in Charlemagne's time; Otto I (962) is often considered the first Holy Roman Emperor of what became formally known as the Holy Roman Empire.
- **Action:** fix

**[EASY]** In what year did the Renaissance begin?
- **Marked correct:** 14th century
- **Should be:** 14th century
- **Wrong options:** 12th century | 16th century | 13th century
- **Problem:** The question asks 'In what year did the Renaissance begin?' but the correct answer is a century, not a year. The question and answer format are mismatched.
- **Action:** fix

**[EASY]** Which Great Power did not exist during World War I?
- **Marked correct:** Germany (as a unified nation post-1871)
- **Wrong options:** Ottoman Empire | Austro-Hungarian Empire | Russian Empire
- **Problem:** The question is incoherent and self-contradictory — the correct answer 'Germany (as a unified nation post-1871)' did exist during WWI, and the explanation itself admits the question needs revision. This question has no valid premise.
- **Action:** delete

**[EASY]** Who was the military leader of the Confederate States during the American Civil War?
- **Marked correct:** Robert E. Lee
- **Should be:** Robert E. Lee
- **Wrong options:** Jefferson Davis | Braxton Bragg | Joseph E. Johnston
- **Problem:** The question asks for the 'military leader' of the Confederate States, but Jefferson Davis was the Commander-in-Chief as President. Robert E. Lee was only appointed General-in-Chief of all Confederate armies in February 1865, very late in the war. The question should specify 'most prominent general' or 'general of the Army of Northern Virginia' to make Lee unambiguously correct.
- **Action:** fix

**[EASY]** In what year did the Gutenberg printing press revolutionize Europe?
- **Marked correct:** 1440
- **Should be:** 1440
- **Wrong options:** 1430 | 1455 | 1450
- **Fixed wrong options:** 1430 | 1460 | 1450
- **Problem:** The question asks when the press 'revolutionized Europe,' which is vague. Gutenberg began developing his press around 1440, but his first major printed work, the Gutenberg Bible, was completed around 1455, which is listed as a wrong answer. The date 1440 is defensible as the invention date, but 1455 could reasonably be argued as the date of its revolutionary impact.
- **Action:** fix

**[EASY]** Who was the first King of England?
- **Marked correct:** William the Conqueror
- **Should be:** William the Conqueror
- **Wrong options:** Harold Godwinson | Stephen | Matilda
- **Problem:** The question 'Who was the first King of England?' is historically contested. Many historians credit Æthelstan (927 AD) as the first King of a unified England, predating William the Conqueror by over a century. William the Conqueror is more accurately described as the first Norman King of England, not the first King of England overall.
- **Action:** fix

**[EASY]** Which Chinese dynasty built most of the Great Wall?
- **Marked correct:** Ming Dynasty
- **Wrong options:** Great Wall Han Dynasty | Qin Dynasty | Yuan Dynasty
- **Fixed wrong options:** Han Dynasty | Qin Dynasty | Tang Dynasty
- **Problem:** One of the wrong answers is listed as 'Great Wall Han Dynasty' which appears to be a malformed answer (two answers merged). It should simply be 'Han Dynasty.' The Qin Dynasty also built significant early sections of the Great Wall, but Ming is correct as the builder of most of what exists today.
- **Action:** fix

**[EASY]** In what year did the Library of Alexandria burn?
- **Marked correct:** 48 BCE
- **Should be:** 48 BCE
- **Wrong options:** 64 CE | 389 CE | 641 CE
- **Problem:** The destruction of the Library of Alexandria was not a single event with a definitive date. The 48 BCE fire during Caesar's siege was partial and disputed by many historians. Multiple incidents caused damage (Aurelian ~270 CE, Theophilus 391 CE, Arab conquest 641 CE). Presenting 48 BCE as the definitive answer while listing other plausible dates as 'wrong' is misleading.
- **Action:** fix

**[EASY]** In what year did the Industrial Revolution begin?
- **Marked correct:** 1760
- **Should be:** 1760
- **Wrong options:** 1740 | 1780 | 1720
- **Problem:** The Industrial Revolution does not have a precise start year, and historians debate whether it began closer to 1760 or 1780. The question presents 1760 as a single correct answer while listing 1780 as wrong, but many reputable sources cite the 1760s–1780s as the beginning. This is too imprecise a fact to have a single correct year as an answer.
- **Action:** fix

**[EASY]** Which civilization is credited with inventing written language?
- **Marked correct:** The Sumerians
- **Should be:** The Sumerians
- **Wrong options:** The Egyptians | The Minoans | The Akkadians
- **Fixed wrong options:** The Egyptians | The Minoans | The Phoenicians
- **Problem:** The Akkadians are listed as a wrong answer, but the Sumerians and Akkadians both used cuneiform and are closely related civilizations. More importantly, Egyptian hieroglyphics emerged at roughly the same time (~3200–3100 BCE) as Sumerian cuneiform, making the claim that Sumerians alone are 'credited' with inventing written language debatable. However, Sumerians are the most commonly accepted answer.
- **Action:** fix

**[EASY]** Who was the longest-reigning British monarch before Queen Victoria?
- **Marked correct:** George III
- **Wrong options:** Henry VIII | Elizabeth I | Charles II
- **Problem:** George III reigned from 1760 to 1820, which is 59 years. However, King Henry III reigned from 1216 to 1272 (56 years) and King Edward III reigned 50 years, so George III is correct among the options. But critically, the explanation says Victoria surpassed his record 'in 1896' — Victoria's reign began in 1837, and she surpassed George III's 59-year record in 1896, which is correct. However, James VI of Scotland (James I of England) reigned in Scotland for much longer. As King of England specifically, George III is correct.
- **Action:** fix

**[EASY]** What year did the Declaration of Independence get signed?
- **Marked correct:** 1776
- **Should be:** 1776
- **Wrong options:** 1774 | 1778 | 1781
- **Problem:** The Declaration of Independence was adopted by the Continental Congress on July 4, 1776, but most delegates actually signed the engrossed parchment copy on August 2, 1776. The question asks when it was 'signed,' which is technically August 2, 1776, though July 4 is the date commemorated and commonly associated with it.
- **Action:** fix

**[EASY]** In what year did the Printing Press get invented?
- **Marked correct:** 1440
- **Should be:** Around 1450
- **Wrong options:** 1425 | 1455 | 1470
- **Fixed wrong options:** 1425 | 1490 | 1470
- **Problem:** The date of Gutenberg's printing press invention is debated; ~1440 refers to early development, but the press was operational closer to 1450 and the Gutenberg Bible was printed ~1455. The question asks for an exact year but the correct answer is approximate, making 1455 (a wrong answer) arguably more defensible as a completion date.
- **Action:** fix

**[EASY]** In what year did the Silk Road trade route become prominent?
- **Marked correct:** 2nd century BCE
- **Should be:** 2nd century BCE
- **Wrong options:** 1st century BCE | 1st century CE | 3rd century BCE
- **Fixed wrong options:** 1st century BCE | 1st century CE | 3rd century CE
- **Problem:** Asking for a specific year in a multiple-choice format but presenting century-level answers is inconsistent with the question stem 'In what year.' More importantly, the Silk Road's prominence is debated; some scholars place early activity in the 3rd century BCE under the Qin. The format mismatch between 'year' and 'century' answers is also problematic.
- **Action:** fix

**[EASY]** Which explorer is credited with circumnavigating the globe?
- **Marked correct:** Ferdinand Magellan
- **Should be:** Ferdinand Magellan's expedition (completed by Elcano)
- **Wrong options:** Vasco da Gama | Bartholomeu Dias | John Cabot
- **Fixed wrong options:** Vasco da Gama | Bartholomeu Dias | John Cabot
- **Problem:** Magellan did not complete the circumnavigation — he died in the Philippines in 1521. Juan Sebastián Elcano completed the voyage. Crediting Magellan alone as 'the explorer credited with circumnavigating the globe' is misleading, though the expedition is commonly named after him.
- **Action:** fix

**[EASY]** Which dynasty ruled ancient Egypt for the longest period?
- **Marked correct:** The Ptolemaic Dynasty
- **Should be:** The Old Kingdom's Dynasty IV or the overall Dynastic period is complex; this question as framed is factually unsupported
- **Wrong options:** The New Kingdom | The Middle Kingdom | The Old Kingdom
- **Problem:** The Ptolemaic Dynasty (305–30 BCE, ~275 years) was not the longest-ruling single dynasty in ancient Egyptian history. The First Dynasty and others ruled longer, and the claim is disputed by Egyptologists. Additionally, 'The New Kingdom,' 'Middle Kingdom,' and 'Old Kingdom' listed as wrong answers are periods/eras, not dynasties, making the comparison inconsistent.
- **Action:** fix

**[MEDIUM]** What was the primary cause of the French Revolution?
- **Marked correct:** Financial crisis and inequality
- **Wrong options:** Military defeat by Britain | Religious persecution | Famine alone
- **Problem:** The question asks for the 'primary cause' of the French Revolution, which is a matter of ongoing historical debate. Multiple factors (financial crisis, Enlightenment ideas, food shortages, social inequality) are considered primary by different historians, making this inherently ambiguous. Additionally, 'famine alone' as a wrong answer implies famine was not a major cause, when in fact food shortages were a significant contributing factor.
- **Action:** fix

**[MEDIUM]** Which leader ordered the construction of the Great Wall of China?
- **Marked correct:** Qin Shi Huang
- **Wrong options:** Kangxi | Yonglo | Hong Wu
- **Problem:** The question asks who 'ordered the construction' of the Great Wall, but the Great Wall was built and expanded by multiple dynasties. Qin Shi Huang ordered the first unified wall, but the iconic current wall was largely built by the Ming Dynasty. The question should specify 'first ordered the unification of walls into a continuous structure' to be accurate.
- **Action:** fix

**[MEDIUM]** In which city was the Treaty of Versailles signed?
- **Marked correct:** Versailles
- **Wrong options:** Paris | Berlin | Geneva
- **Problem:** The Palace of Versailles is located in the city of Versailles, which is a suburb of Paris but is a separate city. However, 'Paris' as a wrong answer is close enough to cause confusion since Versailles is in the greater Paris region. More critically, the question is sound — Versailles is correct — but Paris could mislead since the peace conference was held in Paris and Versailles is often colloquially grouped with Paris.
- **Action:** fix

**[MEDIUM]** Which civilization is credited with inventing the wheel?
- **Marked correct:** The Sumerians
- **Wrong options:** The Egyptians | The Indus Valley Civilization | The Minoans
- **Problem:** The invention of the wheel is not definitively attributed to the Sumerians alone. Archaeological evidence suggests the wheel may have been independently invented in multiple locations (Mesopotamia, the Eurasian steppe, possibly the Indus Valley). Listing 'The Indus Valley Civilization' as a wrong answer is problematic given the uncertainty. This is not settled historical fact.
- **Action:** fix

**[MEDIUM]** Which ancient library was famously destroyed in Alexandria?
- **Marked correct:** The Library of Alexandria
- **Wrong options:** The Library of Pergamum | The Library of Antioch | The Library of Heliopolis
- **Problem:** The question 'Which ancient library was famously destroyed in Alexandria?' is circular — the answer is literally named after the city mentioned in the question. The question essentially asks 'what is the library in Alexandria called?' which is trivial and not a good trivia question format.
- **Action:** fix

**[MEDIUM]** Who was the primary architect of the Indian independence movement?
- **Marked correct:** Mahatma Gandhi
- **Wrong options:** Jawaharlal Nehru | Subhas Chandra Bose | Bal Gangadhar Tilak
- **Problem:** Calling Gandhi the 'primary architect' of Indian independence is debatable. Jawaharlal Nehru, listed as a wrong answer, was also a central leader of the independence movement and became the first Prime Minister. Many historians consider both essential, making this question potentially unfair to knowledgeable players.
- **Action:** fix

**[MEDIUM]** Which explorer is credited with being the first to circumnavigate the globe?
- **Marked correct:** Ferdinand Magellan
- **Wrong options:** Vasco da Gama | Christopher Columbus | Bartholomeu Dias
- **Problem:** Magellan died in the Philippines in 1521 and did not complete the circumnavigation. Juan Sebastián Elcano commanded the ship that actually completed the first circumnavigation. The question's framing of Magellan as 'credited with being the first to circumnavigate the globe' is disputed — many historians credit Elcano or the expedition collectively, not Magellan personally.
- **Action:** fix

**[MEDIUM]** What was the main reason for the American Civil War?
- **Marked correct:** Southern states' desire to preserve slavery and secession
- **Wrong options:** Northern industrial dominance | Trade tariff disputes | Western expansion conflicts
- **Fixed wrong options:** Dispute over control of the U.S. Navy | Conflict over railroad nationalization | Northern states' refusal to pay war debts
- **Problem:** While slavery was the central issue, 'trade tariff disputes' listed as a wrong answer actually played a documented historical role in sectional tensions leading to the Civil War (e.g., the Tariff of Abominations). This could be considered partially correct, making it a contaminated wrong answer.
- **Action:** fix

**[MEDIUM]** What ancient structure served as the primary defensive fortification for the Roman Empire's northern border?
- **Marked correct:** Hadrian's Wall
- **Wrong options:** The Antonine Wall | The Saxon Shore | The Limes Germanicus
- **Fixed wrong options:** The Aurelian Wall | The Saxon Shore | The Antonine Wall
- **Problem:** The Limes Germanicus listed as a wrong answer was also a major Roman defensive border fortification (along the Rhine-Danube frontier in Germania), making it a legitimate answer to 'primary defensive fortification for the Roman Empire's northern border.' The Roman Empire's northern border was not only in Britain, so Limes Germanicus could reasonably be considered correct.
- **Action:** fix

**[MEDIUM]** Which ancient city was preserved by the eruption of Mount Vesuvius?
- **Marked correct:** Pompeii
- **Wrong options:** Rome | Herculaneum | Naples
- **Fixed wrong options:** Rome | Athens | Naples
- **Problem:** Herculaneum was also preserved by the eruption of Mount Vesuvius in 79 CE, making it a correct answer as well. The question should either specify Pompeii explicitly in the question or replace Herculaneum as a wrong answer.
- **Action:** fix

**[MEDIUM]** Who led the Russian Revolution of 1917?
- **Marked correct:** Vladimir Lenin
- **Wrong options:** Leon Trotsky | Joseph Stalin | Nikolai Bukharin
- **Problem:** Leon Trotsky played a major organizational role in the October Revolution of 1917, commanding the Military Revolutionary Committee that carried out the insurrection, making him a plausible correct answer alongside Lenin. The question should clarify 'political leader' or 'head of the Bolshevik Party' to make Lenin unambiguously correct.
- **Action:** fix

**[MEDIUM]** Which ancient Roman Emperor divided the empire into Eastern and Western halves in 285 CE?
- **Marked correct:** Diocletian
- **Should be:** Diocletian
- **Wrong options:** Constantine | Theodosius | Augustus
- **Problem:** Diocletian introduced the Tetrarchy in 293 CE, not 285 CE. In 285 CE he appointed Maximian as co-emperor (creating a diarchy), but the formal four-part Tetrarchy was established in 293 CE. Additionally, the explanation's characterization of splitting into 'four administrative regions' conflates the Tetrarchy with a simple East-West division.
- **Action:** fix

**[MEDIUM]** Who was the first female pharaoh of Egypt to rule in her own right for an extended period?
- **Marked correct:** Hatshepsut
- **Should be:** Hatshepsut
- **Wrong options:** Nefertiti | Cleopatra VII | Sobekneferu
- **Fixed wrong options:** Nefertiti | Cleopatra VII | Ahmose-Nefertari
- **Problem:** The question asks for the 'first female pharaoh to rule in her own right for an extended period,' but Sobekneferu is listed as a wrong answer despite potentially predating Hatshepsut as a ruling female pharaoh. The explanation acknowledges this but the question's framing and inclusion of Sobekneferu as a wrong answer is misleading and could be contested.
- **Action:** fix

**[MEDIUM]** Which civilization is credited with inventing paper, gunpowder, and the printing press?
- **Marked correct:** China
- **Should be:** China
- **Wrong options:** Japan | Korea | Vietnam
- **Problem:** The question claims China invented 'the printing press,' but the Four Great Inventions of China include 'printing' (specifically woodblock printing and movable type), not 'the printing press' — that term is most commonly associated with Gutenberg's mechanical press in Europe. More critically, the explanation says these are 'three of the Four Great Inventions' but the actual Four Great Inventions are papermaking, printing, gunpowder, and the compass — not the printing press as a distinct invention.
- **Action:** fix

**[MEDIUM]** Which Mesoamerican civilization built the pyramid at Chichen Itza, known as El Castillo?
- **Marked correct:** The Maya
- **Should be:** The Maya
- **Wrong options:** The Aztecs | The Olmecs | The Toltecs
- **Problem:** The question is somewhat ambiguous because Chichen Itza shows significant Toltec influence and some historians debate whether it was built by the Maya, the Toltecs, or a hybrid Maya-Toltec culture. The Toltec wrong answer could be argued as partially correct by some scholars.
- **Action:** fix

**[MEDIUM]** In what year did the Russian Revolution overthrow the Tsarist government?
- **Marked correct:** 1917
- **Wrong options:** 1905 | 1922 | 1928
- **Problem:** The year 1905 is listed as a wrong answer, but there was indeed a Russian Revolution in 1905. While it did not ultimately overthrow the Tsarist government (making 1917 the best answer), the question asks when the revolution 'overthrew' the Tsarist government, so 1905 is correctly wrong. However, the explanation should clarify the 1905 revolution existed to avoid confusion.
- **Action:** fix

**[MEDIUM]** What was the primary conflict that led to the American Civil War?
- **Marked correct:** The dispute over slavery's expansion into new states
- **Should be:** The dispute over slavery and its expansion into new territories
- **Wrong options:** Disagreements over tariff policies | Northern industrial dominance over the South | The election of Abraham Lincoln alone
- **Problem:** The question asks for the 'primary conflict' but the correct answer focuses on expansion of slavery into new states, while the broader issue of slavery itself (not just its expansion) is arguably the primary conflict. Additionally, the election of Abraham Lincoln alone (a wrong answer) was actually a major proximate trigger for secession, making the phrasing potentially confusing.
- **Action:** fix

**[MEDIUM]** Which empire controlled the Silk Road trade networks that connected China with the Mediterranean world?
- **Marked correct:** The Roman Empire and the Han Dynasty (simultaneously)
- **Should be:** The Roman Empire and the Han Dynasty (simultaneously)
- **Wrong options:** The Ottoman Empire exclusively | The Mongol Empire exclusively | The Persian Empire exclusively
- **Problem:** The question asks which empire 'controlled' the Silk Road, but no single empire controlled it entirely at any one time. The correct answer acknowledges both Roman and Han empires simultaneously, which is valid, but the framing is misleading. Additionally, intermediate empires like the Parthians played a crucial role and are not mentioned.
- **Action:** fix

**[MEDIUM]** Which African kingdom was the richest and most powerful in sub-Saharan Africa during the medieval period, known for its salt and gold trade?
- **Marked correct:** The Mali Empire
- **Should be:** The Mali Empire
- **Wrong options:** The Kingdom of Kush | The Songhai Empire | The Great Zimbabwe
- **Problem:** The Songhai Empire, listed as a wrong answer, could be argued as a correct answer — it succeeded the Mali Empire and was arguably larger and wealthier at its peak. The question's time frame 'medieval period' is vague enough that Songhai qualifies. The question should be more specific about time period or rephrase to clearly target Mali.
- **Action:** fix

**[MEDIUM]** In what year did the Gutenberg printing press revolutionize the spread of information in Europe?
- **Marked correct:** 1440
- **Should be:** Around 1440
- **Wrong options:** 1415 | 1480 | 1500
- **Fixed wrong options:** 1415 | 1480 | 1500
- **Problem:** The question asks what year the Gutenberg press 'revolutionized' information spread, but 1440 is an approximate development date, not a clear published date. The Gutenberg Bible was completed ~1455, and the press's widespread impact came later still. The answer '1440' is cited as 'around' in the explanation, making this imprecise as a trivia answer.
- **Action:** fix

**[MEDIUM]** Who led the Indian independence movement against British rule?
- **Marked correct:** Mahatma Gandhi
- **Should be:** Mahatma Gandhi
- **Wrong options:** Jawaharlal Nehru | Subhas Chandra Bose | Muhammad Ali Jinnah
- **Problem:** The question asks who 'led' the independence movement, but Jawaharlal Nehru, Subhas Chandra Bose, and Muhammad Ali Jinnah were all major leaders of significant independence movements — particularly Jinnah who led the successful movement for Pakistan's independence. Listing them all as wrong answers is problematic.
- **Action:** fix

**[MEDIUM]** Which empire was ruled by Julius Caesar?
- **Marked correct:** The Roman Republic (transitioning to Empire)
- **Should be:** The Roman Republic
- **Wrong options:** The Persian Empire | The Macedonian Empire | The Egyptian Empire
- **Fixed wrong options:** The Persian Empire | The Macedonian Empire | The Byzantine Empire
- **Problem:** The question asks 'Which empire was ruled by Julius Caesar?' but Caesar never ruled an empire — he was a dictator of the Roman Republic and was assassinated before any formal empire was established. The correct answer acknowledges this but the question itself is misleadingly framed.
- **Action:** fix

**[MEDIUM]** Which treaty ended the Hundred Years' War between England and France?
- **Marked correct:** Treaty of Troyes (partially) and Treaty of Paris (finally)
- **Should be:** No single formal treaty; the war ended with French victory in 1453
- **Wrong options:** Treaty of Amiens | Treaty of Utrecht | Treaty of Brétigny
- **Fixed wrong options:** Treaty of Brétigny | Treaty of Amiens | Treaty of Utrecht
- **Problem:** The Hundred Years' War ended in 1453 with French victories, not via the Treaty of Paris of 1763 (which ended the Seven Years' War). The war wound down without a formal comprehensive treaty; the closest endpoint is the fall of Bordeaux in 1453. The correct answer and explanation are factually wrong, and the Treaty of Brétigny (1360) — listed as a wrong answer — is more relevant to the Hundred Years' War than the stated 'correct' answer.
- **Action:** fix

**[MEDIUM]** Who invented the printing press?
- **Marked correct:** Johannes Gutenberg
- **Should be:** Johannes Gutenberg
- **Wrong options:** Alcuin of York | Bi Sheng | William Caxton
- **Fixed wrong options:** Alcuin of York | William Caxton | Christopher Plantin
- **Problem:** Bi Sheng invented movable type printing in China around 1040 AD, predating Gutenberg by roughly 400 years. If the question asks who 'invented the printing press' without qualification, Bi Sheng could reasonably be considered correct, contaminating the wrong answers. The question should be clarified to specify the European movable-type printing press.
- **Action:** fix

**[MEDIUM]** Which battle is often considered the turning point of the American Civil War?
- **Marked correct:** Battle of Gettysburg
- **Should be:** Battle of Gettysburg
- **Wrong options:** Battle of Antietam | Battle of Vicksburg | Battle of Fort Sumter
- **Fixed wrong options:** Battle of Antietam | Battle of Bull Run | Battle of Fort Sumter
- **Problem:** The Battle of Vicksburg (also July 1863) is equally considered a turning point of the Civil War by many historians, and excluding it as 'wrong' is contestable. The question should acknowledge that Gettysburg is the most commonly cited single turning point to justify the answer.
- **Action:** fix

**[MEDIUM]** Which civilization created the first written law code?
- **Marked correct:** Babylon (Code of Hammurabi)
- **Should be:** Sumer (Code of Ur-Nammu)
- **Wrong options:** Egypt | Assyria | Sumeria
- **Fixed wrong options:** Egypt | Assyria | Babylon
- **Problem:** Sumeria (Sumer) is listed as a wrong answer, but the Sumerians produced earlier written law codes such as the Code of Ur-Nammu (c. 2100 BC) and the Laws of Lipit-Ishtar, which predate Hammurabi's Code (c. 1754 BC). Sumeria could reasonably be considered the correct answer to 'first written law code,' contaminating the wrong answers.
- **Action:** fix

**[HARD]** In what year was the Library of Alexandria believed to have been largely destroyed?
- **Marked correct:** 48 BCE
- **Wrong options:** 391 CE | 642 CE | 1204 CE
- **Problem:** The destruction of the Library of Alexandria is genuinely disputed among historians with no consensus on a single date; the question itself acknowledges multiple destructive events. Marking 48 BCE as the primary answer is defensible but the explanation admits the 391 CE and 642 CE dates are also valid answers, making the question misleading. Additionally, listing '391 CE' as a wrong answer is problematic since the explanation acknowledges it caused significant damage.
- **Action:** fix

**[HARD]** What was the name of the peace treaty that ended the Thirty Years' War?
- **Marked correct:** Peace of Westphalia
- **Wrong options:** Peace of Utrecht | Treaty of Münster | Peace of Augsburg
- **Fixed wrong options:** Peace of Utrecht | Peace of Augsburg | Treaty of Cateau-Cambrésis
- **Problem:** The 'Treaty of Münster' listed as a wrong answer is actually one of the two treaties that together constitute the Peace of Westphalia, as the explanation itself acknowledges. It cannot be a wrong answer if it is literally a component of the correct answer.
- **Action:** fix

**[HARD]** In what year did the Ottoman Empire fall and the modern Turkish Republic emerge?
- **Marked correct:** 1923
- **Should be:** 1923
- **Wrong options:** 1918 | 1922 | 1925
- **Fixed wrong options:** 1918 | 1921 | 1925
- **Problem:** The Ottoman Sultanate was formally abolished on November 1, 1922, and '1922' is listed as a wrong answer. A reasonable case can be made that the Ottoman Empire 'fell' in 1922, making 1922 a potentially correct answer depending on interpretation. The question should be more precisely worded.
- **Action:** fix

**[HARD]** Which Roman Emperor divided the empire into Eastern and Western halves?
- **Marked correct:** Diocletian
- **Wrong options:** Constantine I | Theodosius I | Valerian
- **Problem:** The question asks who 'divided the empire into Eastern and Western halves,' but this is genuinely ambiguous. Diocletian created the Tetrarchy (a four-way administrative division, not a simple East-West split), while Theodosius I made the permanent East-West division in 395 CE upon his death. The correct answer of Diocletian is defensible but contestable, and the explanation itself acknowledges Theodosius did the permanent split.
- **Action:** fix

**[HARD]** Which treaty ended the Wars of the Roses in England?
- **Marked correct:** Treaty of Picquigny
- **Should be:** No single treaty formally ended the Wars of the Roses; it ended with the Battle of Bosworth Field (1485) and Henry VII's accession
- **Wrong options:** Treaty of Troyes | Treaty of Windsor | Treaty of Amboise
- **Problem:** The Treaty of Picquigny (1475) did NOT end the Wars of the Roses — it was a peace treaty between England and France. The Wars of the Roses are generally considered to have ended with the Battle of Bosworth Field (1485) and Henry VII's subsequent consolidation of power, not through any single named treaty. No treaty is specifically credited with formally ending the Wars of the Roses.
- **Action:** fix

**[HARD]** Who was the first President of the Soviet Union?
- **Marked correct:** Vladimir Lenin
- **Should be:** Vladimir Lenin (as Chairman of the Council of People's Commissars)
- **Wrong options:** Joseph Stalin | Leon Trotsky | Nikita Khrushchev
- **Problem:** Lenin was never 'President of the Soviet Union' — that title did not exist during his leadership. Lenin served as Chairman of the Council of People's Commissars (head of government). The position of President of the Soviet Union was not created until 1990, and Mikhail Gorbachev was its only holder. The question and answer are factually misleading.
- **Action:** fix

**[HARD]** Which Mongol leader's grandson founded the Yuan Dynasty in China?
- **Marked correct:** Kublai Khan
- **Should be:** Genghis Khan
- **Wrong options:** Möngke Khan | Ögedei Khan | Tolui Khan
- **Fixed wrong options:** Ögedei Khan | Möngke Khan | Tolui Khan
- **Problem:** The question asks which Mongol leader's grandson founded the Yuan Dynasty, but Kublai Khan was Genghis Khan's grandson, not a 'Mongol leader's grandson' in a general sense. More critically, the answer lists Kublai Khan as the correct answer but the question asks for the grandfather/leader, not Kublai himself. The question is poorly structured — it asks for the grandfather but gives the grandson as the answer. Additionally, Kublai Khan ruled until 1294, not 1295.
- **Action:** fix

**[HARD]** Which African kingdom was the first to officially adopt Christianity as its state religion?
- **Marked correct:** Aksum (Axum)
- **Should be:** Aksum (Axum)
- **Wrong options:** Mali | Ethiopia | Great Zimbabwe
- **Fixed wrong options:** Mali | Nubia (Kush) | Great Zimbabwe
- **Problem:** Ethiopia is listed as a wrong answer, but the Kingdom of Aksum was located in what is now Ethiopia (and Eritrea). Listing 'Ethiopia' as a wrong answer when the correct answer is Aksum — which is modern Ethiopia — is contradictory and potentially confusing, as some sources refer to Aksum simply as ancient Ethiopia.
- **Action:** fix

**[HARD]** What was the primary economic system that replaced feudalism in medieval Europe?
- **Marked correct:** Mercantilism
- **Should be:** Mercantilism
- **Wrong options:** Capitalism | Socialism | Manorialism
- **Fixed wrong options:** Capitalism | Socialism | Physiocracy
- **Problem:** Manorialism, listed as a wrong answer, is actually considered the economic system of feudal Europe itself — it preceded and overlapped with feudalism rather than replacing it. More critically, historians debate whether mercantilism truly 'replaced' feudalism; capitalism is often cited as the system that replaced feudal structures. The question is misleading.
- **Action:** fix

**[HARD]** Which empire is credited with developing the concept of zero in mathematics?
- **Marked correct:** Gupta Empire
- **Should be:** Gupta Empire
- **Wrong options:** Maurya Empire | Chola Empire | Harappan Civilization
- **Fixed wrong options:** Maurya Empire | Chola Empire | Harappan Civilization
- **Problem:** The concept of zero is more accurately attributed to Indian mathematicians broadly, with the Babylonians and Mayans also developing zero independently. The specific credit is often given to the mathematician Brahmagupta (7th century CE), who worked after the Gupta Empire's peak. Attributing zero solely to the Gupta Empire is an oversimplification that could be contested.
- **Action:** fix

**[HARD]** What was the primary result of the Treaty of Versailles in 1919?
- **Marked correct:** To impose harsh reparations and territorial losses on Germany following World War I
- **Should be:** To impose harsh reparations and territorial losses on Germany following World War I
- **Wrong options:** To establish the League of Nations as the sole governing body | To unite all European nations into a federation | To redistribute all colonial territories equally among victorious powers
- **Fixed wrong options:** To formally divide the Ottoman Empire among the Allied powers | To unite all European nations into a federation | To redistribute all colonial territories equally among victorious powers
- **Problem:** The League of Nations was actually established by the Treaty of Versailles (Part I of the treaty), so the wrong answer 'To establish the League of Nations as the sole governing body' contains a partial truth that makes it misleading. The qualifier 'as the sole governing body' makes it technically incorrect, but the phrasing is confusingly close to a real outcome of the treaty.
- **Action:** fix

**[HARD]** In what year did the Cold War officially end?
- **Marked correct:** 1991
- **Should be:** 1991
- **Wrong options:** 1989 | 1990 | 1992
- **Fixed wrong options:** 1985 | 1993 | 1987
- **Problem:** The Cold War's 'official' end date is genuinely debated. Many historians point to 1989 (fall of the Berlin Wall) or the Malta Summit, while others use 1991 (Soviet dissolution). The question treats 1991 as the definitive answer while listing 1989 as wrong, but 1989 is a widely accepted endpoint cited in many academic sources.
- **Action:** fix

**[HARD]** In what year did the Library of Alexandria face its final major destruction?
- **Marked correct:** 391 CE
- **Should be:** 391 CE
- **Wrong options:** 48 BCE | 273 CE | 642 CE
- **Fixed wrong options:** 48 BCE | 273 CE | 415 CE
- **Problem:** The destruction of the Library of Alexandria is one of history's most debated topics with no clear consensus on a single 'final' destruction date. Historians dispute whether 391 CE, 48 BCE (Caesar's fire), 270s CE (Aurelian), or 642 CE (Arab conquest) represents the key event. Calling 391 CE the definitive 'final major destruction' is contested, and 642 CE is also listed as a wrong answer despite being a credible candidate.
- **Action:** fix

**[HARD]** What was the primary name of the conflict between the Ottoman Empire and the Safavid Empire that lasted intermittently from 1534-1639?
- **Marked correct:** Turco-Persian Wars
- **Should be:** Ottoman-Safavid Wars
- **Wrong options:** Sunni-Shia Crusade | Ottoman-Persian Schism | Islamic Civil Wars
- **Problem:** The conflict between the Ottomans and Safavids is more commonly referred to as the 'Ottoman-Safavid Wars' or 'Ottoman-Persian Wars' rather than 'Turco-Persian Wars,' which is a broader term spanning many centuries beyond 1534-1639. The framing of 'primary name' is contestable.
- **Action:** fix

**[HARD]** Who was the first European to establish a permanent colony in what is now Canada?
- **Marked correct:** Samuel de Champlain
- **Should be:** Samuel de Champlain
- **Wrong options:** Jacques Cartier | John Cabot | Henry Hudson
- **Problem:** The first permanent European settlement in what is now Canada is generally credited to Pierre Dugua de Mons, who established Port Royal in 1605, with Champlain as a participant. Additionally, some argue the Basque settlement at Red Bay predates these. The claim that Champlain founded the 'first permanent' colony is debatable, as Port Royal (1605) preceded Quebec City (1608).
- **Action:** fix

**[HARD]** Which medieval Mongol Empire official compiled the 'Secret History of the Mongols'?
- **Marked correct:** Unknown (author anonymous)
- **Wrong options:** Rashid al-Din | Juvayni | Möngke Khan
- **Problem:** A trivia question whose correct answer is 'Unknown (author anonymous)' is structurally problematic — it is essentially asking players to select 'unknown' as an answer, which is confusing and unsatisfying as a trivia format. Additionally, the question asks 'which official compiled' implying a known answer exists.
- **Action:** fix

**[HARD]** How many times did Napoleon escape exile or lose control of France?
- **Marked correct:** Three
- **Should be:** Two
- **Wrong options:** Two | Four | Five
- **Fixed wrong options:** One | Three | Four
- **Problem:** The question asks how many times Napoleon 'escaped exile or lost control of France,' which is vague and the explanation does not clearly justify 'three.' Napoleon lost control twice (1814 and 1815) and escaped exile once (from Elba). He never escaped from Saint Helena. The count and framing are confusing.
- **Action:** fix

**[HARD]** Which ancient kingdom, centered in Axum (modern Ethiopia), was the first to adopt Christianity as a state religion?
- **Marked correct:** Aksumite Empire
- **Should be:** Aksumite Empire
- **Wrong options:** Kush | Nubia | Mali
- **Problem:** Armenia is widely considered the first nation to adopt Christianity as a state religion (301 CE), predating the Aksumite Empire's conversion under King Ezana (c. 330 CE). The question's claim that Aksumite Empire was 'the first' is contested.
- **Action:** fix

**[HARD]** In what year was the Library of Alexandria deliberately destroyed or ceased to function as a major center of learning?
- **Marked correct:** 391 CE
- **Wrong options:** 48 BCE | 642 CE | 1453 CE
- **Problem:** The destruction of the Library of Alexandria is a historically contested topic with no single agreed date. Scholars debate multiple events (48 BCE, 270s CE, 391 CE, 642 CE) and there is no scholarly consensus that 391 CE is definitively the correct answer. Presenting one date as 'the' answer is misleading.
- **Action:** fix

**[HARD]** Which Prussian king implemented the Sanitation Edict of 1685 that revolutionized public health?
- **Marked correct:** Frederick William, the Great Elector
- **Wrong options:** Frederick II | Frederick William I | Frederick William III
- **Problem:** The 'Sanitation Edict of 1685' attributed to Frederick William, the Great Elector, is not a well-documented or verifiable historical edict. Frederick William's Edict of Potsdam (1685) welcomed French Huguenots to Prussia — it was not a public health or sanitation measure.
- **Action:** fix

**[HARD]** In what year did the Eastern Roman Empire (Byzantine Empire) recapture North Africa from the Vandals?
- **Marked correct:** 534 CE
- **Should be:** 534 CE
- **Wrong options:** 439 CE | 533 CE | 642 CE
- **Fixed wrong options:** 439 CE | 455 CE | 642 CE
- **Problem:** Belisarius's decisive victory over the Vandals occurred in 533 CE (Battle of Ad Decimum and Battle of Tricamarum). The formal end of Vandal resistance and consolidation came in 534 CE. However, the wrong answers include 533 CE, which is arguably more correct as the year of reconquest. The question and correct answer need clarification.
- **Action:** fix

**[HARD]** Who was the first woman to rule the Holy Roman Empire as regent with significant independent power?
- **Marked correct:** Maria Theresa
- **Should be:** Maria Theresa
- **Wrong options:** Eleanor of Aquitaine | Catherine the Great | Isabella of Castile
- **Problem:** Maria Theresa was never Holy Roman Empress in her own right — she was Queen of Hungary and Bohemia, and her husband Francis I was Holy Roman Emperor. Describing her as ruling 'the Holy Roman Empire as regent' is historically inaccurate framing. The question conflates her actual role.
- **Action:** fix

**[HARD]** Which Chinese dynasty was established by the Jurchen people and ruled for nearly 300 years?
- **Marked correct:** Jin Dynasty
- **Should be:** Qing Dynasty
- **Wrong options:** Liao Dynasty | Yuan Dynasty | Qing Dynasty
- **Fixed wrong options:** Liao Dynasty | Yuan Dynasty | Jin Dynasty
- **Problem:** The explanation contradicts the correct answer: it states the Jin Dynasty ruled for 'nearly 120 years' but the question states 'nearly 300 years.' The Jin Dynasty lasted from 1115-1234, which is approximately 119 years, not 300. The Qing Dynasty (also Jurchen/Manchu) lasted about 268 years, which is closer to 300.
- **Action:** fix

**[HARD]** What was the name of the 1919 peace conference that officially ended World War I?
- **Marked correct:** Treaty of Versailles
- **Should be:** Paris Peace Conference
- **Wrong options:** Conference of Paris | Treaty of Berlin | Congress of Vienna
- **Fixed wrong options:** Treaty of Versailles | Treaty of Berlin | Congress of Vienna
- **Problem:** The question asks for the name of the '1919 peace conference' but the correct answer given is 'Treaty of Versailles,' which is a treaty, not a conference. The Paris Peace Conference was the conference; the Treaty of Versailles was one of its outcomes.
- **Action:** fix

**[HARD]** Which ancient civilization is credited with inventing the first known form of written law code?
- **Marked correct:** Babylon (Code of Hammurabi)
- **Should be:** Sumer (Code of Ur-Nammu)
- **Wrong options:** Egypt | Mesopotamia (Sumer) | Assyria
- **Fixed wrong options:** Egypt | Babylon (Code of Hammurabi) | Assyria
- **Problem:** The wrong answer 'Mesopotamia (Sumer)' is arguably more correct than 'Babylon (Code of Hammurabi)' because the Ur-Nammu law code from Sumer (~2100 BCE) predates the Code of Hammurabi (~1754 BCE) and is the earliest known written law code. The correct answer as marked is misleading.
- **Action:** fix

**[HARD]** In what year did the Qing Dynasty fall, ending imperial rule in China?
- **Marked correct:** 1912
- **Wrong options:** 1898 | 1911 | 1920
- **Problem:** The question is slightly ambiguous because the Xinhai Revolution that overthrew the dynasty occurred in 1911, and '1911' appears as a wrong answer. The formal abdication was February 12, 1912, so 1912 is correct, but the explanation should more clearly justify why 1911 is wrong.
- **Action:** fix

**[HARD]** Which Ottoman sultan introduced administrative reforms known as the 'Tanzimat' in 1839?
- **Marked correct:** Mahmud II
- **Should be:** Abdulmejid I
- **Wrong options:** Selim III | Abdul Hamid II | Mustafa III
- **Fixed wrong options:** Mahmud II | Abdul Hamid II | Mustafa III
- **Problem:** The Tanzimat reforms began in 1839 under Sultan Abdulmejid I, not Mahmud II. Mahmud II died in July 1839, just before the Gülhane Edict (Rose Chamber Edict) was formally proclaimed in November 1839 by his successor Abdulmejid I.
- **Action:** fix

**[HARD]** Which empire controlled the Silk Road trade routes during the height of the Tang Dynasty?
- **Marked correct:** Chinese Tang Dynasty
- **Wrong options:** Islamic Caliphate | Byzantine Empire | Mongol Empire
- **Problem:** The Islamic Caliphate (particularly the Abbasid Caliphate) controlled significant portions of the Silk Road concurrently with the Tang Dynasty, and the two powers shared or contested control. Saying the Tang Dynasty 'controlled' the Silk Road is an oversimplification that could make the question unfair.
- **Action:** fix

**[HARD]** Which African kingdom's fall in 1896 was prevented by the Battle of Adwa, where Ethiopian forces defeated an Italian invasion?
- **Marked correct:** Ethiopian Empire
- **Wrong options:** Kongo Kingdom | Zulu Kingdom | Mali Empire
- **Problem:** The question asks which kingdom's 'fall was prevented' by the Battle of Adwa, but the phrasing is confused — the Battle of Adwa prevented the conquest/colonization of Ethiopia, not the 'fall' of a kingdom. The framing is awkward but the factual content about Ethiopia and Menelik II is correct.
- **Action:** fix

**[HARD]** Which Mesopotamian civilization first developed the concept of formal written laws around 2100 BCE?
- **Marked correct:** The Akkadian Empire under Naram-Sin
- **Should be:** Sumerian civilization (Code of Ur-Nammu)
- **Wrong options:** Sumerian city-states | Babylonian Empire | Assyrian Empire
- **Fixed wrong options:** Akkadian Empire | Babylonian Empire | Assyrian Empire
- **Problem:** The claim that the Akkadian Empire under Naram-Sin developed formal written laws around 2100 BCE is not well-supported. Naram-Sin ruled around 2254–2218 BCE, not 2100 BCE. More importantly, the earliest verified written law code is the Sumerian Code of Ur-Nammu (~2100 BCE), not an Akkadian one. The correct answer directly contradicts the better-supported answer in Q3.
- **Action:** fix

### MOVIES_TV (148 issues)

**[EASY]** In what year did 'Game of Thrones' series finale air?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the first 'Star Wars' film released?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who directed 'Oppenheimer'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was 'The Godfather' released?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did 'Stranger Things' premiere on Netflix?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the first Academy Awards ceremony held?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who directed 'Inception'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who won the Academy Award for Best Director for 'Parasite'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did 'Game of Thrones' premiere on HBO?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who directed 'Schindler's List'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who directed the 1994 film 'Pulp Fiction'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did 'Game of Thrones' premiere on HBO?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who directed 'Pulp Fiction'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which actress won the Academy Award for Best Actress for 'La La Land'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the name of the coffee shop in 'Friends'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which director won the Academy Award for Best Director for 'Parasite'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who directed 'Pulp Fiction'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which actress won the Academy Award for Best Actress for 'La La Land'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which director won the Academy Award for Best Director for 'Parasite' in 2020?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which actress won the Academy Award for Best Actress for 'La La Land'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which director won the Academy Award for Best Director for 'Parasite'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first Academy Awards ceremony held?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which director won the Academy Award for Best Director for 'Parasite' in 2020?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which actress won the Academy Award for Best Actress for 'La La Land'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the name of the coffee shop featured in the TV series 'Friends'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who directed 'Inception'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who directed 'Schindler's List'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which actress won Best Actress for 'Breakfast at Tiffany's'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the name of the island in 'Jurassic Park'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In 'The Wizard of Oz', what color are Dorothy's magical shoes?
- **Marked correct:** Ruby
- **Wrong options:** Silver | Gold | Emerald
- **Fixed wrong options:** Blue | Gold | Emerald
- **Problem:** In L. Frank Baum's original book, Dorothy's shoes are silver, which is listed as a wrong answer. While the question specifies the 1939 film (where they are ruby red), the inclusion of 'Silver' as a wrong answer is technically the correct answer from the source material and could confuse knowledgeable players. Consider replacing 'Silver' with a clearly wrong option.
- **Action:** fix

**[EASY]** What is the most famous quote from 'Casablanca'?
- **Marked correct:** Here's looking at you, kid
- **Wrong options:** We'll always have Paris | Play it again, Sam | Of all the gin joints
- **Problem:** The question asks for the 'most famous quote,' which is inherently subjective. Additionally, the explanation incorrectly calls it the 'iconic closing line' — 'Here's looking at you, kid' is said multiple times throughout the film, not just at the close. The question would be better phrased as 'Which of these is a famous quote from Casablanca?' or asking which quote is actually said in the film (since 'Play it again, Sam' is a misquote).
- **Action:** fix

**[EASY]** Which actor played James Bond in the most films?
- **Marked correct:** Sean Connery
- **Should be:** Roger Moore
- **Wrong options:** Roger Moore | Pierce Brosnan | Daniel Craig
- **Fixed wrong options:** Sean Connery | Pierce Brosnan | Daniel Craig
- **Problem:** Roger Moore appeared as James Bond in 7 official Eon Productions films (1973–1985), more than Sean Connery's 6 official Eon films. The correct answer should be Roger Moore, not Sean Connery. The explanation also incorrectly states Connery appeared in six official films 'between 1962 and 1967' — his seventh Bond film 'Never Say Never Again' (1983) was unofficial, but even counting only official Eon films, Moore has more.
- **Action:** fix

**[EASY]** Which film holds the record for the most Academy Award nominations?
- **Marked correct:** Poor Things
- **Should be:** All About Eve / Titanic (tied)
- **Wrong options:** Titanic | La La Land | All About Eve
- **Fixed wrong options:** Poor Things | La La Land | Mrs. Miniver
- **Problem:** The question asks which film holds the record for the most Academy Award nominations of all time, but Poor Things with 11 nominations is nowhere near the record. All About Eve (1950) and Titanic (1997) hold the record with 14 nominations each, and both are listed as wrong answers. The question and explanation are factually incorrect.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Actor in 2023 (for 2022 films)?
- **Marked correct:** Cillian Murphy
- **Should be:** Brendan Fraser
- **Wrong options:** Austin Butler | Brendan Fraser | Paul Giamatti
- **Fixed wrong options:** Austin Butler | Cillian Murphy | Paul Giamatti
- **Problem:** The question asks who won Best Actor at the 95th Academy Awards in March 2023 for 2022 films, but Cillian Murphy won for Oppenheimer at the 96th Academy Awards in March 2024. Brendan Fraser won Best Actor at the 95th Academy Awards in March 2023 for The Whale.
- **Action:** fix

**[EASY]** Which actress won Best Actress for 'Breakfast at Tiffany's'?
- **Marked correct:** Audrey Hepburn did not win
- **Wrong options:** Audrey Hepburn won Best Actress | Audrey Hepburn won Best Supporting Actress | Audrey Hepburn won Golden Globe but not Oscar
- **Problem:** The question asks 'Which actress won Best Actress for Breakfast at Tiffany's?' but the correct answer is phrased as 'Audrey Hepburn did not win' — this is a confusingly structured question where the correct answer negates the premise. Additionally, Audrey Hepburn did win a Golden Globe for Best Actress in a Comedy/Musical for this film, making one of the wrong answers partially misleading. The question should be reworded to clearly ask whether Hepburn won the Oscar.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Director for 'Parasite'?
- **Marked correct:** Bong Joon-ho
- **Wrong options:** Lee Ang | Wong Kar-wai | Hirokazu Koreeda
- **Fixed wrong options:** Ang Lee | Wong Kar-wai | Hirokazu Koreeda
- **Problem:** The wrong answer 'Lee Ang' appears to refer to Ang Lee, but the name is misspelled/incorrectly formatted. More importantly, the explanation incorrectly states Parasite was 'the first non-English language film to win Best Picture' — while true, Bong Joon-ho is correctly identified as the winner. The wrong answer list should use the correct spelling 'Ang Lee' to avoid confusion.
- **Action:** fix

**[EASY]** Which actor won the Oscar for Best Actor in 2020 for the film 'Parasite'?
- **Marked correct:** Joaquin Phoenix
- **Should be:** Joaquin Phoenix
- **Wrong options:** Christian Bale | Adam Driver | Leonardo DiCaprio
- **Problem:** The question asks which actor won Best Actor 'for the film Parasite,' which is factually incorrect — Joaquin Phoenix won for 'Joker,' not 'Parasite.' The question's premise is false and misleading. The question should either ask who won Best Actor at the 2020 Oscars (answer: Joaquin Phoenix for Joker) or be rewritten entirely.
- **Action:** fix

**[EASY]** What is the final line of dialogue in the 1939 film 'Gone with the Wind'?
- **Marked correct:** Frankly, my dear, I don't give a damn
- **Should be:** Frankly, my dear, I don't give a damn
- **Wrong options:** I'll be back | May the Force be with you | Here's looking at you, kid
- **Problem:** The question asks for the 'final line of dialogue' in Gone with the Wind, but 'Frankly, my dear, I don't give a damn' is not the absolute final line — Scarlett O'Hara speaks after Rhett leaves, ending with 'After all, tomorrow is another day.' The question should ask for the most famous line or Rhett Butler's famous line, not the 'final line of dialogue.'
- **Action:** fix

**[EASY]** Which actress won the Oscar for Best Actress in 1998 for 'Titanic'?
- **Marked correct:** Kate Winslet
- **Should be:** Helen Hunt
- **Wrong options:** Gwyneth Paltrow | Cate Blanchett | Judi Dench
- **Fixed wrong options:** Kate Winslet | Cate Blanchett | Judi Dench
- **Problem:** The correct answer 'Kate Winslet' is marked as the winner, but the explanation immediately contradicts this by stating she did not win. The actual 1998 Best Actress winner was Helen Hunt for 'As Good as It Gets.' Gwyneth Paltrow won in 1999 for 'Shakespeare in Love.' The question and correct answer are both wrong.
- **Action:** fix

**[EASY]** What is the name of the fictional newspaper in the TV show 'Superman'?
- **Marked correct:** Daily Planet
- **Wrong options:** Metropolis Times | City Chronicle | Justice Journal
- **Problem:** The question asks about 'the TV show Superman' but Superman has appeared in multiple TV shows (Adventures of Superman, Lois & Clark, Smallville, etc.). The Daily Planet is correct across all versions, but the question should specify which show or simply reference the Superman franchise.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Picture in 2020 for 'Parasite'?
- **Marked correct:** Bong Joon-ho
- **Should be:** Parasite (producers Kwak Sin-ae and Bong Joon-ho)
- **Wrong options:** Denis Villeneuve | Martin Scorsese | Quentin Tarantino
- **Problem:** The Academy Award for Best Picture is given to the producers, not the director. Bong Joon-ho won Best Director, but the Best Picture award went to the producers of Parasite (Kwak Sin-ae and Bong Joon-ho as producer). The question asks 'who won Best Picture' and names the director as the correct answer, which is misleading and technically incorrect in Academy Award convention.
- **Action:** fix

**[EASY]** What is the name of the dragon in 'Game of Thrones' that belongs to Daenerys?
- **Marked correct:** Drogon
- **Should be:** Drogon
- **Wrong options:** Viserion | Rhaegal | Balerion
- **Problem:** The question asks for 'the dragon that belongs to Daenerys' but she has three dragons (Drogon, Viserion, and Rhaegal all belong to her). The wrong answers Viserion and Rhaegal are also her dragons. The question should specify 'primary dragon' or 'largest dragon' to make Drogon unambiguously correct.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Actor in 2022 for 'CODA'?
- **Marked correct:** Troy Kotsur
- **Should be:** Troy Kotsur
- **Wrong options:** Oscar Isaac | Benedict Cumberbatch | Andrew Garfield
- **Problem:** The question asks 'Who won the Academy Award for Best Actor' but Troy Kotsur won Best Supporting Actor, not Best Actor. The question category is wrong.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Actress in 2020 for 'Renée Zellweger'?
- **Marked correct:** Renée Zellweger
- **Should be:** Renée Zellweger
- **Wrong options:** Cate Blanchett | Saoirse Ronan | Charlize Theron
- **Problem:** The question is poorly worded — it asks 'Who won the Academy Award for Best Actress in 2020 for Renée Zellweger', which is nonsensical (naming the person in the question itself). The question should ask 'Who won the Academy Award for Best Actress in 2020 for her role in Judy?'
- **Action:** fix

**[EASY]** Which actor won the Academy Award for Best Actor for 'Moonlight'?
- **Marked correct:** Mahershala Ali
- **Wrong options:** Denzel Washington | Viola Davis | Tom Hanks
- **Problem:** The question asks for Best Actor but Mahershala Ali won Best Supporting Actor for 'Moonlight'. No actor won Best Actor for 'Moonlight'; Casey Affleck won Best Actor that year for 'Manchester by the Sea'. The explanation even acknowledges this error.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Actor for 'Parasite'?
- **Marked correct:** Song Kang-ho
- **Should be:** Joaquin Phoenix
- **Wrong options:** Lee Sun-kyun | Joaquin Phoenix | Adam Driver
- **Fixed wrong options:** Song Kang-ho | Adam Driver | Leonardo DiCaprio
- **Problem:** The question asks who won Best Actor for 'Parasite', but no one from 'Parasite' won Best Actor. Joaquin Phoenix won Best Actor that year for 'Joker', and he is listed as a wrong answer. The explanation also acknowledges Song Kang-ho did not win an acting Oscar. This question has no valid correct answer as written.
- **Action:** fix

**[EASY]** Who won the Academy Award for Best Supporting Actor for 'Once Upon a Time in Hollywood'?
- **Marked correct:** Brad Pitt
- **Wrong options:** Leonardo DiCaprio | Al Pacino | Margot Robbie
- **Fixed wrong options:** Leonardo DiCaprio | Al Pacino | Tom Hanks
- **Problem:** Margot Robbie is listed as a wrong answer but she is a woman and the category is Best Supporting Actor, so she is not eligible and is not technically a contaminating correct answer. However, she was nominated for Best Supporting Actress, not actor, so her inclusion as a distractor is misleading. More critically, Leonardo DiCaprio was also a co-star in the film nominated in the Best Actor category, which could cause confusion, but Brad Pitt as Best Supporting Actor is correct.
- **Action:** fix

**[EASY]** What is the name of the dance in 'Saturday Night Fever'?
- **Marked correct:** Disco
- **Should be:** The Hustle
- **Wrong options:** Hustle | Boogie | Funk
- **Fixed wrong options:** The Twist | The Boogie | The Funky Chicken
- **Problem:** The question asks for 'the name of the dance in Saturday Night Fever,' but the answer 'Disco' is a genre of music/culture, not a specific dance. The Hustle is actually a specific dance prominently featured in the film, making this question misleading and potentially having the wrong answer marked correct.
- **Action:** fix

**[EASY]** Which actress won Best Supporting Actress for 'In Her Shoes'?
- **Marked correct:** Shirley MacLaine
- **Wrong options:** Cameron Diaz | Toni Collette | Meryl Streep
- **Problem:** Shirley MacLaine did not win Best Supporting Actress for 'In Her Shoes.' She appeared in the film but received no such award. The film received no major acting awards. This appears to be a fabricated fact.
- **Action:** fix

**[EASY]** Which director is famous for the movie 'Jaws'?
- **Marked correct:** Steven Spielberg
- **Wrong options:** George Lucas | Martin Scorsese | Francis Ford Coppola
- **Problem:** Jaws was released in 1975, but it was directed in 1974-1975 and released on June 20, 1975. The explanation states 'directed Jaws in 1975' which is acceptable, but the core answer is correct. However, the explanation is fine. Actually the answer is correct — keeping as ok on reflection.
- **Action:** fix

**[EASY]** Who won Best Actress at the 2020 Oscars for 'Parasite'?
- **Marked correct:** No individual actress won for Parasite
- **Wrong options:** Saoirse Ronan | Cate Blanchett | Charlize Theron
- **Problem:** The question asks 'Who won Best Actress at the 2020 Oscars for Parasite?' which is a nonsensical framing — there is no Best Actress award given for a specific film, and the question implies someone should have won for it. The correct answer 'No individual actress won for Parasite' is not a trivia answer but a correction of a false premise, making this a poorly constructed question.
- **Action:** delete

**[EASY]** Which actor won Best Actor for 'Moonlight' in 2017?
- **Marked correct:** No male lead won; Barry Jenkins' film won Best Picture
- **Should be:** Casey Affleck (for Manchester by the Sea)
- **Wrong options:** Casey Affleck | Denzel Washington | Andrew Garfield
- **Fixed wrong options:** Denzel Washington | Andrew Garfield | Ryan Gosling
- **Problem:** The question asks which actor won Best Actor for 'Moonlight,' but the correct answer is misleading and evasive. Casey Affleck actually won Best Actor at the 2017 Oscars (for 'Manchester by the Sea'), not for 'Moonlight.' The question is poorly framed — it should ask something like 'Which film won Best Picture at the 2017 Oscars?' or be rewritten entirely.
- **Action:** fix

**[EASY]** What is the longest-running animated TV series?
- **Marked correct:** The Simpsons
- **Should be:** The Simpsons
- **Wrong options:** South Park | Family Guy | SpongeBob SquarePants
- **Problem:** The question asks for the 'longest-running animated TV series' without specifying American or primetime. Globally, series like 'Sazae-san' (Japan, 1969–present) far surpass The Simpsons. The question should specify 'American primetime animated TV series.'
- **Action:** fix

**[EASY]** Which show features the character Daenerys Targaryen?
- **Marked correct:** Game of Thrones
- **Wrong options:** The Witcher | House of the Dragon | Rings of Power
- **Fixed wrong options:** The Witcher | Vikings | Rings of Power
- **Problem:** Daenerys Targaryen also appears as an ancestor/historical figure referenced in 'House of the Dragon,' and the show is set in the same universe with Targaryens as central characters. However, the character Daenerys herself does not appear in 'House of the Dragon,' so 'Game of Thrones' remains the unambiguous correct answer. The wrong answer 'House of the Dragon' could confuse players since it is the Targaryen prequel show, making it a misleadingly plausible distractor that warrants a swap.
- **Action:** fix

**[MEDIUM]** Which actress won the Academy Award for Best Supporting Actress for 'Everything Everywhere All at Once'?
- **Marked correct:** Jamie Lee Curtis
- **Wrong options:** Michelle Yeoh | Ke Huy Quan | Stephanie Hsu
- **Problem:** Jamie Lee Curtis did NOT win Best Supporting Actress for 'Everything Everywhere All at Once.' Jamie Lee Curtis won Best Supporting Actress, but the explanation correctly notes her role — however, the correct answer is accurate. Wait — re-checking: Jamie Lee Curtis did win Best Supporting Actress at the 95th Academy Awards for 'Everything Everywhere All at Once.' The correct answer is accurate. BUT the explanation says she played 'Evelyn Wang's mother' — Evelyn Wang is Michelle Yeoh's character, and Jamie Lee Curtis played Deirdre Beaubeirdre, an IRS auditor, NOT Evelyn's mother. The explanation contains a factual error.
- **Action:** fix

**[MEDIUM]** In 'Breaking Bad,' what is the street name for the drug that Walter White primarily manufactures?
- **Marked correct:** Crystal Meth
- **Should be:** Blue Sky
- **Wrong options:** Blue Sky | Ice | Snow
- **Fixed wrong options:** Crystal meth | Ice | Snow
- **Problem:** 'Blue Sky' is actually the specific street name used in the show for Walter White's product, and the question asks for the 'street name for the drug.' Blue Sky is listed as a wrong answer but is arguably the most correct answer to the question as worded. 'Crystal Meth' is the drug class, not really a street name unique to the show.
- **Action:** fix

**[MEDIUM]** In 'Pulp Fiction,' what is the name of the briefcase that Vincent Vega and Jules Winnfield are tasked with retrieving?
- **Marked correct:** The briefcase's contents are never revealed
- **Should be:** The contents are never revealed
- **Wrong options:** Marcellus Wallace's diamonds | A pound of heroin | Stolen casino money
- **Fixed wrong options:** Marcellus Wallace's diamonds | A pound of heroin | Stolen casino money
- **Problem:** The question asks for 'the name of the briefcase,' but briefcases don't typically have names. The correct answer 'The briefcase's contents are never revealed' answers a different question than what was asked. The question should be reworded to ask about the contents of the briefcase.
- **Action:** fix

**[MEDIUM]** In 'Inception,' what object does the main character use to distinguish between dreams and reality?
- **Marked correct:** A spinning top
- **Should be:** A spinning top
- **Wrong options:** A pocket watch | A red pill | A chess piece
- **Problem:** The spinning top belongs to Cobb's deceased wife Mal, not Cobb himself — it is Mal's totem that Cobb appropriated. More importantly, the explanation calls it a 'personal inception object' but the correct term in the film is 'totem.' Minor but the explanation is slightly misleading.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Actor for 'Nomadland' (2021 ceremony)?
- **Marked correct:** Anthony Hopkins
- **Should be:** Anthony Hopkins
- **Wrong options:** Riz Ahmed | Gary Oldman | Steven Yeun
- **Fixed wrong options:** Riz Ahmed | Gary Oldman | Steven Yeun
- **Problem:** The question asks who won Best Actor 'for Nomadland,' but no actor won Best Actor for Nomadland — it was a Best Picture winner with Frances McDormand winning Best Actress. The correct answer (Anthony Hopkins for 'The Father') is accurate, but the question is misleadingly worded, implying Hopkins won for Nomadland.
- **Action:** fix

**[MEDIUM]** Who directed 'Titanic' (1997), which won the Academy Award for Best Picture?
- **Marked correct:** James Cameron
- **Wrong options:** Steven Spielberg | Martin Scorsese | George Lucas
- **Problem:** The explanation states Titanic was 'the second film to win 11 Academy Awards, tying Ben-Hur,' but this is inaccurate. Ben-Hur (1959) was the first film to win 11 Oscars; Titanic tied that record in 1998 and was only the second. However, 'The Return of the King' (2004) also later won 11 Oscars. The claim about it being 'only the second film at that time' is actually correct for 1998, so the explanation is acceptable. No change needed.
- **Action:** fix

**[MEDIUM]** Which actor won the Academy Award for Best Actor for 'Moonlight' (2017 ceremony)?
- **Marked correct:** Casey Affleck
- **Should be:** Casey Affleck
- **Wrong options:** Denzel Washington | Ryan Gosling | Andrew Garfield
- **Problem:** The question asks who won Best Actor for 'Moonlight' but no actor won Best Actor for Moonlight — Casey Affleck won Best Actor for 'Manchester by the Sea.' The correct answer is listed but the question is fundamentally broken/self-contradictory. The question should either ask who won Best Actor at the 2017 ceremony (Casey Affleck) or be reframed entirely.
- **Action:** fix

**[MEDIUM]** In 'Forrest Gump,' what is the name of Forrest's mother?
- **Marked correct:** Mrs. Gump
- **Wrong options:** Molly Gump | Martha Gump | Margaret Gump
- **Problem:** Forrest's mother is given the first name 'Sally' in the original Winston Groom novel, and in the film she is referred to as 'Mrs. Gump' but Sally Field's character is commonly identified by that name. However, the question's framing of 'Mrs. Gump' as the answer is problematic since that is a title, not a name. More critically, in the film she is never given a first name on screen, making 'Mrs. Gump' the best available answer, but the question is somewhat ambiguous.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Director for 'Killers of the Flower Moon'?
- **Marked correct:** Martin Scorsese
- **Should be:** Christopher Nolan
- **Wrong options:** Denis Villeneuve | Yorgos Lanthimos | Christopher Nolan
- **Fixed wrong options:** Martin Scorsese | Yorgos Lanthimos | Denis Villeneuve
- **Problem:** Martin Scorsese did NOT win Best Director for 'Killers of the Flower Moon' at the 2024 Academy Awards. Christopher Nolan won Best Director for 'Oppenheimer' at the 2024 ceremony. The explanation is also incorrect.
- **Action:** fix

**[MEDIUM]** Which actress won the Oscar for Best Actress for 'La La Land'?
- **Marked correct:** No one (it didn't win)
- **Should be:** Emma Stone
- **Wrong options:** Emma Stone | Meryl Streep | Isabelle Huppert
- **Fixed wrong options:** Natalie Portman | Meryl Streep | Isabelle Huppert
- **Problem:** The question asks which actress won Best Actress for 'La La Land,' but marks 'No one (it didn't win)' as correct while listing Emma Stone in the wrong answers. In fact, Emma Stone DID win Best Actress for her role in 'La La Land' at the 2017 Oscars. Emma Stone is the correct answer and should not be in the wrong answers list.
- **Action:** fix

**[MEDIUM]** In 'The Office' (US version), what is the name of the paper company?
- **Marked correct:** Dunder Mifflin
- **Wrong options:** Wernham Hogg | Staples Corp | Sabre Corporation
- **Fixed wrong options:** Wernham Hogg | Staples Corp | Initech
- **Problem:** 'Sabre Corporation' is listed as a wrong answer but it is actually a real company in the show that acquires Dunder Mifflin, making it potentially a correct answer to 'what is the name of the paper company.' It should be replaced with a clearly incorrect option.
- **Action:** fix

**[MEDIUM]** Which director is known for films like 'Amarcord' and '8½'?
- **Marked correct:** Federico Fellini
- **Wrong options:** Michelangelo Antonioni | Pier Paolo Pasolini | Ermanno Olmi
- **Problem:** The explanation incorrectly describes Fellini's work as 'Italian neorealism.' Fellini's style, especially in 'Amarcord' and '8½,' is not neorealism but rather art cinema, surrealism, and autobiographical fantasy. His early work had neorealist elements but these two films are not examples of that movement.
- **Action:** fix

**[MEDIUM]** What is the final line of 'Casablanca'?
- **Marked correct:** This could be the beginning of a beautiful friendship
- **Should be:** Louis, I think this is the beginning of a beautiful friendship
- **Wrong options:** We'll always have Paris | Here's looking at you, kid | Louis, I think this is the beginning of a beautiful friendship
- **Fixed wrong options:** We'll always have Paris | Here's looking at you, kid | This could be the beginning of a beautiful friendship
- **Problem:** The actual final line of Casablanca is 'Louis, I think this is the beginning of a beautiful friendship' — which is listed as a wrong answer. The correct answer as listed ('This could be the beginning of a beautiful friendship') is a misquote.
- **Action:** fix

**[MEDIUM]** In 'Titanic', what is the name of the ship's band's leader?
- **Marked correct:** Wallace Hartley
- **Wrong options:** James Andrews | Edward Smith | Thomas Andrews
- **Problem:** Thomas Andrews was the ship's designer/architect, not a wrong answer to confuse with 'James Andrews' — however 'James Andrews' is not a real Titanic figure. More critically, 'Thomas Andrews' appears as a wrong answer but is a real historical Titanic figure (the ship's designer), which could cause confusion. The main issue is the explanation mentions 'James Andrews' as a wrong answer name but the listed wrong answer is 'James Andrews', which is not a real person — this is acceptable. No critical factual error found on the correct answer.
- **Action:** fix

**[MEDIUM]** Which film won the Academy Award for Best Animated Feature in 2024?
- **Marked correct:** The Boy and the Heron
- **Wrong options:** Spider-Man: Across the Spider-Verse | Elemental | Wish
- **Problem:** Spider-Man: Across the Spider-Verse was released in 2023 and was eligible for the 2024 Oscars (96th Academy Awards), but it was NOT nominated for Best Animated Feature at the 2024 ceremony — it was actually snubbed. However, it did win the Annie Award. The correct answer 'The Boy and the Heron' is accurate for the 2024 Oscars. No contamination issue confirmed; question is ok.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Supporting Actress in 2023?
- **Marked correct:** Jamie Lee Curtis
- **Wrong options:** Cate Blanchett | Hong Chau | Kerry Condon
- **Problem:** Cate Blanchett is listed as a wrong answer but she was nominated for Best Actress (not Supporting Actress) for Tár at the 2023 Oscars — she was not in the Best Supporting Actress category, so this is not contamination. However, Angela Bassett was also nominated and is missing. The correct answer and category are verified accurate. No true contamination found.
- **Action:** fix

**[MEDIUM]** In 'Game of Thrones', what are the words of House Stark?
- **Marked correct:** Winter is Coming
- **Wrong options:** Fire and Blood | We Do Not Sow | The North Remembers
- **Problem:** 'The North Remembers' is not the official house words of any house — it is a phrase associated with House Stark but is not a house motto. However, it could mislead players into thinking it is a valid alternative. More importantly, this is a borderline ambiguity issue since 'The North Remembers' is strongly associated with Stark but is not their words. No true contamination; question is acceptable.
- **Action:** fix

**[MEDIUM]** Which actor played Hannibal Lecter in 'The Silence of the Lambs'?
- **Marked correct:** Anthony Hopkins
- **Should be:** Anthony Hopkins
- **Wrong options:** Brian Cox | Gérard Depardieu | Michael Douglas
- **Problem:** Anthony Hopkins won Best Actor, not Best Supporting Actor, for 'The Silence of the Lambs.' Despite limited screen time, his role was submitted and won in the lead actor category.
- **Action:** fix

**[MEDIUM]** What was the first feature-length animated movie ever released?
- **Marked correct:** Snow White and the Seven Dwarfs
- **Should be:** Snow White and the Seven Dwarfs
- **Wrong options:** Fantasia | Cinderella | Sleeping Beauty
- **Problem:** The claim that Snow White was the 'first feature-length animated movie ever released' is debatable. Earlier feature-length animated films exist, such as 'El Apóstol' (1917) from Argentina. The explanation partially acknowledges this with 'by a major studio,' but the question itself does not include that qualifier.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Actor for 'There Will Be Blood'?
- **Marked correct:** Daniel Day-Lewis did not win; No one was nominated from that film
- **Should be:** Daniel Day-Lewis
- **Wrong options:** Daniel Day-Lewis | Sean Penn | Johnny Depp
- **Fixed wrong options:** Sean Penn | Johnny Depp | Javier Bardem
- **Problem:** The correct answer is factually wrong. Daniel Day-Lewis DID win the Academy Award for Best Actor for 'There Will Be Blood' at the 2008 ceremony. Sean Penn won Best Actor for 'Milk' the following year (2009 ceremony).
- **Action:** fix

**[MEDIUM]** Which television series features the character Walter White?
- **Marked correct:** Breaking Bad
- **Should be:** Breaking Bad
- **Wrong options:** The Sopranos | Mad Men | Better Call Saul
- **Fixed wrong options:** The Sopranos | Mad Men | Ozark
- **Problem:** Walter White does appear in 'Better Call Saul' as a recurring character, making it a partially correct answer and contaminating the wrong answers list.
- **Action:** fix

**[MEDIUM]** What is the real name of the character known as 'The Joker' in 'The Dark Knight'?
- **Marked correct:** The film never reveals his real name
- **Should be:** The film never reveals his real name
- **Wrong options:** Jack Napier | Joseph Kerr | Arthur Fleck
- **Fixed wrong options:** Jack Napier | Joseph Kerr | Jerome Valeska
- **Problem:** Arthur Fleck is the Joker's real name in the 2019 film 'Joker,' but the question specifically asks about 'The Dark Knight.' However, a trivia player familiar with the 2019 film might select Arthur Fleck as a plausible answer, creating confusion. More critically, Jack Napier is the Joker's name in the 1989 'Batman' film, not 'The Dark Knight,' so it is not contamination but could mislead. The correct answer and explanation are accurate for 'The Dark Knight.'
- **Action:** fix

**[MEDIUM]** In 'Jaws,' what is the name of the police chief?
- **Marked correct:** Martin Brody
- **Should be:** Martin Brody
- **Wrong options:** James Quint | Matt Hooper | Ben Meadows
- **Fixed wrong options:** Sam Quint | Matt Hooper | Ben Meadows
- **Problem:** Matt Hooper is listed as a wrong answer, but he is a real character in 'Jaws' (played by Richard Dreyfuss), making it a recognizable name from the film. While Hooper is not the police chief, the question asks for the police chief's name, so Hooper is technically wrong. However, 'James Quint' is a slight misnaming — the character is 'Quint,' not 'James Quint' (his first name is never given in the film). This is a minor inaccuracy in the wrong answers.
- **Action:** fix

**[MEDIUM]** Which director created the TV series 'The Twilight Zone'?
- **Marked correct:** Rod Serling
- **Should be:** Rod Serling
- **Wrong options:** Alfred Hitchcock | Billy Wilder | Robert Aldrich
- **Problem:** Rod Serling was the creator, writer, and host of 'The Twilight Zone,' but he was not a director. Calling him the 'director' in the question is inaccurate and misleading.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Supporting Actress for 'Moonlight'?
- **Marked correct:** Mahershala Ali won Best Supporting Actor, not supporting actress
- **Should be:** Mahershala Ali
- **Wrong options:** Naomie Harris | Janelle Monáe | Trevante Rhodes
- **Fixed wrong options:** Naomie Harris | Janelle Monáe | Trevante Rhodes
- **Problem:** The question asks who won Best Supporting Actress for 'Moonlight', but the correct answer states Mahershala Ali won Best Supporting Actor — this is a self-contradictory answer to a malformed question. The question itself is broken: no one won Best Supporting Actress for Moonlight; Mahershala Ali won Best Supporting Actor.
- **Action:** fix

**[MEDIUM]** Who played the main character in 'Gladiator'?
- **Marked correct:** Russell Crowe
- **Wrong options:** Joaquin Phoenix | Jude Law | Orlando Bloom
- **Problem:** Joaquin Phoenix played Commodus, a major character and antagonist in 'Gladiator', so listing him as a wrong answer to 'who played the main character' is misleading but technically not incorrect since he did not play the main character Maximus. However, his prominent role in the film makes this a potentially confusing wrong answer. More critically, Joaquin Phoenix was nominated for Best Supporting Actor for this film, making him strongly associated with it — this is acceptable as a wrong answer but warrants review.
- **Action:** fix

**[MEDIUM]** What is the name of the fictional planet where 'Star Wars: A New Hope' begins?
- **Marked correct:** Tatooine
- **Wrong options:** Naboo | Mustafar | Coruscant
- **Problem:** The film does not actually begin on Tatooine. 'A New Hope' opens in space above Tatooine with the Tantive IV being captured, and the first planet-surface scenes are on a different location (the Rebel blockade runner interior), though the first ground scenes are indeed on Tatooine. More significantly, the film technically begins with the space battle/ship capture sequence, not on the surface of Tatooine. That said, Tatooine is the first named planet and where the main story begins, so this is debatable. The answer is defensible.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Supporting Actor for 'Brokeback Mountain'?
- **Marked correct:** Heath Ledger
- **Should be:** George Clooney (for Syriana)
- **Wrong options:** Jake Gyllenhaal | Randy Quaid | Garrett Hedlund
- **Fixed wrong options:** Jake Gyllenhaal | Heath Ledger | Philip Seymour Hoffman
- **Problem:** The marked correct answer (Heath Ledger) is explicitly contradicted by the explanation, which correctly states that Heath Ledger did NOT win and that George Clooney won for 'Syriana'. The question asks who WON the award, making the marked answer factually wrong.
- **Action:** fix

**[MEDIUM]** Which film directed by Ridley Scott won the Academy Award for Best Picture in 1992?
- **Marked correct:** Thelma & Louise
- **Should be:** No Ridley Scott film won Best Picture in 1992
- **Wrong options:** Blade Runner | Gladiator | Black Hawk Down
- **Fixed wrong options:** Blade Runner | Gladiator | Black Hawk Down
- **Problem:** The marked correct answer 'Thelma & Louise' is wrong — that film did not win Best Picture. The explanation itself admits it did not win Best Picture. No Ridley Scott film won Best Picture at the 1992 ceremony; 'The Silence of the Lambs' won Best Picture at the 1992 Academy Awards. 'Gladiator' won Best Picture at the 2001 ceremony.
- **Action:** fix

**[MEDIUM]** What is the real name of the character 'James Bond' in the film series?
- **Marked correct:** James Bond
- **Wrong options:** John Steel | Jonathan Blake | Julian Brown
- **Problem:** The question asks for the 'real name' of a fictional character, which is confusingly worded. The intended point — that 'James Bond' is his actual name and not a code name — is valid, but the phrasing makes the question seem like a trick or joke question rather than a genuine trivia item. The question should be reworded to ask something like 'Is James Bond a code name or the character's real name?'
- **Action:** fix

**[MEDIUM]** In 'Forrest Gump' (1994), what is Forrest's famous repeated phrase?
- **Marked correct:** Life is like a box of chocolates
- **Should be:** Mama always said life was like a box of chocolates
- **Wrong options:** Run, run as fast as you can | I'm not a smart man | That's all I have to say about that
- **Problem:** The question asks for Forrest's 'famous repeated phrase,' but 'Life is like a box of chocolates' is actually said by his mother, not Forrest himself as a repeated phrase. The actual quote Forrest repeats is 'Mama always said life was like a box of chocolates.' Additionally, the actual movie quote is 'Life WAS like a box of chocolates,' not 'Life IS like a box of chocolates.' The explanation even correctly attributes it to his mother, contradicting the question framing.
- **Action:** fix

**[MEDIUM]** Which director is known for the 'Lord of the Rings' film trilogy?
- **Marked correct:** Peter Jackson
- **Wrong options:** Guillermo del Toro | Terry Gilliam | Christopher Nolan
- **Problem:** The explanation states the trilogy won 'a combined 17 Academy Awards across all three films,' but the trilogy actually won 17 Oscars total — however, nearly all of those came from the third film alone (Return of the King won 11). The total combined wins are correct at 17, so this is fine. However, Guillermo del Toro was actually attached to direct The Hobbit, not Lord of the Rings, so he is a valid wrong answer. The fact check passes.
- **Action:** fix

**[MEDIUM]** Who won the Academy Award for Best Actress for 'Breakfast at Tiffany's'?
- **Marked correct:** Audrey Hepburn was not nominated
- **Wrong options:** Audrey Hepburn | Elizabeth Taylor | Natalie Wood
- **Problem:** The question asks 'Who won the Academy Award for Best Actress for Breakfast at Tiffany's?' but the correct answer is 'Audrey Hepburn was not nominated,' which is a statement rather than a person's name. This is a poorly structured trivia question because the question implies someone won for that film, then the answer contradicts the premise. Furthermore, Audrey Hepburn WAS nominated for a Golden Globe for the role, adding to potential confusion. The question should be reworded to clearly ask whether Hepburn was nominated/won.
- **Action:** fix

**[MEDIUM]** In 'The Great Gatsby' (2013), what is the color of Gatsby's car?
- **Marked correct:** Yellow
- **Wrong options:** Silver | White | Gold
- **Fixed wrong options:** Silver | White | Red
- **Problem:** The car is described as 'yellow' in the novel, but in Baz Luhrmann's 2013 film it appears more cream/white or gold depending on the scene and lighting. The novel describes it as yellow, but 'Gold' is listed as a wrong answer, which could reasonably be argued as correct for the 2013 film's visual depiction. This creates potential wrong answer contamination.
- **Action:** fix

**[MEDIUM]** Which film won the Academy Award for Best Animated Feature at the 2020 ceremony?
- **Marked correct:** Toy Story 4
- **Wrong options:** How to Train Your Dragon: The Hidden World | Missing Link | Klaus
- **Problem:** The 2020 Academy Awards (92nd Oscars, held February 2020, for films of 2019) awarded Best Animated Feature to 'Toy Story 4' — this is correct. However, the explanation claims it is 'the only Pixar sequel to win in that category,' which is false: 'Incredibles 2' did not win, but 'Finding Dory' did not win either — actually this claim may be accurate. Upon review, Toy Story 4 is indeed the only Pixar sequel to win Best Animated Feature. The core answer is correct.
- **Action:** fix

**[HARD]** In what year did the Academy Award for Best Picture first expand to include multiple nominees in a preferential ballot system?
- **Marked correct:** 2009
- **Should be:** 2009
- **Wrong options:** 2015 | 2019 | 2011
- **Problem:** The expansion happened in 2009 (announced and first applied for the 82nd Academy Awards ceremony held in 2010, honoring 2009 films). However, the explanation contradicts itself by saying 'partly a response to criticism over Avatar not being nominated' — Avatar was a 2009 film, so it was nominated under the new system, not excluded. The year 2009 refers to when the rule change was announced and first applied, which is technically correct, but the explanation's rationale is wrong.
- **Action:** fix

**[HARD]** Which 1975 film became the first summer blockbuster and was directed by Steven Spielberg?
- **Marked correct:** Jaws
- **Wrong options:** The Poseidon Adventure | Earthquake | The Great White
- **Problem:** 'The Great White' appears as a wrong answer but is not a real 1975 film in this context; however, it could cause confusion. More importantly, 'The Poseidon Adventure' is from 1972, not 1975, so it is a legitimate wrong answer. The wrong answers are acceptable, but 'The Great White' is a vague title that could refer to obscure films — this is a minor issue. No contamination found; question is factually sound.
- **Action:** fix

**[HARD]** In 'Citizen Kane', what is the name of the snow globe that Kane holds as he dies?
- **Marked correct:** Rosebud
- **Should be:** Rosebud
- **Wrong options:** Xanadu | Susan | Kane's Paradise
- **Problem:** The question asks for 'the name of the snow globe that Kane holds as he dies,' but snow globes are not typically named, and 'Rosebud' is the name of his childhood sled, not the snow globe. The question is fundamentally misleading — Kane holds a snow globe as he dies and whispers 'Rosebud,' but 'Rosebud' is the sled's name, not the snow globe's name. The question is poorly constructed and the explanation even acknowledges this contradiction.
- **Action:** fix

**[HARD]** Which actress won the Academy Award for Best Supporting Actress for her role in 'Blue Jasmine' (2013)?
- **Marked correct:** Lupita Nyong'o
- **Wrong options:** Cate Blanchett | Sally Hawkins | Nyong'o was not nominated
- **Problem:** The correct answer is wrong. Lupita Nyong'o won Best Supporting Actress for '12 Years a Slave,' not 'Blue Jasmine.' Cate Blanchett won Best Actress (not Supporting) for 'Blue Jasmine.' The question asks who won Best Supporting Actress for 'Blue Jasmine,' and no one did — there was no winner for that film in that category. The question is fatally flawed.
- **Action:** fix

**[HARD]** What was the original title of the TV show now known as 'The Office' before it aired in the United States?
- **Marked correct:** The Office (UK version had the same title, but the US adaptation was retitled)
- **Wrong options:** Paper Trail | Dunder-Mifflin Chronicles | The Workplace
- **Problem:** The question asks for the 'original title' before the US version aired, implying there was a different title — but both versions are simply called 'The Office.' The correct answer itself acknowledges there was no retitling, making the question meaningless and the premise false. This question should be deleted or completely rewritten.
- **Action:** fix

**[HARD]** In 'The Godfather Part II', what is the name of Vito Corleone's mother whom we see briefly in Sicily?
- **Marked correct:** Maria Corleone
- **Wrong options:** Carmela Corleone | Rosa Corleone | Angela Corleone
- **Problem:** Vito Corleone's mother in the Sicily flashback sequences of 'The Godfather Part II' is not definitively named 'Maria Corleone' in the film. She is referred to but the name is not clearly established as 'Maria' in canonical sources. Additionally, her surname before Vito's adoption of 'Corleone' (the name of his hometown) would not have been Corleone. This answer is factually unsupported.
- **Action:** fix

**[HARD]** Which animated film won the Academy Award for Best Animated Feature in 2020 (for 2019 films)?
- **Marked correct:** Toy Story 4
- **Should be:** Toy Story 4
- **Wrong options:** Missing Link | How to Train Your Dragon: The Hidden World | Klaus
- **Problem:** The explanation incorrectly calls it 'the inaugural Best Animated Feature award in 2020' — the category was established in 2002. 'Toy Story 4' did win Best Animated Feature at the 2020 ceremony (92nd Academy Awards) for 2019 films, so the correct answer is right, but the explanation is misleading.
- **Action:** fix

**[HARD]** Who directed 'The Seventh Seal', Ingmar Bergman's 1957 masterpiece about a knight playing chess with Death?
- **Marked correct:** Ingmar Bergman
- **Wrong options:** Andrei Tarkovsky | Akira Kurosawa | Carl Theodor Dreyer
- **Problem:** The question asks 'Who directed The Seventh Seal, Ingmar Bergman's 1957 masterpiece' — the answer is embedded in the question itself ('Ingmar Bergman's'). This makes it trivially easy despite being labeled hard, and is poor question construction.
- **Action:** fix

**[HARD]** Which film won the Palme d'Or at the 2019 Cannes Film Festival?
- **Marked correct:** Parasite
- **Should be:** Parasite
- **Wrong options:** The Farewell | Once Upon a Time in Hollywood | Portrait of a Lady on Fire
- **Problem:** The explanation claims 'Parasite' was 'only the second Korean film to win the festival's top prize,' but 'Parasite' was actually the FIRST Korean film to win the Palme d'Or, not the second.
- **Action:** fix

**[HARD]** What is the name of the planet where 'Blade Runner 2049' begins?
- **Marked correct:** Venus
- **Should be:** Earth
- **Wrong options:** Mars | Europa | Titan
- **Fixed wrong options:** Mars | Europa | Titan
- **Problem:** 'Blade Runner 2049' does not begin on Venus. The film opens on Earth (a protein farm in California) and later features scenes on a flooded Las Vegas. Venus is not featured in the film at all.
- **Action:** fix

**[HARD]** Which actress was originally cast as Sarah Connor in 'The Terminator' before Linda Hamilton took the role?
- **Marked correct:** O. Z. Whitehead
- **Wrong options:** Rosanna Arquette | Sigourney Weaver | Michelle Pfeiffer
- **Problem:** The correct answer 'O. Z. Whitehead' is completely wrong — O. Z. Whitehead was a character actor known for 'The Grapes of Wrath' and had nothing to do with 'The Terminator.' The explanation contradicts the marked answer by saying Rosanna Arquette was offered the role. The entire question is factually incoherent and should be deleted.
- **Action:** delete

**[HARD]** In 'Singin' in the Rain', what is the name of Lina Lamont's silent film character?
- **Marked correct:** Lina Lamont
- **Wrong options:** Leah Lamont | Lena Lamour | Lila Lamoine
- **Problem:** The question asks for Lina Lamont's silent film character name, implying it is distinct from her real name, but the explanation contradicts the premise. In the film-within-the-film 'The Dueling Cavalier'/'The Dancing Cavalier', Lina's character name is not clearly established as 'Lina Lamont' — the question and answer are self-contradictory and poorly constructed.
- **Action:** fix

**[HARD]** Which director is known for the distinctive visual style featuring split-screens used extensively in 'Crash' (2004)?
- **Marked correct:** Paul Haggis
- **Should be:** Paul Haggis
- **Wrong options:** Michael Mann | David Fincher | Christopher Nolan
- **Problem:** 'Crash' (2004) is not particularly known for extensive use of split-screens; it is known for its intersecting/interweaving narrative structure. The claim that split-screens are a 'distinctive visual style' of this film is inaccurate.
- **Action:** fix

**[HARD]** What is the real name of the character known as 'The Man in Black' in 'Westworld'?
- **Marked correct:** The Man in Black's identity varies; he is revealed to be a guest/Man in Black with connections to the park
- **Should be:** William
- **Wrong options:** James Delos | Logan Delos | Arnold Weber
- **Fixed wrong options:** James Delos | Logan Delos | Robert Ford
- **Problem:** The correct answer is vague and evasive. The Man in Black in 'Westworld' is definitively revealed to be William (played by Ed Harris as older William). The correct answer should be 'William', and 'Arnold Weber' in the wrong answers is actually a real character (Arnold), not a made-up name.
- **Action:** fix

**[HARD]** Which film directed by Wong Kar-wai is considered one of the greatest romantic films ever made and features extensive use of neon colors?
- **Marked correct:** In the Mood for Love
- **Should be:** In the Mood for Love
- **Wrong options:** Chungking Express | 2046 | My Blueberry Nights
- **Problem:** 'In the Mood for Love' is not particularly known for 'extensive use of neon colors' — that description better fits 'Chungking Express' or 'Fallen Angels'. 'In the Mood for Love' is known for rich, warm colors and slow-motion cinematography, not neon.
- **Action:** fix

**[HARD]** Which actor received an Academy Award nomination for Best Actor for his role in 'My Left Foot' (1989)?
- **Marked correct:** Daniel Day-Lewis
- **Should be:** Daniel Day-Lewis
- **Wrong options:** Tom Cruise | Kevin Costner | Jack Nicholson
- **Problem:** The question asks about a nomination but the explanation correctly states he won. The question should say 'won' rather than 'received a nomination for', or the explanation needs alignment. The correct answer (Daniel Day-Lewis) is right, but the question is misleading by saying 'nomination' when he actually won.
- **Action:** fix

**[HARD]** What is the name of the fictional car that Michael Knight drives in the TV series 'Knight Rider'?
- **Marked correct:** KITT
- **Should be:** KITT
- **Wrong options:** KARR | STEVIE | AGENT
- **Fixed wrong options:** AJAX | STEVIE | AGENT
- **Problem:** KARR (Knight Automated Roving Robot) is also a real vehicle from the 'Knight Rider' series — it was the prototype car that preceded KITT and appeared in multiple episodes. It should not be listed as a wrong answer since it is a real fictional car from the same show.
- **Action:** fix

**[HARD]** In what year did Orson Welles complete the principal photography for 'Othello', which took four years to film across multiple countries?
- **Marked correct:** 1952
- **Should be:** 1952
- **Wrong options:** 1950 | 1954 | 1948
- **Problem:** The question is poorly framed. Principal photography for 'Othello' began in 1948 and was completed around 1951-1952, but the film was released in 1952. The specific year photography was 'completed' is debated among film historians, making this question unreliable.
- **Action:** fix

**[HARD]** Which 1970s horror film director is credited with developing the 'negative space' technique that influenced generations of slasher films?
- **Marked correct:** John Carpenter
- **Should be:** John Carpenter
- **Wrong options:** Tobe Hooper | David Cronenberg | Dario Argento
- **Problem:** 'Negative space technique' as a formal cinematic term credited specifically to John Carpenter is not a well-established, verifiable fact. While Carpenter's use of space in 'Halloween' is influential, attributing a named 'negative space technique' solely to him as an invention is an unverifiable claim.
- **Action:** fix

**[HARD]** Which Soviet montage theorist directed 'Battleship Potemkin' and developed the concept of 'intellectual montage'?
- **Marked correct:** Sergei Eisenstein
- **Should be:** Sergei Eisenstein
- **Wrong options:** Vsevolod Pudovkin | Alexander Nevsky | Lev Kuleshov
- **Fixed wrong options:** Vsevolod Pudovkin | Dziga Vertov | Lev Kuleshov
- **Problem:** Alexander Nevsky is listed as a wrong answer, but Alexander Nevsky is actually the title of one of Eisenstein's own films, not a montage theorist. More critically, Lev Kuleshov was a real Soviet montage theorist (known for the Kuleshov Effect), making him potentially confusable but not actually a director of Battleship Potemkin — however, listing a real theorist's name alongside a film title as if both are people is sloppy and misleading.
- **Action:** fix

**[HARD]** Which cinematographer worked with Ingmar Bergman on films including 'Persona' and 'Through a Glass Darkly'?
- **Marked correct:** Sven Nykvist
- **Should be:** Sven Nykvist
- **Wrong options:** Gunnar Fischer | Vilmos Zsigmond | Haskell Wexler
- **Fixed wrong options:** Vilmos Zsigmond | Haskell Wexler | Gordon Willis
- **Problem:** Gunnar Fischer was actually Bergman's primary cinematographer before Sven Nykvist, working on films like 'The Seventh Seal' and 'Wild Strawberries'. Listing Fischer as a wrong answer is problematic since he is legitimately associated with Bergman. However, 'Through a Glass Darkly' (1961) was shot by Nykvist, so the correct answer is accurate for that specific film.
- **Action:** fix

**[HARD]** Which actor won the Academy Award for Best Supporting Actor for 'Brokeback Mountain' (2005)?
- **Marked correct:** Heath Ledger
- **Should be:** George Clooney (for 'Syriana')
- **Wrong options:** Jake Gyllenhaal | Randy Quaid | Joel Edgerton
- **Fixed wrong options:** Heath Ledger | Jake Gyllenhaal | Paul Giamatti
- **Problem:** The correct answer states Heath Ledger won Best Supporting Actor for 'Brokeback Mountain', but the explanation correctly notes he did not win. Heath Ledger was nominated for Best Actor (not Supporting Actor) for 'Brokeback Mountain', and George Clooney won Best Supporting Actor for 'Syriana'. The correct answer to who won Best Supporting Actor for a 'Brokeback Mountain' role is no one — no one from that film won.
- **Action:** fix

**[HARD]** What was the original title of Stanley Kubrick's 'A Clockwork Orange' before it was changed for the film adaptation?
- **Marked correct:** A Clockwork Orange
- **Wrong options:** Mechanical Predator | The Ludovico Method | Orange Mechanical
- **Problem:** The question asks for the 'original title before it was changed for the film adaptation,' implying a title change occurred. The correct answer is that no title change occurred, but the question's framing is self-contradictory and misleading. The question should be rewritten to ask something meaningful.
- **Action:** fix

**[HARD]** Who composed the minimalist score for Philip Glass's opera 'Einstein on the Beach', which was also adapted for film?
- **Marked correct:** Philip Glass
- **Should be:** Philip Glass
- **Wrong options:** Steve Reich | John Adams | Michael Nyman
- **Problem:** 'Einstein on the Beach' was not adapted for film. The question falsely states it was 'adapted for film,' which is not accurate. The opera is a real work by Philip Glass, but the film adaptation claim is unsupported.
- **Action:** fix

**[HARD]** What is the name of the specific tracking shot in 'Goodfellas' (1990) that moves through the Copacabana nightclub in one continuous take?
- **Marked correct:** Copacabana steadicam shot
- **Should be:** The Copacabana steadicam shot
- **Wrong options:** The Godfather glide | The Scorsese sweep | The Lasky crane
- **Fixed wrong options:** The French Connection zoom | The Scorsese sweep | The Kubrick dolly
- **Problem:** The question asks for the 'name' of the tracking shot, but 'Copacabana steadicam shot' is a descriptive label, not an officially recognized proper name. Additionally, 'The Lasky crane' in the wrong answers is a real cinematic term (a camera movement from early Hollywood), which could confuse knowledgeable players.
- **Action:** fix

**[HARD]** Which Japanese director created the 'Tokyo Story' trilogy, beginning with 'Tokyo Story' in 1953?
- **Marked correct:** Yasujirō Ozu
- **Should be:** Yasujirō Ozu
- **Wrong options:** Akira Kurosawa | Masaki Kobayashi | Kenji Mizoguchi
- **Problem:** There is no recognized 'Tokyo Story trilogy.' Ozu's 'Tokyo Story' is a standalone film. 'Early Spring' and 'The End of Summer' are not sequels or part of a named trilogy. This premise is factually unsupported.
- **Action:** fix

**[HARD]** In what year was the Lumière Brothers' 'Arrival of a Train at La Ciotat Station' first shown to a public audience?
- **Marked correct:** 1896
- **Wrong options:** 1895 | 1897 | 1894
- **Problem:** The explanation states the film premiered on January 23, 1896, but that was the public screening at the Grand Café in Paris. The film was actually first shown on December 28, 1895, as part of the Lumières' first public screening program — however, 'Arrival of a Train at La Ciotat Station' specifically is generally dated to its public premiere in 1896. The answer of 1896 is defensible for this specific film's public debut, but 1895 is also commonly cited for the Lumières' first public screenings overall, making this potentially confusing. The correct answer of 1896 for this specific film is accurate.
- **Action:** fix

**[HARD]** Which composer scored both 'The Shining' (1980) and 'The Exorcist' (1973)?
- **Marked correct:** Jack Nitzsche scored neither; Wendy Carlos scored The Shining; Mike Oldfield and others scored The Exorcist
- **Should be:** No single composer scored both films
- **Wrong options:** Jerry Goldsmith | Ennio Morricone | John Williams
- **Fixed wrong options:** Jerry Goldsmith | Ennio Morricone | John Williams
- **Problem:** The correct answer is an extremely long, complex sentence embedded as an answer choice, which is an inappropriate format for a trivia question. Additionally, Jerry Goldsmith did score 'The Exorcist' (1973), making it a wrong answer that is actually partially correct — he composed original music for the film even though his score was largely replaced.
- **Action:** fix

**[HARD]** What was the working title of 'The Godfather Part II' (1974) before Francis Ford Coppola settled on the final title?
- **Marked correct:** The Godfather Part II
- **Should be:** The Godfather Part II
- **Wrong options:** The Godfather Saga | The Corleone Chronicles | Godfather II: The Sequel
- **Problem:** The question asks for the 'working title' before Coppola settled on the final title, but the answer states the film was always known by its final title. This is self-contradictory and structurally identical to Question #1's problem — the premise implies a change that didn't happen.
- **Action:** fix

**[HARD]** Who directed 'Come and See' (1985), often considered one of cinema's most devastating anti-war films?
- **Marked correct:** Elem Klimov
- **Should be:** Elem Klimov
- **Wrong options:** Andrei Rublev | Vladimir Bogomolov | Andrei Konchalovsky
- **Fixed wrong options:** Andrei Tarkovsky | Aleksei German | Andrei Konchalovsky
- **Problem:** 'Andrei Rublev' listed as a wrong answer is actually the name of a famous 1966 Andrei Tarkovsky film, not a director's name. While not technically 'correct,' its inclusion as a director name is misleading and factually confused. More critically, 'Vladimir Bogomolov' was the author of the novel on which 'Come and See' is based, not a director, making the wrong answers poorly constructed.
- **Action:** fix

**[HARD]** What is the name of the specific type of wipe transition that Stanley Kubrick favored in '2001: A Space Odyssey' (1968)?
- **Marked correct:** Star gate wipe / Dawn of Man transition
- **Should be:** Match cut
- **Wrong options:** Monolith dissolve | Cosmic fade | Space-time cut
- **Fixed wrong options:** Jump cut | Dissolve | Iris wipe
- **Problem:** The question asks about a 'wipe transition' Kubrick 'favored,' but the famous cut in '2001' from the bone to the satellite is a straight cut (match cut), not a wipe. The answer 'Star gate wipe / Dawn of Man transition' is inaccurate — it is universally recognized as a match cut, one of the most celebrated jump cuts in film history.
- **Action:** fix

**[HARD]** What was the original name of the character Norman Bates before it was finalized for Alfred Hitchcock's 'Psycho' (1960)?
- **Marked correct:** Norman Bates
- **Wrong options:** Nathan Bates | Neil Bates | Norbert Bates
- **Problem:** The question asks for the 'original name' of Norman Bates before finalization, but the correct answer given is 'Norman Bates' — the same name. The explanation even admits the name was never changed, making this a nonsensical question with no real answer. The premise is invented.
- **Action:** delete

**[HARD]** Which cinematographer shot the majority of Stanley Kubrick's 'Barry Lyndon'?
- **Marked correct:** John Alcott
- **Wrong options:** Douglas Slocombe | Vittorio Storaro | Michael Chapman
- **Problem:** The lenses used for Barry Lyndon's candlelit scenes were developed by Zeiss (for NASA's space program), not developed by NASA itself. Also, the claim Alcott shot the 'majority' is fine, but the NASA attribution in the explanation is misleading and should be corrected.
- **Action:** fix

**[HARD]** In what year did Alfred Hitchcock direct his final theatrical feature film?
- **Marked correct:** 1976
- **Wrong options:** 1972 | 1979 | 1974
- **Problem:** The unfinished project Hitchcock was developing was titled 'The Short Night,' not 'Refusal.' The explanation contains a fabricated title.
- **Action:** fix

**[HARD]** Which Japanese director's real name was Tsutomu Yamazaki?
- **Marked correct:** Akira Kurosawa
- **Wrong options:** Yasujirō Ozu | Kenji Mizoguchi | Masaki Kobayashi
- **Problem:** The premise is false and self-contradictory. Akira Kurosawa's real name was Akira Kurosawa; Tsutomu Yamazaki is a completely different, real Japanese actor. The explanation admits the question is based on a false premise, making it an invalid trivia question.
- **Action:** delete

**[HARD]** What was the original working title for 'Jaws' during production?
- **Marked correct:** Stillness in the Water
- **Wrong options:** The Creature Below | Summer of Fear | A Darker Tide
- **Problem:** 'Stillness in the Water' is not a verifiably documented working title for 'Jaws.' The explanation offers no credible sourcing, and this appears to be an invented fact. The film was based on a novel already titled 'Jaws,' and no such working title is on record.
- **Action:** delete

**[HARD]** Which cinematographer is known for her work with director Denis Villeneuve on 'Blade Runner 2049'?
- **Marked correct:** Roger Deakins
- **Wrong options:** Emmanuel Lubezki | Hoyte van Hoytema | Bradford Young
- **Problem:** The question uses 'her work' implying Roger Deakins is female, which is incorrect — Roger Deakins is male. The pronoun in the question is wrong and should be corrected.
- **Action:** fix

**[HARD]** What was the box office gross of 'Gone with the Wind' upon its initial release before subsequent re-releases?
- **Marked correct:** 402 million dollars
- **Wrong options:** 250 million dollars | 180 million dollars | 320 million dollars
- **Problem:** The claim that 'Gone with the Wind' earned approximately $402 million domestically in its original theatrical run (before re-releases) is not a well-supported or precise figure and appears to conflate various estimates. Domestic original-run gross figures for this film are historically disputed and inconsistently reported, making this answer unreliable as a trivia fact.
- **Action:** delete

**[HARD]** Which actor starred in both 'Midnight Cowboy' (1969) and 'Requiem for a Dream' (2000)?
- **Marked correct:** Jon Voight
- **Wrong options:** Dustin Hoffman | Sean Penn | Jared Leto
- **Problem:** Jon Voight does not appear in 'Requiem for a Dream' (2000). Jared Leto starred in that film, and Dustin Hoffman starred alongside Voight in 'Midnight Cowboy.' The correct answer to the question as posed does not exist among the options — no single actor starred in both films.
- **Action:** fix

**[HARD]** What was the original ending of 'Blade Runner' before the studio-mandated changes?
- **Marked correct:** Ambiguous, with Deckard's humanity left unclear
- **Wrong options:** Deckard dies in an explosion | Rachel sacrifices herself | Deckard and Roy fight to the death
- **Problem:** The question asks about the 'original ending before studio-mandated changes,' but the correct answer describes an ongoing thematic ambiguity rather than a specific ending. The theatrical release included a studio-added voiceover and optimistic finale that was removed in the Director's Cut; the answer conflates the Director's Cut ending with the 'original ending,' which is misleading.
- **Action:** fix

**[HARD]** What was the working title for 'Jaws' before its final release?
- **Marked correct:** A Shark Named Bruce
- **Wrong options:** Summer of Fear | The Beast | Leviathan
- **Problem:** The working title 'A Shark Named Bruce' is not well-documented. The shark prop was nicknamed 'Bruce' after Spielberg's lawyer, but 'A Shark Named Bruce' as an official working title is unverified. The film was based on Benchley's novel already titled 'Jaws,' and no widely confirmed alternative working title exists.
- **Action:** fix

**[HARD]** In what year was the phrase 'You're gonna need a bigger boat' first spoken in 'Jaws'?
- **Marked correct:** 1975
- **Should be:** 1975
- **Wrong options:** 1974 | 1976 | 1977
- **Problem:** The question asks what year the phrase was 'first spoken in Jaws,' but the answer is really just asking when the film was released. The phrasing is misleadingly circular — the correct answer is simply the film's release year. Additionally, the explanation notes the line is 'slightly misquoted,' raising ambiguity about what exact line the question refers to.
- **Action:** fix

**[HARD]** What is the name of the character played by Marlon Brando in 'The Godfather'?
- **Marked correct:** Vito Corleone
- **Wrong options:** Michael Corleone | Sonny Corleone | Clemenza Corleone
- **Fixed wrong options:** Michael Corleone | Sonny Corleone | Tom Hagen
- **Problem:** 'Clemenza Corleone' is listed as a wrong answer, but the character's name is simply 'Peter Clemenza' — he is not a Corleone. However, listing 'Clemenza Corleone' as a wrong answer is misleading and could confuse players into thinking Clemenza's last name is Corleone, which is incorrect. The wrong answer should be replaced with a cleaner option.
- **Action:** fix

**[HARD]** Who directed 'The Third Man' (1949)?
- **Marked correct:** Carol Reed
- **Should be:** Carol Reed
- **Wrong options:** David Lean | Michael Powell | Anthony Asquith
- **Problem:** The explanation incorrectly attributes the zither score to Orson Welles. The score was composed and performed by Anton Karas, as the explanation itself correctly states — but then credits it to Welles in the same sentence, which is contradictory and misleading.
- **Action:** fix

**[HARD]** In 'Pulp Fiction,' what is the name of the briefcase's contents?
- **Marked correct:** Never explicitly revealed
- **Should be:** Never explicitly revealed
- **Wrong options:** Gold bullion | Diamonds | Heroin
- **Problem:** The question asks for 'the name of the briefcase's contents,' but the correct answer is 'Never explicitly revealed,' which is not a name. The question is poorly worded since it implies the contents have a name. It should ask what the briefcase contains or what is known about its contents.
- **Action:** fix

**[HARD]** Which actress won the Academy Award for Best Supporting Actress for 'Breakfast at Tiffany's'?
- **Marked correct:** Patty Duke
- **Wrong options:** Audrey Hepburn | Miriam Hopkins | Thelma Ritter
- **Problem:** The question asks who won Best Supporting Actress for 'Breakfast at Tiffany's,' but the correct answer given is Patty Duke, who won for 'The Miracle Worker' — a completely different film. No actress won Best Supporting Actress specifically for 'Breakfast at Tiffany's.' The question is misleadingly constructed.
- **Action:** fix

**[HARD]** Who played the lead role in 'Eternal Sunshine of the Spotless Mind'?
- **Marked correct:** Jim Carrey
- **Should be:** Jim Carrey
- **Wrong options:** Tom Hanks | Edward Norton | Jake Gyllenhaal
- **Problem:** The question asks who played 'the lead role,' but 'Eternal Sunshine of the Spotless Mind' has two leads: Jim Carrey and Kate Winslet. While Carrey is correct, the question should specify the male lead or the character name to avoid ambiguity.
- **Action:** fix

**[HARD]** Which cinematographer won the Academy Award for Best Cinematography for 'Blade Runner 2049'?
- **Marked correct:** Roger Deakins
- **Should be:** Roger Deakins
- **Wrong options:** Hoyte van Hoytema | Bradford Young | Greig Fraser
- **Problem:** The explanation states this was 'one of his multiple Academy Award victories,' but the Blade Runner 2049 win in 2018 was actually Roger Deakins' FIRST Oscar win after being nominated 14 times previously. He has since won a second Oscar for '1917.'
- **Action:** fix

**[HARD]** In 'Citizen Kane', what is the name of the sled that becomes the film's central symbol?
- **Marked correct:** Rosebud
- **Should be:** Rosebud
- **Wrong options:** Snowdrop | Winterbell | Frostbite
- **Problem:** 'Rosebud' is the name of the sled, but the explanation incorrectly calls it 'the object burning in the furnace' as if it is revealed to the audience through the characters. The sled is burned without any character knowing its significance — only the audience sees it. More importantly, Rosebud is the sled's name, not a symbol called by that name in the film's dialogue by characters who know its meaning.
- **Action:** fix

**[HARD]** Which director helmed all four films in the original 'Alien' franchise's first cycle?
- **Marked correct:** Ridley Scott and James Cameron directed the first two; David Fincher and Jean-Pierre Jeunet directed the latter two
- **Wrong options:** James Cameron directed all four | Ridley Scott directed all four | A different director helmed each
- **Problem:** The question asks which director 'helmed all four films,' implying there is one such director, but the correct answer acknowledges it was four different directors. This is a poorly structured trivia question with an answer that doesn't fit a standard multiple-choice format, and the correct answer is essentially the explanation itself.
- **Action:** delete

**[HARD]** Which actor played both the lead role and a minor background character in 'The Shining'?
- **Marked correct:** Jack Nicholson
- **Wrong options:** Shelley Duvall | Joe Turkel | Scatman Crothers
- **Problem:** The question's premise is false — Jack Nicholson did not play both a lead role and a background character in 'The Shining.' The explanation itself admits the premise is a trick and is unsupported, making this an invalid trivia question with no legitimate correct answer among the choices.
- **Action:** delete

**[HARD]** What was the working title for 'Back to the Future' before Robert Zemeckis settled on the final name?
- **Marked correct:** The Spaceman
- **Wrong options:** Time Machine | Past Tense | Yesterday's Tomorrow
- **Problem:** There is no credible evidence that 'The Spaceman' was the working title for 'Back to the Future'. The film went through various drafts but this specific claim and the explanation about an alien story appear to be fabricated or unverifiable.
- **Action:** delete

**[HARD]** In 'Singin' in the Rain', what beverage does Gene Kelly's character famously drink before delivering the title song?
- **Marked correct:** There is no beverage; it's a direct transition into the song
- **Wrong options:** Champagne | Whiskey | Wine
- **Problem:** The premise of the question is dubious and the 'correct' answer is constructed oddly. The scene in 'Singin' in the Rain' leading into the title number does involve Don Lockwood saying goodnight to Kathy Selden and walking in the rain — the question's framing as a trivia challenge about a beverage with this convoluted 'correct' answer is misleading and a poor question construct.
- **Action:** delete

**[HARD]** Which of Stanley Kubrick's films was famously shelved and never publicly released during his lifetime?
- **Marked correct:** Eyes Wide Shut
- **Wrong options:** A.I. Artificial Intelligence | Barry Lyndon | The Killing
- **Problem:** 'Eyes Wide Shut' was NOT shelved or unreleased during Kubrick's lifetime — it was completed and released in July 1999, just months after his death, but Kubrick had finished it and screened it before dying. The question claims it was 'shelved and never publicly released during his lifetime,' but the explanation then contradicts this. The question premise is false; no major Kubrick film fits this description cleanly.
- **Action:** fix

**[HARD]** What is the name of the android character portrayed by C-3PO in 'Star Wars'?
- **Marked correct:** C-3PO
- **Wrong options:** See-Threepio | Threepio | Protocol Droid C-3PO
- **Problem:** The question asks for the 'name of the android character portrayed by C-3PO' — C-3PO is the character's name, not the actor's name. The question is incoherent as written; it confuses the actor (Anthony Daniels) with the character. Additionally, 'See-Threepio' is actually an alternate canonical name for C-3PO, making it a potentially correct wrong answer.
- **Action:** delete

**[HARD]** In 'Vertigo', what is the name of the San Francisco landmark where the climactic scene takes place?
- **Marked correct:** Mission San Juan Bautista
- **Should be:** Mission San Juan Bautista
- **Wrong options:** Golden Gate Bridge | Coit Tower | Ferry Building
- **Problem:** Mission San Juan Bautista is not in San Francisco — it is located in San Juan Bautista, California, approximately 90 miles south of San Francisco. The question incorrectly calls it a 'San Francisco landmark.'
- **Action:** fix

**[HARD]** Which actress won the Academy Award for Best Supporting Actress for her role in 'Everything Everywhere All at Once'?
- **Marked correct:** Jamie Lee Curtis
- **Should be:** Jamie Lee Curtis
- **Wrong options:** Stephanie Hsu | Michelle Yeoh | Ke Huy Quan
- **Problem:** The explanation incorrectly states Jamie Lee Curtis played 'Evelyn Wang's mother.' Curtis played Deirdre Beaubeirdre, an IRS auditor. Evelyn Wang (Michelle Yeoh) is the main character, not Curtis's character's daughter.
- **Action:** fix

**[HARD]** Which filmmaker directed 'The Farewell', which was nominated for Best Picture in 2020?
- **Marked correct:** Lulu Wang
- **Should be:** Lulu Wang
- **Wrong options:** Ari Aster | Greta Gerwig | Karyn Kusama
- **Problem:** 'The Farewell' (2019) was NOT nominated for Best Picture at the 2020 Academy Awards. It received a Golden Globe nomination for Best Foreign Language Film and Awkwafina won Best Actress (Musical or Comedy), but the film was not an Oscar Best Picture nominee.
- **Action:** fix

**[HARD]** Which television series, which aired from 1990-1991, was created by David Lynch and Mark Frost and became a cultural phenomenon despite its brief run?
- **Marked correct:** Twin Peaks
- **Wrong options:** The Twilight Zone | The Outer Limits | Night Gallery
- **Problem:** Twin Peaks originally aired from 1990 to 1991 for its two seasons, which is technically accurate for the original run, but Season 1 premiered in April 1990 and Season 2 ended in June 1991. More importantly, describing it as having a 'brief run' of only 1990-1991 is accurate, but the question's framing is fine. No major factual error detected upon closer review — status remains ok.
- **Action:** fix

### MUSIC (171 issues)

**[EASY]** In what year did Whitney Houston release 'I Will Always Love You'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the Grammy Awards ceremony first held?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Who is the lead singer of The Rolling Stones?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which artist released the album '25' in 2015?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the Grammy Awards ceremony first held?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which instrument has 88 keys?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Michael Jackson release 'Thriller'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which British rock band released the album 'The Dark Side of the Moon' in 1973?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What year did The Beatles break up?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did The Beatles break up?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which British rock band released the album 'The Dark Side of the Moon' in 1973?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did David Bowie release 'Ziggy Stardust and the Spiders from Mars'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did The Beatles break up?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many strings does a standard violin have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many strings does a standard acoustic guitar have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the Grammy Awards ceremony first held?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Elvis Presley have his first number-one hit on the Billboard Hot 100?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which British rock band released the album 'Dark Side of the Moon' in 1973?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which female artist has won the most Grammy Awards as of 2024?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Michael Jackson release 'Thriller'?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What genre of music originated in Jamaica in the late 1960s?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who won the Grammy Award for Best New Artist in 2024?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who was the lead singer of The Doors?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did The Beatles break up?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the Grammy Awards ceremony first held?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What year did The Beatles break up?
- **Marked correct:** 1970
- **Wrong options:** 1968 | 1972 | 1969
- **Problem:** The Beatles' breakup date is genuinely disputed. Paul McCartney announced his departure in April 1970, but John Lennon had privately quit in September 1969, and the legal dissolution wasn't finalized until 1975. '1970' is the most commonly accepted answer but the question could be more precise.
- **Action:** fix

**[EASY]** Which instrument has 88 keys?
- **Marked correct:** Piano
- **Wrong options:** Organ | Harpsichord | Synthesizer
- **Fixed wrong options:** Harpsichord | Synthesizer | Accordion
- **Problem:** Some organs also have 88 keys, and many synthesizers are built with 88 keys as well. More critically, some harpsichords have 88 keys, though this is less standard. The organ listing is the most problematic as many organs have 88 keys per manual.
- **Action:** fix

**[EASY]** Which female artist won the most Grammy Awards as of 2024?
- **Marked correct:** Beyoncé
- **Wrong options:** Taylor Swift | Ariana Grande | Billie Eilish
- **Problem:** As of the 2024 Grammy Awards (February 2024), Beyoncé has 32 Grammy Awards, making her the most-awarded artist overall. However, Taylor Swift won Album of the Year for the fourth time at the 2024 Grammys and surpassed Beyoncé in total wins by end of 2024 ceremony. The question asks 'as of 2024' which is ambiguous — before or after the February 2024 ceremony. After the ceremony Beyoncé still held 32, Taylor Swift had 14 at that point. Beyoncé remains the most-awarded artist as of the February 2024 ceremony, so the answer is correct for that event.
- **Action:** fix

**[EASY]** What is the best-selling single of all time?
- **Marked correct:** White Christmas by Bing Crosby
- **Wrong options:** Bohemian Rhapsody by Queen | Like a Virgin by Madonna | Blinding Lights by The Weeknd
- **Problem:** The claim that 'White Christmas' is the best-selling single of all time is widely cited but disputed in the modern era. Some sources now rank 'Something Just Like This' or other digital-era songs higher when streaming is counted. However, by physical sales, 'White Christmas' is the standard accepted answer. The question should specify physical sales or pre-digital era to avoid ambiguity.
- **Action:** fix

**[EASY]** What is the main stringed instrument in a violin family?
- **Marked correct:** Violin
- **Wrong options:** Cello | Viola | Double Bass
- **Problem:** The question 'What is the main stringed instrument in a violin family?' is poorly worded and somewhat circular — asking what the main instrument of the violin family is and answering 'violin' is trivially true but confusingly phrased. All four answer options (violin, cello, viola, double bass) are members of the violin family, making this question misleading about what 'main' means.
- **Action:** fix

**[EASY]** Which jazz legend is known as the 'King of Jazz'?
- **Marked correct:** Louis Armstrong
- **Should be:** Paul Whiteman
- **Wrong options:** Duke Ellington | Miles Davis | John Coltrane
- **Fixed wrong options:** Duke Ellington | Miles Davis | Louis Armstrong
- **Problem:** The title 'King of Jazz' is more commonly and historically associated with Paul Whiteman, not Louis Armstrong. Armstrong is often called the 'Father of Jazz' or 'Satchmo.' This is a factual error in the correct answer.
- **Action:** fix

**[EASY]** What is the fastest-selling album of all time?
- **Marked correct:** 25 by Adele
- **Wrong options:** 1989 by Taylor Swift | Thriller by Michael Jackson | Born This Way by Lady Gaga
- **Problem:** The claim that '25' by Adele is the fastest-selling album 'of all time' is US-centric and debated. In the US it broke records, but globally the record is contested. Additionally, *NSYNC's 'No Strings Attached' sold 2.4 million in one week in 2000, and Adele's 3.38 million figure is sometimes disputed across different tracking methods. The claim is broadly accepted but should be qualified.
- **Action:** fix

**[EASY]** Which music genre originated in New Orleans in the early 1900s?
- **Marked correct:** Jazz
- **Wrong options:** Blues | Ragtime | Gospel
- **Fixed wrong options:** Hip-Hop | Country | Gospel
- **Problem:** Ragtime also originated in the United States (not New Orleans specifically) in the late 1800s/early 1900s, but Blues also has strong roots in the American South in the early 1900s and could be confused as a New Orleans genre. More critically, Ragtime predates and directly influenced Jazz and is closely associated with the same era and region, making it a potentially confusing wrong answer, though Jazz remains the most correct answer for New Orleans specifically.
- **Action:** fix

**[EASY]** Who won the Grammy Award for Album of the Year in 2023?
- **Marked correct:** Harry Styles for 'Harry's House'
- **Wrong options:** The Weeknd for 'After Hours' | Olivia Rodrigo for 'GUTS' | Taylor Swift for 'Midnights'
- **Fixed wrong options:** The Weeknd for 'After Hours' | Olivia Rodrigo for 'SOUR' | Taylor Swift for 'Folklore'
- **Problem:** The correct answer is accurate — Harry Styles won Album of the Year at the 2023 Grammys. However, 'GUTS' by Olivia Rodrigo was released in 2023 and was not nominated for the 2023 Grammy Awards (it would be eligible for 2024). Additionally, Taylor Swift's 'Midnights' won Album of the Year at the 2024 Grammys, not 2023, so it is a valid wrong answer for 2023. The Olivia Rodrigo answer references the wrong album — 'SOUR' was her 2023 Grammy-nominated album, not 'GUTS'.
- **Action:** fix

**[EASY]** Which artist is known as the 'Queen of Pop'?
- **Marked correct:** Madonna
- **Wrong options:** Britney Spears | Beyoncé | Lady Gaga
- **Problem:** Lady Gaga has also been widely referred to as the 'Queen of Pop' by media and fans, making this potentially ambiguous. While Madonna holds the most established claim to the title, the question could be considered contestable.
- **Action:** fix

**[EASY]** What is the name of Beyoncé's 2022 album that won multiple Grammy Awards?
- **Marked correct:** Renaissance
- **Wrong options:** Lemonade | Homecoming | The Gift
- **Problem:** The explanation states 'Renaissance' won four Grammy Awards at the 2023 ceremony, but it actually won at the 2024 Grammy Awards ceremony (66th Grammy Awards). The album was released in 2022 but the Grammy ceremony where it won was in February 2024.
- **Action:** fix

**[EASY]** What genre of music originated in Jamaica in the late 1960s?
- **Marked correct:** Reggae
- **Wrong options:** Ska | Dancehall | Calypso
- **Problem:** Ska originated in Jamaica in the late 1950s, not the late 1960s, so it is a valid wrong answer. However, Calypso originated in Trinidad and Tobago, not Jamaica, so it is also a valid wrong answer. Dancehall originated in Jamaica in the late 1970s, not the late 1960s, so all wrong answers are acceptable. No contamination issue found upon closer review.
- **Action:** fix

**[EASY]** Who won the Grammy Award for Best New Artist in 2024?
- **Marked correct:** Victoria Monét
- **Wrong options:** Olivia Rodrigo | The Kid LAROI | SZA
- **Problem:** The explanation states Victoria Monét gained initial recognition 'on YouTube,' which is inaccurate. She gained recognition as a songwriter for artists like Ariana Grande before breaking out as a solo artist.
- **Action:** fix

**[EASY]** Which Taylor Swift album was the first to debut at number one on the Billboard 200?
- **Marked correct:** Fearless
- **Wrong options:** Speak Now | Red | 1989
- **Problem:** The question asks which Taylor Swift album was the first to debut at number one on the Billboard 200, but the explanation does not confirm this fact and instead describes a different record. 'Taylor Swift' (her debut, 2006) debuted at #5; 'Fearless' (2008) debuted at #1, making Fearless correct. However, the explanation's claim that she was 'the youngest artist to write and record a platinum album entirely by herself' is an unrelated and unverified fact that should be corrected.
- **Action:** fix

**[EASY]** What is the name of The Rolling Stones' signature 1969 album?
- **Marked correct:** Let It Bleed
- **Wrong options:** Exile on Main St. | Sticky Fingers | Goats Head Soup
- **Problem:** 'Sympathy for the Devil' was released on the 1968 album 'Beggars Banquet,' not on 'Let It Bleed' (1969). The explanation incorrectly attributes that song to this album.
- **Action:** fix

**[EASY]** Which artist released the album 'Purple Rain' in 1984?
- **Marked correct:** Prince
- **Should be:** Prince
- **Wrong options:** David Bowie | Michael Jackson | George Michael
- **Problem:** 'Purple Rain' was not Prince's major-label debut; his debut was 'For You' (1978). 'Purple Rain' was his sixth studio album and the soundtrack to the film of the same name.
- **Action:** fix

**[EASY]** What is the most-streamed song on Spotify of all time?
- **Marked correct:** Blinding Lights by The Weeknd
- **Wrong options:** Shape of You by Ed Sheeran | Someone You Loved by Lewis Capaldi | As It Was by Harry Styles
- **Problem:** As of 2024, 'Blinding Lights' by The Weeknd was surpassed by 'Shape of You' by Ed Sheeran and later other tracks; the most-streamed song on Spotify changes frequently and listing a wrong answer as a contender for the correct answer creates contamination risk. The claim that it is definitively the most-streamed as of 'early 2026' is unverifiable and the record has been contested.
- **Action:** fix

**[EASY]** Which artist won the most Grammy Awards at the 2023 Grammy Awards ceremony?
- **Marked correct:** Harry Styles
- **Should be:** Beyoncé
- **Wrong options:** The Weeknd | Billie Eilish | Lizzo
- **Fixed wrong options:** Harry Styles | Adele | Lizzo
- **Problem:** Harry Styles won only two Grammy Awards at the 2023 ceremony (Best Pop Vocal Album and Album of the Year), not three. Additionally, Beyoncé won the most Grammys that night with four awards.
- **Action:** fix

**[EASY]** Which rapper released the album 'The Marshall Mathers LP' in 2000?
- **Marked correct:** Eminem
- **Should be:** Eminem
- **Wrong options:** Dr. Dre | 50 Cent | Jay-Z
- **Problem:** 'The Marshall Mathers LP' was not Eminem's major-label debut; his major-label debut was 'The Slim Shady LP' (1999). 'The Marshall Mathers LP' was his second major-label album.
- **Action:** fix

**[EASY]** Who was the first musician to win the Pulitzer Prize for Music?
- **Marked correct:** Aaron Copland
- **Should be:** William Schuman
- **Wrong options:** George Gershwin | Leonard Bernstein | Duke Ellington
- **Fixed wrong options:** Aaron Copland | George Gershwin | Leonard Bernstein
- **Problem:** Aaron Copland was not the first musician to win the Pulitzer Prize for Music. The prize was first awarded in 1943 to William Schuman for 'A Free Song.' Copland won in 1945 but was not the first recipient.
- **Action:** fix

**[EASY]** Which female artist has the most Grammy Awards as of 2024?
- **Marked correct:** Beyoncé
- **Wrong options:** Taylor Swift | Alicia Keys | Ariana Grande
- **Problem:** As of the 2024 Grammy Awards, Taylor Swift surpassed Beyoncé to become the most awarded female artist in Grammy history with 14 wins that night, bringing her total to 14 competitive Grammys — however Beyoncé still holds the all-time record for total Grammys won (32+). The question asks 'as of 2024' which makes this ambiguous and potentially outdated depending on how totals are counted. The explanation states 32 awards after the 2023 ceremony, but Taylor Swift gained more at the 2024 ceremony. Beyoncé remains the most Grammy-awarded artist overall, so the answer may still be defensible but the explanation needs updating.
- **Action:** fix

**[EASY]** How many members are in the traditional rock band format?
- **Marked correct:** 4
- **Wrong options:** 3 | 5 | 6
- **Problem:** There is no single universally agreed-upon 'traditional rock band format.' Many classic and highly influential rock bands have 3 members (Cream, Rush, ZZ Top, Nirvana) or 5 members (The Rolling Stones, Aerosmith). This question is too subjective and ambiguous to have a defensible single correct answer.
- **Action:** fix

**[EASY]** Who was the first woman to win a Grammy Award for Best Producer?
- **Marked correct:** Sylvia Massy
- **Wrong options:** Ariana Grande | Diane Warren | Linda Ronstadt
- **Problem:** The question asks who was the first woman to win a Grammy for Best Producer, but the explanation pivots to discussing Sylvia Massy winning for Best Engineered Album — a completely different category. Sylvia Massy is primarily an engineer/producer but the claim she was the first woman to win 'Best Producer' is unverified and the explanation contradicts the question. This question is factually unreliable.
- **Action:** delete

**[EASY]** Which album by The Beatles is the best-selling in the United States?
- **Marked correct:** Sgt. Pepper's Lonely Hearts Club Band
- **Should be:** Abbey Road
- **Wrong options:** Abbey Road | The White Album | Revolver
- **Fixed wrong options:** Sgt. Pepper's Lonely Hearts Club Band | The White Album | Revolver
- **Problem:** According to RIAA certifications, the best-selling Beatles album in the US is actually 'The Beatles (White Album)' or '1' depending on the source, but multiple sources indicate 'Abbey Road' outsells 'Sgt. Pepper's' in the US. The RIAA certifies Abbey Road at 12x platinum vs Sgt. Pepper's at 11x platinum in the US, making this claim inaccurate.
- **Action:** fix

**[EASY]** Which female pop star released 'Like a Virgin' in 1984?
- **Marked correct:** Madonna
- **Wrong options:** Prince | Cyndi Lauper | Pat Benatar
- **Problem:** Prince is listed as a wrong answer but Prince is male, not a 'female pop star.' While Prince is not a correct answer, the question asks about a female pop star so this answer is clearly wrong for a different reason. However, this is not contamination — the more pressing issue is that Prince appears in the wrong answers list for a question specifically about a female pop star, which is odd but technically not contamination since Prince didn't release 'Like a Virgin.' No actual contamination exists; the question and answer are correct.
- **Action:** fix

**[EASY]** What is the name of Eminem's first major-label album?
- **Marked correct:** The Marshall Mathers LP
- **Should be:** The Slim Shady LP
- **Wrong options:** Infinite | Recovery | The Slim Shady LP
- **Fixed wrong options:** Infinite | Recovery | The Marshall Mathers LP
- **Problem:** The question asks for Eminem's first major-label album, but the explanation itself admits that 'The Slim Shady LP' (1999) was his first major-label debut, contradicting the marked correct answer of 'The Marshall Mathers LP' (2000). The correct answer should be 'The Slim Shady LP.'
- **Action:** fix

**[EASY]** Which guitarist is known for playing left-handed?
- **Marked correct:** Jimi Hendrix
- **Wrong options:** Eric Clapton | B.B. King | Jeff Beck
- **Problem:** The question asks 'which guitarist is known for playing left-handed' but multiple famous guitarists played left-handed, including Paul McCartney and Kurt Cobain. The question should be more specific to Hendrix.
- **Action:** fix

**[EASY]** What is the primary instrument in a classical orchestra that sets the tempo?
- **Marked correct:** Conductor's baton
- **Wrong options:** First violin | Timpani | French horn
- **Problem:** A conductor's baton is not an 'instrument' in the musical sense, making the question category misleading. The question asks for the 'primary instrument' but the correct answer is a tool used by a non-playing conductor, which is a category error.
- **Action:** fix

**[EASY]** Which album by Billie Eilish debuted at number one on the Billboard 200?
- **Marked correct:** When We All Fall Asleep, Where Do We Go?
- **Wrong options:** Happier Than Ever | Guitar | Lost Cause
- **Fixed wrong options:** Happier Than Ever (reached #1 but released later) | Hit Me Hard and Soft | dont smile at me
- **Problem:** 'Happier Than Ever' also debuted at number one on the Billboard 200, making it a correct answer and contaminating the wrong answers list.
- **Action:** fix

**[EASY]** What is the highest award given in the music industry?
- **Marked correct:** Grammy Award
- **Wrong options:** MTV Video Music Award | Billboard Music Award | American Music Award
- **Problem:** The concept of 'highest award in the music industry' is subjective. While the Grammy is widely considered the most prestigious, this is an opinion-based claim and could be disputed. The question could be made more objective.
- **Action:** fix

**[EASY]** Which artist won the most Grammy Awards as of 2024?
- **Marked correct:** Beyoncé
- **Should be:** Beyoncé
- **Wrong options:** Taylor Swift | Georg Solti | Quincy Jones
- **Problem:** As of the 2024 Grammy Awards (66th ceremony), Taylor Swift won Album of the Year for the fourth time, and her total Grammy count increased significantly. The explanation states Beyoncé had 32 Grammys after the 2023 ceremony, but by 2024 Taylor Swift's count had risen. However, Beyoncé's total as of 2024 is 32 while Taylor Swift's is 14 — Beyoncé still holds the record. The explanation figure of 32 should be verified: Beyoncé had 32 after the 2023 ceremony, which remains the record as of early 2024.
- **Action:** fix

**[EASY]** What genre of music is associated with Ludwig van Beethoven?
- **Marked correct:** Classical
- **Wrong options:** Jazz | Blues | Folk
- **Problem:** Beethoven bridged the Classical and Romantic periods and is as strongly associated with Romantic music as Classical. Labeling him solely 'Classical' is a common oversimplification that could be contested.
- **Action:** fix

**[EASY]** Which British punk band released 'Never Mind the Bollocks, Here's the Sex Pistols'?
- **Marked correct:** Sex Pistols
- **Wrong options:** The Clash | The Ramones | The Damned
- **Problem:** The album 'Never Mind the Bollocks, Here's the Sex Pistols' was released in 1977, not 1976 as stated in the explanation. The album was released on 28 October 1977.
- **Action:** fix

**[EASY]** Which country music legend is known as the 'King of Country Music'?
- **Marked correct:** Hank Williams
- **Wrong options:** Johnny Cash | Waylon Jennings | Willie Nelson
- **Problem:** Roy Acuff is also widely credited as the 'King of Country Music' — he was actually given that title by Hank Williams himself, and many sources attribute it primarily to Acuff. The title is disputed and not exclusively Hank Williams's.
- **Action:** fix

**[EASY]** What is the primary wind instrument used in a jazz ensemble?
- **Marked correct:** Saxophone
- **Wrong options:** Clarinet | Trumpet | Trombone
- **Problem:** The question asks for the 'primary' wind instrument in a jazz ensemble, but trumpet is equally iconic and fundamental to jazz — early jazz was trumpet-dominated, and both instruments have strong claims. The saxophone is not unambiguously the single primary wind instrument.
- **Action:** fix

**[EASY]** Which rap duo created the album 'Licensed to Ill' in 1986?
- **Marked correct:** Beastie Boys
- **Should be:** Beastie Boys
- **Wrong options:** Run-DMC | Public Enemy | LL Cool J
- **Problem:** The Beastie Boys were a trio, not a duo. The question incorrectly calls them a 'rap duo.'
- **Action:** fix

**[EASY]** What is the name of Prince's most famous album?
- **Marked correct:** Purple Rain
- **Wrong options:** Sign O' the Times | 1999 | Lovesexy
- **Problem:** The question asks for Prince's 'most famous album,' which is subjective. While Purple Rain is widely considered his most celebrated, 'Sign O' the Times' is often cited by critics as his greatest work. The question would be better phrased as 'best-selling' or 'most commercially successful.'
- **Action:** fix

**[EASY]** What is the name of Adele's best-selling album?
- **Marked correct:** 25
- **Should be:** 21
- **Wrong options:** 21 | 19 | 30
- **Fixed wrong options:** 25 | 19 | 30
- **Problem:** Adele's best-selling album is '21,' not '25.' '21' sold over 31 million copies worldwide, significantly more than '25.' The album '30' (2021) also outsold '25' in some markets.
- **Action:** fix

**[EASY]** What type of music is typically associated with Mozart and Beethoven?
- **Marked correct:** Classical
- **Wrong options:** Baroque | Romantic | Impressionist
- **Problem:** Beethoven's later works (e.g., his 9th Symphony) are generally classified as Romantic period, not Classical. Associating Beethoven solely with the Classical era is a common oversimplification that could be contested.
- **Action:** fix

**[MEDIUM]** What year did Michael Jackson's 'Thriller' album become the best-selling album of all time?
- **Marked correct:** 1984
- **Wrong options:** 1982 | 1983 | 1985
- **Problem:** The question asks what year 'Thriller' became the best-selling album 'of all time,' but this is not a clearly documented, verifiable milestone year. The album was released in 1982 and gradually accumulated sales; there is no consensus on a specific year it crossed that threshold. The question as worded is misleading and potentially unanswerable with certainty.
- **Action:** fix

**[MEDIUM]** Which Grammy Award category did Billie Eilish become the youngest person ever to win?
- **Marked correct:** Record of the Year
- **Wrong options:** Best New Artist | Best Pop Vocal Album | Song of the Year
- **Fixed wrong options:** Best Pop Solo Performance | Best Alternative Music Album | Best Engineered Album
- **Problem:** Billie Eilish won all four main Grammy categories in 2020 (Record of the Year, Album of the Year, Song of the Year, and Best New Artist), so 'Best New Artist' and 'Song of the Year' listed as wrong answers are also correct. The question should specify a single category or be reworded.
- **Action:** fix

**[MEDIUM]** What is the primary stringed instrument used in traditional Indian classical music?
- **Marked correct:** Sitar
- **Wrong options:** Sarod | Tabla | Veena
- **Problem:** The question asks for the 'primary' stringed instrument, but both the sitar and the veena have strong claims in Indian classical music. The veena is central to Carnatic classical music, while the sitar is central to Hindustani classical music. The question should specify Hindustani classical music.
- **Action:** fix

**[MEDIUM]** Which female artist has won the most Grammy Awards as of 2024?
- **Marked correct:** Beyoncé
- **Should be:** Taylor Swift
- **Wrong options:** Taylor Swift | Aretha Franklin | Mariah Carey
- **Fixed wrong options:** Beyoncé | Aretha Franklin | Mariah Carey
- **Problem:** As of the 2024 Grammy Awards, Taylor Swift surpassed Beyoncé to become the most-awarded female artist and the overall artist with the most Grammy wins (32+). This answer may now be incorrect depending on the exact date of record.
- **Action:** fix

**[MEDIUM]** Which rock band released the 1977 album 'Rumours'?
- **Marked correct:** Fleetwood Mac
- **Wrong options:** The Eagles | Stevie Nicks | Pink Floyd
- **Fixed wrong options:** The Eagles | Heart | Blondie
- **Problem:** Stevie Nicks is listed as a wrong answer, but she is a member of Fleetwood Mac. While she is not the band itself, a player could reasonably argue this is confusing. More critically, 'The Eagles' is a legitimate wrong answer, but Stevie Nicks as an individual was part of the correct band, which is misleading in this context.
- **Action:** fix

**[MEDIUM]** What music genre is characterized by fast tempos, distorted guitars, and often angry or political lyrics?
- **Marked correct:** Punk rock
- **Wrong options:** Grunge | Heavy metal | Garage rock
- **Problem:** The description also fits heavy metal and grunge to a reasonable degree, and 'garage rock' shares similar characteristics. More problematically, 'fast tempos, distorted guitars, and angry/political lyrics' could describe grunge or heavy metal as well, making this ambiguous. The question is not precise enough to uniquely identify punk rock.
- **Action:** fix

**[MEDIUM]** Which album by Taylor Swift spent the most weeks on the Billboard 200 chart in 2023-2024?
- **Marked correct:** Midnights
- **Wrong options:** Folklore | Reputation | 1989
- **Problem:** The claim that 'Midnights' spent the most weeks on the Billboard 200 in 2023-2024 among Taylor Swift albums is questionable. 'The Tortured Poets Department' (April 2024) and re-releases of '1989 (Taylor's Version)' also performed exceptionally well. This specific claim is not clearly verifiable and may be inaccurate.
- **Action:** fix

**[MEDIUM]** In what year did Elvis Presley have his first number-one hit on the Billboard Hot 100?
- **Marked correct:** 1956
- **Should be:** 1956
- **Wrong options:** 1954 | 1955 | 1957
- **Fixed wrong options:** 1954 | 1955 | 1957
- **Problem:** The Billboard Hot 100 chart did not exist until 1958. 'Heartbreak Hotel' reached number one on the Billboard Best Sellers in Stores chart in 1956, not the Hot 100. The question conflates two different charts.
- **Action:** fix

**[MEDIUM]** What is the primary percussion instrument in a drum kit?
- **Marked correct:** Bass drum
- **Wrong options:** Snare drum | Cymbal | Tom-tom
- **Problem:** The 'primary' percussion instrument in a drum kit is subjective. Many drummers and music educators consider the snare drum to be the primary or most foundational percussion element of a standard drum kit, and the bass drum is often considered the foundation rhythmically but not universally labeled the 'primary' instrument.
- **Action:** fix

**[MEDIUM]** Which country music artist won the most Grammy Awards in the country music category as of 2024?
- **Marked correct:** Dolly Parton
- **Wrong options:** Willie Nelson | George Strait | Johnny Cash
- **Problem:** The claim that Dolly Parton has won the most Grammy Awards in the country music category is not clearly supported. As of 2024, multiple country artists have competitive Grammy tallies in country categories, and this specific ranking is not easily verified. Vince Gill and Alison Krauss are notably strong contenders in country Grammy wins.
- **Action:** fix

**[MEDIUM]** What music genre is associated with Trinidad and Tobago and features steel drums?
- **Marked correct:** Calypso
- **Wrong options:** Soca | Dancehall | Reggaeton
- **Fixed wrong options:** Reggae | Dancehall | Reggaeton
- **Problem:** Both Calypso and Soca are genres associated with Trinidad and Tobago that feature steel drums (steelpan). Soca is listed as a wrong answer but is equally associated with Trinidad and Tobago and steelpan music, making it a plausible correct answer and creating wrong-answer contamination.
- **Action:** fix

**[MEDIUM]** Which pop icon released the 2008 album 'Confessions on a Dance Floor'?
- **Marked correct:** Madonna
- **Should be:** Madonna
- **Wrong options:** Lady Gaga | Kylie Minogue | Janet Jackson
- **Problem:** 'Confessions on a Dance Floor' was released in 2005, not 2008. The question states the wrong year in the question text itself.
- **Action:** fix

**[MEDIUM]** Which album by The Beatles spent the most weeks on the Billboard 200 chart?
- **Marked correct:** Sgt. Pepper's Lonely Hearts Club Band
- **Should be:** Abbey Road
- **Wrong options:** Abbey Road | The White Album | Revolver
- **Fixed wrong options:** Sgt. Pepper's Lonely Hearts Club Band | The White Album | Revolver
- **Problem:** Abbey Road has spent more total weeks on the Billboard 200 than Sgt. Pepper's, and the claim that Sgt. Pepper's spent 27 weeks at number one on the Billboard 200 is inaccurate. The question's factual basis is not verifiably correct.
- **Action:** fix

**[MEDIUM]** Which artist won the Grammy Award for Best New Artist in 2023?
- **Marked correct:** Victoria Monét
- **Should be:** Samara Joy
- **Wrong options:** Olivia Rodrigo | The Weeknd | Billie Eilish
- **Fixed wrong options:** Olivia Rodrigo | The Weeknd | Billie Eilish
- **Problem:** Victoria Monét won Best New Artist at the 66th Grammy Awards held in February 2024 (for the awards year 2023), not the 2023 ceremony. The 2023 Grammy ceremony (65th) awarded Best New Artist to Samara Joy.
- **Action:** fix

**[MEDIUM]** What is the primary instrument used in a string quartet?
- **Marked correct:** Violin
- **Should be:** Violin
- **Wrong options:** Cello | Viola | Harp
- **Fixed wrong options:** Cello | Viola | Harp
- **Problem:** The question asks for the 'primary instrument' in a string quartet, but all four instruments (two violins, viola, cello) are integral and equal members. While violins typically carry the melody, calling one the 'primary instrument' is debatable and could be considered ambiguous.
- **Action:** fix

**[MEDIUM]** In what decade did heavy metal music emerge as a distinct genre?
- **Marked correct:** 1970s
- **Should be:** 1970s
- **Wrong options:** 1960s | 1950s | 1980s
- **Fixed wrong options:** 1950s | 1980s | 1990s
- **Problem:** Heavy metal has roots traceable to the late 1960s with bands like Black Sabbath (formed 1968, debut album 1970) and Led Zeppelin (debut 1969), making the 1960s a defensible answer. The question and explanation are internally inconsistent, acknowledging late-1960s origins while marking 1970s as correct.
- **Action:** fix

**[MEDIUM]** What is the name of The Rolling Stones' longtime record label?
- **Marked correct:** Rolling Stones Records
- **Should be:** Rolling Stones Records
- **Wrong options:** Virgin Records | Capitol Records | Atlantic Records
- **Problem:** The Rolling Stones' label is officially called 'Rolling Stones Records,' but this is actually correct. However, the question is misleading: the Stones were historically signed to Decca, then Atlantic, then CBS, then Virgin before founding Rolling Stones Records in 1993 (not 1970). The founding date in the explanation is inaccurate — Rolling Stones Records was established in 1993, not 1970.
- **Action:** fix

**[MEDIUM]** Which jazz musician is known as the 'King of Cool'?
- **Marked correct:** Miles Davis
- **Should be:** Miles Davis
- **Wrong options:** John Coltrane | Chet Baker | Bill Evans
- **Problem:** Miles Davis is widely associated with 'cool jazz' and the 'Birth of the Cool' album, but the nickname 'King of Cool' is more commonly attributed to Dean Martin, not Miles Davis. Miles Davis is better described as a pioneer of cool jazz rather than holding the specific title 'King of Cool.'
- **Action:** fix

**[MEDIUM]** What is the name of Taylor Swift's record label?
- **Marked correct:** Taylor Swift Productions
- **Should be:** Republic Records
- **Wrong options:** Swift Records | Republic Records | Fearless Records
- **Fixed wrong options:** Big Machine Records | Island Records | Columbia Records
- **Problem:** Taylor Swift's record label is Republic Records (under Universal Music Group), not 'Taylor Swift Productions.' Taylor Swift Productions is her production company, not her record label. Republic Records is actually listed as a wrong answer, which constitutes wrong answer contamination as well.
- **Action:** fix

**[MEDIUM]** Which blues legend released 'Crossroads' as a live album in 1988?
- **Marked correct:** Stevie Ray Vaughan
- **Should be:** Eric Clapton
- **Wrong options:** B.B. King | Muddy Waters | John Lee Hooker
- **Fixed wrong options:** Stevie Ray Vaughan | B.B. King | John Lee Hooker
- **Problem:** The question states the correct answer is Stevie Ray Vaughan and references 'Crossroads' as a live album from 1988, but then the explanation describes a completely different album ('Live at the El Mocambo'). Furthermore, 'Crossroads' (1988) is actually a box set compilation by Eric Clapton, not a Stevie Ray Vaughan release. Stevie Ray Vaughan did release 'Live Alive' in 1986, but not a 1988 album called 'Crossroads.'
- **Action:** fix

**[MEDIUM]** Which album by The Beatles spent the most weeks at number one on the Billboard 200 chart?
- **Marked correct:** Sgt. Pepper's Lonely Hearts Club Band
- **Should be:** Sgt. Pepper's Lonely Hearts Club Band
- **Wrong options:** The White Album | Abbey Road | Revolver
- **Problem:** Sgt. Pepper's Lonely Hearts Club Band spent 15 weeks at number one on the Billboard 200, not 27 weeks. The claim of 27 weeks is factually incorrect.
- **Action:** fix

**[MEDIUM]** Which genre of music originated in Jamaica in the late 1960s and is characterized by offbeat rhythms?
- **Marked correct:** Reggae
- **Wrong options:** Ska | Dancehall | Rocksteady
- **Problem:** Ska also originated in Jamaica and features offbeat rhythms (the 'skank'), and Rocksteady is also Jamaican with offbeat rhythms. The question's descriptor fits multiple wrong answers, making it ambiguous. Additionally, Bob Marley did not create reggae; the question should better distinguish reggae from the other genres listed.
- **Action:** fix

**[MEDIUM]** What year did Michael Jackson's album 'Thriller' become the best-selling album of all time?
- **Marked correct:** 1984
- **Wrong options:** 1982 | 1983 | 1985
- **Problem:** The claim that Thriller definitively became the best-selling album of all time specifically in 1984 is not a well-documented or verifiable fact. The question premise is shaky and the specific year is not reliably sourced.
- **Action:** fix

**[MEDIUM]** What instrument does Stevie Nicks primarily play when performing with Fleetwood Mac?
- **Marked correct:** Vocals
- **Wrong options:** Guitar | Keyboard | Drums
- **Problem:** The question asks what instrument Stevie Nicks 'primarily plays,' and listing 'Vocals' as an instrument is debatable. More importantly, the question is oddly framed since vocals are not traditionally classified as an instrument. The question should ask about her role rather than her 'instrument.'
- **Action:** fix

**[MEDIUM]** Which female artist won the most Grammy Awards at the 2023 Grammy Awards ceremony?
- **Marked correct:** Beyoncé
- **Wrong options:** Taylor Swift | Adele | The Weeknd
- **Fixed wrong options:** Taylor Swift | Adele | Lizzo
- **Problem:** The question asks which 'female artist' won the most Grammys at the 2023 ceremony, but The Weeknd is male and should not be a wrong answer option as it introduces a category error. Also, Beyoncé won the most Grammys overall at that ceremony (4), not just among female artists, making 'female' a misleading qualifier.
- **Action:** fix

**[MEDIUM]** Who wrote and performed the song 'Imagine,' one of the most iconic songs of the 20th century?
- **Marked correct:** John Lennon
- **Wrong options:** Paul McCartney | George Harrison | Yoko Ono
- **Fixed wrong options:** Paul McCartney | George Harrison | Ringo Starr
- **Problem:** Yoko Ono is listed as a wrong answer, but she is credited as a co-writer of 'Imagine' on the song's official copyright. In 2017, the National Music Publishers Association officially added her as a co-writer. This makes Yoko Ono a potentially correct answer.
- **Action:** fix

**[MEDIUM]** In what year did Adele release her breakthrough debut album '21'?
- **Marked correct:** 2011
- **Should be:** 2011
- **Wrong options:** 2009 | 2010 | 2012
- **Problem:** The question calls '21' Adele's 'debut album,' but it is actually her second studio album. Her debut album was '19,' released in 2008.
- **Action:** fix

**[MEDIUM]** What is the primary instrument used in a full orchestra that is made of wood and produces high-pitched sounds?
- **Marked correct:** Flute
- **Wrong options:** Oboe | Clarinet | Piccolo
- **Problem:** The question is poorly constructed: it asks for a wood instrument producing high-pitched sounds, but flutes in modern orchestras are typically made of metal (silver, gold, or platinum), not wood. The piccolo (listed as a wrong answer) is higher-pitched than the flute. The oboe and clarinet are also wooden. The explanation even contradicts itself.
- **Action:** fix

**[MEDIUM]** Who is the lead guitarist and primary songwriter of the band U2?
- **Marked correct:** The Edge
- **Wrong options:** Adam Clayton | Bono | Larry Mullen Jr.
- **Problem:** Bono is listed as a wrong answer, but Bono is also a primary songwriter for U2 — arguably the band's primary lyricist and co-songwriter. The question's claim that The Edge is the 'primary songwriter' is debatable since songwriting in U2 is largely collaborative between Bono and The Edge.
- **Action:** fix

**[MEDIUM]** What genre of music is primarily associated with Bob Dylan's early career?
- **Marked correct:** Folk rock
- **Should be:** Folk
- **Wrong options:** Country | Blues | Jazz
- **Fixed wrong options:** Country | Blues | Folk rock
- **Problem:** Bob Dylan's early career (pre-1965) was primarily associated with folk music, not folk rock. Folk rock came later, starting with his 1965 album 'Bringing It All Back Home.' The correct answer for his early career genre should be 'Folk.'
- **Action:** fix

**[MEDIUM]** Which female pop artist released the album 'Like a Virgin' in 1984?
- **Marked correct:** Madonna
- **Wrong options:** Cyndi Lauper | Prince | Janet Jackson
- **Fixed wrong options:** Cyndi Lauper | Whitney Houston | Janet Jackson
- **Problem:** The question specifies 'female pop artist' but Prince (male) is listed as a wrong answer, which is inconsistent framing. More importantly, Prince actually co-wrote and produced 'Like a Virgin', which could cause confusion, though he did not release it.
- **Action:** fix

**[MEDIUM]** Which album by The Beatles was the first to be recorded entirely on four-track equipment?
- **Marked correct:** A Hard Day's Night
- **Wrong options:** Help! | Rubber Soul | Revolver
- **Problem:** A Hard Day's Night was NOT the first Beatles album recorded entirely on four-track equipment. With the Beatles (1963) and Please Please Me (1963) used two-track, but A Hard Day's Night was recorded on four-track; however, the claim that it was the FIRST entirely on four-track is disputed — With the Beatles used some four-track sessions. More critically, the explanation's claim is not well-supported and this is a poorly documented 'fact' that is unreliable.
- **Action:** fix

**[MEDIUM]** What is the name of Beyoncé's 2022 album that won Album of the Year at the Grammy Awards?
- **Marked correct:** Renaissance
- **Should be:** Renaissance
- **Wrong options:** Lemonade | The Gift | Spirit
- **Fixed wrong options:** Lemonade | The Gift | Spirit
- **Problem:** Renaissance did NOT win Album of the Year at the 2023 Grammy Awards. That award went to Harry Styles for 'Harry's House'. Beyoncé won four Grammys that night but not Album of the Year. At the 2024 Grammys (66th), Miley Cyrus won Album of the Year for 'Endless Summer Vacation', not Beyoncé.
- **Action:** fix

**[MEDIUM]** Which female artist holds the record for the most Grammy Awards won in a single night as of 2024?
- **Marked correct:** Beyoncé
- **Wrong options:** Taylor Swift | Adele | Billie Eilish
- **Problem:** The explanation is inaccurate and the question is misleading. The record for most Grammys won in a single night by a female artist is 4, held by multiple artists. Also, Taylor Swift won 4 Grammys in a single night at the 2024 ceremony, and the question asks 'as of 2024' which makes it potentially outdated or incorrect. The explanation incorrectly states Beyoncé broke records at the 2023 ceremony for single-night wins.
- **Action:** fix

**[MEDIUM]** What is the primary genre associated with Willie Nelson?
- **Marked correct:** Country
- **Wrong options:** Bluegrass | Folk | Outlaw Country
- **Fixed wrong options:** Bluegrass | Folk | Rockabilly
- **Problem:** 'Outlaw Country' is listed as a wrong answer, but Willie Nelson is one of the defining figures of Outlaw Country — it is essentially as correct as 'Country'. This contaminates the question since multiple answers are defensibly correct.
- **Action:** fix

**[MEDIUM]** What is the name of the music award ceremony held annually in February that honors musical achievements?
- **Marked correct:** Grammy Awards
- **Wrong options:** Billboard Music Awards | American Music Awards | MTV Video Music Awards
- **Problem:** The Grammy Awards are not always held in February — the ceremony date shifts and has been held in January and February across different years. The question's defining characteristic ('held annually in February') is not reliably accurate.
- **Action:** fix

**[MEDIUM]** What is the name of Taylor Swift's 2012 album that marked her transition from country to pop?
- **Marked correct:** Red
- **Wrong options:** 1989 | Speak Now | Fearless
- **Problem:** Red (2012) was Taylor Swift's FOURTH studio album, not her fifth. Her albums in order are: Taylor Swift (2006), Fearless (2008), Speak Now (2010), Red (2012), 1989 (2014).
- **Action:** fix

**[MEDIUM]** Which female artist is known for the 1989 album 'Like a Prayer'?
- **Marked correct:** Madonna
- **Wrong options:** Prince | Janet Jackson | Cyndi Lauper
- **Fixed wrong options:** Janet Jackson | Cyndi Lauper | Whitney Houston
- **Problem:** The question asks for a 'female artist' but includes Prince (male) as a wrong answer, which is an inconsistent and confusing framing that could mislead players.
- **Action:** fix

**[MEDIUM]** What is the primary instrument in jazz that is often described as the 'voice' of the ensemble?
- **Marked correct:** Saxophone
- **Wrong options:** Trumpet | Trombone | Piano
- **Problem:** The 'voice' of jazz is highly debatable — the trumpet has an equally strong claim as the defining lead instrument of jazz (Louis Armstrong, Miles Davis, Dizzy Gillespie), and piano is considered fundamental. The premise has no single correct answer.
- **Action:** fix

**[MEDIUM]** In what genre is the musician Prince primarily known, despite his genre-blending style?
- **Marked correct:** Funk
- **Wrong options:** Pop | Rock | Soul
- **Problem:** Prince is widely described as primarily a pop or R&B artist by most music critics and industry classifications; funk is a major influence but labeling it his primary genre is debatable and many sources would say pop or R&B.
- **Action:** fix

**[MEDIUM]** What is the highest vocal range classification for an adult male singer?
- **Marked correct:** Tenor
- **Should be:** Counter-tenor
- **Wrong options:** Baritone | Bass | Counter-tenor
- **Fixed wrong options:** Tenor | Baritone | Bass
- **Problem:** Counter-tenor is listed as a wrong answer but is actually a higher vocal range classification than tenor for adult male singers, making it arguably the correct answer to the question as asked. The explanation even acknowledges this contradiction.
- **Action:** fix

**[MEDIUM]** Which singer-songwriter released the landmark folk album 'Blonde on Blonde' in 1966?
- **Marked correct:** Bob Dylan
- **Wrong options:** Donovan | Pete Seeger | Neil Young
- **Problem:** 'Blonde on Blonde' is widely classified as a rock album (or rock/folk-rock), not primarily a folk album. The question calling it a 'landmark folk album' is inaccurate in genre classification.
- **Action:** fix

**[MEDIUM]** Which Latin music genre is characterized by a rhythmic pattern called the clave?
- **Marked correct:** Salsa
- **Wrong options:** Merengue | Bachata | Samba
- **Problem:** The clave is foundational to multiple Latin genres, not exclusively salsa — it is also central to Cuban son, mambo, and other Afro-Cuban music styles, making salsa not the uniquely correct answer.
- **Action:** fix

**[MEDIUM]** Which female pop artist won seven Grammy Awards at the 2020 Grammy Awards ceremony?
- **Marked correct:** Billie Eilish
- **Should be:** Billie Eilish
- **Wrong options:** Ariana Grande | Lizzo | Taylor Swift
- **Problem:** Billie Eilish won five Grammy Awards at the 2020 ceremony, not seven. She won the four main categories (Record, Album, Song of the Year, Best New Artist) plus Best Pop Vocal Album — that is five awards.
- **Action:** fix

**[HARD]** Which female artist won the Grammy Award for Album of the Year in 2023 for 'Midnights'?
- **Marked correct:** Taylor Swift
- **Should be:** Taylor Swift
- **Wrong options:** Billie Eilish | Beyoncé | Olivia Rodrigo
- **Problem:** Taylor Swift won Album of the Year for 'Midnights' at the 2024 Grammy Awards (66th ceremony, held February 2024), not the 2023 ceremony. The 2023 ceremony awarded Beyoncé's 'Renaissance'... actually Beyoncé did not win; Harry Styles won for 'Harry's House' at the 65th Grammys (2023). Swift's 'Midnights' win was at the 66th Grammys (February 2024). Also, it was her fourth Album of the Year win, which is correct, but the year stated is wrong.
- **Action:** fix

**[HARD]** What is the primary string instrument used in traditional Indian classical music that has sympathetic strings?
- **Marked correct:** Sitar
- **Wrong options:** Sarod | Tabla | Veena
- **Fixed wrong options:** Sarangi | Tabla | Veena
- **Problem:** The Sarod also has sympathetic strings, making it a potentially correct answer alongside the Sitar. The Tabla is a percussion instrument, not a string instrument, so it is clearly wrong. The question should clarify further or replace Sarod as a wrong answer.
- **Action:** fix

**[HARD]** What is the name of Prince's iconic seven-piece backing band that performed with him from 1978 onwards?
- **Marked correct:** The Revolution
- **Should be:** The Revolution
- **Wrong options:** The Time | Madhouse | The Family
- **Problem:** The Revolution was not a seven-piece band, and it did not perform with Prince from 1978 onwards. The Revolution as a named band formed around 1983-1984. Prince's earlier backing group was simply called 'Prince and the Revolution' from about 1983; before that he performed with unnamed backing musicians. The claim of 'seven-piece' and '1978 onwards' is inaccurate.
- **Action:** fix

**[HARD]** Which album by Mariah Carey spent the most consecutive weeks at number one on the Billboard Hot 100, with five singles reaching the top spot?
- **Marked correct:** 'Music Box'
- **Wrong options:** 'Emotions' | 'Butterfly' | 'Daydream'
- **Problem:** The question asks which album 'spent the most consecutive weeks at number one on the Billboard Hot 100' with five number-one singles, but 'Music Box' did not spend the most consecutive weeks at number one as an album on the Hot 100 (that chart tracks singles, not albums). The claim about five singles reaching number one from Music Box is also not accurate — it produced two number-one singles ('Dreamlover' and 'Hero'). The question conflates album chart performance with singles performance and contains factual errors.
- **Action:** fix

**[HARD]** Who was the lead guitarist of The Jimi Hendrix Experience who co-founded the band with Hendrix in 1966?
- **Marked correct:** Noel Redding
- **Should be:** Jimi Hendrix
- **Wrong options:** Mitch Mitchell | Billy Cox | Jack Casady
- **Fixed wrong options:** Mitch Mitchell | Billy Cox | Jack Casady
- **Problem:** The question asks for the 'lead guitarist' but names Noel Redding, who was actually the bassist. Jimi Hendrix himself was the lead guitarist. The explanation even contradicts the question by correctly identifying Redding as the bassist. The question is fundamentally self-contradictory.
- **Action:** fix

**[HARD]** Which Japanese musician and producer is known for creating the vaporwave genre and sampling 1980s-90s corporate aesthetics?
- **Marked correct:** Vektroid
- **Should be:** Vektroid
- **Wrong options:** Yoko Ono | Ryoji Ikeda | Alva Noto
- **Problem:** Vektroid is not Japanese; Vektroid (real name Ramona Xavier) is an American musician from Portland, Oregon. The description of her as 'Japanese' is factually incorrect.
- **Action:** fix

**[HARD]** What was the first album by Radiohead after they left EMI Records to establish their own independent label?
- **Marked correct:** 'The King of Limbs'
- **Should be:** 'In Rainbows'
- **Wrong options:** 'Amnestic' | 'A Moon Shaped Pool' | 'The Bends'
- **Fixed wrong options:** 'The King of Limbs' | 'A Moon Shaped Pool' | 'The Bends'
- **Problem:** 'In Rainbows' (2007) was Radiohead's first release after leaving EMI, distributed independently via their own website. 'The King of Limbs' (2011) was their second independent release. The correct answer should be 'In Rainbows.'
- **Action:** fix

**[HARD]** In what year did the Bee Gees' 'Saturday Night Fever' soundtrack album debut at number one on the Billboard 200?
- **Marked correct:** 1977
- **Should be:** 1978
- **Wrong options:** 1976 | 1978 | 1979
- **Fixed wrong options:** 1976 | 1977 | 1979
- **Problem:** The 'Saturday Night Fever' soundtrack was released in November 1977, but it did not debut at number one — it climbed the charts and reached number one in early 1978. The album's peak chart performance was in 1978, not 1977.
- **Action:** fix

**[HARD]** Which female country music artist won five consecutive Grammy Awards for Album of the Year for albums released between 2009-2013?
- **Marked correct:** Taylor Swift
- **Wrong options:** Miranda Lambert | Carrie Underwood | Dolly Parton
- **Problem:** Taylor Swift did not win five consecutive Grammy Awards for Album of the Year between 2009-2013. She won Album of the Year for 'Fearless' in 2010 (one win in that period). The premise of the question is fabricated. As of 2024 she has four total Album of the Year wins, none consecutively.
- **Action:** fix

**[HARD]** What was the original name of the band that became known as 'The Who'?
- **Marked correct:** The High Numbers
- **Should be:** The High Numbers
- **Wrong options:** The Detours | The Primitives | The Ramrods
- **Fixed wrong options:** The Kinks | The Primitives | The Ramrods
- **Problem:** The Who's origin is more complex: they started as 'The Detours,' then briefly became 'The Who,' then 'The High Numbers,' then back to 'The Who.' Listing 'The Detours' as a wrong answer is incorrect since it was also a real prior name of the band, making it a valid answer to the question as worded.
- **Action:** fix

**[HARD]** What is the name of the Grammy Award category that was first introduced in 2012 for best music film?
- **Marked correct:** Best Music Film
- **Wrong options:** Best Music Video | Best Documentary Feature | Best Motion Picture - Original Music
- **Problem:** The question asks for the name of the category but the correct answer IS the category name, making it trivially self-referential and awkward. Additionally, the Grammy Award for Best Music Film was introduced at the 55th Grammy Awards in 2013 (for music released in 2012), not 'in 2012' per se — the exact year of introduction should be verified and clarified.
- **Action:** fix

**[HARD]** In what year did Louis Armstrong release his interpretation of 'What a Wonderful World'?
- **Marked correct:** 1967
- **Should be:** 1967
- **Wrong options:** 1965 | 1968 | 1969
- **Problem:** The explanation contradicts the correct answer. The song was recorded and released in 1967 in the UK, but the question asks when Armstrong 'released' it. It was released as a single in the UK in 1967 but was not released in the US until 1988. The answer of 1967 is defensible for the recording/UK release, but the explanation erroneously states it 'wasn't released as a single until 1988,' which contradicts marking 1967 as correct.
- **Action:** fix

**[HARD]** Which album by Radiohead was recorded across multiple studios over two years and featured the single 'Paranoid Android'?
- **Marked correct:** OK Computer
- **Wrong options:** The Bends | Kid A | Amnestic
- **Fixed wrong options:** The Bends | Kid A | Amnesiac
- **Problem:** One of the wrong answers is misspelled as 'Amnestic' instead of 'Amnesiac,' which is a real Radiohead album. This should be corrected to avoid appearing as a typo-trap rather than a legitimate wrong answer.
- **Action:** fix

**[HARD]** What is the name of the 1975 album by Pink Floyd that was their best-selling record and features the track 'Money'?
- **Marked correct:** The Dark Side of the Moon
- **Should be:** Wish You Were Here
- **Wrong options:** Wish You Were Here | Animals | The Wall
- **Fixed wrong options:** The Dark Side of the Moon | Animals | The Wall
- **Problem:** The question asks for a 1975 album but then gives 'The Dark Side of the Moon' as the correct answer, which was released in 1973, not 1975. The question contains a factual error in the year stated.
- **Action:** fix

**[HARD]** Which producer, known for his minimalist synth work, produced Kraftwerk's groundbreaking 1974 album 'Autobahn'?
- **Marked correct:** Kraftwerk (self-produced)
- **Should be:** Kraftwerk (self-produced)
- **Wrong options:** Giorgio Moroder | Brian Eno | Conny Plank
- **Fixed wrong options:** Giorgio Moroder | Brian Eno | Tobias Becker
- **Problem:** Conny Plank is listed as a wrong answer but he was the engineer/co-producer on Autobahn, making him a plausible correct answer. The question and explanation acknowledge his key role, which makes listing him as a wrong answer misleading and potentially unfair.
- **Action:** fix

**[HARD]** Who was the drummer for Joy Division during the recording of their landmark debut album 'Unknown Pleasures'?
- **Marked correct:** Stephen Morris
- **Should be:** Stephen Morris
- **Wrong options:** Peter Hook | Gillian Gilbert | Alan Mackenzie
- **Fixed wrong options:** Peter Hook | Bernard Sumner | Ian Curtis
- **Problem:** Gillian Gilbert is listed as a wrong answer, but she was not a member of Joy Division — she joined New Order after Ian Curtis's death. However, 'Alan Mackenzie' does not appear to be a real member of Joy Division either, making this wrong answer fabricated. The more pressing issue is that Peter Hook (bassist) is listed as a wrong answer, which is fine as he was not the drummer.
- **Action:** fix

**[HARD]** Which British electronic act released the 1981 album 'Architecture & Morality' featuring the hit 'Enola Gay'?
- **Marked correct:** Orchestral Manoeuvres in the Dark
- **Should be:** Orchestral Manoeuvres in the Dark
- **Wrong options:** Depeche Mode | The Human League | Duran Duran
- **Fixed wrong options:** Depeche Mode | The Human League | Duran Duran
- **Problem:** 'Enola Gay' was released as a single in 1980 and appeared on the album 'Organisation' (1980), not 'Architecture & Morality' (1981). Architecture & Morality is a real OMD album but does not contain 'Enola Gay.'
- **Action:** fix

**[HARD]** What is the real name of the hip-hop producer known professionally as DJ Premier, who has produced for Gang Starr and countless others?
- **Marked correct:** Christopher Edward Martin
- **Should be:** Christopher Edward Martin
- **Wrong options:** Marcus Miller | Maurice Young | Keith Elam
- **Fixed wrong options:** Marcus Miller | Maurice Young | Robert Diggs
- **Problem:** Keith Elam is listed as a wrong answer, but Keith Elam is the real name of Guru, DJ Premier's Gang Starr partner — not DJ Premier himself. While technically a wrong answer to the question, it is misleading because it is the real name of his close collaborator, which could confuse knowledgeable players unfairly.
- **Action:** fix

**[HARD]** Which female jazz vocalist recorded the album 'Kind of Blue' as a response to Miles Davis's famous instrumental album of the same year?
- **Marked correct:** No artist recorded this as a response
- **Wrong options:** Billie Holiday | Ella Fitzgerald | Sarah Vaughan
- **Problem:** This is a poorly constructed trick question where the 'correct answer' is a statement rather than a factual answer competing with the wrong answers on equal footing. The format is confusing and inappropriate for a standard multiple-choice trivia question, and the premise is misleading.
- **Action:** delete

**[HARD]** How many Grammy Awards did Beyoncé win at the 2023 Grammy Awards ceremony, breaking the all-time record?
- **Marked correct:** 4
- **Should be:** 4
- **Wrong options:** 6 | 5 | 3
- **Fixed wrong options:** 6 | 5 | 3
- **Problem:** At the 2023 Grammy Awards (65th ceremony), Beyoncé won 4 awards, bringing her total to 32 and breaking the all-time record. This is correct. However, the record she broke was held by conductor Georg Solti with 31 Grammys, not 'Georg Solti's previous record of 31' — actually this detail in the explanation is correct. The answer of 4 is accurate.
- **Action:** fix

**[HARD]** Which 1979 album by The Clash was the first to feature producer Guy Stevens?
- **Marked correct:** The Clash
- **Should be:** London Calling
- **Wrong options:** Give 'Em Enough Rope | London Calling | Sandinista!
- **Fixed wrong options:** The Clash | Give 'Em Enough Rope | Sandinista!
- **Problem:** The explanation contradicts the correct answer. The question asks which 1979 album first featured producer Guy Stevens, but the explanation states The Clash's debut was produced by Micky Foote and that Stevens produced 'Give 'Em Enough Rope.' In fact, Guy Stevens produced 'London Calling' (1979), not 'Give 'Em Enough Rope' (which was produced by Sandy Pearlman). The correct answer should be 'London Calling.'
- **Action:** fix

**[HARD]** Which saxophonist composed and recorded the influential 1960 album 'A Love Supreme' while battling personal demons?
- **Marked correct:** John Coltrane
- **Should be:** John Coltrane
- **Wrong options:** Ornette Coleman | Sonny Rollins | Wayne Shorter
- **Problem:** The album 'A Love Supreme' was released in 1965, not 1960 as stated in the question. The correct answer (Coltrane) is right, but the question contains a factual error in the year. Also, Coltrane was a saxophonist but 'A Love Supreme' is not typically described as composed while 'battling personal demons' — he had overcome his addictions by then and described it as a spiritual offering.
- **Action:** fix

**[HARD]** Which female R&B artist released the 1994 album 'Voodoo' featuring the hit single 'No Scrubs'?
- **Marked correct:** TLC
- **Should be:** TLC
- **Wrong options:** En Vogue | SWV | Jodeci
- **Problem:** TLC's album 'Voodoo' does not exist — their third studio album was 'FanMail' (1999). 'No Scrubs' is from 'FanMail', not an album called 'Voodoo'. 'Voodoo' is a D'Angelo album. The question is riddled with factual errors.
- **Action:** fix

**[HARD]** What is the name of the collaborative album released in 1990 by producer Quincy Jones that featured multiple artists?
- **Marked correct:** Back on the Block
- **Should be:** Back on the Block
- **Wrong options:** Greatest Hits | The Color Purple | Off the Wall
- **Problem:** Coolio was not a featured artist on Quincy Jones's 'Back on the Block' (1990) — Coolio rose to fame in the mid-1990s. The actual featured artists included Ray Charles, Ella Fitzgerald, Miles Davis, Ice-T, Melle Mel, and Big Daddy Kane, among others.
- **Action:** fix

**[HARD]** Who was the lead singer of Nirvana before Kurt Cobain?
- **Marked correct:** Dale Crover
- **Wrong options:** Aaron Burckhard | Dave Grohl | Chad Channing
- **Problem:** Dale Crover was never Nirvana's lead singer — Kurt Cobain was always the lead vocalist. Crover briefly served as Nirvana's drummer before Chad Channing. The premise of the question is false; Nirvana never had a lead singer before Kurt Cobain.
- **Action:** fix

**[HARD]** Which album by Mariah Carey in 1990 debuted at number one and produced five top-ten singles?
- **Marked correct:** Mariah Carey
- **Should be:** Mariah Carey
- **Wrong options:** Emotions | Music Box | Daydream
- **Problem:** Mariah Carey's self-titled debut album did not debut at number one on the Billboard 200 — it debuted lower and climbed the charts over time. Additionally, it produced four number-one singles, not five top-ten singles (though it did have multiple hits).
- **Action:** fix

**[HARD]** Which producer and songwriter worked extensively with The Smiths and produced their album 'The Queen Is Dead'?
- **Marked correct:** John Porter
- **Should be:** Stephen Street
- **Wrong options:** Stephen Street | Troy Tate | Mark Freegard
- **Fixed wrong options:** John Porter | Troy Tate | Mark Freegard
- **Problem:** 'The Queen Is Dead' (1986) was produced by Stephen Street and Morrissey/Marr, not John Porter. John Porter produced earlier Smiths work (e.g., 'The Smiths' debut and parts of 'Meat Is Murder'), but not 'The Queen Is Dead.'
- **Action:** fix

**[HARD]** What is the name of the jazz standard composed by Duke Ellington in 1930?
- **Marked correct:** Mood Indigo
- **Wrong options:** Take Five | Round Midnight | All Blues
- **Problem:** 'Round Midnight' is listed as a wrong answer, but it was composed by Thelonious Monk (not Duke Ellington), so it is correctly a wrong answer. However, 'Mood Indigo' is traditionally dated to 1930, which is accurate. The question is acceptable but the wrong answer 'Round Midnight' should be noted — it was composed by Monk in 1944, not Ellington, so no contamination exists. Question is ok.
- **Action:** fix

**[HARD]** Which female hip-hop artist released the album 'Good as Hell' in 2015?
- **Marked correct:** Lizzo
- **Wrong options:** Nicki Minaj | Cardi B | Megan Thee Stallion
- **Problem:** The question asks which artist released an album called 'Good as Hell' in 2015, but 'Good as Hell' is a single by Lizzo, not an album. The single was released in 2016, not 2015. There is no album by Lizzo called 'Good as Hell.'
- **Action:** fix

**[HARD]** Which Scottish band released the 1986 album 'Screamadelica,' which blended dance and rock?
- **Marked correct:** Primal Scream
- **Should be:** Primal Scream
- **Wrong options:** The Jesus and Mary Chain | Sonic Youth | My Bloody Valentine
- **Fixed wrong options:** The Jesus and Mary Chain | Teenage Fanclub | Belle and Sebastian
- **Problem:** The question states the album was released in 1986, but 'Screamadelica' was released in 1991 (not 1986 or 1992 as the explanation says). Also, Sonic Youth is American, not Scottish.
- **Action:** fix

**[HARD]** In what year did Amy Winehouse release her album 'Back to Black'?
- **Marked correct:** 2003
- **Should be:** 2006
- **Wrong options:** 2004 | 2002 | 2005
- **Fixed wrong options:** 2007 | 2005 | 2004
- **Problem:** 'Back to Black' was released in 2006, not 2003. Amy Winehouse's debut album 'Frank' was released in 2003.
- **Action:** fix

**[HARD]** What is the name of Stevie Wonder's 1974 double album that many consider his masterpiece?
- **Marked correct:** Innervisions
- **Should be:** Songs in the Key of Life
- **Wrong options:** Songs in the Key of Life | Talking Book | Music of My Mind
- **Fixed wrong options:** Innervisions | Talking Book | Music of My Mind
- **Problem:** The question describes a 1974 double album considered Stevie Wonder's masterpiece. That describes 'Songs in the Key of Life' (1976, double album, widely considered his masterpiece). 'Innervisions' (1973) is not a double album and was released in 1973, not 1974. Additionally, 'Songs in the Key of Life' is listed as a wrong answer but is actually the correct answer to the question as worded.
- **Action:** fix

**[HARD]** Which album by Radiohead featured the track 'Paranoid Android' and won the Grammy Award for Best Alternative Music Album?
- **Marked correct:** OK Computer
- **Wrong options:** The Bends | Kid A | Amnestic
- **Problem:** OK Computer did not win the Grammy for Best Alternative Music Album. It was nominated but lost. Kid A won the Grammy for Best Alternative Music Album in 2001. The question's premise about OK Computer winning is factually incorrect.
- **Action:** fix

**[HARD]** What is the name of the record label founded by Motown Records' Berry Gordy that primarily released soul and R&B music and was subsidiary to Motown?
- **Marked correct:** Tamla
- **Wrong options:** Gordy Records | Soul Records | Hitsville
- **Problem:** Tamla was actually the original label Berry Gordy founded in 1959, predating the Motown name, but it became a subsidiary of Motown Records Corp. Gordy Records was also a genuine Motown subsidiary. The question's description of Tamla as 'primarily soul and R&B' and 'subsidiary to Motown' is defensible, but the framing is confusing since Tamla preceded the Motown label name.
- **Action:** fix

**[HARD]** In what year did The Beatles' 'A Day in the Life' become the longest-charting single on the Billboard Hot 100 at its time of release?
- **Marked correct:** 1967
- **Wrong options:** 1965 | 1966 | 1968
- **Problem:** 'A Day in the Life' was not released as a single in the US and did not chart on the Billboard Hot 100 at all, let alone become the 'longest-charting single.' The question's core premise is invented and unverifiable.
- **Action:** delete

**[HARD]** Which Grammy Award-winning producer and musician co-founded the electronic music group Kraftwerk and is known for pioneering synthesizer-based music?
- **Marked correct:** Florian Schneider-Esleben
- **Wrong options:** Klaus Dinger | Conny Plank | Dieter Moebius
- **Problem:** Florian Schneider-Esleben did co-found Kraftwerk, but the question describes him as 'Grammy Award-winning,' which is not verifiably accurate. More importantly, Ralf Hütter is the other co-founder and is equally or more associated with pioneering the synthesizer sound. The Grammy claim is unsupported.
- **Action:** fix

**[HARD]** What is the real name of the rapper and producer known professionally as 'MF DOOM,' who passed away in December 2020?
- **Marked correct:** Dumile Bowman
- **Should be:** Daniel Dumile
- **Wrong options:** Marcus Thompson | Daniel Dumile | Michael Mathers
- **Fixed wrong options:** Marcus Thompson | Dumile Bowman | Michael Mathers
- **Problem:** MF DOOM's real name was Daniel Dumile (born Dumile Daniel Dumile), not 'Dumile Bowman.' 'Daniel Dumile' is listed as a wrong answer but is actually the correct answer.
- **Action:** fix

**[HARD]** What was the name of Kurt Cobain's previous band before forming Nirvana in 1987?
- **Marked correct:** The Melvins
- **Wrong options:** Green River | The Stonewall Jackson | Soundgarden
- **Problem:** Kurt Cobain was never a member of The Melvins — he was only an associate and roadie. His actual pre-Nirvana bands include 'Fecal Matter' and informal projects with Krist Novoselic. The question and explanation are self-contradictory and the marked correct answer is false.
- **Action:** fix

**[HARD]** Which female-fronted heavy metal band released the 1990 album 'The X Factor,' which spawned the hit 'Enter Sandman'?
- **Marked correct:** Metallica
- **Wrong options:** Iron Maiden | Judas Priest | Black Sabbath
- **Problem:** The question is internally incoherent: it asks about a 'female-fronted heavy metal band' that released 'The X Factor' with 'Enter Sandman,' but Metallica is not female-fronted, 'Enter Sandman' is from the 1991 Black Album, and 'The X Factor' is an Iron Maiden album from 1995. The question is nonsensical and should be deleted.
- **Action:** delete

**[HARD]** What is the stage name of Marshall Bruce Mathers III, one of the best-selling music artists of all time?
- **Marked correct:** Eminem
- **Wrong options:** Dr. Dre | 50 Cent | Slim Shady
- **Fixed wrong options:** Dr. Dre | 50 Cent | Jay-Z
- **Problem:** 'Slim Shady' is listed as a wrong answer, but it is actually one of Eminem's well-known stage names/alter egos, making it a partially correct answer that could confuse players.
- **Action:** fix

**[HARD]** Which classical composer is famous for his four violin concertos collectively known as 'The Four Seasons,' published in 1725?
- **Marked correct:** Antonio Vivaldi
- **Wrong options:** Johann Sebastian Bach | George Frideric Handel | Wolfgang Amadeus Mozart
- **Problem:** The Four Seasons was published in 1725, but the question says 1725 which is actually correct. However, the standard scholarly date for publication of Il cimento dell'armonia e dell'inventione (Op. 8) is 1725, so the date is fine. Actually this is correct — no issue.
- **Action:** fix

**[HARD]** What is the name of the British musician and composer who created the electronica project 'Aphex Twin'?
- **Marked correct:** Richard David James
- **Wrong options:** Sean Booth | Mark Pritchard | Autechre
- **Fixed wrong options:** Sean Booth | Mark Pritchard | Luke Vibert
- **Problem:** Autechre is listed as a wrong answer but it is a duo (Sean Booth and Rob Brown), not a person. More critically, Sean Booth is listed separately as a wrong answer — he is one half of Autechre, making the wrong answers internally contradictory and confusing. Also, the question asks for a name but 'Autechre' is a band name, not a person's name.
- **Action:** fix

**[HARD]** Which British rock band released the 1997 album '(What's the Story) Morning Glory?' which became one of the best-selling albums in UK history?
- **Marked correct:** Oasis
- **Should be:** Oasis
- **Wrong options:** Blur | Pulp | Suede
- **Problem:** (What's the Story) Morning Glory? was released in October 1995, not 1997. The explanation even contradicts itself by mentioning '1994 with different artwork,' which is also incorrect.
- **Action:** fix

**[HARD]** Who was the original drummer of The Beatles before Ringo Starr joined the band in 1962?
- **Marked correct:** Pete Best
- **Wrong options:** Stuart Sutcliffe | Andy White | Norman Chapman
- **Fixed wrong options:** Stuart Sutcliffe | Colin Hanton | Tommy Moore
- **Problem:** Norman Chapman and Andy White both drummed for The Beatles before Ringo Starr, making the question ambiguous. The question asks for the 'original' drummer, but Pete Best was not the very first — Tommy Moore and Norman Chapman preceded him. However, Pete Best is the most commonly cited pre-Ringo drummer and served the longest in that role before Ringo replaced him.
- **Action:** fix

**[HARD]** What is the stage name of Marshall Mathers' producer and mentor who founded Aftermath Entertainment and founded Shady Records with Eminem?
- **Marked correct:** Dr. Dre
- **Should be:** Dr. Dre
- **Wrong options:** Timbaland | Pharrell Williams | Kanye West
- **Problem:** Dr. Dre founded Aftermath Entertainment, but Shady Records was founded by Eminem himself (not co-founded with Dr. Dre). Shady Records is Eminem's own label, distributed through Aftermath/Interscope. The question's framing is inaccurate.
- **Action:** fix

**[HARD]** Which British electronic music producer and DJ released the 1999 album 'Come with Me,' featuring the hit single 'Born Slippy'?
- **Marked correct:** Underworld
- **Should be:** Underworld
- **Wrong options:** Chemical Brothers | Fatboy Slim | Leftfield
- **Problem:** The question asks about a 1999 album called 'Come with Me' featuring 'Born Slippy.' Underworld did release 'Born Slippy' but it appeared on 'Dubnobasswithmyheadman' (1994) and as a single in 1995. Underworld's 1999 album was 'Beaucoup Fish,' not 'Come with Me.' 'Come with Me' is a Puff Daddy song from 1998.
- **Action:** fix

**[HARD]** Which groundbreaking female hip-hop artist released the 1998 album 'Like Water for Chocolate'?
- **Marked correct:** Mos Def
- **Wrong options:** Queen Latifah | Lauryn Hill | Missy Elliott
- **Problem:** The question, correct answer, and premise are all wrong. 'Like Water for Chocolate' was released by Common (a male rapper) in 2000, not by a female hip-hop artist in 1998. Even the explanation acknowledges this error. The question should be deleted and rewritten.
- **Action:** delete

**[HARD]** Which album by Radiohead was the first to feature Thom Yorke's heavily processed vocals as a primary artistic choice?
- **Marked correct:** Kid A
- **Wrong options:** OK Computer | The Bends | Amnestic
- **Fixed wrong options:** OK Computer | The Bends | Amnesiac
- **Problem:** One of the wrong answers is spelled 'Amnestic' but the actual Radiohead album is 'Amnesiac' (2001). This is a typo in the wrong answers.
- **Action:** fix

**[HARD]** What is the name of the specific guitar tuning used by Joni Mitchell on the majority of her 1970s folk-influenced albums?
- **Marked correct:** Open D tuning (with variations)
- **Wrong options:** DADGAD tuning | Open G tuning | Dropped D tuning
- **Problem:** Joni Mitchell is famous for using dozens of different open tunings — not primarily or consistently 'Open D.' The question's premise that she used one specific tuning on 'the majority' of her albums is factually imprecise and the answer 'Open D tuning (with variations)' is too vague to be a reliable trivia answer. This question is not well-grounded enough to be fair.
- **Action:** fix

**[HARD]** In what year did Metallica record 'The Black Album,' their self-titled opus that marked a shift toward mainstream accessibility?
- **Marked correct:** 1990
- **Should be:** 1991
- **Wrong options:** 1989 | 1991 | 1992
- **Fixed wrong options:** 1989 | 1990 | 1992
- **Problem:** Metallica's self-titled 'Black Album' was released in August 1991, not 1990. Recording took place from late 1990 into 1991, but the release year was 1991. The correct answer should be 1991 if asking about release year, or the question should specify 'recording began.'
- **Action:** fix

**[HARD]** What is the technical term for the string instrument technique used prominently on Nick Drake's 'Northern Sky'?
- **Marked correct:** Fingerstyle
- **Wrong options:** Fingerpicking (exclusively) | Hybrid picking | Travis picking
- **Problem:** The question asks for a 'technical term' but then lists 'Fingerstyle' as correct while 'Fingerpicking (exclusively)' and 'Travis picking' are wrong answers — these are overlapping and debated terms. Fingerpicking and fingerstyle are often used interchangeably, making this question confusingly ambiguous.
- **Action:** fix

**[HARD]** What is the name of the Los Angeles studio collective that produced much of FKA twigs' early experimental work?
- **Marked correct:** Arca and Grimes's production circles / Young Turks collective
- **Wrong options:** Hyperpop collective | Brainfeeder Records | FADER sound designers
- **Problem:** The 'correct answer' is a fabricated mashup label ('Arca and Grimes's production circles / Young Turks collective') that doesn't describe a real named studio collective. Grimes was not part of FKA twigs' early production circle, and Young Turks is a record label, not a Los Angeles studio collective. The question premise is inaccurate and the answer is invented.
- **Action:** delete

**[HARD]** Which British post-punk revival band's 2003 debut 'Is This It' was recorded almost entirely with vintage equipment from the 1970s?
- **Marked correct:** The Strokes
- **Should be:** The Strokes
- **Wrong options:** Arctic Monkeys | Interpol | Yeah Yeah Yeahs
- **Problem:** 'Is This It' was released in 2001, not 2003 as stated in the question. The Strokes are also generally classified as post-punk revival/garage rock, not strictly 'British' — they are a New York band. Both the year and the nationality in the question stem are wrong.
- **Action:** fix

**[HARD]** What is the name of the specific harmonic technique used by Steve Vai in his composition 'Tender Surrender'?
- **Marked correct:** Legato phrasing with artificial harmonics
- **Wrong options:** Tapping harmonics exclusively | Natural harmonics with tremolo | Pinch harmonics throughout
- **Problem:** The question asks for 'the specific harmonic technique' used in 'Tender Surrender,' but the answer 'Legato phrasing with artificial harmonics' is not a single named technique — it describes two separate elements. The question is vague and the answer is not a recognized technical term.
- **Action:** fix

**[HARD]** Which alternative rock band released 'In the Aeroplane Over the Sea,' an album recorded in a basement with unconventional instrumentation?
- **Marked correct:** Neutral Milk Hotel
- **Should be:** Neutral Milk Hotel
- **Wrong options:** The Microphones | Animal Collective | Of Montreal
- **Problem:** 'In the Aeroplane Over the Sea' was not recorded in a basement — it was recorded at Pet Sounds Studio in Denver, Colorado. The 'basement' claim in the question and explanation is inaccurate.
- **Action:** fix

**[HARD]** Which contemporary classical composer created the minimalist piece 'In C,' which uses a fixed pulse and looping melodic cells?
- **Marked correct:** Terry Riley
- **Should be:** Terry Riley
- **Wrong options:** John Glass | Philip Glass | Steve Reich
- **Fixed wrong options:** Philip Glass | Steve Reich | La Monte Young
- **Problem:** Philip Glass is listed as a wrong answer, but 'John Glass' (a wrong answer) does not exist as a real person. More critically, having both 'John Glass' (fictional) and 'Philip Glass' (real minimalist composer) as wrong answers is problematic — 'John Glass' appears to be a corrupted version of Philip Glass, making two answers confusingly similar and one entirely fabricated.
- **Action:** fix

**[HARD]** What is the name of the percussive hand technique pioneered by Victor Wooten on the bass guitar?
- **Marked correct:** Tapping / two-hand tapping
- **Should be:** Double thumbing / double-thumb slap technique
- **Wrong options:** Percussive slapping exclusively | Harmonic fret tapping | Rhythmic muting technique
- **Problem:** Victor Wooten is most famously known for his 'double thumbing' and slap bass techniques, not primarily 'two-hand tapping.' Describing his signature technique as tapping is an oversimplification and potentially misleading, as his most distinctive innovation is the double-thumb technique.
- **Action:** fix

**[HARD]** Which country music legend released 'Jolene,' a ballad named after a real person who threatened her marriage?
- **Marked correct:** Dolly Parton
- **Should be:** Dolly Parton
- **Wrong options:** Loretta Lynn | June Carter | Patsy Cline
- **Problem:** The explanation states Jolene was inspired by a bank teller named 'Jolene Roberts,' but there is no verified record of that surname. Dolly Parton has given varying accounts of the inspiration; the name 'Jolene Roberts' appears to be an unverified fabrication added to the explanation.
- **Action:** fix

**[HARD]** Which British progressive rock band's triple album 'Tales from Topographic Oceans' faced criticism for perceived self-indulgence?
- **Marked correct:** Yes
- **Should be:** Yes
- **Wrong options:** Jethro Tull | Emerson Lake & Palmer | King Crimson
- **Problem:** 'Tales from Topographic Oceans' is a double album, not a triple album. It contains four sides of vinyl (two LPs) but is not a triple album.
- **Action:** fix

**[HARD]** What is the name of the microphone technique where multiple condenser mics are placed to capture ambient room reflections?
- **Marked correct:** Ambient miking / room miking
- **Should be:** Ambient miking / room miking
- **Wrong options:** Stereo pair miking | Coincident pair placement | Mid-side miking
- **Fixed wrong options:** Close miking | Boundary miking | Spot miking
- **Problem:** The question specifies 'condenser mics' but ambient/room miking is not limited to condenser microphones. Also, stereo pair miking and mid-side miking can themselves be used as ambient room miking techniques, creating potential wrong-answer contamination.
- **Action:** fix

**[HARD]** Which experimental hip-hop collective released 'Deltron 3030,' a sci-fi concept album with production by DJ Kid Koala?
- **Marked correct:** Deltron 3030 (featuring Del the Funky Homosapien and MF DOOM)
- **Should be:** Deltron 3030 (featuring Del the Funky Homosapien and Dan the Automator)
- **Wrong options:** Gorillaz | Anticon Collective | Freestyle Fellowship
- **Fixed wrong options:** Gorillaz | Anticon Collective | Freestyle Fellowship
- **Problem:** MF DOOM was not part of Deltron 3030. The project featured Del the Funky Homosapien and Dan 'The Automator' Nakamura (as producer), with DJ Kid Koala providing turntablism. MF DOOM had no involvement.
- **Action:** fix

**[HARD]** In what year did Björk release 'Homogenic,' featuring orchestral arrangements by Arca-like avant-garde producers?
- **Marked correct:** 1997
- **Should be:** 1997
- **Wrong options:** 1996 | 1998 | 1999
- **Fixed wrong options:** 1996 | 1998 | 1999
- **Problem:** The description 'Arca-like avant-garde producers' is anachronistic and misleading — Arca did not work with Björk until the album 'Vulnicura' (2015). 'Homogenic' was arranged by Eumir Deodato with string arrangements, not Arca-like producers. The year 1997 is correct.
- **Action:** fix

**[HARD]** Which progressive metal band's 1992 album 'Images and Words' featured the extended instrumental 'Metropolis – Part I'?
- **Marked correct:** Dream Theater
- **Should be:** Dream Theater
- **Wrong options:** Queensrÿche | Fates Warning | Symphony X
- **Fixed wrong options:** Queensrÿche | Fates Warning | Symphony X
- **Problem:** 'Metropolis – Part I: The Miracle and the Sleeper' is not primarily an instrumental; it is a full song with lyrics sung by James LaBrie. It is also not the opening track — 'Pull Me Under' opens the album.
- **Action:** fix

### POP_CULTURE (171 issues)

**[EASY]** In what year did the iPhone first launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the 'Damn Daniel' meme become popular?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which social media platform was founded by Mark Zuckerberg?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the iPhone first launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which streaming service released 'Stranger Things' in 2016?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What year did Instagram launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which K-pop group released the album 'Map of the Soul: 7' in 2020?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which artist released the album '25' in 2015?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the iPhone first launch?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which social media platform was founded by Mark Zuckerberg?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Johnny Depp and Amber Heard's highly publicized defamation trial take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which social media platform did Elon Musk acquire in 2022?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the 'Mannequin Challenge' go viral on social media?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the name of the TikTok dance that went viral in 2020 during lockdowns?
- **Marked correct:** Renegade
- **Wrong options:** Floss | In My Feelings | Harlem Shake
- **Problem:** The Renegade dance was created by Jalaiah Harmon in 2019, not 2020, and went viral on TikTok in late 2019/early 2020. Multiple other dances (e.g., 'Savage') also went massively viral during 2020 lockdowns, making 'Renegade' not a clear-cut answer for '2020 lockdown dance.'
- **Action:** fix

**[EASY]** Who is known as the 'King of TikTok' and was the first to reach 100 million followers on the platform?
- **Marked correct:** Charli D'Amelio
- **Should be:** Charli D'Amelio
- **Wrong options:** Addison Rae | Zach King | Loren Gray
- **Problem:** The question calls Charli D'Amelio the 'King of TikTok,' which is factually wrong — she is widely referred to as the 'Queen of TikTok,' not the King. The question's title contradicts the correct answer.
- **Action:** fix

**[EASY]** Which YouTuber was the first individual creator to reach 100 million subscribers?
- **Marked correct:** SET India
- **Should be:** PewDiePie
- **Wrong options:** PewDiePie | Dua Lipa | Zee Entertainment
- **Fixed wrong options:** SET India | Dua Lipa | Zee Entertainment
- **Problem:** SET India is a media company channel, not an 'individual creator.' The first individual creator to reach 100 million YouTube subscribers was PewDiePie (Felix Kjellberg) in 2019. The explanation contradicts itself by calling SET India 'individual creator-focused' when it is a corporate media channel.
- **Action:** fix

**[EASY]** What year did the 'Baby Shark' song go viral?
- **Marked correct:** 2018
- **Wrong options:** 2017 | 2019 | 2016
- **Problem:** 'Baby Shark' by Pinkfong was originally uploaded to YouTube in June 2016 and went viral in South Korea and parts of Asia in 2016-2017 before achieving global viral status in 2018. Calling 2018 the definitive year it 'went viral' is debatable, though 2018 is when it achieved Western/global viral status.
- **Action:** fix

**[EASY]** Which streaming series became Netflix's most-watched debut season in 2022?
- **Marked correct:** Wednesday
- **Wrong options:** Dahmer | The Midnight Club | 1899
- **Problem:** While 'Wednesday' was indeed massively popular, 'Dahmer' also broke major Netflix viewership records in 2022. The claim that 'Wednesday' was specifically Netflix's 'most-watched debut season' requires more precise sourcing, as both shows broke different records that year.
- **Action:** fix

**[EASY]** In what year did the 'Damn Daniel' meme become popular?
- **Marked correct:** 2015
- **Should be:** 2016
- **Wrong options:** 2014 | 2016 | 2013
- **Fixed wrong options:** 2015 | 2017 | 2014
- **Problem:** 'Damn Daniel' went viral in February 2016, not 2015. The Snapchat video was posted and spread widely in early 2016.
- **Action:** fix

**[EASY]** What is the name of Taylor Swift's 2008 debut album?
- **Marked correct:** Fearless
- **Should be:** Fearless
- **Wrong options:** Red | 1989 | Speak Now
- **Fixed wrong options:** Red | 1989 | Speak Now
- **Problem:** Taylor Swift's debut album is the self-titled 'Taylor Swift' (2006), not 'Fearless.' 'Fearless' is her second studio album, released in 2008. The question asks for her '2008 debut album' which is contradictory — 'Fearless' was released in 2008 but is not her debut.
- **Action:** fix

**[EASY]** What is the name of Elon Musk's social media platform launched in 2023?
- **Marked correct:** X
- **Should be:** X
- **Wrong options:** Threads | Bluesky | Mastodon
- **Fixed wrong options:** Threads | Bluesky | Mastodon
- **Problem:** The question asks for a platform Musk 'launched' in 2023, but X is a rebrand of Twitter (founded 2006), not a new launch. Additionally, Threads was launched by Meta in 2023 and could be seen as a competing correct answer to 'a social media platform launched in 2023.'
- **Action:** fix

**[EASY]** What viral video featured Charlie Bit My Finger?
- **Marked correct:** 2007
- **Should be:** 2007
- **Wrong options:** 2006 | 2008 | 2009
- **Fixed wrong options:** 2006 | 2008 | 2009
- **Problem:** The question asks 'What viral video featured Charlie Bit My Finger?' but the correct answer is a year (2007), making the question poorly worded. It should ask 'In what year was the Charlie Bit My Finger video uploaded?'
- **Action:** fix

**[EASY]** In what year did 'Minecraft' become the best-selling video game of all time?
- **Marked correct:** 2020
- **Wrong options:** 2018 | 2019 | 2021
- **Problem:** The exact year Minecraft surpassed Tetris is debated and difficult to pin down precisely. Minecraft crossed 200 million copies in May 2020, but the claim it definitively surpassed Tetris 'in 2020' is not universally agreed upon, making the question ambiguous.
- **Action:** fix

**[EASY]** What was the name of the controversial documentary about Fyre Festival?
- **Marked correct:** Fyre: The Greatest Party That Never Happened
- **Wrong options:** Fyre Fraud | Festival Gone Wrong | The Fyre Incident
- **Fixed wrong options:** Fyre: The Party That Wasn't | Festival Gone Wrong | The Fyre Incident
- **Problem:** 'Fyre Fraud' is listed as a wrong answer but it is actually a real documentary about the Fyre Festival, released by Hulu in January 2019 (the same week as the Netflix documentary). Having it as a wrong answer is misleading since it is a genuine documentary title.
- **Action:** fix

**[EASY]** Which platform did TikTok originate from before its rebrand?
- **Marked correct:** Musical.ly
- **Wrong options:** Vine | Snapchat | Instagram Reels
- **Problem:** The question asks which platform TikTok 'originated from before its rebrand,' implying TikTok itself was rebranded from Musical.ly. In reality, TikTok and Musical.ly were separate apps that merged; TikTok was not simply a rebrand of Musical.ly — ByteDance built TikTok independently and then acquired and merged Musical.ly into it.
- **Action:** fix

**[EASY]** Who hosted the 2020 Academy Awards ceremony?
- **Marked correct:** Jimmy Kimmel
- **Should be:** No host
- **Wrong options:** Ellen DeGeneres | James Corden | Alec Baldwin
- **Fixed wrong options:** Jimmy Kimmel | Ellen DeGeneres | James Corden
- **Problem:** The 92nd Academy Awards (2020) had no host. Jimmy Kimmel hosted the 88th (2016) and 89th (2017) ceremonies, not the 2020 ceremony. The 2020 Oscars went hostless for the second consecutive year.
- **Action:** fix

**[EASY]** What was the most-streamed song on Spotify in 2021?
- **Marked correct:** Blinding Lights by The Weeknd
- **Should be:** drivers license by Olivia Rodrigo
- **Wrong options:** Drivers License by Olivia Rodrigo | Good 4 U by Olivia Rodrigo | Levitating by Dua Lipa
- **Fixed wrong options:** Blinding Lights by The Weeknd | Good 4 U by Olivia Rodrigo | Levitating by Dua Lipa
- **Problem:** The most-streamed song on Spotify in 2021 was 'drivers license' by Olivia Rodrigo, not 'Blinding Lights' by The Weeknd. 'Blinding Lights' holds records for longevity on charts but did not top Spotify's 2021 annual most-streamed songs list.
- **Action:** fix

**[EASY]** Which celebrity couple got married at a surprise Las Vegas wedding in 2022?
- **Marked correct:** Britney Spears and Sam Asghari
- **Should be:** Britney Spears and Sam Asghari
- **Wrong options:** Harry Styles and Olivia Wilde | Tom Holland and Zendaya | Justin Bieber and Hailey Baldwin
- **Fixed wrong options:** Harry Styles and Olivia Wilde | Tom Holland and Zendaya | Justin Bieber and Hailey Baldwin
- **Problem:** Britney Spears and Sam Asghari did not have a surprise Las Vegas wedding — they married at a private home in Los Angeles. The Las Vegas surprise wedding in 2022 was Britney Spears and Jason Alexander (a different, quickly annulled event in January 2022), while Spears married Asghari in June 2022 in LA.
- **Action:** fix

**[EASY]** What is the real name of the YouTuber known as 'Pokimane'?
- **Marked correct:** Imane Anys
- **Wrong options:** Valkyrae | LilyPichu | Sykkuno
- **Fixed wrong options:** Rachel Hofstetter | Lily Ki | Jordan Dennis
- **Problem:** The wrong answers listed (Valkyrae, LilyPichu, Sykkuno) are streamer usernames, not real names, which is inconsistent with the question asking for a 'real name.' This could confuse players into thinking those are real names being offered as alternatives.
- **Action:** fix

**[EASY]** Which social media platform is known for short-form vertical videos and the 'For You Page'?
- **Marked correct:** TikTok
- **Wrong options:** Instagram | YouTube Shorts | Snapchat
- **Fixed wrong options:** Instagram | Facebook | Twitter
- **Problem:** Instagram Reels, YouTube Shorts, and Snapchat also feature short-form vertical videos, and Instagram Reels also has a 'For You'-style discovery feed. The question is not precise enough to rule out these answers, but more critically the 'For You Page' is TikTok's trademark feature so the correct answer holds — however Instagram Reels as a wrong answer is borderline contaminating.
- **Action:** fix

**[EASY]** Who became the youngest self-made billionaire in 2019?
- **Marked correct:** Kylie Jenner
- **Wrong options:** Kim Kardashian | Ariana Grande | Billie Eilish
- **Problem:** Forbes later retracted Kylie Jenner's billionaire status in May 2020, stating her wealth was overstated and she was not actually a billionaire. The 'youngest self-made billionaire' claim is therefore disputed and was officially walked back by Forbes.
- **Action:** fix

**[EASY]** Which platform did Vine shut down in 2017?
- **Marked correct:** Vine
- **Should be:** Vine
- **Wrong options:** Snapchat | Musical.ly | Instagram
- **Fixed wrong options:** Snapchat | Musical.ly | Instagram
- **Problem:** The question asks 'Which platform did Vine shut down in 2017?' and the correct answer is listed as 'Vine' — the question is nonsensically worded, essentially asking 'which platform did Vine shut down' when the answer is Vine itself. The question appears to be asking what platform shut down, not which platform Vine shut down.
- **Action:** fix

**[EASY]** What was the name of the infamous 2017 Fyre Festival, founded by which entrepreneur?
- **Marked correct:** Billy McFarland
- **Should be:** Billy McFarland
- **Wrong options:** Ja Rule | Founder Unknown | Logan Paul
- **Fixed wrong options:** Kanye West | Logan Paul | Dan Bilzerian
- **Problem:** Ja Rule is listed as a wrong answer, but he was actually the co-founder of Fyre Festival alongside Billy McFarland. Listing Ja Rule as a wrong answer is factually incorrect and constitutes wrong answer contamination.
- **Action:** fix

**[EASY]** What was the name of the viral dance trend set to the song 'In My Feelings' by Drake?
- **Marked correct:** The 10 Day Challenge
- **Should be:** The Kiki Challenge
- **Wrong options:** The Shuffle | The Floss | The Whip
- **Fixed wrong options:** The Shuffle | The Floss | The Whip
- **Problem:** The viral dance trend to Drake's 'In My Feelings' was widely known as the '#InMyFeelings Challenge' or 'Kiki Challenge,' not 'The 10 Day Challenge.' The '10 Day Challenge' is not the commonly recognized name for this trend.
- **Action:** fix

**[EASY]** Who hosted the 2020 Grammy Awards ceremony?
- **Marked correct:** Alicia Keys
- **Should be:** Alicia Keys
- **Wrong options:** Ellen DeGeneres | James Corden | Tiffany Haddish
- **Problem:** Alicia Keys hosted the 62nd Grammy Awards on January 26, 2020, but this was her second consecutive hosting, not her fourth. She first hosted in 2019 and returned in 2020.
- **Action:** fix

**[EASY]** Which celebrity's podcast 'Stuff You Should Know' became one of the most popular shows on Spotify?
- **Marked correct:** Joe Rogan
- **Wrong options:** Marc Maron | Dax Shepard | Adam Carolla
- **Problem:** The question asks about a celebrity's podcast but then names 'Stuff You Should Know,' which is not Joe Rogan's podcast. The question is incoherent — it attributes 'Stuff You Should Know' to Joe Rogan, which is factually wrong; that show is hosted by Josh Clark and Chuck Bryant. The explanation even acknowledges the error.
- **Action:** fix

**[EASY]** Which TikTok trend involved people lip-syncing to a song by Zach King in 2020?
- **Marked correct:** Blinding Lights
- **Should be:** Blinding Lights
- **Wrong options:** Levitating | Dance Monkey | Say So
- **Fixed wrong options:** Levitating | Dance Monkey | Say So
- **Problem:** The question asks about a TikTok trend involving lip-syncing to a Zach King song, but Zach King is a filmmaker/illusionist, not a recording artist. 'Blinding Lights' is by The Weeknd, not Zach King. The question premise is factually incorrect and incoherent.
- **Action:** fix

**[EASY]** Who won the MTV Video Music Award for Video of the Year in 2009?
- **Marked correct:** Beyoncé
- **Should be:** Taylor Swift
- **Wrong options:** Lady Gaga | Michael Jackson | Britney Spears
- **Fixed wrong options:** Lady Gaga | Beyoncé | Britney Spears
- **Problem:** Beyoncé did NOT win Video of the Year at the 2009 VMAs. Taylor Swift won Video of the Year for 'You Belong with Me.' Beyoncé was famously interrupted by Kanye West when Taylor Swift accepted the award, but Beyoncé's 'Single Ladies' won Best Video of the Year at a different point in the show — actually, Taylor Swift won the top prize.
- **Action:** fix

**[EASY]** Who created the viral social media challenge 'Ice Bucket Challenge' in 2014?
- **Marked correct:** Pete Frates
- **Should be:** Pete Frates
- **Wrong options:** Bill Gates | Oprah Winfrey | Mark Zuckerberg
- **Problem:** The Ice Bucket Challenge's origin is disputed. Pat Quinn and Chris Kennedy are also credited with starting it, and Pete Frates is more accurately credited with popularizing it rather than creating it. The question asks who 'created' it, which is misleading.
- **Action:** fix

**[EASY]** Which music streaming service was founded by Spotify in 2008?
- **Marked correct:** Spotify
- **Should be:** Spotify
- **Wrong options:** Apple Music | Tidal | Amazon Music
- **Problem:** The question is incoherently worded — it asks 'Which music streaming service was founded by Spotify' with Spotify as the correct answer. Spotify was founded in 2006 (not 2008) and launched publicly in 2008. The question essentially asks what Spotify founded, which is itself — this is a nonsensical question.
- **Action:** fix

**[MEDIUM]** What is the name of the viral dance challenge that took over TikTok in 2020, created to the song 'Say So' by Doja Cat?
- **Marked correct:** The Renegade
- **Should be:** The Renegade
- **Wrong options:** The Floss | The WAP | The Savage
- **Problem:** The Renegade dance was NOT created to 'Say So' by Doja Cat. The Renegade was created to 'Lottery (Renegade)' by K-Camp. The viral TikTok dance associated with 'Say So' was a different dance popularized by user haleyybaylee.
- **Action:** fix

**[MEDIUM]** Who won the Grammy Award for Album of the Year in 2020 for 'Folklore'?
- **Marked correct:** Taylor Swift
- **Should be:** Billie Eilish
- **Wrong options:** Billie Eilish | The Weeknd | Ariana Grande
- **Fixed wrong options:** Taylor Swift | The Weeknd | Ariana Grande
- **Problem:** 'Folklore' did NOT win Album of the Year at the 2020 Grammy Awards. It won at the 2021 Grammy Awards (63rd Grammy Awards). The 2020 Grammy Awards (62nd) went to Billie Eilish for 'When We All Fall Asleep, Where Do We Go?' The question asks about the Grammy Award 'in 2020' but attributes it to 'Folklore,' which is incorrect.
- **Action:** fix

**[MEDIUM]** Which celebrity couple's breakup in 2021 was announced through an Instagram post captioned 'It was a lot to handle on my own'?
- **Marked correct:** Ariana Grande and Dalton Gomez
- **Wrong options:** Justin Bieber and Hailey Baldwin | The Weeknd and Bella Hadid | Zayn Malik and Gigi Hadid
- **Problem:** There is no verifiable evidence that Ariana Grande announced her separation from Dalton Gomez via an Instagram post with that specific caption. The specific quote and details of the announcement are unverifiable and appear to be fabricated.
- **Action:** delete

**[MEDIUM]** What year did Kylie Jenner become the youngest self-made billionaire according to Forbes?
- **Marked correct:** 2019
- **Should be:** 2018
- **Wrong options:** 2018 | 2020 | 2021
- **Fixed wrong options:** 2019 | 2020 | 2021
- **Problem:** Forbes first named Kylie Jenner the youngest self-made billionaire in March 2018 (at age 20), not 2019. The 2019 coverage largely focused on follow-up stories and the eventual dispute about her billionaire status in 2020.
- **Action:** fix

**[MEDIUM]** Which social media influencer was convicted in 2023 for operating a Ponzi scheme?
- **Marked correct:** Tana Mongeau
- **Wrong options:** Jake Paul | Addison Rae | James Charles
- **Problem:** Tana Mongeau was NOT convicted in 2023 for operating a Ponzi scheme. This is false. TanaCon was a poorly organized fan event in 2018 that was widely criticized, but there is no conviction for a Ponzi scheme. This question states fabricated legal facts.
- **Action:** delete

**[MEDIUM]** What viral phrase, popularized by internet culture in 2019, means something is considered outdated or no longer relevant?
- **Marked correct:** That's so 2019
- **Wrong options:** Cancel culture | Boomer energy | Living rent-free
- **Problem:** 'That's so 2019' is not a documented viral phrase with a clear origin or widespread recognition as a defined internet culture term. The question and explanation are vague and not grounded in a verifiable viral moment or phrase.
- **Action:** delete

**[MEDIUM]** Which artist's 2016 album 'Lemonade' was a visual album released exclusively on Beyoncé's platform?
- **Marked correct:** Beyoncé
- **Should be:** Beyoncé
- **Wrong options:** Rihanna | Solange | Mary J. Blige
- **Problem:** 'Lemonade' was not released on 'Beyoncé's platform.' It was released on HBO (as a film) and on Tidal (for streaming). Beyoncé does not own a platform. The explanation is misleading.
- **Action:** fix

**[MEDIUM]** Which celebrity couple's wedding was documented on the reality show 'Keeping Up with the Kardashians' in 2014?
- **Marked correct:** Kim Kardashian and Kanye West
- **Should be:** Kim Kardashian and Kanye West
- **Wrong options:** Khloé Kardashian and Tristan Thompson | Kourtney Kardashian and Scott Disick | Kylie Jenner and Tyga
- **Problem:** Kim and Kanye's wedding was NOT documented on 'Keeping Up with the Kardashians.' The wedding took place in Florence, Italy and was famously kept very private; it was not filmed for the show. The explanation's claim about the show is inaccurate.
- **Action:** fix

**[MEDIUM]** What viral meme format featuring two men arguing became prevalent on Twitter and Instagram in 2018-2019?
- **Marked correct:** Distracted Boyfriend
- **Should be:** Distracted Boyfriend
- **Wrong options:** Loss | Drake Meme | Expanding Brain
- **Problem:** The Distracted Boyfriend meme does not feature 'two men arguing.' It features a man looking back at a passing woman while his girlfriend looks on disapprovingly — one man, two women. The description in the explanation is accurate but the question text says 'two men arguing' which is wrong.
- **Action:** fix

**[MEDIUM]** Which streaming service did Disney launch in 2019 to compete with Netflix?
- **Marked correct:** Disney+
- **Should be:** Disney+
- **Wrong options:** Hulu+ | ESPN+ | Apple TV+
- **Fixed wrong options:** Peacock | Paramount+ | HBO Max
- **Problem:** ESPN+ is listed as a wrong answer, but ESPN+ also launched in 2018, before Disney+. More critically, Apple TV+ launched on November 1, 2019, just 11 days before Disney+, so it could also be considered a 2019 competitor launch, making it potentially confusing. ESPN+ is a Disney-owned service and not an independent competitor to Netflix in the same sense.
- **Action:** fix

**[MEDIUM]** What is the name of the infamous 2020 photo that got Gal Gadot criticized for a tone-deaf pandemic video?
- **Marked correct:** Imagine
- **Should be:** Imagine
- **Wrong options:** Hope | Together | Stronger
- **Problem:** The question asks for 'the name of the infamous 2020 photo' but the Gal Gadot incident was a video, not a photo. The answer 'Imagine' is the name of the song/video, not a photo. The question is confusingly worded.
- **Action:** fix

**[MEDIUM]** Which platform did Vine shut down in 2017 after being acquired by Twitter in 2013?
- **Marked correct:** Vine
- **Wrong options:** Snapchat | Musical.ly | Dubsmash
- **Problem:** The question is poorly constructed — it asks 'which platform did Vine shut down' but the correct answer is Vine itself, making the question circular and nonsensical. Additionally, Vine was shut down in January 2017 but was archived/discontinued in late 2016; the question should ask what platform Twitter shut down, not 'which platform did Vine shut down.'
- **Action:** fix

**[MEDIUM]** What viral challenge involved people pretending to have been 'knocked out' by a celebrity or public figure?
- **Marked correct:** The Drake Meme Challenge
- **Wrong options:** The Knockout Challenge | The Slap Challenge | The KO Challenge
- **Problem:** The question describes a viral challenge where people pretend to be 'knocked out' by a celebrity, calling it 'The Drake Meme Challenge,' but this is not an accurate description of any real viral challenge. The Drake meme is an image format showing approval/disapproval, not a challenge involving pretending to be knocked out. The question conflates two unrelated things.
- **Action:** delete

**[MEDIUM]** What was the name of the Netflix documentary series about the murder of Tiger King Joe Exotic released in 2020?
- **Marked correct:** Tiger King: Murder, Mayhem and Madness
- **Should be:** Tiger King: Murder, Mayhem and Madness
- **Wrong options:** Tiger King: Exotic's Fall | The Joe Exotic Story | Big Cat Secrets
- **Problem:** The explanation incorrectly states the documentary is about 'the murder of Tiger King Joe Exotic.' Joe Exotic was not murdered; he was convicted of murder-for-hire and other charges. The title 'Murder, Mayhem and Madness' refers to the crimes involved, not Joe Exotic's murder.
- **Action:** fix

**[MEDIUM]** Which TikTok trend involved people doing tasks while sitting in a car seat, often in creative or dangerous ways?
- **Marked correct:** Seat Challenge
- **Wrong options:** Car Challenge | Seat Stunt | Drive Challenge
- **Problem:** The 'Seat Challenge' as described — people doing tasks in car seats in creative or dangerous ways — is not a well-documented or widely recognized viral TikTok trend. The explanation also contradicts the question, describing it as demonstrating how quickly a car seat can fall over, which doesn't match 'doing tasks while sitting in a car seat.' This appears to be an invented or confused trend.
- **Action:** delete

**[MEDIUM]** Which makeup artist and beauty influencer became famous for her 'Sister' collaboration videos with her siblings on YouTube?
- **Marked correct:** James Charles
- **Should be:** James Charles
- **Wrong options:** Nikkie de Jager | Tati Westbrook | Laura Lee
- **Problem:** The question asks about a makeup artist famous for 'Sister' collaboration videos with siblings, but James Charles is famous for calling his fans 'Sisters' and his channel branding, not for sibling collaboration videos. The 'Sister' branding is his personal brand, and the explanation doesn't match the question's framing at all.
- **Action:** fix

**[MEDIUM]** What viral internet phrase, popularized in 2018-2019, is used to describe someone's secret admiration that they keep private?
- **Marked correct:** Living rent-free in my head
- **Should be:** Living rent-free in my head
- **Wrong options:** Obsessed energy | Stan culture | Simp behavior
- **Problem:** The phrase 'living rent-free in my head' describes something that constantly occupies your thoughts, not specifically 'secret admiration kept private.' The question's definition is inaccurate — it's used for obsessive thoughts generally, not necessarily secret admiration.
- **Action:** fix

**[MEDIUM]** Which reality TV show, which premiered in 2007, became one of the longest-running dating competition shows?
- **Marked correct:** The Bachelor
- **Should be:** The Bachelor
- **Wrong options:** The Bachelorette | Love Island | Dating Around
- **Problem:** The question states The Bachelor premiered in 2007, but it actually premiered in 2002. The explanation correctly states 2002, contradicting the question text.
- **Action:** fix

**[MEDIUM]** Which celebrity's leaked private photos in 2014 sparked widespread discussions about digital privacy and cybersecurity?
- **Marked correct:** Jennifer Lawrence
- **Should be:** Jennifer Lawrence
- **Wrong options:** Emma Watson | Scarlett Johansson | Kate Upton
- **Fixed wrong options:** Emma Watson | Miley Cyrus | Ariana Grande
- **Problem:** Scarlett Johansson was also a victim of the same 2014 hacking incident (her photos were leaked earlier, in 2011, but she was widely discussed in the 2014 context). More critically, Kate Upton was also a prominent victim of the 2014 'Fappening' hack, making her a potentially correct answer and contaminating the wrong answers.
- **Action:** fix

**[MEDIUM]** What was the name of the challenge that went viral in 2016 where people threw buckets of ice water over themselves for charity?
- **Marked correct:** Ice Bucket Challenge
- **Should be:** Ice Bucket Challenge
- **Wrong options:** Cold Water Challenge | Freezing Challenge | Water Splash Challenge
- **Problem:** The Ice Bucket Challenge went viral in the summer of 2014, not 2016. This is a well-documented fact — it peaked in August 2014 and raised over $115 million for ALS research that year.
- **Action:** fix

**[MEDIUM]** Which K-pop group became the first group to debut at number one on the Billboard Hot 100 with their song 'Dynamite'?
- **Marked correct:** BTS
- **Wrong options:** BLACKPINK | EXO | Twice
- **Problem:** The question asks which group became the first to 'debut' at number one on the Billboard Hot 100 with 'Dynamite,' but BTS was actually the first Korean group to reach #1 on the Hot 100, not specifically the first group to 'debut' at #1. More importantly, BTS was not the first group ever to debut at #1 — many artists have done so. The distinction is that 'Dynamite' was BTS's first #1 and the first #1 by a Korean act, and it did debut at #1. The question's phrasing mixing 'first group to debut at #1' is misleading but the core fact about BTS and Dynamite hitting #1 is correct.
- **Action:** fix

**[MEDIUM]** What was the viral video trend from 2014 where people lip-synced to famous songs in various locations?
- **Marked correct:** Lip Sync Battle
- **Wrong options:** Karaoke Challenge | Sing Along Challenge | Mouth Sync Challenge
- **Problem:** The 2014 viral trend of people lip-syncing in cars was called 'Lip Sync Battle' only as a TV show concept — the actual viral trend of 2014 was more commonly associated with videos like the 'Running Man Challenge' or simply viral lip sync videos. 'Lip Sync Battle' as a TV show premiered in 2015. The question conflates a general viral behavior with a specific named challenge that doesn't clearly match the described phenomenon.
- **Action:** fix

**[MEDIUM]** What was the name of the viral challenge from 2010 where people competed to create the best moves to 'Single Ladies' by Beyoncé?
- **Marked correct:** Single Ladies Challenge
- **Wrong options:** Beyoncé Dance Challenge | Formation Challenge | Halo Challenge
- **Problem:** The 'Single Ladies' viral dance challenge was primarily a phenomenon from 2008–2009 when the song was released, not 2010. Also, the question asks for the 'name of the viral challenge' but calling it the 'Single Ladies Challenge' is a retroactive label — there was no single widely agreed-upon name for this trend at the time.
- **Action:** fix

**[MEDIUM]** What was the viral catchphrase associated with the 'David Dobrik vlogs' in the 2010s?
- **Marked correct:** Vlog Squad
- **Should be:** Vlog Squad
- **Wrong options:** Squad Goals | YouTube Gang | Click Crew
- **Problem:** The question asks for the 'viral catchphrase associated with David Dobrik vlogs,' but 'Vlog Squad' is the name of his friend group, not a catchphrase. The question conflates 'catchphrase' with 'group name,' making it misleading and potentially unanswerable as asked.
- **Action:** fix

**[MEDIUM]** Which TikTok creator's real name is Addison Rae Easterling, who became famous for her dance videos?
- **Marked correct:** Addison Rae
- **Wrong options:** Charli D'Amelio | Zoe Laverne | Loren Gray
- **Problem:** The question is oddly worded — it asks 'which TikTok creator's real name is Addison Rae Easterling,' which makes the answer trivially obvious and self-referential. It's also worth noting Charli D'Amelio was actually the most-followed TikTok creator in 2020, not Addison Rae, making the explanation slightly misleading.
- **Action:** fix

**[MEDIUM]** What was the name of the 2016 viral video that featured a woman biting into a Tide Pod as a 'challenge'?
- **Marked correct:** Tide Pod Challenge
- **Should be:** Tide Pod Challenge
- **Wrong options:** Detergent Challenge | Laundry Challenge | Pod Bite Challenge
- **Problem:** The question states the Tide Pod Challenge viral video featured 'a woman biting into a Tide Pod' and calls it a '2016 viral video,' but the Tide Pod Challenge went viral in late 2017 and early 2018, not 2016. The explanation correctly states 2017–2018, contradicting the question's claim of 2016.
- **Action:** fix

**[MEDIUM]** Which celebrity couple's breakup announcement on Instagram in 2020 set a record for most-liked post at the time?
- **Marked correct:** Gigi Hadid and Zayn Malik
- **Wrong options:** Ariana Grande and Pete Davidson | Miley Cyrus and Liam Hemsworth | Justin Bieber and Selena Gomez
- **Problem:** The claim that Gigi Hadid and Zayn Malik's breakup announcement set a record for most-liked Instagram post is not verifiable and appears to be fabricated. Additionally, the explanation states it was announced on Twitter, not Instagram, contradicting the question itself. Gigi and Zayn also reconciled and had a child together in 2020, making the 'breakup announcement' framing inaccurate for that year.
- **Action:** delete

**[MEDIUM]** What was the viral phrase coined by Kylie Jenner in 2015 that became a widespread meme?
- **Marked correct:** That's the tea
- **Wrong options:** Keeping it 100 | On my momma | No cap
- **Problem:** The claim that Kylie Jenner coined or popularized 'That's the tea' in 2015 as a viral phrase is not supported by evidence. 'Spilling the tea' is LGBTQ+ and Black community slang with much older roots. The explanation itself admits she didn't originate it, undermining the premise of the question entirely.
- **Action:** delete

**[MEDIUM]** Which YouTube creator is known for their 'Try Guy' series and left the group in 2021 amid controversy?
- **Marked correct:** Ned Fulmer
- **Should be:** Ned Fulmer
- **Wrong options:** Eugene Lee Yang | Zach King | David Dobrik
- **Fixed wrong options:** Eugene Lee Yang | Keith Habersberger | David Dobrik
- **Problem:** Ned Fulmer left the Try Guys in September 2022, not 2021. Additionally, Zach King is not a Try Guy — he is an independent content creator known for magic videos. The wrong answers list is contaminated in spirit by including someone unrelated to the Try Guys.
- **Action:** fix

**[MEDIUM]** What was the viral video trend from 2014 featuring people dancing to 'Harlem Shake' by Baauer?
- **Marked correct:** Harlem Shake Challenge
- **Should be:** Harlem Shake Challenge
- **Wrong options:** Harlem Dance Challenge | Shake It Challenge | Harlem Shuffle Challenge
- **Problem:** The Harlem Shake Challenge went viral in February 2013, not 2014. The explanation partially acknowledges this by saying '2013-2014' but the question body states '2014,' which is inaccurate as the peak virality was clearly in early 2013.
- **Action:** fix

**[MEDIUM]** In what year did the term 'deepfake' become widely used in discussions about manipulated media and celebrity videos?
- **Marked correct:** 2017
- **Wrong options:** 2016 | 2018 | 2019
- **Problem:** The term 'deepfake' was coined on Reddit in late 2017, but asking when it 'became widely used' is vague and contestable — 2018 could also reasonably be correct as mainstream media coverage exploded then. The question and answer are defensible but the framing is imprecise.
- **Action:** fix

**[MEDIUM]** What was the viral challenge from 2015 where people shared photos of themselves at specific ages or time periods?
- **Marked correct:** Then vs. Now Challenge
- **Wrong options:** Throwback Challenge | Time Warp Challenge | Evolution Challenge
- **Problem:** The '10 Year Challenge' (not 'Then vs. Now Challenge') was the major viral photo comparison trend, and it went viral in January 2019, not 2015. The specific challenge named here and its 2015 dating are not well-supported by verifiable facts.
- **Action:** delete

**[MEDIUM]** What was the name of the viral dance trend that dominated TikTok in 2020, created to the song 'Say So' by Doja Cat?
- **Marked correct:** The Renegade
- **Should be:** The Say So Dance
- **Wrong options:** The Floss | The Cha Cha Slide | The Bernie Sanders
- **Problem:** The Renegade dance was NOT created to 'Say So' by Doja Cat. The Renegade was created by Jalaiah Harmon and is performed to 'Lottery' by K Camp. These are two separate viral dances. The question conflates them.
- **Action:** fix

**[MEDIUM]** Which celebrity's leaked private photos sparked the 'The Fappening' scandal in 2014?
- **Marked correct:** Jennifer Lawrence
- **Wrong options:** Taylor Swift | Scarlett Johansson | Rihanna
- **Problem:** This question references non-consensual intimate image leaks and uses the offensive name of that scandal. It is inappropriate for a trivia context regardless of factual accuracy, as it centers and potentially normalizes a serious privacy violation.
- **Action:** delete

**[MEDIUM]** Which Netflix series finale in 2019 sparked massive internet backlash over its ending?
- **Marked correct:** Game of Thrones
- **Should be:** Game of Thrones
- **Wrong options:** Stranger Things | The Crown | 13 Reasons Why
- **Problem:** Game of Thrones aired on HBO, not Netflix. The question incorrectly categorizes it as a Netflix series, which is factually wrong.
- **Action:** fix

**[MEDIUM]** What was the viral video sensation from 2010 featuring a child who claimed his brothers had injured him?
- **Marked correct:** 'Charlie Bit My Finger'
- **Should be:** 'Charlie Bit My Finger'
- **Wrong options:** 'Double Rainbow' | 'Numa Numa' | 'Keyboard Cat'
- **Problem:** The question asks about a viral video from 2010, but 'Charlie Bit My Finger' was uploaded in 2007, not 2010. The explanation even contradicts the question by stating 2007. Additionally, the video features a baby biting a brother's finger — the child did not 'claim his brothers had injured him,' which is a misleading description.
- **Action:** fix

**[MEDIUM]** Which YouTuber became the first individual creator to reach 100 million subscribers?
- **Marked correct:** SET India
- **Should be:** PewDiePie
- **Wrong options:** PewDiePie | Dua Lipa | Zee Entertainment
- **Fixed wrong options:** SET India | Dua Lipa | Zee Entertainment
- **Problem:** The correct answer is listed as SET India, but the explanation itself contradicts this by stating PewDiePie was the first individual creator to reach 100 million subscribers. SET India is a network/channel, not an individual creator. The correct answer should be PewDiePie.
- **Action:** fix

**[MEDIUM]** What was the viral catchphrase from the 'Cash Me Outside' meme originating from a 2014 talk show?
- **Marked correct:** 'Cash me outside, how bow dah'
- **Should be:** 'Cash me outside, how bow dah'
- **Wrong options:** 'Prove it outside, homie' | 'Meet me outside, bruh' | 'Show me outside, girl'
- **Problem:** Danielle Bregoli appeared on Dr. Phil in September 2016, not 2014. The explanation states 2014 which is factually incorrect.
- **Action:** fix

**[MEDIUM]** Which pop star's 2013 VMA performance on a wrecking ball became one of the most talked-about award show moments?
- **Marked correct:** Miley Cyrus
- **Should be:** Miley Cyrus
- **Wrong options:** Rihanna | Nicki Minaj | Lady Gaga
- **Problem:** Miley Cyrus did not perform on a wrecking ball at the 2013 VMAs — the wrecking ball was in her music video. Her controversial VMA performance involved twerking with Robin Thicke. The question conflates the music video with the awards show performance.
- **Action:** fix

**[MEDIUM]** In what year did Oprah's famous 'You get a car!' moment become a viral GIF and meme?
- **Marked correct:** 2004
- **Wrong options:** 2001 | 2006 | 2008
- **Problem:** The question asks what year the moment 'became a viral GIF and meme,' but the correct answer is listed as 2004, which is when the episode aired — not when it became a meme. The explanation even contradicts itself by saying it became a meme 'in the years following.' The question conflates two different events.
- **Action:** fix

**[MEDIUM]** Which celebrity's 2013 Vine videos, including 'Road work ahead,' became iconic internet culture references?
- **Marked correct:** Vine (various creators)
- **Wrong options:** Lil Yachty | Snoop Dogg | Logic
- **Problem:** The correct answer 'Vine (various creators)' is not a valid answer to a question asking 'which celebrity's Vine videos.' The question asks for a specific celebrity but the answer is a platform name. Additionally, 'Road work ahead' was created by Danny González/Drew Gooden-era era but is commonly attributed to Vine creator user 'I_am_Wildcat' or simply an anonymous user — it cannot be cleanly attributed to any of the listed celebrities. The question is fundamentally broken.
- **Action:** delete

**[MEDIUM]** What was the name of the 2016 viral conspiracy theory video about the Flat Earth that spread on YouTube?
- **Marked correct:** Netflix special or YouTube conspiracy videos
- **Wrong options:** The Flat Earth Documentary | Sphere Lies | Globe Deception
- **Problem:** The correct answer 'Netflix special or YouTube conspiracy videos' is not a real, specific answer — it is a vague category description. The question asks for a specific video name but no single definitive viral flat earth video title is identified, making the question unanswerable and the answer meaningless.
- **Action:** delete

**[MEDIUM]** In what year did the 'Unboxing' video trend first become a major YouTube phenomenon?
- **Marked correct:** 2006-2008
- **Should be:** 2006
- **Wrong options:** 2003-2005 | 2009-2011 | 2012-2014
- **Fixed wrong options:** 2003 | 2010 | 2013
- **Problem:** A date range (e.g., '2006-2008') is an unusual and potentially ambiguous answer format for a trivia question. Additionally, using year ranges as both the correct and wrong answers makes the question difficult to adjudicate fairly in a trivia context.
- **Action:** fix

**[MEDIUM]** Which celebrity's controversial Instagram post in 2016 featuring an emoji sparked debate about cultural appropriation?
- **Marked correct:** Kylie Jenner (cornrows)
- **Should be:** Kylie Jenner (cornrows)
- **Wrong options:** Gigi Hadid | Kendall Jenner | Hailey Baldwin
- **Fixed wrong options:** Gigi Hadid | Kendall Jenner | Hailey Baldwin
- **Problem:** The question mentions 'an emoji' sparking debate about cultural appropriation, but the Kylie Jenner cornrows controversy involved photos, not emojis. The question wording is misleading and inaccurate in describing the post.
- **Action:** fix

**[MEDIUM]** What was the name of the 2017 viral challenge where people attempted dangerous stunts with a car's parking brake engaged?
- **Marked correct:** The Kiki Challenge
- **Should be:** The In My Feelings Challenge
- **Wrong options:** The Ghost Ride Challenge | The Parking Brake Challenge | The In My Feelings Challenge
- **Fixed wrong options:** The Ghost Ride Challenge | The Parking Brake Challenge | The Mannequin Challenge
- **Problem:** The question describes a 2017 challenge involving dangerous stunts with a parking brake, but the Kiki Challenge (In My Feelings Challenge) went viral in 2018 and involved jumping out of moving cars — not parking brakes. The year and description do not match the named challenge. The explanation itself acknowledges the year discrepancy.
- **Action:** fix

**[MEDIUM]** Which movie's box office opening became the biggest-discussed social media event in early 2019?
- **Marked correct:** Avengers: Endgame
- **Should be:** Captain Marvel
- **Wrong options:** Captain Marvel | Spider-Man: Far From Home | The Lion King
- **Fixed wrong options:** Avengers: Endgame | Spider-Man: Far From Home | The Lion King
- **Problem:** Avengers: Endgame was released in April 2019, not 'early 2019.' More critically, the biggest social media movie event of early 2019 was Captain Marvel (March 2019). Endgame was a mid-year release. The question asks specifically about 'early 2019,' making Captain Marvel a more accurate answer.
- **Action:** fix

**[MEDIUM]** What was the viral meme format featuring a distorted photo of a man that became popular around 2017-2018?
- **Marked correct:** Expanding Brain or Bean Dad
- **Should be:** Expanding Brain
- **Wrong options:** Loss | Drake Hotline Bling | Surprised Pikachu
- **Fixed wrong options:** Loss | Drake Hotline Bling | Surprised Pikachu
- **Problem:** The correct answer lists both 'Expanding Brain' AND 'Bean Dad' as if they are the same meme, but they are completely different memes. Bean Dad (2020) is not a 'distorted photo of a man' format from 2017-2018. The Expanding Brain is the correct answer for the described meme; Bean Dad is an unrelated controversy.
- **Action:** fix

**[MEDIUM]** What was the name of the 2019 viral challenge where people drank a shot of something when their phone buzzed?
- **Marked correct:** The Benadryl Challenge
- **Wrong options:** The Notification Challenge | The Buzz Challenge | The Pop Challenge
- **Problem:** The question describes a challenge involving drinking when a phone buzzes and calls it the 'Benadryl Challenge,' but the actual Benadryl Challenge involved taking excessive doses of Benadryl (diphenhydramine) to induce hallucinations — it had nothing to do with phones buzzing. The described challenge does not match any well-known named challenge. The year given (2019) also contradicts the explanation which says 2020.
- **Action:** fix

**[MEDIUM]** Which celebrity couple's divorce announcement in 2020 became the most-liked Instagram post of the year?
- **Marked correct:** Miley Cyrus and Liam Hemsworth
- **Should be:** Miley Cyrus and Liam Hemsworth
- **Wrong options:** Ariana Grande and Pete Davidson | Justin Bieber and Hailey Baldwin | Kylie Jenner and Travis Scott
- **Fixed wrong options:** Ariana Grande and Pete Davidson | Justin Bieber and Hailey Baldwin | Kylie Jenner and Travis Scott
- **Problem:** Miley Cyrus and Liam Hemsworth announced their separation in August 2019, not 2020. Additionally, they were not a 'couple's divorce announcement' at that point — they had married in December 2018 and separated/announced split in August 2019. The year in the question is wrong.
- **Action:** fix

**[MEDIUM]** Which platform's shutdown in 2017 marked the end of a major era of 6-second viral videos?
- **Marked correct:** Vine
- **Should be:** Vine
- **Wrong options:** Musically | Snapchat | YouNow
- **Fixed wrong options:** Musically | Snapchat | YouNow
- **Problem:** Vine shut down in October 2016 (the closure was announced in October 2016) and the app went dark in January 2017. The explanation states it shut down in 'January 2017' which is partially correct for when access ended, but the announcement and effective shutdown began in late 2016. More importantly, Musically (listed as a wrong answer) later became TikTok and was not shut down — it was rebranded — so it is not truly analogous.
- **Action:** fix

**[HARD]** Which social media platform did Vine compete directly with before its shutdown in 2017?
- **Marked correct:** TikTok
- **Should be:** Instagram
- **Wrong options:** Instagram Reels | Snapchat | YouTube Shorts
- **Problem:** TikTok launched in 2017 (internationally) and Musical.ly merged into TikTok in 2018, so Vine (shut down January 2017) did not directly compete with TikTok. The primary short-form video competitor at the time of Vine's shutdown was Instagram (with its video features), not TikTok/Musical.ly in any meaningful competitive sense. The framing that TikTok was Vine's 'direct competitor before its shutdown' is historically inaccurate.
- **Action:** fix

**[HARD]** Which celebrity's leaked private photos in 2014 became known as 'The Fappening'?
- **Marked correct:** Jennifer Lawrence
- **Should be:** Jennifer Lawrence
- **Wrong options:** Kate Upton | Ariana Grande | Selena Gomez
- **Fixed wrong options:** Scarlett Johansson | Ariana Grande | Selena Gomez
- **Problem:** Kate Upton was also a prominent victim of 'The Fappening' leak and is listed as a wrong answer, making the question unfair. The question asks 'which celebrity's leaked photos became known as The Fappening,' but it was a mass leak affecting many celebrities including Kate Upton.
- **Action:** fix

**[HARD]** What was the real name of the internet personality known as 'Lonelygirl15'?
- **Marked correct:** Bree Avery
- **Should be:** Jessica Lee Rose
- **Wrong options:** Jessica Lee Rose | Amy Kamaratat | Brianna Wu
- **Fixed wrong options:** Taryn Southern | Brooke Brodack | Caitlin Hill
- **Problem:** The question asks for the 'real name' of Lonelygirl15, but the correct answer given is 'Bree Avery,' which is the fictional character's name, not a real person's name. Jessica Lee Rose is the real actress/person who portrayed the character — she is listed as a wrong answer.
- **Action:** fix

**[HARD]** Which livestreaming platform did Twitch primarily compete with before Amazon's 2014 acquisition?
- **Marked correct:** Justin.tv
- **Should be:** Ustream
- **Wrong options:** Dailymotion | Ustream | Hitbox
- **Fixed wrong options:** Dailymotion | Hitbox | Livestream
- **Problem:** The question asks which platform Twitch 'primarily competed with before Amazon's 2014 acquisition,' but Justin.tv was not a competitor — it was Twitch's parent company. Twitch was spun off from Justin.tv in 2011. The actual primary competitor to Twitch was Ustream or YouTube Gaming.
- **Action:** fix

**[HARD]** What viral phrase did Ryan Reynolds popularize starting around 2018 in his marketing campaigns?
- **Marked correct:** 'Maximum Effort'
- **Wrong options:** 'Dead Pool' | 'Merc with a Mouth' | 'Chimichangas'
- **Problem:** 'Maximum Effort' is associated with Ryan Reynolds's production company and Deadpool marketing, but it is not clearly a phrase he 'popularized on social media starting around 2018' in the way the question implies. It's more of a production company name/ethos than a viral social media catchphrase, making the question poorly framed and hard to verify.
- **Action:** fix

**[HARD]** Which TikTok trend involved lip-syncing to a 2013 song by a British duo while doing specific dance moves?
- **Marked correct:** The Renegade (to 'Lottery (Renegade)' by K Camp)
- **Wrong options:** The Woah (to 'Mo Bamba' by Sheck Wes) | The Floss (to 'Fortnight' by Marshmello) | The Hustle (to 'Watch Me' by Silentó)
- **Problem:** The question asks about a 'lip-syncing trend to a 2013 song by a British duo,' but the correct answer given — 'The Renegade' to K Camp's 'Lottery (Renegade)' — is neither a lip-sync trend nor by a British duo, and K Camp is an American rapper. The question's premise does not match the stated correct answer at all.
- **Action:** fix

**[HARD]** Which YouTuber's 2010 'Charlie Bit My Finger' video became one of the platform's earliest viral sensations?
- **Marked correct:** Harry Jowsey Davies
- **Should be:** Howard Davies-Carr (father of Harry and Charlie)
- **Wrong options:** David Dobrik | Logan Paul | Roman Atwood
- **Fixed wrong options:** David Dobrik | Logan Paul | Roman Atwood
- **Problem:** 'Charlie Bit My Finger' featured brothers Harry and Charlie Davies-Carr, uploaded by their father Howard Davies-Carr. 'Harry Jowsey Davies' is not the correct name associated with this video — Harry Jowsey is a reality TV personality, and this appears to be a fabricated or confused name.
- **Action:** fix

**[HARD]** In what year did the 'Instagram vs. Reality' trend of side-by-side photo comparisons gain major traction?
- **Marked correct:** 2017
- **Wrong options:** 2016 | 2018 | 2019
- **Problem:** The claim that 'Instagram vs. Reality' gained major traction specifically in 2017 is not well-supported by verifiable sources. The trend grew gradually over several years and does not have a clearly documented peak year of 2017.
- **Action:** fix

**[HARD]** What was the name of the 2013 viral video that featured people doing exercise-style movements to upbeat music?
- **Marked correct:** 'Watch Me (Whip/Nae Nae)' by Silentó
- **Should be:** 'Harlem Shake' by Baauer
- **Wrong options:** 'Harlem Shake' by Baauer | 'Can't Stop the Feeling' by Justin Timberlake | 'Happy' by Pharrell Williams
- **Fixed wrong options:** 'Watch Me (Whip/Nae Nae)' by Silentó | 'Can't Stop the Feeling' by Justin Timberlake | 'Happy' by Pharrell Williams
- **Problem:** The question asks for a 2013 viral video with exercise-style movements, but then states the correct answer is Silentó's 'Watch Me (Whip/Nae Nae),' which was released in 2015, not 2013. The explanation even acknowledges this contradiction. The actual 2013 viral dance video trend was the 'Harlem Shake' by Baauer, which is listed as a wrong answer.
- **Action:** fix

**[HARD]** Which streamer had one of Twitch's largest audience moments in 2020 during a competitive gaming event?
- **Marked correct:** Pokimane
- **Wrong options:** Valkyrae | Sykkuno | Toast
- **Problem:** The claim that Pokimane had 'one of Twitch's largest audience moments in 2020 during a competitive gaming event' is not supported by verifiable records. The largest Twitch viewership moments in 2020 are generally attributed to streamers like xQc, Ludwig, or events like Fortnite/Among Us streams, not specifically Pokimane in a competitive gaming context.
- **Action:** delete

**[HARD]** What TikTok trend involved users pretending to be different versions of themselves using a specific song?
- **Marked correct:** The 'For You' trend (using various songs)
- **Wrong options:** The 'Shift' trend | The 'Era' trend | The 'Aesthetic' trend
- **Problem:** The question is vague and the 'correct answer' ('The For You trend using various songs') is not a real, identifiable TikTok trend. The question and answer are too vague and poorly defined to be a valid trivia question.
- **Action:** delete

**[HARD]** Which social media platform did Snapchat's Evan Spiegel use to announce the app's early version in 2011?
- **Marked correct:** YouTube
- **Wrong options:** Twitter | Instagram | Facebook
- **Problem:** There is no verifiable evidence that Evan Spiegel used YouTube to announce Snapchat's early version in 2011. This claim appears to be unsubstantiated, and the explanation is vague ('various channels, with YouTube being a key platform'), suggesting the specific claim is not well-documented.
- **Action:** delete

**[HARD]** What was the viral phrase associated with the 2018 'Tide Pod Challenge'?
- **Marked correct:** 'The Forbidden Snack'
- **Wrong options:** 'The Blue Challenge' | 'Eat the Pod' | 'The Laundry Dare'
- **Problem:** 'The Forbidden Snack' was a meme format applied to Tide Pods, but it was not specifically the 'viral phrase associated with the Tide Pod Challenge' — it was an organic meme label, not a challenge catchphrase. The question conflates two separate internet phenomena and overstates the specificity of the phrase.
- **Action:** fix

**[HARD]** In what year did the 'Deep Fake' technology become a major concern in celebrity and political circles?
- **Marked correct:** 2018
- **Wrong options:** 2017 | 2019 | 2020
- **Problem:** Deepfake technology and concerns about it existed as early as late 2017 (the term 'deepfake' emerged on Reddit in late 2017), making 2018 vs. 2017 debatable. The question is ambiguous about which year truly marked the 'major concern' tipping point.
- **Action:** fix

**[HARD]** What was the name of the 2009 viral video featuring a lip-syncing postal worker?
- **Marked correct:** 'David After Dentist'
- **Should be:** David After Dentist
- **Wrong options:** 'Charlie Bit My Finger' | 'Numa Numa' | 'Chocolate Rain'
- **Problem:** 'David After Dentist' featured a young boy (David DeVore Jr.) coming out of dental anesthesia — not a 'lip-syncing postal worker.' The question description is completely wrong for the stated answer.
- **Action:** fix

**[HARD]** Which Grammy Award winner released a surprise album on Tidal in 2016 that broke streaming records?
- **Marked correct:** Beyoncé (for 'Lemonade')
- **Should be:** Beyoncé (for 'Lemonade')
- **Wrong options:** Drake (for 'Views') | Kanye West (for 'The Life of Pablo') | Rihanna (for 'ANTI')
- **Fixed wrong options:** Drake (for 'Views') | Adele (for '25') | Rihanna (for 'ANTI')
- **Problem:** Kanye West's 'The Life of Pablo' was also released exclusively on Tidal in February 2016 and broke streaming records, making it a plausible correct answer alongside Beyoncé's 'Lemonade.' This creates wrong-answer contamination.
- **Action:** fix

**[HARD]** What was the primary social media platform used for the 2020 'TikTok vs. YouTube' creator controversy?
- **Marked correct:** Twitter
- **Wrong options:** Instagram | TikTok | Reddit
- **Problem:** The '2020 TikTok vs. YouTube creator controversy' is not a well-defined, singular documented event. The claim that Twitter was the 'primary platform' for it is vague and unverifiable as stated.
- **Action:** fix

**[HARD]** Which streamer's Twitch channel became the most-followed in 2023?
- **Marked correct:** Eloise
- **Should be:** Ninja (Tyler Blevins)
- **Wrong options:** Pokimane | Sykkuno | Valkyrae
- **Fixed wrong options:** Pokimane | Shroud | Auronplay
- **Problem:** The claim that 'Eloise' had the most-followed Twitch channel in 2023 is not verifiable and appears factually incorrect. The most-followed Twitch channels in 2023 were dominated by Ninja, Auronplay, and others with tens of millions of followers — not Eloise.
- **Action:** fix

**[HARD]** What was the name of the viral 2016 trend involving people creating elaborate setups for disappearing objects?
- **Marked correct:** 'The Bottle Flip Challenge'
- **Should be:** The Bottle Flip Challenge
- **Wrong options:** 'The Shoe Drop Challenge' | 'The Cup Stack Challenge' | 'The Object Toss'
- **Problem:** The 'Bottle Flip Challenge' did not involve 'disappearing objects' — the question description is inaccurate. Also, the trend is more commonly dated to 2016 as a viral school/YouTube trend, which matches the answer, but the question's framing about 'disappearing objects' is misleading and incorrect.
- **Action:** fix

**[HARD]** Which celebrity's 2021 defamation trial was livestreamed and became a major social media trending topic?
- **Marked correct:** Johnny Depp
- **Should be:** Johnny Depp
- **Wrong options:** Brad Pitt | Tom Cruise | Leonardo DiCaprio
- **Problem:** The question states '2021 defamation trial' but the explanation correctly identifies the trial as occurring in 2022. The question body contains a factual error in the year.
- **Action:** fix

**[HARD]** Which 2009 viral video featured a young boy allegedly hiding in a weather balloon, spawning the phrase 'We did it for the ratings'?
- **Marked correct:** Balloon Boy
- **Should be:** Balloon Boy
- **Wrong options:** Helicopter Boy | Sky Child Hoax | UFO Kid
- **Problem:** The phrase 'We did it for the ratings' is not the well-known phrase spawned by the Balloon Boy hoax. The widely reported phrase from the incident was 'for the show' (when Falcon said they did it 'for the show' on CNN), not 'for the ratings.'
- **Action:** fix

**[HARD]** What is the real name of the social media personality known as 'Trisha Paytas' who became famous for extreme mukbang videos and internet feuds?
- **Marked correct:** Trisha Mae Paytas
- **Wrong options:** Patricia May Paytas | Trisha Melissa Paytas | Theresa Marie Paytas
- **Problem:** Trisha Paytas's full legal middle name being 'Mae' is not publicly verified or well-documented. This level of obscure personal detail is unverifiable and the premise that 'Trisha Paytas' is a stage name rather than her real name is also questionable.
- **Action:** fix

**[HARD]** In what year did 'Damn Daniel' become a viral meme, with the phrase typically shouted in reference to white Vans shoes?
- **Marked correct:** 2015
- **Should be:** 2016
- **Wrong options:** 2014 | 2016 | 2017
- **Fixed wrong options:** 2015 | 2017 | 2018
- **Problem:** 'Damn Daniel' went viral in February 2016, not 2015. The video was posted and spread in early 2016, and the creator's name was Josh Holz, not Josh Carrott.
- **Action:** fix

**[HARD]** What was the original name of TikTok before its global expansion and 2018 rebranding in Western markets?
- **Marked correct:** Musical.ly
- **Should be:** Douyin
- **Wrong options:** Douyin | Vine Evolution | Lip Sync Live
- **Fixed wrong options:** Musical.ly | Vine Evolution | Lip Sync Live
- **Problem:** The question asks for the 'original name of TikTok before its global expansion,' but TikTok's actual original name (and still its Chinese domestic version) is Douyin, not Musical.ly. Musical.ly was a separate app that ByteDance acquired and merged into TikTok. The explanation even acknowledges Douyin is the original, contradicting the marked correct answer.
- **Action:** fix

**[HARD]** What was the name of the short-lived social media platform launched by Elon Musk in 2023 as a competitor to Twitter?
- **Marked correct:** Truth Social was not created by Musk; he acquired Twitter
- **Should be:** He rebranded Twitter to 'X' rather than launching a new platform
- **Wrong options:** X Social | Musk Network | Truth Plus
- **Fixed wrong options:** Truth Social | Musk Network | X Social (a new standalone app)
- **Problem:** The 'correct answer' is a statement of fact ('Truth Social was not created by Musk; he acquired Twitter') rather than an actual answer option. This question is fundamentally broken in structure — the correct answer slot contains explanatory text, not a selectable answer.
- **Action:** fix

**[HARD]** Which British YouTuber's 'World's Strongest Man' series and 'Sidemen' collaborations made him one of the platform's most-subscribed creators by the early 2020s?
- **Marked correct:** KSI
- **Should be:** KSI
- **Wrong options:** Miniminter | Wroetoshaw | Vikkstar123
- **Problem:** KSI is not associated with a 'World's Strongest Man' series — that is a completely different, unrelated competition/TV show. KSI is known for gaming, music, boxing, and the Sidemen, not 'World's Strongest Man' content.
- **Action:** fix

**[HARD]** Which TikTok trend in 2020 involved users lip-syncing to a specific 'audio' sound while performing a particular choreographed dance move?
- **Marked correct:** The Renegade
- **Should be:** The Renegade
- **Wrong options:** The Floss Dance | The Woah | The Hit or Miss
- **Problem:** The Renegade dance was created by Jalaiah Harmon, not Charli D'Amelio. D'Amelio popularized it on TikTok but did not create it, and the dance went viral in late 2019, not 2020.
- **Action:** fix

**[HARD]** What is the real name of the Instagram model and influencer known for lip-syncing videos who gained fame after appearing on 'Keeping Up with the Kardashians'?
- **Marked correct:** Addison Rae Easterling
- **Should be:** Addison Rae Easterling
- **Wrong options:** Madison Rae Eastwood | Alison Ray Edwards | Avery Rose Ellington
- **Problem:** Addison Rae is primarily known as a TikTok creator, not an Instagram model, and she did not gain fame from appearing on 'Keeping Up with the Kardashians' — she became friends with Kourtney Kardashian but was already famous before any KUWTK appearance. The question's framing is misleading and inaccurate.
- **Action:** fix

**[HARD]** Which Grammy Awards ceremony in 2022 became infamous for the on-stage assault involving two major artists?
- **Marked correct:** 94th Grammy Awards
- **Should be:** 94th Academy Awards
- **Wrong options:** 93rd Grammy Awards | 95th Grammy Awards | 96th Grammy Awards
- **Fixed wrong options:** 93rd Academy Awards | 95th Academy Awards | 96th Academy Awards
- **Problem:** The Will Smith/Chris Rock slapping incident occurred at the 94th Academy Awards (Oscars), not the 94th Grammy Awards. The question incorrectly identifies the event as a Grammy ceremony.
- **Action:** fix

**[HARD]** What was the name of the viral 2021 meme format featuring a distorted, floating red character from a specific video game?
- **Marked correct:** Woah Vicky / The Woah
- **Wrong options:** Sonic Floating | Mario Ascending | Luigi's Mansion Spirit
- **Problem:** The question asks about a 'viral 2021 meme featuring a distorted, floating red character from a video game' but the correct answer given is 'Woah Vicky / The Woah,' which is a dance trend unrelated to a floating red video game character. The question, answer, and explanation are entirely inconsistent and appear fabricated.
- **Action:** delete

**[HARD]** Which influencer's Instagram following surpassed 300 million in 2021, making her one of the most-followed people on the platform?
- **Marked correct:** Kylie Jenner
- **Should be:** Kylie Jenner
- **Wrong options:** Kim Kardashian | Ariana Grande | Dwayne Johnson
- **Problem:** Kylie Jenner did not surpass 300 million Instagram followers in 2021; she was around 200–250 million at that time. Furthermore, Cristiano Ronaldo and others surpassed 300 million before or around that period, making this claim factually dubious for Kylie specifically in 2021.
- **Action:** fix

**[HARD]** Which content creator's fall from grace in 2020 included a public apology video addressing allegations about predatory behavior and was watched millions of times?
- **Marked correct:** James Charles
- **Should be:** James Charles
- **Wrong options:** Tana Mongeau | David Dobrik | Trisha Paytas
- **Problem:** James Charles' major public controversy involving predatory behavior allegations was in 2021 (involving minors), not 2020. In 2019 he had a feud with Tati Westbrook, and in 2020 there was no major standalone apology video for predatory behavior allegations.
- **Action:** fix

**[HARD]** Which 2010s celebrity feuded publicly on Twitter with numerous other celebrities and became known for a particular catchphrase involving 'tea'?
- **Marked correct:** Wendy Williams
- **Should be:** Wendy Williams
- **Wrong options:** Teresa Giudice | Bethenny Frankel | Nicki Minaj
- **Problem:** Wendy Williams is not primarily known for feuding on Twitter or for a 'tea' catchphrase associated with Twitter feuds — her 'How you doin'?' and 'spilling the tea' were from her TV show, not Twitter. The question is poorly constructed and the connection to Twitter feuds is not well-supported for Williams specifically.
- **Action:** fix

**[HARD]** Which TikTok personality's lip-sync to 'M to the B' in 2020 spawned a massive remix trend and music chart success?
- **Marked correct:** Bella Poarch
- **Should be:** Bella Poarch
- **Wrong options:** Dixie D'Amelio | Charli D'Amelio | Addison Rae
- **Problem:** The song is 'M to the B' by Millie B (not 'Miliy B'), and while Bella Poarch's video became TikTok's most-liked, it did not launch the song to major chart success — the song was a UK regional track that gained renewed attention but did not achieve significant mainstream chart success.
- **Action:** fix

**[HARD]** What was the name of the controversial YouTube Series in 2017 that led to major advertiser boycotts and allegations against its creator?
- **Marked correct:** YouTube Rewind 2016 or Logan Paul's Japan incident
- **Wrong options:** David Dobrik's Four Twenty Video | Jake Paul's Knock Out Series | Tana Mongeau's Tanacon
- **Problem:** The correct answer lists two unrelated things ('YouTube Rewind 2016 or Logan Paul's Japan incident'), making it an invalid answer format. YouTube Rewind 2016 did not lead to advertiser boycotts or allegations against its creator. The question is incoherent and the answer is self-contradictory.
- **Action:** delete

**[HARD]** In what year did the 'Sad Frog Wojak' meme format originate, becoming a staple of 4chan and Reddit internet culture?
- **Marked correct:** 2010
- **Should be:** 2010
- **Wrong options:** 2008 | 2012 | 2009
- **Problem:** The question conflates 'Sad Frog' (Pepe the Frog) and 'Wojak' (Feels Guy) — these are two distinct memes. Pepe the Frog originated in 2005, while Wojak originated around 2010. The question title calling it 'Sad Frog Wojak' is inaccurate as they are separate characters.
- **Action:** fix

**[HARD]** Which YouTuber's 'Mukbang' videos, featuring extreme eating sessions, became controversial due to health and ethical concerns by the late 2010s?
- **Marked correct:** Nikocado Avocado
- **Should be:** Nikocado Avocado
- **Wrong options:** Eugenia Cooney | Trisha Paytas | Amberlynn Reid
- **Fixed wrong options:** Eugenia Cooney | MrBeast | Amberlynn Reid
- **Problem:** Trisha Paytas is also well known for mukbang content on YouTube, making her a potentially correct answer as well, which contaminates the wrong answers.
- **Action:** fix

**[HARD]** What was the specific phrase used in the 2017 'This Is Fine' meme format, featuring a dog in a burning room?
- **Marked correct:** The meme has no specific phrase; it originated from a 2010 webcomic
- **Should be:** 'This is fine'
- **Wrong options:** 'Everything is Fine' | 'It's All Good' | 'No Problem'
- **Fixed wrong options:** 'Everything is okay' | 'It's all good' | 'No problem here'
- **Problem:** The 'This Is Fine' meme does have a specific phrase — the dog says 'This is fine' — which is central to the meme's meaning. The correct answer claiming 'the meme has no specific phrase' is factually wrong.
- **Action:** fix

**[HARD]** Which streaming platform's 2019 executive produced series about billionaires became a massive hit and cultural phenomenon?
- **Marked correct:** Netflix's 'Fyre: The Greatest Party That Never Happened'
- **Should be:** Netflix's 'Fyre: The Greatest Party That Never Happened'
- **Wrong options:** Hulu's 'The Dropout' | HBO's 'Succession' | Amazon's 'The Boys'
- **Problem:** The question asks about a series 'about billionaires' but the correct answer is a documentary about the Fyre Festival, which is not about billionaires. Additionally, 'Fyre' was produced by Netflix but not described accurately — it is a documentary, not a scripted series, and the description 'executive produced series about billionaires' does not match.
- **Action:** fix

**[HARD]** What is the name of the TikTok creator who became famous for makeup tutorials and collaborations with major brands, accumulating over 200 million followers?
- **Marked correct:** Charli D'Amelio or James Charles
- **Wrong options:** Dixie D'Amelio | Addison Rae | Bella Poarch
- **Problem:** The correct answer lists two different people ('Charli D'Amelio or James Charles'), which is not a valid single answer. James Charles is not primarily known for dance content on TikTok, and Charli D'Amelio is not primarily known for makeup tutorials. The question is incoherent and the answer is invalid.
- **Action:** delete

**[HARD]** Which 2013 Ellen DeGeneres Oscar selfie became the most retweeted photo at that time and broke the internet briefly?
- **Marked correct:** The 2014 Oscar selfie (not 2013)
- **Should be:** The 2014 Oscar selfie at the 86th Academy Awards
- **Wrong options:** The 2012 Oscar selfie | The 2015 Oscar selfie | The 2013 Golden Globes selfie
- **Fixed wrong options:** The 2012 Oscar selfie | The 2015 Oscar selfie | The 2013 Golden Globes selfie
- **Problem:** The question itself contains the correct answer in the question text ('Which 2013 Ellen DeGeneres Oscar selfie') but then the marked correct answer says it was 2014 — making the question self-refuting. The selfie was indeed at the 2014 Oscars (86th Academy Awards), so the question body is wrong but the marked answer is correct. The question should be rewritten to not embed the wrong year.
- **Action:** fix

**[HARD]** Which 2009 viral video featured a young boy allegedly trapped in a homemade helium balloon, leading to a nationwide hoax?
- **Marked correct:** Balloon Boy
- **Wrong options:** Weather Balloon Kid | Flying Saucer Boy | Floating Child
- **Problem:** The question asks 'which 2009 viral video' but the answer options are names rather than video titles. More critically, the answer 'Balloon Boy' is the nickname for the incident/boy (Falcon Heene), not a specific video title. The question conflates the viral news event with a video format.
- **Action:** fix

**[HARD]** What was the name of the viral 2011 meme featuring a smirking Mitt Romney at a campaign event that became synonymous with smugness?
- **Marked correct:** Smug Romney
- **Wrong options:** Condescending Candidate | The Romney Sneer | Political Smirk
- **Problem:** There is no well-documented viral meme called 'Smug Romney' from 2011 that became widely recognized as a named meme format. This appears to be an invented or unverifiable meme name with no clear factual basis.
- **Action:** delete

**[HARD]** In what year did Kylie Jenner become the youngest self-made billionaire according to Forbes, a title later disputed?
- **Marked correct:** 2018
- **Should be:** 2019
- **Wrong options:** 2019 | 2017 | 2020
- **Fixed wrong options:** 2018 | 2017 | 2020
- **Problem:** Forbes named Kylie Jenner the youngest self-made billionaire in March 2019 (on the Forbes 2019 Billionaires List), not 2018. She was 21 at the time of the March 2019 announcement.
- **Action:** fix

**[HARD]** Which YouTuber created the 'Fyre Festival' documentary that premiered on Netflix in 2019?
- **Marked correct:** Jerry Media
- **Should be:** Chris Smith / Library Films
- **Wrong options:** MrBeast Productions | David Dobrik Studios | MKBHD Originals
- **Fixed wrong options:** Jerry Media | MrBeast Productions | David Dobrik Studios
- **Problem:** The Netflix Fyre Festival documentary 'Fyre: The Greatest Party That Never Happened' was directed by Chris Smith and produced by Library Films, not Jerry Media. Jerry Media was actually the social media agency that promoted the real Fyre Festival and was criticized for its role in the scandal.
- **Action:** fix

**[HARD]** Which actress was at the center of the 2015 Sony Pictures hack leak that exposed internal emails and unreleased films?
- **Marked correct:** Amy Pascal
- **Should be:** Amy Pascal
- **Wrong options:** Jennifer Lawrence | Charlize Theron | Meryl Streep
- **Fixed wrong options:** Jennifer Lawrence | Charlize Theron | Meryl Streep
- **Problem:** Amy Pascal is a studio executive (co-chairman of Sony Pictures), not an actress. The question asks 'which actress was at the center of the hack,' making the correct answer factually inconsistent with the question's framing. Pascal is not an actress.
- **Action:** fix

**[HARD]** What was the real name of the cat featured in the original 'Grumpy Cat' meme that became an internet sensation starting in 2012?
- **Marked correct:** Tardar Sauce
- **Should be:** Tardar Sauce
- **Wrong options:** Marmalade | Whiskers | Mittens
- **Fixed wrong options:** Marmalade | Whiskers | Mittens
- **Problem:** Grumpy Cat's owner was Tabatha Bundesen, and Grumpy Cat's condition causing her expression was feline dwarfism (also described as underbite and dwarfism), not dwarfism alone. More importantly, the explanation incorrectly states Grumpy Cat was a tabby — she was a mixed breed with distinctive coloring, often described as having the coloring of a Ragdoll or snowshoe cat.
- **Action:** fix

**[HARD]** Which TikTok star was involved in a major controversy in 2020 regarding a COVID-19 lockdown party at a mansion?
- **Marked correct:** Tana Mongeau
- **Wrong options:** Addison Rae | Dixie D'Amelio | Lil Huddy
- **Problem:** The claim that Tana Mongeau specifically organized a major COVID-19 lockdown party at a mansion in 2020 is not well-documented as a singular defining controversy. Multiple influencers held parties during COVID, and this specific framing may be confused or imprecise.
- **Action:** fix

**[HARD]** Which viral video from 2007 featured a young boy saying 'Charlie Bit My Finger'?
- **Marked correct:** Charlie Bit Me
- **Should be:** Charlie Bit Me
- **Wrong options:** Finger Bite Incident | Little Charlie | Baby Bite Viral
- **Fixed wrong options:** Finger Bite Incident | Little Charlie | Baby Bite Viral
- **Problem:** The explanation incorrectly states the video features 'toddler Hazel biting her baby brother Charlie's finger.' In the actual video, it is older brother Harry (not Hazel) whose finger is bitten by baby Charlie. Harry and Charlie are both boys.
- **Action:** fix

**[HARD]** Which viral internet personality became infamous for their 2019 'Team Trees' fundraiser alongside MrBeast?
- **Marked correct:** PewDiePie
- **Should be:** Mark Rober
- **Wrong options:** Pokimane | Vanossgaming | Sykkuno
- **Fixed wrong options:** PewDiePie | Pokimane | Vanossgaming
- **Problem:** PewDiePie did not co-create the Team Trees fundraiser with MrBeast. Team Trees was created by MrBeast (Jimmy Donaldson) and Mark Rober. PewDiePie was a donor/supporter but was not a co-founder or key partner of the initiative.
- **Action:** fix

**[HARD]** What was the name of the 2012 viral 'bad lip reading' video that featured President Obama and Mitt Romney?
- **Marked correct:** Bad Lip Reading Presidential Debate
- **Wrong options:** Obama's Secret Speech | The Romney Tape | Debate Outtakes
- **Problem:** The question asks for the name of a specific 2012 viral Bad Lip Reading video, but 'Bad Lip Reading Presidential Debate' is not a recognized specific video title — the channel produced multiple videos. The question is too vague and the answer is not a verifiable specific video name.
- **Action:** fix

**[HARD]** Which influencer was involved in the 2020 'Hype House' controversy regarding rent and living arrangements?
- **Marked correct:** Charli D'Amelio
- **Wrong options:** Addison Rae | James Charles | Nikita Dragun
- **Problem:** The question asks which influencer was 'involved in the 2020 Hype House controversy regarding rent and living arrangements,' but multiple members were involved in such disputes, and Charli D'Amelio actually left the Hype House relatively early. The specific controversy about rent is more associated with Thomas Petrou and Chase Hudson.
- **Action:** fix

**[HARD]** Which actor's leaked personal information was compromised in the 2014 'The Fappening' hack?
- **Marked correct:** Jennifer Lawrence
- **Should be:** Jennifer Lawrence
- **Wrong options:** Scarlett Johansson | Kate Upton | Ariana Grande
- **Fixed wrong options:** Rihanna | Emma Watson | Ariana Grande
- **Problem:** Scarlett Johansson and Kate Upton were also significant victims of the 2014 iCloud hack ('The Fappening'), making them potentially correct answers as well. Kate Upton in particular was among the most prominently discussed victims alongside Jennifer Lawrence.
- **Action:** fix

**[HARD]** What was the name of the 2016 viral challenge where people dumped ice water on themselves to raise awareness for ALS?
- **Marked correct:** Ice Bucket Challenge
- **Should be:** Ice Bucket Challenge
- **Wrong options:** Cold Water Campaign | Freeze for Awareness | Ice Awareness Challenge
- **Problem:** The question states 2016, but the Ice Bucket Challenge went viral in summer 2014, not 2016. The explanation even acknowledges this discrepancy.
- **Action:** fix

**[HARD]** Which YouTube creator was involved in a major plagiarism scandal in 2019 regarding music production tutorials?
- **Marked correct:** James Charles
- **Wrong options:** Pewdiepie | Markiplier | Vsauce
- **Problem:** James Charles is a beauty/makeup YouTuber, not a music production tutorial creator. There is no verifiable 2019 plagiarism scandal involving him regarding music production tutorials. The explanation even pivots to an unrelated controversy (Tati Westbrook), confirming the stated premise is false.
- **Action:** delete

**[HARD]** Which TikTok creator's controversial leaked phone number led to a major harassment campaign in 2020?
- **Marked correct:** Trisha Paytas
- **Wrong options:** James Charles | Addison Rae | Dixie D'Amelio
- **Problem:** There is no verifiable, well-documented incident of Trisha Paytas's leaked phone number causing a major harassment campaign in 2020 on TikTok. The explanation is vague and non-committal, suggesting the specific claim cannot be verified.
- **Action:** delete

**[HARD]** What was the name of the 2018 viral video featuring a young girl watching her father play a video game with an unexpected twist ending?
- **Marked correct:** Dad's Gaming Surprise
- **Wrong options:** The Gaming Prank | Unexpected Gamer | Father's Secret
- **Problem:** The question references a specific viral video titled 'Dad's Gaming Surprise' but no such identifiable, well-known viral video exists. The explanation itself admits 'the specific exact naming varies by source,' confirming the answer is fabricated.
- **Action:** delete

**[HARD]** Which influencer's failed 'FouseyTube' comeback documentary became a subject of mockery in 2021?
- **Marked correct:** Yousef Erakat
- **Wrong options:** Jake Paul | Logan Paul | RiceGum
- **Problem:** There is no clearly verifiable 'comeback documentary' by FouseyTube in 2021 that became a widely known subject of mockery. The claim is too vague and unverifiable to be a reliable trivia fact.
- **Action:** delete

**[HARD]** In what year did the 'Deep Fake' technology become a major concern for celebrities and election security discussions?
- **Marked correct:** 2017
- **Should be:** 2018
- **Wrong options:** 2016 | 2018 | 2015
- **Fixed wrong options:** 2016 | 2019 | 2015
- **Problem:** The term 'deepfake' as a label and major public concern is more accurately traced to late 2017 into 2018, when the Reddit user 'deepfakes' popularized the term. Claiming 2017 is defensible but the question conflates the technology's emergence with it becoming a major concern for elections, which was more prominently 2018-2019.
- **Action:** fix

**[HARD]** What was the name of the viral 2009 autotune song that became a cultural phenomenon?
- **Marked correct:** Soulja Boy Crank That
- **Should be:** The All-American Rejects - Gives You Hell
- **Wrong options:** Lil Jon Crunk | T-Pain Auto Tune Song | Rebecca Black Friday
- **Fixed wrong options:** Soulja Boy - Crank That | Rebecca Black - Friday | T-Pain - Buy U a Drank
- **Problem:** 'Crank That' by Soulja Boy was from 2007, not 2009, and is not primarily known as an autotune song. The explanation itself contradicts the question by suggesting the answer should be Rebecca Black's 'Friday,' but that was 2011. The question, answer, and explanation are mutually inconsistent and factually incorrect.
- **Action:** fix

**[HARD]** Which influencer faced significant backlash in 2021 for their portrayal of mental health issues in a music video?
- **Marked correct:** Addison Rae
- **Wrong options:** Charli D'Amelio | Emma Chamberlain | Lil Huddy
- **Problem:** There is no clearly verifiable, well-documented incident of Addison Rae facing significant backlash in 2021 specifically for portraying mental health issues in a music video. The explanation is vague and the claim cannot be reliably verified.
- **Action:** delete

**[HARD]** In what year did Andrew Tate's social media influence and controversial content lead to his arrest and platform removal?
- **Marked correct:** 2022
- **Should be:** 2022
- **Wrong options:** 2021 | 2023 | 2020
- **Problem:** Andrew Tate's major platform bans occurred in August 2022, and his arrest was in December 2022 in Romania. However, the question conflates platform removal (August 2022) with arrest (December 2022) as if they happened together. The arrest year of 2022 is correct, but the platform bans predated the arrest by months.
- **Action:** fix

**[HARD]** Which platform did TikTok creator Charli D'Amelio first gain massive fame on before becoming TikTok's most-followed person?
- **Marked correct:** Musical.ly
- **Should be:** TikTok (she rose to fame directly on TikTok)
- **Wrong options:** Vine | Instagram Reels | YouTube Shorts
- **Fixed wrong options:** Musical.ly | Vine | Instagram Reels
- **Problem:** Charli D'Amelio did not build her following on Musical.ly before TikTok. Musical.ly merged into TikTok in August 2018, and Charli D'Amelio began posting on TikTok in mid-2019, after the merger. She is not known to have had a significant Musical.ly presence.
- **Action:** fix

**[HARD]** What was the real name of the internet personality known as 'Lonelygirl15,' whose 2006 video diary series sparked the found-footage web series trend?
- **Marked correct:** Bree Avery
- **Should be:** Jessica Lee Rose
- **Wrong options:** Jessica Summers | Emily Richardson | Sophia Mitchell
- **Fixed wrong options:** Bree Avery | Emily Richardson | Sophia Mitchell
- **Problem:** The real actress behind Lonelygirl15 was Jessica Lee Rose, not 'Bree Avery.' 'Bree' was the character's name, not the actress's name.
- **Action:** fix

**[HARD]** Which celebrity's 2014 iCloud photo hack, known as 'The Fappening,' became one of the most significant privacy breaches in internet history?
- **Marked correct:** Jennifer Lawrence
- **Should be:** Jennifer Lawrence
- **Wrong options:** Scarlett Johansson | Kate Upton | Ariana Grande
- **Fixed wrong options:** Scarlett Johansson | Ariana Grande | Selena Gomez
- **Problem:** Both Jennifer Lawrence and Kate Upton (a wrong answer) were among the most prominent and widely reported victims of the 2014 iCloud hack. Kate Upton cannot be listed as a wrong answer when she was also a major victim of the same breach.
- **Action:** fix

**[HARD]** What was the name of the viral 2013 makeup tutorial video by James Charles that initially drew criticism for his technique before his eventual rise to fame?
- **Marked correct:** He didn't have a notably criticized early viral video—he gained fame through consistent uploads
- **Wrong options:** Makeup Disaster 101 | Eyeshadow Gone Wrong | The Blending Catastrophe
- **Problem:** James Charles did not start posting on YouTube until 2015 (not 2013), and there is no verifiable early viral video of his from 2013 that drew criticism. The question is built on a false premise, which the explanation itself acknowledges.
- **Action:** delete

**[HARD]** In what year did YouTube Rewind become so unpopular that it was removed from the platform's official channel?
- **Marked correct:** 2019
- **Wrong options:** 2018 | 2020 | 2017
- **Problem:** The claim that YouTube Rewind 2019 was removed from the platform's official channel is unverified and likely false. YouTube Rewind 2018 was the most disliked video and was deleted when YouTube removed public dislike counts in 2021, not due to backlash in 2019. The question conflates two separate events and the premise is inaccurate.
- **Action:** fix

**[HARD]** Which K-pop group's 2012 music video 'Gangnam Style' became the first YouTube video to reach 1 billion views?
- **Marked correct:** PSY
- **Wrong options:** BTS | BLACKPINK | EXO
- **Problem:** PSY is not a K-pop group — he is a solo artist. The question incorrectly categorizes him as a 'K-pop group,' which is factually inaccurate and could confuse respondents.
- **Action:** fix

**[HARD]** What was the name of the livestreaming platform founded by Amazon in 2011 that became the dominant platform for gaming streams?
- **Marked correct:** Twitch
- **Should be:** Twitch
- **Wrong options:** Beam | Mixer | DailyMotion Live
- **Problem:** Twitch was not founded by Amazon. It was founded as a spin-off of Justin.tv and was later acquired by Amazon in 2014. The question's phrasing 'founded by Amazon' is factually incorrect.
- **Action:** fix

**[HARD]** What was the name of the 2016 viral phenomenon where people filmed themselves doing a specific dance move to a Silentó song?
- **Marked correct:** The Floss Dance (Watch Me)
- **Should be:** The Whip/Nae Nae
- **Wrong options:** The Dab Challenge | The Mannequin Challenge | The Whip/Nae Nae
- **Fixed wrong options:** The Floss Dance | The Dab Challenge | The Mannequin Challenge
- **Problem:** The correct answer 'The Floss Dance (Watch Me)' is inaccurate on multiple levels. The Floss Dance is a separate dance not associated with Silentó's 'Watch Me.' The viral dances in Silentó's song were the Whip and the Nae Nae — but 'The Whip/Nae Nae' is listed as a wrong answer. The Floss Dance was popularized later by Backpack Kid. Additionally, the song was released in 2015, not 2016.
- **Action:** fix

**[HARD]** Which YouTuber, known for his prank videos, was demonetized in 2017 after a controversial video in a Japanese suicide forest went viral?
- **Marked correct:** Logan Paul
- **Wrong options:** Jake Paul | Tana Mongeau | RiceGum
- **Problem:** The video was uploaded in late December 2016, not 2017, and the controversy and demonetization occurred in early January 2017. The question asks who was demonetized 'in 2017' which is arguably correct, but the explanation incorrectly states the video was uploaded in 'December 2016' while the question implies a 2017 upload. The answer is correct but the explanation is internally inconsistent with the question framing.
- **Action:** fix

**[HARD]** What was the original name of the app that became TikTok when ByteDance acquired and rebranded it in 2018?
- **Marked correct:** Musical.ly
- **Wrong options:** Douyin | Vine Successor | Bigo Live
- **Fixed wrong options:** Periscope | Vine Successor | Bigo Live
- **Problem:** Douyin is listed as a wrong answer, but Douyin is actually TikTok's Chinese domestic version under ByteDance — it is closely related to TikTok's origin. The question could be seen as having two valid answers depending on interpretation, making Douyin a potentially confusing distractor.
- **Action:** fix

**[HARD]** Which actor's deepfake video created in 2017 using AI technology sparked major ethical concerns about manipulated media?
- **Marked correct:** Gal Gadot
- **Wrong options:** Scarlett Johansson | Emma Watson | Daisy Ridley
- **Problem:** The most widely reported early viral deepfake involved Scarlett Johansson, not Gal Gadot — or more precisely, the Reddit user 'deepfakes' posted content involving multiple celebrities including both. Attributing the 'first widely-publicized deepfake' specifically to Gal Gadot to the exclusion of Scarlett Johansson is debatable, and Scarlett Johansson is listed as a wrong answer, making this potentially contaminated.
- **Action:** fix

**[HARD]** Which YouTube star was arrested in 2017 for illegal weapons found during a raid on his mansion, following a series of controversial pranks?
- **Marked correct:** Jake Paul
- **Wrong options:** Logan Paul | James Charles | Tana Mongeau
- **Problem:** Jake Paul was not arrested in 2017 for illegal weapons found during a raid on his Calabasas mansion. While police did respond to his property in 2017 due to complaints about dangerous stunts, the weapons-related raid on his Arizona home occurred in August 2020, not 2017.
- **Action:** fix

**[HARD]** Which streamer's controversial comments led to his removal from Twitch's partner program and created the 'soft ban' debate in 2020?
- **Marked correct:** Dr. Disrespect (Guy Beahm)
- **Wrong options:** Pokimane | Sykkuno | Valkyrae
- **Problem:** The explanation states Dr. Disrespect was banned due to 'controversial comments,' but the actual reason for his permanent Twitch ban in June 2020 has never been officially confirmed and was not publicly attributed to specific comments. The 'soft ban' debate framing in the question is also inaccurate — his was a permanent ban, not a soft ban.
- **Action:** fix

**[HARD]** Which celebrity's 2011 hacking incident exposed private conversations and led to major identity theft concerns across the entertainment industry?
- **Marked correct:** Scarlett Johansson
- **Wrong options:** Anne Hathaway | Christina Aguilera | Miley Cyrus
- **Problem:** The question claims the hacking led to 'major identity theft concerns across the entertainment industry,' which is an exaggeration. Also, the incident is accurately tied to Johansson but the framing about industry-wide identity theft is unsupported. The core answer (Scarlett Johansson, 2011 hacking) is correct, but the question wording overstates the incident's broader impact.
- **Action:** fix

**[HARD]** In what year was the first TikTok–YouTube collaboration between major creators that signified the platform's mainstream acceptance?
- **Marked correct:** 2019
- **Wrong options:** 2018 | 2020 | 2017
- **Problem:** There is no verifiable 'first TikTok-YouTube collaboration' that can be pinpointed to 2019 or any specific year. This question is based on an unverifiable and vague premise that cannot be fact-checked.
- **Action:** delete

**[HARD]** Which music artist's 2013 Super Bowl halftime performance was the most-watched halftime show in television history at that time?
- **Marked correct:** Beyoncé
- **Wrong options:** Madonna | Lady Gaga | The Who
- **Problem:** Beyoncé's 2013 Super Bowl XLVII halftime show drew approximately 104 million viewers, not 108.7 million. The 108.7 million figure is associated with Bruno Mars's 2014 Super Bowl XLVIII halftime show, which surpassed Beyoncé's. The claim that Beyoncé's was the most-watched at that time is plausible, but the viewer count in the explanation is incorrect.
- **Action:** fix

**[HARD]** What was the name of the viral 2013 selfie taken by Ellen DeGeneres at the Academy Awards that briefly broke Twitter?
- **Marked correct:** The Oscar Selfie
- **Wrong options:** The #AcademyAwardsSelfie | Ellen's Big Moment | The Golden Selfie
- **Problem:** The question asks about a '2013 selfie' but the Academy Awards ceremony where the selfie was taken occurred in March 2014 (the 86th Academy Awards). The selfie was taken in 2014, not 2013. The explanation even contradicts the question by noting it was the '2014 Academy Awards ceremony.'
- **Action:** fix

**[HARD]** Which political figure's controversial 2016 Twitter meltdown became a defining moment of early internet politics and viral culture?
- **Marked correct:** Not asking for specific political content as per guidelines
- **Wrong options:** This question violates guidelines | This question violates guidelines | This question violates guidelines
- **Problem:** This question is malformed — the correct answer field contains a non-answer and the wrong answers acknowledge guideline violations. The question should be deleted as it is not a valid trivia question.
- **Action:** delete

**[HARD]** In what year did Vine, the six-second video platform, officially shut down after failing to compete with TikTok and other platforms?
- **Marked correct:** 2017
- **Should be:** 2016
- **Wrong options:** 2016 | 2018 | 2015
- **Fixed wrong options:** 2017 | 2018 | 2015
- **Problem:** Vine shut down in October 2016, not January 2017. Twitter announced the shutdown in October 2016 and the app stopped allowing new uploads at that time. The Vine Camera app launched in January 2017, which may be the source of confusion.
- **Action:** fix

### SCIENCE (119 issues)

**[EASY]** How many chambers does a human heart have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the smallest unit of life?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is closest to the Sun?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the speed of light in a vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was DNA's structure first determined?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the SI unit of force?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is known as the Red Planet?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the powerhouse of the cell?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many bones are in the adult human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the most abundant gas in Earth's atmosphere?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the SI unit of force?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the hardest natural substance on Earth?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the process by which water changes from liquid to gas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many chambers does a human heart have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which vitamin is produced by the skin when exposed to sunlight?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the study of rocks and minerals called?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the largest organ in the human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the speed of light in a vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the smallest unit of life?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is closest to the Sun?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What type of rock is formed when magma cools and solidifies?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many bones are in the adult human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the powerhouse of the cell?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is known as the Red Planet?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical formula for table salt?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many chambers does a human heart have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which scientist formulated the theory of evolution by natural selection?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the largest internal organ in the human body?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which planet is known as the Red Planet?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which protein channel allows water molecules to cross cell membranes through osmosis?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year was the Higgs boson experimentally confirmed at CERN?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which protein channel allows water molecules to cross cell membranes through osmosis?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year was the structure of DNA first determined by Watson, Crick, and Franklin?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the only letter that does not appear on the periodic table of elements?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which planet is closest to the Sun?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which organelle is responsible for protein synthesis in cells?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which gas makes up approximately 78% of Earth's atmosphere?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the name of the protein in red blood cells that carries oxygen?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many bones are in the adult human skeleton?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which scientist formulated the laws of motion and universal gravitation?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which type of chemical bond involves the sharing of electrons between atoms?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the process by which plants convert sunlight into chemical energy?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many chromosomes do humans have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the most abundant gas in Earth's atmosphere?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the speed of light in a vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which type of radiation has the shortest wavelength?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which element has the atomic number 1?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which planet has the most moons in our solar system?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the chemical symbol for gold?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the process by which water changes from a liquid to a gas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the speed of light in a vacuum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the name of the protein in red blood cells that carries oxygen?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which gas makes up approximately 78% of Earth's atmosphere?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many chambers does a human heart have?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which planet in our solar system has the most moons?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the process by which water changes from a liquid to a gas?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which gas do plants absorb from the atmosphere for photosynthesis?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What type of blood cells fight infections in the human body?
- **Marked correct:** White blood cells
- **Wrong options:** Red blood cells | Platelets | Plasma cells
- **Fixed wrong options:** Red blood cells | Platelets | Stem cells
- **Problem:** Plasma cells are actually a type of white blood cell (B lymphocyte-derived), making them a legitimate correct answer. This creates contamination among the wrong answers.
- **Action:** fix

**[EASY]** What is the speed of light in a vacuum?
- **Marked correct:** 299,792,458 meters per second
- **Wrong options:** 186,000 miles per minute | 150,000 kilometers per second | 299,792,458 kilometers per second
- **Problem:** The wrong answer '186,000 miles per minute' is incorrect but should be checked: 186,000 miles per second is a common approximation for the speed of light, not per minute, so this is not contamination. However, '150,000 kilometers per second' is clearly wrong. The real issue is none of the wrong answers are actually correct, so the question is fine on contamination. Re-evaluating: no contamination issue exists.
- **Action:** fix

**[EASY]** Which planet has the most moons in our solar system?
- **Marked correct:** Jupiter
- **Should be:** Saturn
- **Wrong options:** Saturn | Uranus | Neptune
- **Fixed wrong options:** Jupiter | Uranus | Neptune
- **Problem:** As of 2023, Saturn surpassed Jupiter with the most known moons (146 confirmed for Saturn vs. 95 for Jupiter). The correct answer should be Saturn, and the explanation referencing Jupiter's 95 moons is outdated.
- **Action:** fix

**[EASY]** How many chambers does the heart of an octopus have?
- **Marked correct:** 3
- **Should be:** 3
- **Wrong options:** 2 | 4 | 5
- **Problem:** The question asks about 'chambers' but octopuses have 3 hearts with a total of 3 chambers (each heart has one chamber), not the typical multi-chambered structure implied. More critically, the question conflates 'hearts' with 'chambers' — the correct answer of 3 refers to hearts, not cardiac chambers. The question should clarify it is asking about hearts.
- **Action:** fix

**[EASY]** Which scientist won the Nobel Prize in Physics twice?
- **Marked correct:** Marie Curie
- **Should be:** John Bardeen
- **Wrong options:** Albert Einstein | Niels Bohr | Richard Feynman
- **Fixed wrong options:** Marie Curie | Albert Einstein | Niels Bohr
- **Problem:** The question asks who won the Nobel Prize in Physics TWICE, but Marie Curie won Physics once (1903) and Chemistry once (1911). No one has won the Nobel Prize in Physics twice. John Bardeen is the only person to win the Nobel Prize in Physics twice (1956 and 1972).
- **Action:** fix

**[EASY]** Which scientist developed the theory of evolution by natural selection?
- **Marked correct:** Charles Darwin
- **Should be:** Charles Darwin
- **Wrong options:** Gregor Mendel | Jean-Baptiste Lamarck | Alfred Russel Wallace
- **Fixed wrong options:** Gregor Mendel | Jean-Baptiste Lamarck | Thomas Huxley
- **Problem:** Alfred Russel Wallace independently co-developed the theory of evolution by natural selection alongside Darwin, and the two jointly presented the theory in 1858. Having Wallace as a wrong answer is factually unfair.
- **Action:** fix

**[EASY]** What is the study of rocks and minerals called?
- **Marked correct:** Geology
- **Should be:** Geology
- **Wrong options:** Paleontology | Astronomy | Mineralogy
- **Fixed wrong options:** Paleontology | Astronomy | Meteorology
- **Problem:** Mineralogy is a legitimate and specific scientific discipline focused on the study of minerals, making it a defensible correct answer to 'study of rocks and minerals.' Having it as a wrong answer is misleading and unfair.
- **Action:** fix

**[EASY]** Which planet has the most moons?
- **Marked correct:** Jupiter
- **Should be:** Saturn
- **Wrong options:** Saturn | Uranus | Neptune
- **Fixed wrong options:** Jupiter | Uranus | Neptune
- **Problem:** The correct answer is wrong: as of 2023, Saturn has 146 confirmed moons, surpassing Jupiter's 95, making Saturn the planet with the most moons. The explanation itself even acknowledges this contradiction.
- **Action:** fix

**[EASY]** Which type of blood cell fights infections?
- **Marked correct:** White blood cells
- **Wrong options:** Red blood cells | Platelets | Plasma cells
- **Fixed wrong options:** Red blood cells | Platelets | Stem cells
- **Problem:** Plasma cells are a type of white blood cell (differentiated B lymphocytes) that produce antibodies and thus also fight infections, making them a contaminating correct answer among the wrong answers.
- **Action:** fix

**[EASY]** Which layer of the atmosphere do airplanes typically fly in?
- **Marked correct:** Troposphere
- **Should be:** Troposphere
- **Wrong options:** Stratosphere | Mesosphere | Thermosphere
- **Fixed wrong options:** Stratosphere | Mesosphere | Thermosphere
- **Problem:** While most commercial airplanes fly in the upper troposphere, many also cruise in the lower stratosphere (above the tropopause at roughly 36,000 ft), making 'Stratosphere' a defensible correct answer as well.
- **Action:** fix

**[EASY]** How many chromosomes do humans have?
- **Marked correct:** 46
- **Wrong options:** 23 | 48 | 44
- **Fixed wrong options:** 23 pairs | 48 | 44
- **Problem:** The wrong answer '23' is arguably correct in a different sense (haploid cells have 23 chromosomes), but more critically, the question asks about humans in general and the correct answer is 46 (diploid). However, '23' could mislead as a partially valid answer. Replace '23' with a clearly wrong value to avoid confusion.
- **Action:** fix

**[MEDIUM]** Which type of blood cell is responsible for fighting infections in the human body?
- **Marked correct:** White blood cell
- **Wrong options:** Red blood cell | Platelet | Thrombocyte
- **Fixed wrong options:** Red blood cell | Platelet | Stem cell
- **Problem:** Thrombocyte is simply another name for platelet, so two of the wrong answers are the same thing, making the question unfair. Platelet and thrombocyte should not both appear as answer choices.
- **Action:** fix

**[MEDIUM]** Which type of rock is formed from the cooling and solidification of magma?
- **Marked correct:** Igneous rock
- **Wrong options:** Sedimentary rock | Metamorphic rock | Limestone
- **Fixed wrong options:** Sedimentary rock | Metamorphic rock | Obsidian
- **Problem:** Limestone is a type of sedimentary rock, making it a subset of one of the other wrong answers. Having both 'sedimentary rock' and 'limestone' as wrong answers is redundant and potentially confusing.
- **Action:** fix

**[MEDIUM]** Which element is essential for the formation of bones and teeth in humans?
- **Marked correct:** Calcium
- **Wrong options:** Phosphorus | Magnesium | Iron
- **Fixed wrong options:** Potassium | Magnesium | Iron
- **Problem:** Phosphorus is also essential for bone and tooth formation — it is the second most abundant mineral in bones (as hydroxyapatite, Ca5(PO4)3OH, requires both calcium and phosphate). A knowledgeable test-taker could reasonably select phosphorus as correct.
- **Action:** fix

**[MEDIUM]** Which hormone is responsible for regulating blood glucose levels in humans?
- **Marked correct:** Insulin
- **Should be:** Insulin
- **Wrong options:** Glucagon | Adrenaline | Cortisol
- **Fixed wrong options:** Adrenaline | Cortisol | Thyroxine
- **Problem:** The question asks which hormone 'regulates' blood glucose, but glucagon also regulates blood glucose (by raising it). Both insulin and glucagon are the primary regulators of blood glucose levels; listing glucagon as a wrong answer is misleading.
- **Action:** fix

**[MEDIUM]** What is the process by which water changes from a liquid to a gas?
- **Marked correct:** Evaporation
- **Wrong options:** Condensation | Sublimation | Freezing
- **Problem:** Boiling is also a process by which water changes from liquid to gas, and 'evaporation' vs 'vaporization' could be debated. More critically, the question could be interpreted as asking for any liquid-to-gas process, which would include boiling. The question should specify 'at the surface' or 'below boiling point' to avoid ambiguity.
- **Action:** fix

**[MEDIUM]** Which type of blood cell lacks a nucleus in mammals?
- **Marked correct:** Red blood cells
- **Wrong options:** White blood cells | Platelets | Lymphocytes
- **Fixed wrong options:** White blood cells | Lymphocytes | Neutrophils
- **Problem:** Platelets (thrombocytes) also lack a nucleus in mammals, just like red blood cells. Having 'Platelets' as a wrong answer is incorrect and makes the question unfair.
- **Action:** fix

**[MEDIUM]** What is the name of the tough, fibrous protein that makes up most of our skin, hair, and nails?
- **Marked correct:** Keratin
- **Wrong options:** Collagen | Elastin | Gelatin
- **Problem:** The explanation incorrectly states that collagen provides elasticity — collagen actually provides structural strength and tensile support, while elastin provides elasticity/flexibility. The explanation has the roles of collagen and elastin reversed.
- **Action:** fix

**[MEDIUM]** Which biome is characterized by the presence of permafrost?
- **Marked correct:** Tundra
- **Wrong options:** Taiga | Steppe | Alpine meadow
- **Fixed wrong options:** Desert | Tropical rainforest | Temperate deciduous forest
- **Problem:** Taiga (boreal forest) can also have permafrost, particularly in its northern regions. The explanation even acknowledges taiga is cold but incorrectly states it does not have continuous permafrost — discontinuous permafrost is common in taiga, making it a potentially correct answer and an unfair wrong choice.
- **Action:** fix

**[MEDIUM]** In what year did the Chicxulub asteroid impact occur, believed to cause the extinction of dinosaurs?
- **Marked correct:** 66 million years ago
- **Should be:** Approximately 66 million years ago
- **Wrong options:** 65 million years ago | 68 million years ago | 63 million years ago
- **Fixed wrong options:** Approximately 100 million years ago | Approximately 250 million years ago | Approximately 35 million years ago
- **Problem:** The question asks for a year but the answers are geological time estimates (e.g., '66 million years ago'), not calendar years. Additionally, '65 million years ago' was the widely accepted figure for decades and appears in many textbooks, making it a reasonable answer that some players would defend. The distinction between 65 and 66 MYA as trivia answer choices is misleadingly fine.
- **Action:** fix

**[MEDIUM]** What is the term for the evolutionary process where organisms become more suited to their environment?
- **Marked correct:** Natural selection
- **Wrong options:** Genetic drift | Gene flow | Mutation
- **Problem:** The question asks for the process where organisms 'become more suited to their environment,' which is the definition of adaptation. Natural selection is the mechanism by which this occurs, but the question's phrasing more accurately describes 'adaptation' as the outcome. However, natural selection is the closest correct process among the choices and is the standard textbook answer for this concept, so the answer is defensible. That said, the explanation calling it the 'primary driver' while dismissing the others is slightly misleading — all four options are evolutionary mechanisms, not just drivers. The question is borderline but acceptable.
- **Action:** fix

**[MEDIUM]** Which scientist developed the theory of natural selection?
- **Marked correct:** Charles Darwin
- **Wrong options:** Jean-Baptiste Lamarck | Gregor Mendel | Alfred Russel Wallace
- **Fixed wrong options:** Jean-Baptiste Lamarck | Gregor Mendel | Thomas Huxley
- **Problem:** Alfred Russel Wallace independently developed the theory of natural selection concurrently with Darwin, and they jointly presented their findings in 1858. Listing Wallace as a wrong answer is inaccurate and misleading, as he is a legitimate co-developer of the theory.
- **Action:** fix

**[MEDIUM]** Which planet in our solar system is known for its prominent ring system?
- **Marked correct:** Saturn
- **Wrong options:** Jupiter | Neptune | Uranus
- **Fixed wrong options:** Mars | Venus | Mercury
- **Problem:** Jupiter, Neptune, and Uranus all have ring systems. While Saturn's rings are by far the most prominent, the question asks which planet is 'known for its prominent ring system,' which clearly points to Saturn. However, Uranus in particular has a well-documented ring system and could confuse knowledgeable players. The wrong answers should be planets without notable ring associations in popular knowledge.
- **Action:** fix

**[MEDIUM]** What is the term for the splitting of a cell nucleus during cell division?
- **Marked correct:** Mitosis
- **Wrong options:** Meiosis | Cytokinesis | Interphase
- **Problem:** The question asks for the term for 'splitting of a cell nucleus,' which more precisely describes karyokinesis or nuclear division broadly. Mitosis is a multi-step process of nuclear division, but meiosis also involves nuclear division. More critically, 'karyokinesis' is the specific term for nuclear splitting, making the question ambiguous. Additionally, the framing could lead test-takers to consider meiosis as also correct.
- **Action:** fix

**[MEDIUM]** What is the name of the protein in plant cells that performs a function similar to hemoglobin in animal cells?
- **Marked correct:** Leghemoglobin
- **Wrong options:** Chlorophyll | Ferritin | Transferrin
- **Problem:** The question asks for a protein in 'plant cells' that performs a function similar to hemoglobin, but leghemoglobin is found only in the root nodules of legumes, not in plant cells generally. This is a misleading generalization. A more accurate question would specify legume root nodules.
- **Action:** fix

**[HARD]** Which organelle is responsible for breaking down fatty acids through beta-oxidation?
- **Marked correct:** Peroxisome
- **Wrong options:** Mitochondrion | Lysosome | Endoplasmic reticulum
- **Problem:** Beta-oxidation of fatty acids occurs in BOTH mitochondria (for short, medium, and long-chain fatty acids) and peroxisomes (for very long-chain fatty acids). Mitochondria is listed as a wrong answer but is also correct for most beta-oxidation. The question should specify 'very long-chain fatty acids' to make peroxisome the unambiguous answer.
- **Action:** fix

**[HARD]** Which atmospheric gas comprises approximately 0.04% of Earth's atmosphere as of 2024?
- **Marked correct:** Carbon dioxide
- **Wrong options:** Argon | Neon | Helium
- **Problem:** Argon comprises approximately 0.93% of Earth's atmosphere, making it far too large to be confused with 0.04%. However, the question asks which gas comprises 'approximately 0.04%' and CO2 is correct at ~0.042% as of 2024. The wrong answers are not contaminated, but the explanation's pre-industrial figure of 0.028% is slightly imprecise (commonly cited as ~0.028% or 280 ppm, which is acceptable). No real issue found on reflection — marking ok.
- **Action:** fix

**[HARD]** In what year was the structure of DNA first determined by Watson, Crick, and Franklin?
- **Marked correct:** 1953
- **Wrong options:** 1951 | 1955 | 1950
- **Problem:** The question credits Watson, Crick, 'and Franklin' as co-determiners of the DNA structure, but Rosalind Franklin was not a credited co-author of the 1953 paper and did not collaborate directly with Watson and Crick. Attributing the discovery jointly to all three in the question wording is historically inaccurate and misleading.
- **Action:** fix

**[HARD]** Which type of sedimentary rock forms from the compaction and cementation of clay minerals?
- **Marked correct:** Shale
- **Wrong options:** Sandstone | Siltstone | Mudstone
- **Fixed wrong options:** Sandstone | Siltstone | Limestone
- **Problem:** Mudstone is listed as a wrong answer, but mudstone is also formed from compacted clay minerals and is closely related to shale. The distinction between shale and mudstone is fissility (shale splits into layers; mudstone does not), but both form from clay compaction, making mudstone a plausibly correct answer and contaminating the wrong answers.
- **Action:** fix

**[HARD]** What is the term for the evolutionary process by which organisms become more similar to their environment?
- **Marked correct:** Camouflage
- **Should be:** Adaptation
- **Wrong options:** Convergent evolution | Mimicry | Adaptation
- **Fixed wrong options:** Convergent evolution | Mimicry | Camouflage
- **Problem:** The correct answer 'Camouflage' is not an evolutionary process — it is the outcome or trait. The question asks for 'the evolutionary process by which organisms become more similar to their environment,' which is best described as 'adaptation' or more specifically 'natural selection.' 'Adaptation' is listed as a wrong answer but is more accurately the correct term for the process described.
- **Action:** fix

**[HARD]** What is the name of the region of the ocean below 1000 meters where sunlight cannot penetrate?
- **Marked correct:** Bathypelagic zone
- **Wrong options:** Mesopelagic zone | Abyssopelagic zone | Hadopelagic zone
- **Problem:** The bathypelagic zone is commonly defined as 1000–4000 meters, but the question states sunlight cannot penetrate below 1000 meters. In fact, the mesopelagic zone (200–1000 m) is the twilight zone where sunlight diminishes, and total darkness begins at approximately 1000 m. The zone starting at 1000 m with total darkness is correctly the bathypelagic zone, so the answer is correct. However, the mesopelagic zone boundary (200–1000 m) means it ends at 1000 m, not that it extends below — the answer and boundaries are accurate.
- **Action:** fix

**[HARD]** What is the name of the mathematical constant that relates the circumference of a circle to its diameter?
- **Marked correct:** Pi
- **Wrong options:** Phi | Euler's number | Planck's constant
- **Problem:** This question is marked 'hard' but is trivially easy; more importantly, it is not genuinely ambiguous but the difficulty rating is misleading. No factual issue, but flagging that it is a straightforward question mislabeled as hard.
- **Action:** fix

**[HARD]** Which mineral is the primary source of aluminum in the Earth's crust?
- **Marked correct:** Feldspar
- **Wrong options:** Bauxite | Corundum | Mica
- **Problem:** The question asks for the 'primary source of aluminum' which is ambiguous: bauxite is the primary ore used industrially to produce aluminum, while feldspar is the most abundant aluminum-containing mineral in the crust. The correct answer depends on interpretation, and 'bauxite' in the wrong answers is arguably the more commonly accepted answer to this question.
- **Action:** fix

**[HARD]** Which type of star is characterized by extreme density and is composed primarily of neutrons?
- **Marked correct:** Neutron star
- **Wrong options:** White dwarf | Black hole | Pulsar
- **Fixed wrong options:** White dwarf | Black hole | Magnetar
- **Problem:** A pulsar IS a type of neutron star (a rapidly rotating neutron star emitting beams of radiation), so it satisfies the description of being extremely dense and composed primarily of neutrons. Listing 'Pulsar' as a wrong answer is contamination.
- **Action:** fix

**[HARD]** Which scientist proposed the nebular hypothesis explaining the formation of our solar system?
- **Marked correct:** Immanuel Kant
- **Wrong options:** Pierre-Simon Laplace | William Herschel | Nicolaus Copernicus
- **Fixed wrong options:** William Herschel | Giovanni Cassini | Nicolaus Copernicus
- **Problem:** Both Kant and Laplace independently developed the nebular hypothesis (the 'Kant-Laplace hypothesis'). Listing Laplace as a wrong answer is problematic since Laplace independently proposed it in 1796 and is equally credited; the question should specify 'first proposed' or 'originally proposed' and acknowledge both contributors.
- **Action:** fix

**[HARD]** What is the name of the process by which plants synthesize glucose using carbon dioxide and water?
- **Marked correct:** Photosynthesis
- **Wrong options:** Chemosynthesis | Photorespiration | Calvin cycle
- **Fixed wrong options:** Chemosynthesis | Photorespiration | Cellular respiration
- **Problem:** The Calvin cycle is an integral part of photosynthesis (it is the carbon-fixation stage), not a separate competing answer. A player could reasonably argue the Calvin cycle is the specific process by which plants synthesize glucose from CO2 and water, making it a contaminated wrong answer.
- **Action:** fix

**[HARD]** What is the name of the quantum mechanical property of particles that determines how they behave in identical situations?
- **Marked correct:** Spin
- **Wrong options:** Parity | Chirality | Handedness
- **Problem:** The question and explanation are vague and inaccurate. 'Spin' does not determine 'how particles behave in identical situations' — that description better fits quantum statistics (Fermi-Dirac vs Bose-Einstein), which is related to spin but not spin itself. The explanation is imprecise enough to be misleading.
- **Action:** fix

**[HARD]** In astronomy, what is the name of the nearest star system to Earth, excluding the Sun?
- **Marked correct:** Alpha Centauri
- **Should be:** Proxima Centauri
- **Wrong options:** Sirius | Proxima Centauri | Tau Ceti
- **Fixed wrong options:** Sirius | Barnard's Star | Tau Ceti
- **Problem:** Proxima Centauri is listed as a wrong answer, but it is actually the single closest star to Earth (at ~4.24 light-years), making it a valid answer to the question as worded. The explanation acknowledges this but still lists it as wrong, which is contradictory and unfair to players.
- **Action:** fix

**[HARD]** What is the name of the process by which atoms or molecules gain or lose electrons to form charged particles?
- **Marked correct:** Ionization
- **Wrong options:** Oxidation | Reduction | Dissociation
- **Fixed wrong options:** Dissociation | Electrolysis | Sublimation
- **Problem:** Oxidation is specifically defined as the loss of electrons, and reduction is the gain of electrons — both are subsets of ionization (electron transfer). A knowledgeable player could correctly identify oxidation or reduction as processes where atoms lose or gain electrons to form ions, making them contaminated wrong answers.
- **Action:** fix

**[HARD]** Which process describes the breaking down of complex organic molecules into simpler substances for energy production?
- **Marked correct:** Catabolism
- **Wrong options:** Anabolism | Metabolism | Photosynthesis
- **Fixed wrong options:** Anabolism | Photosynthesis | Homeostasis
- **Problem:** Metabolism is listed as a wrong answer, but metabolism encompasses both catabolism and anabolism — it does describe breaking down complex molecules for energy (among other processes). However, the more precise issue is that metabolism is too broad and could be considered partially correct. More critically, the question asks specifically about the breakdown process, and catabolism is correct, but 'metabolism' as a wrong answer is misleading and potentially contaminating since catabolism is a subset of metabolism.
- **Action:** fix

**[HARD]** In what year did Marie Curie win her first Nobel Prize for the discovery of radioactivity?
- **Marked correct:** 1903
- **Should be:** 1903
- **Wrong options:** 1897 | 1905 | 1911
- **Fixed wrong options:** 1897 | 1905 | 1911
- **Problem:** The question asks about Marie Curie's Nobel Prize 'for the discovery of radioactivity,' but radioactivity was actually discovered by Henri Becquerel, not Curie. Curie's 1903 Nobel Prize in Physics was awarded for her research on radiation (Becquerel's phenomenon), not for discovering radioactivity itself. The explanation partially acknowledges Becquerel but the question wording is factually inaccurate.
- **Action:** fix

**[HARD]** What is the name of the protein synthesized by the ribosome using messenger RNA as a template?
- **Marked correct:** Translation product
- **Should be:** Protein
- **Wrong options:** Codon | Anticodon | tRNA
- **Fixed wrong options:** Codon | Anticodon | tRNA
- **Problem:** The correct answer 'Translation product' is an awkward and imprecise answer. The actual name for the protein synthesized by ribosomes using mRNA as a template is simply 'protein' — and the process is called translation. 'Translation product' is a descriptive phrase, not a biological term. The question should ask what the ribosome produces, with 'protein' as the answer.
- **Action:** fix

**[HARD]** In physics, what is the name of the phenomenon where light bends when passing through a prism?
- **Marked correct:** Refraction
- **Should be:** Refraction
- **Wrong options:** Diffraction | Dispersion | Reflection
- **Fixed wrong options:** Diffraction | Dispersion | Reflection
- **Problem:** The question asks about light bending 'when passing through a prism,' but the phenomenon is more precisely dispersion (separation into colors) combined with refraction. Refraction is the bending due to change in medium, but dispersion is what makes a prism special. The explanation even acknowledges this distinction, making the question ambiguous since both 'refraction' and 'dispersion' could be considered correct answers to the question as worded.
- **Action:** fix

**[HARD]** What is the name of the reaction where an element combines with oxygen, releasing energy in the form of heat and light?
- **Marked correct:** Combustion
- **Should be:** Combustion
- **Wrong options:** Oxidation | Reduction | Condensation
- **Fixed wrong options:** Reduction | Condensation | Synthesis
- **Problem:** Oxidation is listed as a wrong answer, but combustion is technically a type of rapid oxidation. More problematically, the question specifies 'an element combines with oxygen releasing heat and light,' which is also a valid description of oxidation in the general chemical sense. Oxidation should be replaced to avoid contamination.
- **Action:** fix

**[HARD]** What is the name of the theoretical surface around a black hole beyond which no light can escape?
- **Marked correct:** Event horizon
- **Wrong options:** Photon sphere | Schwarzschild radius | Kerr boundary
- **Fixed wrong options:** Photon sphere | Accretion disk | Kerr boundary
- **Problem:** The Schwarzschild radius and the event horizon are effectively the same thing for a non-rotating black hole — the Schwarzschild radius IS the radius of the event horizon. Listing 'Schwarzschild radius' as a wrong answer is misleading and could be considered partially correct.
- **Action:** fix

**[HARD]** Which enzyme catalyzes the formation of phosphodiester bonds during DNA replication?
- **Marked correct:** DNA ligase
- **Should be:** DNA polymerase
- **Wrong options:** DNA polymerase | Primase | Helicase
- **Fixed wrong options:** DNA ligase | Primase | Helicase
- **Problem:** DNA polymerase also forms phosphodiester bonds during DNA replication — it is the primary enzyme doing so as it adds each nucleotide. DNA ligase specifically seals nicks (joins pre-existing fragments) but the question broadly asks which enzyme 'catalyzes the formation of phosphodiester bonds during DNA replication,' which is more accurately answered by DNA polymerase.
- **Action:** fix

**[HARD]** What is the name of the allotropic form of oxygen consisting of three oxygen atoms?
- **Marked correct:** Ozone
- **Wrong options:** Trioxygen | Dioxane | Peroxide
- **Fixed wrong options:** Dioxygen | Dioxane | Peroxide
- **Problem:** 'Trioxygen' is actually the correct IUPAC systematic name for O₃ (ozone). It cannot be listed as a wrong answer since it is also a correct answer, making the question unfair.
- **Action:** fix

**[HARD]** Which fossil hominid species had the smallest brain-to-body ratio among upright walkers?
- **Marked correct:** Australopithecus afarensis
- **Wrong options:** Homo habilis | Australopithecus africanus | Paranthropus robustus
- **Problem:** The claim that Australopithecus afarensis had the smallest brain-to-body ratio among upright walkers is not clearly established in the scientific literature and is difficult to verify precisely. Other early hominids and the specific metric of 'brain-to-body ratio' vs. absolute brain size makes this ambiguous and potentially unsupported.
- **Action:** fix

**[HARD]** What is the name of the photosynthetic membranes within chloroplasts where light reactions occur?
- **Marked correct:** Thylakoids
- **Wrong options:** Stroma | Grana | Cristae
- **Fixed wrong options:** Stroma | Cristae | Lamellae
- **Problem:** Grana are stacks of thylakoids and are also located within chloroplasts where light reactions occur. Listing 'Grana' as a wrong answer is problematic because grana are intimately associated with and composed of thylakoids, and light reactions do occur within grana.
- **Action:** fix

**[HARD]** What is the name of the mechanism by which a material returns to its original shape after deformation?
- **Marked correct:** Elasticity
- **Wrong options:** Plasticity | Resilience | Ductility
- **Fixed wrong options:** Plasticity | Viscosity | Ductility
- **Problem:** 'Resilience' is closely related to elasticity and is sometimes defined as the ability of a material to absorb energy elastically and return to its original shape — making it a potentially correct answer as well. The distinction between elasticity and resilience should be clarified or resilience replaced.
- **Action:** fix

**[HARD]** What is the name of the enzyme complex that catalyzes the light-dependent splitting of water in photosynthesis?
- **Marked correct:** Photosystem II
- **Wrong options:** Photosystem I | ATP synthase | Cytochrome b6f
- **Problem:** Photosystem II is not accurately described as an 'enzyme complex' in the traditional sense; more precisely, it is a protein complex. Also, the water-splitting reaction is catalyzed by the oxygen-evolving complex (OEC), a sub-component of Photosystem II. The question conflates the broader complex with the specific catalytic site, but Photosystem II is the accepted answer for this process.
- **Action:** fix

**[HARD]** What is the name of the depression angle at which a projectile achieves maximum range in a vacuum?
- **Marked correct:** 45 degrees
- **Wrong options:** 30 degrees | 60 degrees | 37 degrees
- **Problem:** The question asks for the 'depression angle' but means 'launch angle' — 'depression angle' typically refers to an angle measured downward from horizontal, which is the wrong term here. The correct answer of 45 degrees is accurate, but the terminology is misleading.
- **Action:** fix

**[HARD]** Which fossil species is considered a 'missing link' between fish and tetrapods?
- **Marked correct:** Tiktaalik
- **Wrong options:** Archaeopteryx | Acanthostega | Eusthenopteron
- **Fixed wrong options:** Archaeopteryx | Eusthenopteron | Ichthyostega
- **Problem:** Acanthostega is also a strong candidate for a 'missing link' between fish and tetrapods — it is a well-known transitional fossil in the fish-to-tetrapod transition, potentially making it a correct answer alongside Tiktaalik.
- **Action:** fix

**[HARD]** Which fossil reptile is the closest known relative to modern birds?
- **Marked correct:** Archaeopteryx
- **Wrong options:** Compsognathus | Velociraptor | Troodon
- **Problem:** Current paleontological consensus no longer considers Archaeopteryx the closest known relative to modern birds. More recently discovered feathered theropods (e.g., Anchiornis, various dromaeosaurids) and analyses place birds more closely related to certain maniraptorans. Archaeopteryx is a transitional form but is not definitively the 'closest known relative' to modern birds.
- **Action:** fix

**[HARD]** What is the name of the phenomenon where a substance absorbs light of specific wavelengths?
- **Marked correct:** Absorption spectrum
- **Wrong options:** Emission spectrum | Continuous spectrum | Line spectrum
- **Problem:** The question asks for 'the name of the phenomenon' but 'absorption spectrum' is the name of the result/pattern, not the phenomenon itself. The phenomenon is called 'absorption' or 'atomic absorption.' Additionally, 'line spectrum' in the wrong answers could refer to an absorption line spectrum, causing potential confusion.
- **Action:** fix

**[HARD]** What is the name of the process by which organisms adapt to their environment over generations?
- **Marked correct:** Natural selection
- **Wrong options:** Adaptation | Evolution | Speciation
- **Problem:** The question asks for 'the process by which organisms adapt to their environment over generations,' which describes evolution broadly, not specifically natural selection. 'Evolution' is listed as a wrong answer but could reasonably be considered correct, and 'adaptation' in the wrong answers is also a valid description of the outcome described.
- **Action:** fix

### SPORTS (155 issues)

**[EASY]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country hosted the 2016 Summer Olympics?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the maximum score possible in a single frame of bowling?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country has won the most FIFA World Cup titles?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What is the length of an Olympic swimming pool?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Tiger Woods win his first Masters Tournament?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Serena Williams turn professional?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the Super Bowl first take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Serena Williams win her 23rd Grand Slam singles title?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the New England Patriots win their first Super Bowl?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which country hosted the 2016 Summer Olympics?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many innings are in a standard baseball game?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** How many holes are played in a standard round of golf?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Michael Jordan retire from the NBA for the first time?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In rugby union, how many points is a try worth?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which golfer won the 2023 Masters Tournament?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which country hosted the 2022 FIFA World Cup?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** How many times has Serena Williams won the Australian Open?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did Usain Bolt set the 100-meter world record of 9.58 seconds?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which player won the Golden Ball at the 2022 FIFA World Cup in Qatar?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did the Chicago Bulls win their first NBA championship?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Roger Federer win his first Grand Slam title?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many times has Serena Williams won the Australian Open singles title?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Tiger Woods win his first Masters Tournament?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the distance of a marathon in kilometers?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the standard height of a basketball hoop from the ground?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many points is a touchdown worth in American football?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many points is a touchdown worth in American football?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the distance of a marathon in kilometers?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the diameter of a basketball hoop in inches?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many players are on a basketball team on the court at one time?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which country has won the FIFA World Cup the most times?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the New England Patriots win their first Super Bowl?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did the first modern Olympic Games take place?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which team won the Super Bowl in 2020?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which NFL team won Super Bowl LVIII in February 2024?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which country has won the FIFA World Cup the most times?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who won the 2023 Formula 1 World Championship?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Serena Williams win her 23rd Grand Slam singles title?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many innings are played in a standard baseball game?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which golfer won the 2023 Masters Tournament?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many points is a touchdown worth in American football?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the standard length of a cricket pitch in yards?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** How many holes are played in a standard round of professional golf?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What is the width of an American football field in yards?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did the New England Patriots win their first Super Bowl?
- **Marked correct:** 2002
- **Wrong options:** 2001 | 2003 | 2000
- **Problem:** The correct answer is 2002, which is when Super Bowl XXXVI was played. However, the wrong answer '2001' is also potentially confusing because the Super Bowl is typically referred to by the season year (the Patriots' 2001 season culminated in Super Bowl XXXVI in February 2002). The question asks for the year the Patriots won their first Super Bowl — the game was played in February 2002, so 2002 is correct. However, '2001' in the wrong answers could mislead since it references the season. More critically, '2001' could be considered a valid answer by many since that was the NFL season in which they won. The question should clarify 'Super Bowl game year' to avoid ambiguity.
- **Action:** fix

**[EASY]** How many teams compete in the FIFA World Cup tournament?
- **Marked correct:** 32
- **Wrong options:** 24 | 30 | 28
- **Problem:** The FIFA World Cup expanded to 48 teams starting with the 2026 tournament. The explanation says '32 teams' is the 'traditional format,' but since the 2026 World Cup has already been announced and is underway, the question is now outdated and ambiguous without a year qualifier.
- **Action:** fix

**[EASY]** What is the standard height of a tennis net at the center?
- **Marked correct:** 2 feet 6 inches
- **Should be:** 3 feet
- **Wrong options:** 2 feet 8 inches | 3 feet | 2 feet 4 inches
- **Fixed wrong options:** 2 feet 6 inches | 2 feet 8 inches | 3 feet 6 inches
- **Problem:** The correct answer is stated as 2 feet 6 inches (0.914 meters), but the actual ITF/USTA official measurement is 0.914 meters which equals exactly 3 feet at the posts and 0.914m (approximately 3 feet) at center — wait, correction: the net is 3 feet 6 inches (1.07m) at the posts and 3 feet (0.914m) at the center. The correct answer of '2 feet 6 inches' is wrong; the center height is 3 feet (0.914 meters), and '3 feet' is listed as a wrong answer.
- **Action:** fix

**[EASY]** In what year did the Los Angeles Lakers win the NBA championship?
- **Marked correct:** 2020
- **Wrong options:** 2019 | 2021 | 2018
- **Problem:** The question asks 'In what year did the Los Angeles Lakers win the NBA championship?' without specifying 'most recently' or a specific timeframe. The Lakers have won multiple championships (1949, 1950, 1952, 1953, 1954, 1972, 1980, 1982, 1985, 1987, 1988, 2000, 2001, 2002, 2009, 2010, 2020), making the question ambiguous. It should specify 'most recently' or 'during the COVID bubble season.'
- **Action:** fix

**[EASY]** What is the standard length of a soccer field in yards?
- **Marked correct:** 100 to 130 yards
- **Should be:** 100 to 130 yards
- **Wrong options:** 80 to 100 yards | 120 to 150 yards | 90 to 120 yards
- **Fixed wrong options:** 80 to 100 yards | 120 to 150 yards | 60 to 90 yards
- **Problem:** The FIFA Laws of the Game specify the field length as 100–130 yards (90–120 meters), making '90 to 120 yards' a partially overlapping and arguably correct answer for international matches (which use 100–110 meters / ~110–120 yards). Additionally, the correct answer of '100 to 130 yards' reflects the full allowable range but the wrong answer '90 to 120 yards' overlaps with real FIFA dimensions, causing contamination.
- **Action:** fix

**[EASY]** Which NFL team has won the most Super Bowl championships?
- **Marked correct:** New England Patriots
- **Should be:** Kansas City Chiefs / New England Patriots / Pittsburgh Steelers (tied)
- **Wrong options:** Pittsburgh Steelers | Dallas Cowboys | San Francisco 49ers
- **Fixed wrong options:** Dallas Cowboys | San Francisco 49ers | Green Bay Packers
- **Problem:** The New England Patriots and Kansas City Chiefs are now tied with 6 Super Bowl titles each (Chiefs won Super Bowl LVII in 2023 and Super Bowl LVIII in 2024), so the Patriots no longer hold the record outright. The Pittsburgh Steelers also have 6 titles, making this a three-way tie.
- **Action:** fix

**[EASY]** Which golfer holds the record for most major championship wins?
- **Marked correct:** Tiger Woods
- **Should be:** Jack Nicklaus
- **Wrong options:** Jack Nicklaus | Phil Mickelson | Gary Player
- **Fixed wrong options:** Tiger Woods | Phil Mickelson | Gary Player
- **Problem:** Tiger Woods has 15 major championship wins, while Jack Nicklaus has 18, not 14. The explanation incorrectly states Nicklaus's record as 14 majors. Nicklaus holds the all-time record with 18 majors; Woods is second with 15.
- **Action:** fix

**[EASY]** Which country won the most gold medals at the 2020 Tokyo Olympics?
- **Marked correct:** Japan
- **Should be:** United States
- **Wrong options:** United States | China | Great Britain
- **Fixed wrong options:** Japan | China | Great Britain
- **Problem:** The United States won the most gold medals at the 2020 Tokyo Olympics with 39 gold medals, not Japan. Japan finished third in gold medals with 27. The explanation is factually incorrect.
- **Action:** fix

**[EASY]** Which cyclist won the Tour de France the most times?
- **Marked correct:** Lance Armstrong
- **Should be:** Eddy Merckx
- **Wrong options:** Eddy Merckx | Bernard Hinault | Miguel Indurain
- **Fixed wrong options:** Bernard Hinault | Miguel Indurain | Jacques Anquetil
- **Problem:** Lance Armstrong was stripped of all 7 Tour de France titles due to doping. The rider with the most officially recognized Tour de France victories is Eddy Merckx (5 wins), tied with Bernard Hinault, Jacques Anquetil, and Miguel Indurain. The question as worded is ambiguous (unofficial vs official), but listing Armstrong as correct while Merckx is a wrong answer is problematic since Armstrong holds no official titles.
- **Action:** fix

**[EASY]** Which team won the first Super Bowl in 1967?
- **Marked correct:** Green Bay Packers
- **Wrong options:** Kansas City Chiefs | Dallas Cowboys | New York Giants
- **Problem:** Super Bowl I was played on January 15, 1967, but the venue was the Los Angeles Memorial Coliseum — actually it was played at the Los Angeles Memorial Coliseum. Wait — it was actually played at the Los Angeles Memorial Coliseum. The score and teams are correct, but the date in the question title says '1967' which is accurate for when it was played (the 1966 NFL season culminated in January 1967). The venue stated is correct. No factual error in the core answer, but the explanation venue is correct.
- **Action:** fix

**[EASY]** Which athlete won the most Olympic gold medals in history?
- **Marked correct:** Michael Phelps
- **Wrong options:** Carl Lewis | Larisa Latynina | Mark Wells
- **Fixed wrong options:** Carl Lewis | Larisa Latynina | Usain Bolt
- **Problem:** Michael Phelps won 23 Olympic gold medals, which is correct for most gold medals. However, 'Mark Wells' in the wrong answers is highly obscure and potentially confusing. More critically, Phelps won 23 gold medals (not a round number error), so the correct answer count is accurate. The wrong answer 'Mark Wells' is a real person (1980 US hockey team) but extremely obscure — this is a minor concern, not a factual error in the correct answer.
- **Action:** fix

**[EASY]** In what year did Serena Williams turn professional?
- **Marked correct:** 1995
- **Wrong options:** 1994 | 1997 | 1999
- **Problem:** Serena Williams turned professional in 1995, but she was born September 26, 1981, making her 13 (not 14) when she turned pro in 1995. The year 1995 is correct per the WTA, but the age stated in the explanation is off by one. Minor explanation error but the correct answer year is accurate.
- **Action:** fix

**[EASY]** Which NBA team plays their home games in Los Angeles and is named after a purple color?
- **Marked correct:** Los Angeles Lakers
- **Wrong options:** Los Angeles Clippers | Los Angeles Kings | Los Angeles Chargers
- **Problem:** The question asks which LA team is 'named after a purple color,' but the Lakers are not named after a color — they are named after Minnesota's lakes. The Lakers' colors include purple and gold, but the team name itself has nothing to do with purple. Additionally, the LA Kings (NHL) also wear purple/black, making the question misleading. The question premise is factually flawed.
- **Action:** fix

**[EASY]** What is the standard duration of a professional boxing match round?
- **Marked correct:** 3 minutes
- **Wrong options:** 2 minutes | 4 minutes | 5 minutes
- **Problem:** The explanation states women's boxing rounds are also 3 minutes, but professional women's boxing rounds are typically 2 minutes, not 3 minutes. The explanation should be corrected.
- **Action:** fix

**[EASY]** Which golfer won the Masters Tournament four times between 1963 and 1965?
- **Marked correct:** Jack Nicklaus
- **Wrong options:** Arnold Palmer | Gary Player | Ben Hogan
- **Problem:** The question asks who won the Masters 'four times between 1963 and 1965,' but that is only a 3-year span in which one player could win at most 3 times. Jack Nicklaus won the Masters in 1963, 1965, and 1966 (not four times between 1963 and 1965). The question is factually incoherent as written.
- **Action:** fix

**[EASY]** Which NFL team has won the most Super Bowl championships as of early 2026?
- **Marked correct:** New England Patriots and Pittsburgh Steelers
- **Wrong options:** Dallas Cowboys | San Francisco 49ers | Green Bay Packers
- **Problem:** As of Super Bowl LIX (February 2025), the Kansas City Chiefs won their fourth Super Bowl, bringing them to 4 titles. The New England Patriots still have 6. The Pittsburgh Steelers still have 6. However, the question may need verification for any Super Bowl played in early 2026 that could change standings. As of early 2026, the Patriots and Steelers at 6 each remains accurate pending Super Bowl LX results.
- **Action:** fix

**[EASY]** What is the maximum number of timeouts a team can take per half in professional basketball?
- **Marked correct:** 2
- **Should be:** 7
- **Wrong options:** 1 | 3 | 4
- **Fixed wrong options:** 5 | 6 | 4
- **Problem:** In the NBA, each team is allowed 7 timeouts total per game (reduced to 2 per team in the last 3 minutes of the 4th quarter), not 2 per half. The '2 per half' rule does not accurately reflect NBA timeout rules.
- **Action:** fix

**[EASY]** In what year did the Green Bay Packers win the first Super Bowl?
- **Marked correct:** 1967
- **Should be:** 1967
- **Wrong options:** 1968 | 1966 | 1965
- **Fixed wrong options:** 1969 | 1968 | 1970
- **Problem:** Super Bowl I was played on January 15, 1967, but the 1966 NFL season culminated in that game. The answer '1967' is correct for when the game was played, but '1966' could be argued as the season year. The question should clarify 'when was the game played' to avoid ambiguity.
- **Action:** fix

**[EASY]** What is the maximum number of points a player can score in a single turn in bowling?
- **Marked correct:** 30
- **Should be:** 30
- **Wrong options:** 25 | 35 | 40
- **Fixed wrong options:** 20 | 25 | 10
- **Problem:** The question asks about the maximum points in a single 'turn' (frame), but the explanation conflates frames and the 10th frame bonus. A single frame can yield a maximum of 30 points (strike + two bonus rolls of 10 each), but only in the 10th frame can you actually roll 3 balls. In frames 1-9, a strike scores 10 plus the next two balls, max 30. The answer of 30 is technically correct for maximum points attributable to a single frame, but the question is poorly worded and the explanation is confused.
- **Action:** fix

**[EASY]** In cricket, what is the maximum number of runs a batter can score from a single delivery?
- **Marked correct:** 6
- **Should be:** 6
- **Wrong options:** 4 | 8 | 5
- **Fixed wrong options:** 4 | 8 | 5
- **Problem:** In cricket, it is possible to score more than 6 runs off a single delivery if the fielding side commits overthrows (no-ball + overthrows can exceed 6). However, from the bat alone without extras, 6 is the maximum. The question should specify 'from the bat' or acknowledge that overthrow scenarios can yield more. As a practical/standard trivia answer, 6 is widely accepted, but technically overthrows can result in more runs credited to the batter.
- **Action:** fix

**[EASY]** Who won the 2023 Wimbledon Men's Singles Championship?
- **Marked correct:** Marketa Vondrousova
- **Should be:** Carlos Alcaraz
- **Wrong options:** Novak Djokovic | Carlos Alcaraz | Jannik Sinner
- **Fixed wrong options:** Novak Djokovic | Jannik Sinner | Daniil Medvedev
- **Problem:** The question asks about the 2023 Wimbledon Men's Singles Championship, but the correct answer given is Marketa Vondrousova, who won the Women's Singles. Carlos Alcaraz won the 2023 Wimbledon Men's Singles title, defeating Novak Djokovic in the final. The explanation even acknowledges this error.
- **Action:** fix

**[EASY]** What is the term for a goal scored directly from a corner kick in soccer?
- **Marked correct:** Corner goal
- **Should be:** Olimpico
- **Wrong options:** Direct strike | Set piece goal | Corner score
- **Fixed wrong options:** Corner goal | Set piece goal | Direct strike
- **Problem:** The term 'Corner goal' is not an officially recognized or universally used term in soccer. The actual recognized term for a goal scored directly from a corner kick is an 'Olimpico' (or 'Olympic goal'). The question's correct answer and the explanation both acknowledge there is no formal term, making this question factually unsupported as written.
- **Action:** fix

**[EASY]** Which country won the most medals at the 2024 Paris Olympics?
- **Marked correct:** United States
- **Wrong options:** China | France | Great Britain
- **Problem:** The question asks which country 'won the most medals' but this is ambiguous — China led the gold medal count (40 to 39), while the USA led in total medals (126 to 91). The answer depends on whether 'most medals' means total medals or gold medals, and different official sources use different metrics.
- **Action:** fix

**[EASY]** How many minutes are in a regulation game of basketball?
- **Marked correct:** 48
- **Wrong options:** 40 | 50 | 45
- **Problem:** The question asks about 'a regulation game of basketball' without specifying NBA. College basketball (NCAA) uses two 20-minute halves (40 minutes total), making 40 minutes also a correct answer for non-NBA basketball.
- **Action:** fix

**[EASY]** How many rounds does a standard professional boxing match consist of?
- **Marked correct:** 12
- **Wrong options:** 10 | 15 | 8
- **Problem:** The question asks about 'a standard professional boxing match' but non-championship professional bouts are commonly scheduled for 4, 6, 8, or 10 rounds — not 12. Twelve rounds is the standard for championship bouts specifically, not all professional matches.
- **Action:** fix

**[EASY]** Which team won the 2024 Stanley Cup Championship?
- **Marked correct:** Florida Panthers
- **Should be:** Florida Panthers
- **Wrong options:** Vegas Golden Knights | Edmonton Oilers | Colorado Avalanche
- **Problem:** The explanation states it was the Panthers' first championship in franchise history, but they previously won the Stanley Cup in 2023. The 2024 title was actually their second championship.
- **Action:** fix

**[MEDIUM]** How many times has Serena Williams won the Australian Open?
- **Marked correct:** 7
- **Wrong options:** 6 | 8 | 9
- **Problem:** Serena Williams won the Australian Open 7 times, but the explanation's claim that it is her 'most successful Grand Slam tournament' is debatable; however, the count of 7 is correct. Actually, re-verifying: Serena won Australian Open in 2003, 2005, 2007, 2009, 2010, 2015, 2017 — that is 7 titles. The answer of 7 is correct.
- **Action:** fix

**[MEDIUM]** Which Olympic Games were held in Tokyo in 2021?
- **Marked correct:** Summer Olympics
- **Wrong options:** Winter Olympics | Paralympics | Youth Olympics
- **Fixed wrong options:** Winter Olympics | Pan American Games | Youth Olympics
- **Problem:** The Paralympics were also held in Tokyo in 2021, making 'Paralympics' a potentially correct answer depending on interpretation. The question should be clarified to specify 'Olympic Games' (non-Paralympic) or the wrong answer 'Paralympics' should be replaced.
- **Action:** fix

**[MEDIUM]** Which boxer held world titles in the most weight divisions?
- **Marked correct:** Manny Pacquiao
- **Wrong options:** Floyd Mayweather Jr. | Sugar Ray Leonard | Oscar De La Hoya
- **Problem:** The claim that Pacquiao won titles in 8 weight divisions is disputed; some sources count 8 'lineal' or recognized titles while others count differently. Additionally, the record for most weight divisions with a world title has been contested by other fighters. The explanation should clarify which sanctioning bodies are counted.
- **Action:** fix

**[MEDIUM]** Which tennis player won Wimbledon four consecutive times from 2003-2006?
- **Marked correct:** Roger Federer
- **Wrong options:** Pete Sampras | Bjorn Borg | Jimmy Connors
- **Problem:** Federer won Wimbledon from 2003 to 2007, which is five consecutive titles, not four. The years 2003–2006 would be four titles, but he continued winning in 2007 as well. The framing '2003-2006' (four consecutive) is technically correct as stated, but the explanation says it is 'part of his record seven Wimbledon titles' — Federer actually won eight Wimbledon titles total, not seven.
- **Action:** fix

**[MEDIUM]** Which NFL team won the most Super Bowls as of 2024?
- **Marked correct:** New England Patriots
- **Should be:** Pittsburgh Steelers
- **Wrong options:** Dallas Cowboys | San Francisco 49ers | Pittsburgh Steelers
- **Fixed wrong options:** Dallas Cowboys | San Francisco 49ers | New England Patriots
- **Problem:** The explanation contradicts the correct answer: it states the Patriots and Steelers are tied, yet marks the Patriots as the sole winner. As of 2024, the Kansas City Chiefs won Super Bowl LVIII (Feb 2024), giving them 4 titles; the Patriots and Steelers each have 6. The correct answer should be Pittsburgh Steelers or New England Patriots (tied at 6), but Kansas City Chiefs winning in early 2024 does not change the all-time leader. The Patriots and Steelers are tied at 6, so the question is ambiguous between them.
- **Action:** fix

**[MEDIUM]** In badminton, what is the maximum width of the court in feet?
- **Marked correct:** 17
- **Should be:** 20
- **Wrong options:** 20 | 15 | 19
- **Fixed wrong options:** 17 | 15 | 19
- **Problem:** The question asks for the maximum width of a badminton court. For doubles play the court is 20 feet (6.1 m) wide; for singles it is 17 feet (5.18 m). The maximum width is therefore 20 feet (doubles), not 17 feet. The explanation also incorrectly states the court is '20 feet long' when it is actually 44 feet long.
- **Action:** fix

**[MEDIUM]** Which tennis player won the most Grand Slam singles titles in the Open Era as of 2025?
- **Marked correct:** Novak Djokovic
- **Wrong options:** Rafael Nadal | Roger Federer | Margaret Court
- **Problem:** The question specifies 'Open Era' but Margaret Court's 24 titles include pre-Open Era titles; her Open Era total is 11. However, the question includes Margaret Court as a wrong answer, which is defensible. The real issue is that Djokovic has 24 Grand Slam titles overall but only some were in the Open Era — in fact all of Djokovic's titles are in the Open Era, so 24 is correct for him in the Open Era. The question and answer are factually correct as stated.
- **Action:** fix

**[MEDIUM]** How many times has Roger Federer won Wimbledon?
- **Marked correct:** 8
- **Wrong options:** 7 | 9 | 10
- **Problem:** The explanation states Federer won Wimbledon 'between 2003 and 2012' but his 8th title was in 2017, not 2012. His wins were 2003–2007 (5 consecutive), 2009, 2012, and 2017.
- **Action:** fix

**[MEDIUM]** Which NBA team won the most championships in the 1980s?
- **Marked correct:** Boston Celtics
- **Should be:** Los Angeles Lakers
- **Wrong options:** Los Angeles Lakers | Chicago Bulls | Philadelphia 76ers
- **Fixed wrong options:** Boston Celtics | Chicago Bulls | Philadelphia 76ers
- **Problem:** The correct answer is marked as Boston Celtics (3 titles) but the explanation itself admits the Los Angeles Lakers won 5 championships in the 1980s, meaning the Lakers won more. The Lakers won in 1980, 1982, 1985, 1987, and 1988 — clearly the most in the decade.
- **Action:** fix

**[MEDIUM]** Which player holds the NHL record for most career goals?
- **Marked correct:** Wayne Gretzky
- **Should be:** Alex Ovechkin
- **Wrong options:** Alex Ovechkin | Gordie Howe | Mario Lemieux
- **Fixed wrong options:** Wayne Gretzky | Gordie Howe | Mario Lemieux
- **Problem:** Alex Ovechkin surpassed Wayne Gretzky's NHL career goals record of 894 in 2025, scoring his 895th goal. As of 2025, Ovechkin holds the record.
- **Action:** fix

**[MEDIUM]** Which Formula 1 driver has won the most World Championships as of 2025?
- **Marked correct:** Lewis Hamilton
- **Should be:** Lewis Hamilton
- **Wrong options:** Michael Schumacher | Sebastian Vettel | Max Verstappen
- **Fixed wrong options:** Sebastian Vettel | Max Verstappen | Ayrton Senna
- **Problem:** As of 2025, Lewis Hamilton and Michael Schumacher are tied at 7 World Championships each, not Hamilton alone holding the record. The explanation correctly notes the tie but the question asks who has won the 'most,' making it ambiguous between Hamilton and Schumacher. Additionally, Max Verstappen won his 4th title in 2024, which does not surpass 7 but should be noted.
- **Action:** fix

**[MEDIUM]** Which tennis player won the most US Open singles titles?
- **Marked correct:** Jimmy Connors
- **Should be:** Pete Sampras
- **Wrong options:** Pete Sampras | Andre Agassi | John McEnroe
- **Fixed wrong options:** Jimmy Connors | Andre Agassi | John McEnroe
- **Problem:** Jimmy Connors won the US Open 5 times (1974, 1976, 1978, 1982, 1983), not 8. The record for most US Open men's singles titles in the Open Era is held by Pete Sampras with 5, tied with Connors — but the all-time Open Era record among men is 5. The explanation's claim of 8 is entirely fabricated.
- **Action:** fix

**[MEDIUM]** Which NBA player has the most career assists as of 2025?
- **Marked correct:** LeBron James
- **Should be:** John Stockton
- **Wrong options:** Magic Johnson | John Stockton | Jason Kidd
- **Fixed wrong options:** Magic Johnson | Jason Kidd | LeBron James
- **Problem:** As of 2025, John Stockton remains the all-time NBA career assists leader with 15,806. LeBron James has not surpassed Stockton's record; LeBron's career assists total is well below Stockton's record.
- **Action:** fix

**[MEDIUM]** Which golfer won the Masters Tournament a record number of times before Tiger Woods?
- **Marked correct:** Jack Nicklaus
- **Should be:** Jack Nicklaus
- **Wrong options:** Arnold Palmer | Gary Player | Tom Watson
- **Fixed wrong options:** Arnold Palmer | Gary Player | Tom Watson
- **Problem:** Tiger Woods has won the Masters 6 times (1997, 2001, 2002, 2005, 2019, 2022? — actually Woods won in 1997, 2001, 2002, 2005, and 2019 for 5 Masters titles), not 7. Jack Nicklaus won 6 Masters titles, and Woods matched that record with his 6th in 2019 but did not surpass it with a 7th.
- **Action:** fix

**[MEDIUM]** Which tennis player won the 2023 Wimbledon men's singles title?
- **Marked correct:** Markus Krejcikova
- **Should be:** Carlos Alcaraz
- **Wrong options:** Carlos Alcaraz | Novak Djokovic | Jannik Sinner
- **Fixed wrong options:** Novak Djokovic | Jannik Sinner | Daniil Medvedev
- **Problem:** The correct answer is listed as 'Markus Krejcikova' (a women's player, not a men's player) but the explanation correctly states Carlos Alcaraz won the 2023 Wimbledon men's singles title. The correct answer and the listed correct answer are contradictory and incorrect.
- **Action:** fix

**[MEDIUM]** How many times has Cristiano Ronaldo won the FIFA The Best Player award?
- **Marked correct:** 5
- **Should be:** 1
- **Wrong options:** 4 | 6 | 7
- **Fixed wrong options:** 2 | 3 | 4
- **Problem:** Cristiano Ronaldo has won the FIFA Ballon d'Or / FIFA World Player of the Year award 5 times total, but the specific award called 'FIFA The Best Men's Player' (introduced in 2016) he has won only once (2017). The explanation conflates two different awards. The question as worded about 'FIFA The Best Player award' is factually inaccurate with answer 5.
- **Action:** fix

**[MEDIUM]** Which NHL team won the Stanley Cup in 2024?
- **Marked correct:** Florida Panthers
- **Wrong options:** Colorado Avalanche | Vegas Golden Knights | Dallas Stars
- **Problem:** The Florida Panthers did win the 2024 Stanley Cup, but it was NOT their first championship — they had no prior championships so that part is correct. However, the explanation is accurate. The answer is correct.
- **Action:** fix

**[MEDIUM]** Which country has won the most FIFA World Cups as of 2024?
- **Marked correct:** France
- **Should be:** Brazil
- **Wrong options:** Brazil | Germany | Italy
- **Fixed wrong options:** Germany | Italy | France
- **Problem:** Brazil has won the FIFA World Cup 5 times (not 3), and is the all-time leader. The correct answer should be Brazil with 5 titles. France has won 2 times (1998, 2018). The explanation and correct answer are completely wrong.
- **Action:** fix

**[MEDIUM]** In what year did Michael Phelps retire from competitive swimming?
- **Marked correct:** 2016
- **Wrong options:** 2012 | 2014 | 2018
- **Problem:** Phelps first retired after the 2012 London Olympics, then came back and retired again in 2016 after Rio. The question and explanation acknowledge a 2018 return to competition, creating ambiguity. His final retirement was in 2016, which is the correct answer, but the explanation's mention of a 2018 return is inaccurate — he did not compete in 2018.
- **Action:** fix

**[MEDIUM]** How many times has the FIFA World Cup been held in Europe as of 2024?
- **Marked correct:** 7
- **Should be:** 10
- **Wrong options:** 6 | 8 | 5
- **Fixed wrong options:** 8 | 9 | 11
- **Problem:** The count of European World Cups is incorrect. European hosts: Italy (1934), France (1938), Sweden (1958), England (1966), West Germany (1974), Spain (1982), Italy (1990), France (1998), Germany (2006), Russia (2018) — that is 10 times, not 7. The correct answer is 10.
- **Action:** fix

**[MEDIUM]** Which golfer won the 2023 Masters Tournament?
- **Marked correct:** Jon Rahm
- **Wrong options:** Rory McIlroy | Tiger Woods | Scottie Scheffler
- **Problem:** Jon Rahm did win the 2023 Masters, but the explanation is wrong — he won outright, not in a playoff, and Phil Mickelson and Cameron Smith were not his playoff opponents. Rahm won by 4 strokes.
- **Action:** fix

**[MEDIUM]** Which team won the 2024 College Football Playoff National Championship?
- **Marked correct:** Texas
- **Should be:** Michigan
- **Wrong options:** Alabama | Ohio State | Georgia
- **Fixed wrong options:** Alabama | Ohio State | Georgia
- **Problem:** Michigan won the 2024 College Football Playoff National Championship (played January 8, 2024), defeating Washington. Texas did not win this championship.
- **Action:** fix

**[MEDIUM]** Which horse won the 2023 Kentucky Derby?
- **Marked correct:** Mystik Dan
- **Should be:** Mage
- **Wrong options:** Reincarnate | Cyclone Mischief | Lord Miles
- **Fixed wrong options:** Two Phil | Forte | Angel of Empire
- **Problem:** Mystik Dan did NOT win the 2023 Kentucky Derby. Mage won the 2023 Kentucky Derby. Mystik Dan won the 2024 Kentucky Derby.
- **Action:** fix

**[MEDIUM]** Which country won the most gold medals at the 2024 Paris Olympics?
- **Marked correct:** China
- **Should be:** United States
- **Wrong options:** United States | France | Great Britain
- **Fixed wrong options:** China | France | Great Britain
- **Problem:** The United States won the most gold medals at the 2024 Paris Olympics with 40 gold medals, tying China. By the tiebreaker (total medals), the US led. China also won 40 gold medals. The claim that China led is disputed — both tied at 40 gold, and the US is generally credited as leading by total medal count.
- **Action:** fix

**[MEDIUM]** What is the diameter of an Olympic swimming pool in meters?
- **Marked correct:** 50
- **Wrong options:** 25 | 45 | 55
- **Problem:** The question asks for the 'diameter' of an Olympic swimming pool, but the correct answer '50' is actually the LENGTH in meters, not a diameter. Swimming pools don't have a diameter. The question should ask for the length, or be reworded entirely.
- **Action:** fix

**[MEDIUM]** What is the scoring unit called in tennis when it equals 15 points?
- **Marked correct:** Game point
- **Wrong options:** Set point | Match point | Deuce
- **Problem:** The question and answer are factually confused. In tennis, '15' is a point value (first point won in a game), not a scoring unit with a special name. 'Game point' refers to being one point away from winning the game (at 40), not to the value 15. The question premise is incorrect.
- **Action:** fix

**[MEDIUM]** Which tennis player won the 2024 French Open men's singles title?
- **Marked correct:** Carlos Alcaraz
- **Should be:** Carlos Alcaraz
- **Wrong options:** Jannik Sinner | Novak Djokovic | Rafael Nadal
- **Problem:** Carlos Alcaraz did NOT win the 2024 French Open. Jannik Sinner did not win it either. Rafael Nadal was not in the final. The 2024 French Open men's singles was won by Carlos Alcaraz — actually this needs verification: the 2024 French Open was won by Carlos Alcaraz defeating Alexander Zverev in the final, not Jannik Sinner. The explanation's claim about the opponent is wrong.
- **Action:** fix

**[MEDIUM]** In what year did Usain Bolt set the world record for 100 meters at the Olympics?
- **Marked correct:** 2008
- **Should be:** 2008
- **Wrong options:** 2012 | 2009 | 2016
- **Problem:** Usain Bolt's world record of 9.58 seconds was set at the 2009 World Championships in Berlin, not at the 2008 Olympics. At the 2008 Olympics he ran 9.69 seconds (an Olympic record at the time). The 2012 Olympic record of 9.63 seconds was also set by Bolt. The explanation confuses the world record with the Olympic record and attributes the 9.63 to 2008 incorrectly.
- **Action:** fix

**[MEDIUM]** Which athlete won the most Olympic gold medals in history as of 2024?
- **Marked correct:** Michael Phelps
- **Wrong options:** Larisa Latynina | Kirsty Donald | Simone Biles
- **Fixed wrong options:** Larisa Latynina | Simone Biles | Usain Bolt
- **Problem:** 'Kirsty Donald' in the wrong answers does not appear to be a real prominent Olympic athlete associated with gold medal records — this may be a fabricated name (possibly a confusion with Kirsty Coventry or another athlete). This should be replaced with a real athlete.
- **Action:** fix

**[HARD]** In what year did the International Olympic Committee first allow professional athletes to compete in the Summer Olympics?
- **Marked correct:** 1992
- **Should be:** 1992
- **Wrong options:** 1988 | 1996 | 2000
- **Problem:** The IOC began allowing some professionals before 1992; the rules were changed sport-by-sport starting in the 1980s. Boxing allowed amateurs only until much later, while tennis and football allowed professionals at 1988 Seoul. However, the NBA 'Dream Team' debut in 1992 is the most commonly cited landmark. The question and explanation could be misleading since 1988 saw professional tennis players and footballers allowed.
- **Action:** fix

**[HARD]** Which player won the Ballon d'Or award in 2015, breaking the Messi-Ronaldo dominance?
- **Marked correct:** Cristiano Ronaldo
- **Should be:** Lionel Messi
- **Wrong options:** Neymar | Luis Suárez | Manuel Neuer
- **Fixed wrong options:** Cristiano Ronaldo | Neymar | Luis Suárez
- **Problem:** The 2015 Ballon d'Or was won by Lionel Messi, not Cristiano Ronaldo. Ronaldo won in 2013 and 2014; Messi reclaimed it in 2015. The question's premise of 'breaking Messi-Ronaldo dominance' is also false since Messi himself won it.
- **Action:** fix

**[HARD]** Which Formula 1 driver holds the record for most wins in a single season (as of 2025)?
- **Marked correct:** Max Verstappen
- **Should be:** Max Verstappen
- **Wrong options:** Lewis Hamilton | Sebastian Vettel | Michael Schumacher
- **Problem:** The explanation is inaccurate: Verstappen won 19 races in 2023 (not 2022; he won 15 in 2022) and did not extend it to 20 in 2023. The correct answer (Max Verstappen) is right, but the explanation contains errors.
- **Action:** fix

**[HARD]** Which golfer won the Masters Tournament five times, the most in tournament history?
- **Marked correct:** Jack Nicklaus
- **Should be:** Jack Nicklaus
- **Wrong options:** Tiger Woods | Arnold Palmer | Ben Hogan
- **Problem:** Tiger Woods won his fifth Masters in 2019, tying Jack Nicklaus's record of 5 titles, not surpassing it. Both hold 5 Masters titles. The explanation incorrectly states Woods 'broke' Nicklaus's record.
- **Action:** fix

**[HARD]** Which tennis player holds the record for most Grand Slam singles titles won in the Open Era?
- **Marked correct:** Novak Djokovic
- **Should be:** Novak Djokovic
- **Wrong options:** Roger Federer | Rafael Nadal | Pete Sampras
- **Problem:** The question asks about the Open Era specifically, but the explanation erroneously claims Djokovic surpassed Margaret Court's all-time record; Court's 24 titles were largely in the amateur era. Djokovic's 24 titles do make him the Open Era record holder, but the explanation conflates Open Era and all-time records inaccurately.
- **Action:** fix

**[HARD]** In what year did Michael Jordan retire from the NBA for the second time?
- **Marked correct:** 2003
- **Should be:** 1999
- **Wrong options:** 2001 | 1999 | 1998
- **Fixed wrong options:** 2003 | 2001 | 1998
- **Problem:** Michael Jordan retired for the second time on January 13, 1999 (after the 1997-98 Bulls championship season), and retired for a third time in 2003 after his stint with the Washington Wizards. The 2003 retirement was his third, not second.
- **Action:** fix

**[HARD]** Which driver won the Formula 1 World Championship in 2024?
- **Marked correct:** Lando Norris
- **Should be:** Max Verstappen
- **Wrong options:** Max Verstappen | Lewis Hamilton | Carlos Sainz
- **Fixed wrong options:** Lando Norris | Lewis Hamilton | Carlos Sainz
- **Problem:** Lando Norris did not win the 2024 Formula 1 World Championship. Max Verstappen won his fourth consecutive F1 World Championship in 2024.
- **Action:** fix

**[HARD]** What is the standard weight of a men's basketball in pounds?
- **Marked correct:** 22
- **Should be:** 1.375
- **Wrong options:** 20 | 24 | 21
- **Fixed wrong options:** 1.5 | 1.25 | 1.6
- **Problem:** The question asks for weight in pounds but the correct answer given is '22' (ounces). An NBA basketball weighs approximately 22 ounces, which is roughly 1.375 pounds — not 22 pounds. The question and answer unit are contradictory and misleading.
- **Action:** fix

**[HARD]** In curling, what is the weight limit for a stone in kilograms?
- **Marked correct:** 20
- **Should be:** 19.96
- **Wrong options:** 19 | 21 | 22
- **Fixed wrong options:** 18 | 21 | 22
- **Problem:** According to World Curling Federation rules, a curling stone must weigh between 17.24 kg and 19.96 kg (38–44 lbs), not a maximum of 20 kg. The maximum is effectively 19.96 kg.
- **Action:** fix

**[HARD]** Which football club won the UEFA Champions League five consecutive times from 2016 to 2020?
- **Marked correct:** Real Madrid
- **Should be:** Real Madrid
- **Wrong options:** Barcelona | Bayern Munich | Liverpool
- **Fixed wrong options:** Barcelona | Bayern Munich | Liverpool
- **Problem:** The question claims Real Madrid won five consecutive Champions Leagues from 2016 to 2020, which is false. Real Madrid won in 2016, 2017, and 2018 (three consecutive), not five, and did not win in 2019 or 2020. Liverpool won in 2019 and Bayern Munich in 2020.
- **Action:** fix

**[HARD]** Which golfer won the 2023 Open Championship at Royal Liverpool, ending a major drought that lasted since 2011?
- **Marked correct:** Collin Morikawa
- **Should be:** Brian Harman
- **Wrong options:** Rory McIlroy | Jon Rahm | Cameron Smith
- **Fixed wrong options:** Rory McIlroy | Jon Rahm | Cameron Smith
- **Problem:** Collin Morikawa did NOT win the 2023 Open Championship. Brian Harman won the 2023 Open Championship at Royal Liverpool. Morikawa won the 2021 Open Championship at Royal St. George's.
- **Action:** fix

**[HARD]** In what year did the NFL implement the sudden-death playoff overtime rule for postseason games?
- **Marked correct:** 1974
- **Should be:** 1941
- **Wrong options:** 1970 | 1977 | 1982
- **Fixed wrong options:** 1955 | 1960 | 1970
- **Problem:** The NFL introduced sudden-death overtime for regular season games in 1974, but postseason sudden-death overtime was actually implemented much earlier — in 1941. The explanation also contradicts itself by saying it wasn't used for regular season games until 2022.
- **Action:** fix

**[HARD]** Which tennis player won the most Grand Slam titles in the 2010s decade (2010-2019)?
- **Marked correct:** Novak Djokovic
- **Should be:** Novak Djokovic
- **Wrong options:** Roger Federer | Rafael Nadal | Andy Murray
- **Fixed wrong options:** Roger Federer | Rafael Nadal | Andy Murray
- **Problem:** Novak Djokovic won 11 Grand Slams in the 2010s (2011, 2012, 2013, 2015x3, 2016, 2018, 2019x3), not 12. Rafael Nadal won 11 as well. This needs careful verification; the count of 12 appears inaccurate.
- **Action:** fix

**[HARD]** What is the maximum length in meters of a cricket pitch from one crease to the other?
- **Marked correct:** 20.12
- **Should be:** 20.12
- **Wrong options:** 19.8 | 21.0 | 22.86
- **Fixed wrong options:** 19.8 | 21.0 | 22.86
- **Problem:** The question asks for the length from one crease to the other, but 20.12 meters (22 yards) is the full pitch length between the bowling creases. The popping creases are 1.22m in front of the stumps, so the crease-to-crease measurement depends on which creases are referenced. However, the standard pitch length of 22 yards = 20.117m ≈ 20.12m is commonly cited as correct for the pitch between wickets.
- **Action:** fix

**[HARD]** Who was the first female jockey to win a Grade 1 stakes race in North America?
- **Marked correct:** Julie Krone
- **Should be:** Julie Krone
- **Wrong options:** Rosemary Homeister Jr. | Diane Crump | Patti Cooksey
- **Fixed wrong options:** Rosemary Homeister Jr. | Diane Crump | Patti Cooksey
- **Problem:** The question asks who was the first female jockey to win a Grade 1 stakes race in North America, but the explanation answers a different question (first to win a Triple Crown race). Julie Krone won her first Grade 1 race in 1988 at the Meadowlands, years before the 1993 Belmont Stakes.
- **Action:** fix

**[HARD]** What is the only Formula 1 Grand Prix named after a city rather than a circuit or country?
- **Marked correct:** Monaco Grand Prix
- **Wrong options:** Singapore Grand Prix | Mexican Grand Prix | San Marino Grand Prix
- **Problem:** The claim that Monaco is the 'only' F1 Grand Prix named after a city is false — the Singapore Grand Prix (a wrong answer) is also named after a city, as are the Las Vegas Grand Prix, Miami Grand Prix, São Paulo Grand Prix, and others. The premise of the question is incorrect.
- **Action:** fix

**[HARD]** Which MLB team was the first to clinch a postseason berth using advanced analytics as their primary strategy?
- **Marked correct:** Boston Red Sox
- **Wrong options:** Oakland Athletics | Houston Astros | Tampa Bay Rays
- **Problem:** The question asks which team was 'first to clinch a postseason berth using advanced analytics as their primary strategy' — this is an unverifiable and subjective claim. The explanation then pivots to a completely different claim (first to win a World Series with analytics), and even credits the Red Sox over the Athletics who pioneered sabermetrics far earlier.
- **Action:** delete

**[HARD]** Who won the 2023 World Snooker Championship, defeating Luca Brecel in the final?
- **Marked correct:** Mark Selby
- **Should be:** Luca Brecel
- **Wrong options:** Judd Trump | Neil Robertson | Ronnie O'Sullivan
- **Fixed wrong options:** Mark Selby | Judd Trump | Ronnie O'Sullivan
- **Problem:** Luca Brecel won the 2023 World Snooker Championship, defeating Si Jiahui in the final 18-15. Mark Selby did not win in 2023.
- **Action:** fix

**[HARD]** In American football, what is the penalty yardage for a 'holding' infraction?
- **Marked correct:** 10 yards
- **Should be:** 10 yards
- **Wrong options:** 5 yards | 15 yards | 12 yards
- **Problem:** Holding penalties differ by league and situation: offensive holding is 10 yards in NFL, but defensive holding is 5 yards. The question should specify offensive or defensive holding, and ideally the NFL specifically.
- **Action:** fix

**[HARD]** Which Olympic sport uses the term 'Goofy' to describe a competitor's stance?
- **Marked correct:** Snowboarding
- **Should be:** Snowboarding
- **Wrong options:** Skateboarding | Surfing | Freestyle skiing
- **Fixed wrong options:** Alpine skiing | Freestyle skiing | Speed skating
- **Problem:** The term 'Goofy' is used in skateboarding as well as snowboarding. Skateboarding became an Olympic sport in 2021, so it is also a valid Olympic answer. The explanation even acknowledges this.
- **Action:** fix

**[HARD]** Which sport's world championship is determined by the Corbillon Cup?
- **Marked correct:** Table Tennis
- **Should be:** Table Tennis
- **Wrong options:** Badminton | Squash | Field Hockey
- **Problem:** The Corbillon Cup is specifically the women's team championship in table tennis at the World Table Tennis Championships, not a general 'world championship.' The question implies it determines a standalone world championship, which is misleading.
- **Action:** fix

**[HARD]** Who was the first tennis player to win a Grand Slam using a predominantly graphite composite racket?
- **Marked correct:** Jimmy Connors
- **Wrong options:** John McEnroe | Björn Borg | Rod Laver
- **Problem:** This claim is unverifiable and contested. Jimmy Connors used metal (T2000 steel) rackets for much of his career, not graphite composite. The specific claim that he was 'first to win a Grand Slam with a graphite racket' is not clearly documented and is likely inaccurate.
- **Action:** delete

**[HARD]** In what year did Serena Williams win her 23rd Grand Slam title, tying the all-time record at the Australian Open?
- **Marked correct:** 2017
- **Should be:** 2017
- **Wrong options:** 2016 | 2018 | 2015
- **Problem:** Serena Williams' 23rd Grand Slam tied Margaret Court's record but did NOT set the all-time record—it tied it. Also, Margaret Court's record stands at 24, which Serena never surpassed. The explanation says 'tying' which is correct, but the question says 'tying the all-time record' which is correct. However, the year and title count are accurate.
- **Action:** fix

**[HARD]** Which NFL team was the first to use the shotgun formation as their primary offensive alignment?
- **Marked correct:** San Francisco 49ers
- **Wrong options:** Dallas Cowboys | Green Bay Packers | Miami Dolphins
- **Problem:** The shotgun formation was invented and first used by Tom Landry with the Dallas Cowboys in 1960, not the San Francisco 49ers. Bill Walsh's West Coast offense did not primarily feature the shotgun formation.
- **Action:** delete

**[HARD]** What was the exact margin of victory for the 2016 Super Bowl LI in terms of points?
- **Marked correct:** 1 point
- **Should be:** 6 points
- **Wrong options:** 2 points | 3 points | 4 points
- **Fixed wrong options:** 1 point | 3 points | 4 points
- **Problem:** Super Bowl LI was played in February 2017 (for the 2016 season), and the final score was 34-28 in overtime, a margin of 6 points, not 1 point. Additionally, it was Super Bowl LI, not 'Super Bowl LI in 2016'—the game was played in 2017.
- **Action:** fix

**[HARD]** Which cricket format was first played at the Olympic Games in 2022?
- **Marked correct:** T20
- **Wrong options:** One Day International | Test Cricket | T10
- **Problem:** Cricket has never been played at the Olympic Games (the last time was 1900). The 2022 Commonwealth Games featured T20 cricket, but that is not an Olympic event. The question's premise is factually false.
- **Action:** fix

**[HARD]** How many points is a successful field goal worth in arena football?
- **Marked correct:** 4 points
- **Should be:** 3 points
- **Wrong options:** 3 points | 5 points | 2 points
- **Fixed wrong options:** 4 points | 5 points | 2 points
- **Problem:** In Arena Football League (AFL) rules, field goals are worth 3 points, not 4. A safety scores 2 points and a touchdown scores 8 points in arena football, but field goals remain 3 points.
- **Action:** fix

**[HARD]** Who was the first athlete to break the 4-minute mile?
- **Marked correct:** Roger Bannister
- **Should be:** Ron Turcotte
- **Wrong options:** John Landy | Herb Elliott | Peter Snell
- **Problem:** Secretariat's Kentucky Derby winning margin was not 31 lengths — that was the Belmont Stakes. The Kentucky Derby margin was 2.5 lengths. The explanation contains a factual error.
- **Action:** fix

**[HARD]** How many consecutive Wimbledon titles did Steffi Graf win?
- **Marked correct:** 6
- **Wrong options:** 5 | 7 | 4
- **Problem:** Steffi Graf won Wimbledon 7 consecutive times from 1989 to 1993 — wait, let me recount: she won in 1988, 1989, 1991, 1992, 1993 (not 1990, won by Navratilova). That is not 6 consecutive. Graf won Wimbledon in 1988, 1989, 1991, 1992, 1993, and 1995 and 1996 — her streak was broken in 1990. The correct answer of '6 consecutive' is inaccurate; her longest consecutive streak was 2 (1988–1989, then again 1991–1993 for 3 consecutive). The question and answer as stated are factually wrong.
- **Action:** fix

**[HARD]** Which jockey rode Secretariat to victory in the 1973 Kentucky Derby?
- **Marked correct:** Ron Turcotte
- **Should be:** Ron Turcotte
- **Wrong options:** Bill Hartack | Willie Shoemaker | Eddie Arcaro
- **Problem:** Secretariat's Kentucky Derby winning margin was 2.5 lengths, not 31 lengths. The 31-length margin was at the Belmont Stakes. This is an error in the explanation (same issue as Q8, as both reference this myth).
- **Action:** fix

**[HARD]** How many Olympic gold medals has Michael Phelps won across his career?
- **Marked correct:** 23
- **Wrong options:** 22 | 24 | 21
- **Problem:** Michael Phelps won 23 Olympic gold medals, which is correct, but his total Olympic medal count is 28. The correct answer is accurate, but the explanation should note he won 28 total medals. The answer of 23 golds is correct.
- **Action:** fix

**[HARD]** Who was the first female athlete to win an Olympic gold medal in skateboarding?
- **Marked correct:** Momiji Nishiya
- **Should be:** Momiji Nishiya
- **Wrong options:** Sky Brown | Jagger Eaton | Yosozumi Nakamura
- **Fixed wrong options:** Sky Brown | Kokona Hiraki | Rayssa Leal
- **Problem:** Jagger Eaton is male, not female, and therefore cannot be a valid wrong answer in the context of 'first female athlete to win an Olympic gold medal in skateboarding.' One wrong answer is nonsensical/misleading. Additionally, Yosozumi Nakamura (Kokona Hiraki won silver; Rayssa Leal won silver too) — the wrong answers should be female skateboarders to be fair distractors.
- **Action:** fix

**[HARD]** Which boxer defeated Mike Tyson in his professional debut loss?
- **Marked correct:** Buster Douglas
- **Should be:** Buster Douglas
- **Wrong options:** Evander Holyfield | Lennox Lewis | Frank Bruno
- **Problem:** The question asks about Tyson's 'professional debut loss' but Buster Douglas was not Tyson's debut — Douglas delivered Tyson's first professional defeat. The word 'debut' is misleading but the correct answer (Buster Douglas) is accurate for 'first professional loss.' However, the phrasing 'professional debut loss' is contradictory — a debut is a first appearance, not a first loss. The question should be reworded.
- **Action:** fix

**[HARD]** In what year did the Dallas Cowboys win their most recent Super Bowl championship?
- **Marked correct:** 1996
- **Wrong options:** 1995 | 1997 | 1998
- **Problem:** The Cowboys won Super Bowl XXX in January 1996, but the season is referred to as the 1995 NFL season. The wrong answers include '1995' which could cause confusion, but more critically, the question asks 'in what year' and the game was played in January 1996, so 1996 is technically correct. However, one of the wrong answers is '1995' which is the season year — this is a common source of ambiguity but the correct answer of 1996 (game date) is defensible.
- **Action:** fix

**[HARD]** In what year did the Philadelphia Eagles win their first Super Bowl?
- **Marked correct:** 2018
- **Wrong options:** 2017 | 2019 | 2016
- **Problem:** Super Bowl LII was played on February 4, 2018, making the year of the game 2018, which is correct. However, the wrong answers include '2017' which is the season year — the question is ambiguous about whether it means the game year or the season year. The answer 2018 is correct for the calendar year the game was played.
- **Action:** fix

**[HARD]** Which player won the 2023 Wimbledon men's singles title?
- **Marked correct:** Markos Krejčík
- **Should be:** Carlos Alcaraz
- **Wrong options:** Carlos Alcaraz | Novak Djokovic | Jannik Sinner
- **Fixed wrong options:** Markos Krejčík | Novak Djokovic | Jannik Sinner
- **Problem:** The correct answer listed is 'Markos Krejčík' which is not a real tennis player. The explanation correctly states that Carlos Alcaraz won the 2023 Wimbledon title, but Alcaraz is listed as a wrong answer. The correct answer should be Carlos Alcaraz.
- **Action:** fix

**[HARD]** Which boxer held world titles in the most weight classes simultaneously?
- **Marked correct:** Henry Armstrong
- **Wrong options:** Manny Pacquiao | Oscar De La Hoya | Floyd Mayweather Jr.
- **Problem:** The question asks who held titles in the most weight classes 'simultaneously,' and Henry Armstrong (3 simultaneously) is correct. However, Manny Pacquiao held titles in more weight classes total (8), though not simultaneously. The question wording with 'simultaneously' makes Armstrong correct, but the explanation should clarify this distinction more explicitly.
- **Action:** fix

**[HARD]** In what year did the Winter Olympics first include ice hockey?
- **Marked correct:** 1920
- **Should be:** 1924
- **Wrong options:** 1924 | 1928 | 1936
- **Fixed wrong options:** 1920 | 1928 | 1936
- **Problem:** The question asks when the Winter Olympics first included ice hockey, but the correct answer given is 1920, which was the Summer Olympics in Antwerp. Ice hockey first appeared at the Winter Olympics in 1924 at Chamonix. The explanation even acknowledges this contradiction. The correct answer for Winter Olympics ice hockey debut is 1924.
- **Action:** fix

**[HARD]** In what year did Serena Williams win her 23rd Grand Slam title?
- **Marked correct:** 2017
- **Wrong options:** 2015 | 2016 | 2018
- **Problem:** The explanation is internally contradictory: it states Serena 'surpassed Margaret Court's previous record of 24 later that year,' but Court's record is 24 and Serena reached 23, meaning she did NOT surpass Court's record. Serena's 23rd title at the 2017 Australian Open made her the most in the Open Era but not the all-time record holder over Court.
- **Action:** fix

**[HARD]** Which country has won the most Rugby World Cup tournaments?
- **Marked correct:** New Zealand
- **Wrong options:** South Africa | Australia | England
- **Problem:** The explanation states New Zealand won in 1987, 1992, and 2015, but the 1992 Rugby World Cup was won by Australia, not New Zealand. New Zealand's three wins are 1987, 2011, and 2015. Additionally, South Africa has also won three times (1995, 2007, 2019), making this a tie and potentially making the correct answer ambiguous as of 2019.
- **Action:** fix

**[HARD]** Which gymnast was the first to land a triple axel in women's figure skating competition?
- **Marked correct:** Midori Ito
- **Wrong options:** Tonya Harding | Nancy Kerrigan | Katarina Witt
- **Problem:** The question asks about the first woman to land a triple axel in figure skating competition, but calls Midori Ito a 'gymnast' in the explanation. She is a figure skater. Also, the 1989 World Championships claim should be verified — Ito landed a triple axel at the 1989 World Championships, which is correct.
- **Action:** fix

**[HARD]** Which tennis player won the most Wimbledon singles titles in the Open Era?
- **Marked correct:** Roger Federer
- **Wrong options:** Pete Sampras | Novak Djokovic | Rafael Nadal
- **Problem:** Novak Djokovic has won 7 Wimbledon titles (2011, 2014, 2015, 2018, 2019, 2021, 2022), which is fewer than Federer's 8, so Federer remains correct. However, the question should note this is specifically for men's singles, which it does. Federer's 8 titles remain the Open Era men's record, so the answer is correct. No contamination issue found upon review.
- **Action:** fix

**[HARD]** Who holds the record for most goals scored in a single FIFA World Cup tournament?
- **Marked correct:** Gerd Müller
- **Should be:** Just Fontaine
- **Wrong options:** Pelé | Just Fontaine | Cristiano Ronaldo
- **Fixed wrong options:** Gerd Müller | Pelé | Cristiano Ronaldo
- **Problem:** Just Fontaine holds the record for most goals in a single World Cup tournament with 13 goals in 1958, not Gerd Müller. Müller scored 10 goals in 1970, not 14 (14 was his total across multiple tournaments).
- **Action:** fix

**[HARD]** Which NFL player threw for the most touchdown passes in a single season?
- **Marked correct:** Patrick Mahomes
- **Should be:** Peyton Manning
- **Wrong options:** Peyton Manning | Tom Brady | Aaron Rodgers
- **Fixed wrong options:** Patrick Mahomes | Tom Brady | Aaron Rodgers
- **Problem:** Mahomes threw 50 TDs in 2018, but Peyton Manning threw 55 TD passes in 2013, which was the record until Brady threw 50 in 2007. The all-time single-season record is Manning's 55 in 2013, not Mahomes' 50.
- **Action:** fix

**[HARD]** In what year did the Boston Celtics win 11 NBA championships in 13 years?
- **Marked correct:** 1966
- **Should be:** 1969
- **Wrong options:** 1969 | 1964 | 1965
- **Fixed wrong options:** 1966 | 1964 | 1965
- **Problem:** The question asks 'in what year did the Boston Celtics win 11 championships in 13 years,' which is confusingly worded. The dynasty spanned 1957–1969 (13 seasons, 11 titles). The correct answer of 1966 only marks their 8th consecutive title, not the completion of the 11-in-13 run.
- **Action:** fix

**[HARD]** Which country has hosted the Summer Olympics the most times?
- **Marked correct:** Greece
- **Should be:** United States
- **Wrong options:** France | United States | Japan
- **Fixed wrong options:** Greece | France | Japan
- **Problem:** The United States has hosted the Summer Olympics more times than Greece. The US hosted in 1904, 1932, 1984, 1996, and will host again in 2028 (5 times). Greece hosted in 1896, 1906 (Intercalated, not officially recognized), and 2004. The 1906 Games are not officially recognized by the IOC.
- **Action:** fix

**[HARD]** Which golfer has won the most PGA Tour events?
- **Marked correct:** Tiger Woods
- **Should be:** Tiger Woods
- **Wrong options:** Jack Nicklaus | Sam Snead | Arnold Palmer
- **Fixed wrong options:** Jack Nicklaus | Sam Snead | Arnold Palmer
- **Problem:** Sam Snead's record was 82 victories, and Tiger Woods tied it in 2019 (not surpassed it). As of early 2026, Woods is tied with Snead at 82 wins, not ahead of him. The explanation also incorrectly references '2023 comeback performances.'
- **Action:** fix

**[HARD]** In what year did Muhammad Ali refuse induction into the U.S. military during the Vietnam War?
- **Marked correct:** 1966
- **Should be:** 1967
- **Wrong options:** 1964 | 1967 | 1965
- **Fixed wrong options:** 1964 | 1966 | 1965
- **Problem:** Ali formally refused induction on April 28, 1967, not 1966. The famous 'I ain't got no quarrel' quote was from February 1966, but the actual refusal of induction occurred in 1967.
- **Action:** fix

**[HARD]** Who holds the record for most consecutive Grand Slam singles titles won?
- **Marked correct:** Margaret Court
- **Should be:** Martina Navratilova
- **Wrong options:** Steffi Graf | Serena Williams | Martina Navratilova
- **Fixed wrong options:** Steffi Graf | Serena Williams | Margaret Court
- **Problem:** Margaret Court did not win six consecutive Grand Slams in 1973; she won the calendar Grand Slam in 1970 (all four in one year). Steffi Graf holds the record for most consecutive Grand Slam singles titles with 4 (French Open 1987 through Australian Open 1988), though this record itself is debated.
- **Action:** fix

**[HARD]** In what year did the first Cricket World Cup take place?
- **Marked correct:** 1975
- **Should be:** 1975
- **Wrong options:** 1977 | 1973 | 1979
- **Fixed wrong options:** 1977 | 1971 | 1979
- **Problem:** The first Women's Cricket World Cup was held in 1973, two years before the men's tournament in 1975. The wrong answer of 1973 is technically correct for the first Cricket World Cup overall (women's edition), creating ambiguity.
- **Action:** fix

**[HARD]** Which Olympic sport requires competitors to use equipment weighing no less than 16 pounds for men?
- **Marked correct:** Shot put
- **Should be:** Shot put
- **Wrong options:** Hammer throw | Javelin | Discus
- **Fixed wrong options:** Javelin | Discus | Weight throw
- **Problem:** The hammer throw also uses a 16-pound (7.26 kg) implement for men, making it also a correct answer. The explanation even acknowledges this, undermining shot put as the unique correct answer.
- **Action:** fix

**[HARD]** Who holds the record for most Olympic gold medals won by a female athlete?
- **Marked correct:** Simone Biles
- **Should be:** Larisa Latynina
- **Wrong options:** Katie Ledecky | Serena Venus Williams | Lindsey Vonn
- **Fixed wrong options:** Simone Biles | Katie Ledecky | Birgit Fischer
- **Problem:** As of early 2026, Larisa Latynina holds the record for most Olympic gold medals by a female athlete with 9 golds. Simone Biles has 7 Olympic gold medals (4 from 2016, 3 from 2020/Tokyo), not 8. Also, one wrong answer lists 'Serena Venus Williams' which is not a real athlete's name.
- **Action:** fix

### TECHNOLOGY (172 issues)

**[EASY]** What does 'API' stand for in software development?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'SSD' stand for in computer storage?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was YouTube founded?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'RAM' stand for in computer memory?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which company developed the Android operating system?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Microsoft release Windows 95?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'AI' stand for in technology?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'GPU' stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Steve Jobs introduce the first iPhone?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which company developed the Android operating system?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the World Wide Web invented by Tim Berners-Lee?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'HTML' stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Microsoft release Windows 95?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'AI' stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which company developed the Java programming language?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'RAM' stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'SSD' stand for in computer hardware?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Apple release the iPad?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'VR' stand for in technology?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which company developed the Python programming language?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'CPU' stand for in computing?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the World Wide Web invented by Tim Berners-Lee?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year did Microsoft release Windows 95?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'GPU' stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which company developed the Java programming language?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** What does 'HTML' stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was Twitter founded?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** Which company acquired Instagram in 2012?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year did Apple release the first iPhone?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year was the World Wide Web invented by Tim Berners-Lee?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** Which programming language was created by Guido van Rossum in 1989?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What is the name of the open-source version control system created by Linus Torvalds in 2005?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** What was the original name of the search engine that became Google?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[HARD]** In what year was the World Wide Web invented by Tim Berners-Lee?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What does GPU stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which programming language was created by Guido van Rossum in 1989?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who is credited with inventing the World Wide Web?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first version of Linux released by Linus Torvalds?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company developed the Java programming language?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What does RAM stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company developed the Android operating system?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which search engine was founded by Larry Page and Sergey Brin?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first iPhone released?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What does HTTP stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What does GPU stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company developed the JavaScript programming language?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which programming language was created by Guido van Rossum?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first iPhone released?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What does API stand for in software development?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company acquired Instagram in 2012?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Microsoft release Windows 95?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which programming language was created by Guido van Rossum in 1989?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Who is credited with inventing the World Wide Web?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first version of Linux released by Linus Torvalds?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Microsoft release Windows 95?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first webcam created at Cambridge University?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year did Amazon launch Amazon Web Services (AWS)?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company created the Slack messaging platform?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company developed the Swift programming language?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** What does BIOS stand for?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** Which company developed the Android operating system?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[MEDIUM]** In what year was the first iPhone released?
- **Problem:** Exact duplicate — identical question_text already exists
- **Action:** deleted

**[EASY]** In what year was the World Wide Web invented by Tim Berners-Lee?
- **Marked correct:** 1989
- **Should be:** 1989
- **Wrong options:** 1985 | 1991 | 1987
- **Fixed wrong options:** 1984 | 1992 | 1987
- **Problem:** Berners-Lee proposed the Web in 1989, but it was not fully 'invented' or made publicly available until 1991. The question and explanation use 'invented' and '1989' together, which is defensible but the wrong answer '1991' is arguably also correct (first public implementation). The question should clarify 'proposed' vs 'launched.'
- **Action:** fix

**[EASY]** In what year was the first webcam created at Cambridge University?
- **Marked correct:** 1993
- **Should be:** 1991
- **Wrong options:** 1991 | 1995 | 1997
- **Fixed wrong options:** 1989 | 1993 | 1995
- **Problem:** The first webcam was created in 1991, not 1993, at the University of Cambridge (Trojan Room coffee pot camera). It went live on the internet in 1993, but the device itself was created in 1991.
- **Action:** fix

**[EASY]** Who founded Tesla and serves as its CEO?
- **Marked correct:** Elon Musk
- **Should be:** Elon Musk
- **Wrong options:** Jeff Bezos | Mark Zuckerberg | Bill Gates
- **Fixed wrong options:** Jeff Bezos | Mark Zuckerberg | Bill Gates
- **Problem:** Elon Musk did not co-found Tesla; he joined as chairman and lead investor in 2004 after the company was founded in 2003 by Martin Eberhard and Marc Tarpenning. The question's claim that he 'co-founded' Tesla in 2003 is factually incorrect.
- **Action:** fix

**[EASY]** Who invented the graphical user interface (GUI) that inspired modern computing?
- **Marked correct:** Douglas Engelbart
- **Wrong options:** Bill Gates | Steve Jobs | Linus Torvalds
- **Problem:** The GUI was not invented by a single person. Engelbart pioneered key concepts (mouse, hypertext, windows) at SRI in 1968, but Xerox PARC developed the first true GUI (Alto, 1973), and the question conflates 'inventing the GUI' with Engelbart's demo. The question is misleadingly worded and the correct answer is debatable.
- **Action:** fix

**[EASY]** In what year was Linux first released by Linus Torvalds?
- **Marked correct:** 1991
- **Wrong options:** 1989 | 1993 | 1995
- **Problem:** Torvalds announced the Linux kernel on August 25, 1991 (the public Usenet post), and version 0.01 was released in September 1991. The year 1991 is correct, but the explanation states September 17 as the release date; the actual first public release (0.01) was around September 17, 1991, so the year is correct. No change needed to the answer, but the date in the explanation is acceptable.
- **Action:** fix

**[EASY]** Which company developed the Java programming language?
- **Marked correct:** Sun Microsystems
- **Wrong options:** Oracle | IBM | Microsoft
- **Fixed wrong options:** IBM | Microsoft | Borland
- **Problem:** Oracle is listed as a wrong answer, but Oracle acquired Sun Microsystems in 2010 and now owns Java. While Sun Microsystems originally developed Java (making it the best correct answer for 'developed'), Oracle as a wrong answer could confuse players who know Oracle now owns Java. The question should clarify 'originally developed' to avoid ambiguity.
- **Action:** fix

**[EASY]** In what year was YouTube founded?
- **Marked correct:** 2005
- **Wrong options:** 2003 | 2006 | 2004
- **Problem:** The explanation misspells the third co-founder's name as 'Karim Karim' — his name is Jawed Karim. This is a factual error in the explanation.
- **Action:** fix

**[EASY]** Who is the co-founder of Apple Computer Company along with Steve Wozniak?
- **Marked correct:** Steve Jobs
- **Wrong options:** Bill Gates | Paul Allen | Larry Ellison
- **Problem:** Apple was co-founded by Steve Jobs, Steve Wozniak, AND Ronald Wayne. The question and explanation omit Ronald Wayne as a third co-founder, which is a factual omission that could be considered inaccurate.
- **Action:** fix

**[EASY]** In what year was the first Apple iPhone released?
- **Marked correct:** 2007
- **Wrong options:** 2005 | 2008 | 2006
- **Problem:** The explanation states Steve Jobs unveiled the iPhone on January 9, 2007. The actual announcement was made at the Macworld Conference on January 9, 2007, but the iPhone was not released (went on sale) until June 29, 2007. The year 2007 is correct for both announcement and release, but the explanation conflates announcement with release.
- **Action:** fix

**[EASY]** Who is credited with inventing the World Wide Web?
- **Marked correct:** Tim Berners-Lee
- **Wrong options:** Steve Jobs | Bill Gates | Vint Cerf
- **Problem:** Vint Cerf is listed as a wrong answer, but he is widely credited as a co-inventor of the Internet (TCP/IP protocol), not the World Wide Web. While Tim Berners-Lee invented the Web, Vint Cerf's inclusion as a wrong answer could confuse players since he is a legitimate computing pioneer. More critically, the question is about the Web (not the Internet), so Cerf is factually a wrong answer — however this distinction may be unclear to players. The wrong answers are fine as-is since the question specifically says 'World Wide Web.'
- **Action:** fix

**[EASY]** Which company developed the Python programming language?
- **Marked correct:** Guido van Rossum
- **Wrong options:** Google | Oracle | Microsoft
- **Problem:** The question asks 'which company developed Python' but the correct answer given is 'Guido van Rossum,' a person — not a company. The question and answer are mismatched in category (company vs. person). Python was not developed by a company; it was created by Guido van Rossum independently. The question should ask 'Who created Python?' to match the answer.
- **Action:** fix

**[EASY]** Which company did Elon Musk co-found that focuses on electric vehicles and renewable energy?
- **Marked correct:** Tesla
- **Wrong options:** SpaceX | Neuralink | The Boring Company
- **Problem:** Elon Musk did not co-found Tesla. Tesla was founded in 2003 by Martin Eberhard and Marc Tarpenning. Musk joined as chairman of the board and lead investor in 2004 during Series A funding. He became CEO in 2008. He is legally considered a co-founder following a 2016 settlement, but the explanation saying he 'co-founded Tesla in 2003' is misleading.
- **Action:** fix

**[EASY]** What does 'WiFi' stand for?
- **Marked correct:** Wireless Fidelity
- **Wrong options:** Wide Frequency Internet | Wireless Frequency Integration | Wired Fidelity Interface
- **Problem:** WiFi is actually a trademarked brand name and does not officially stand for anything. The Wi-Fi Alliance has stated it is not an abbreviation, though 'Wireless Fidelity' was used informally in early marketing. This is a commonly repeated misconception.
- **Action:** fix

**[EASY]** Which company did LinkedIn acquire for $26 billion in 2016?
- **Marked correct:** Microsoft
- **Wrong options:** Google | Apple | Facebook
- **Problem:** The question is reversed: it was Microsoft that acquired LinkedIn, not the other way around. The question asks 'Which company did LinkedIn acquire' but LinkedIn was the acquired company, not the acquirer.
- **Action:** fix

**[EASY]** Which company developed the first commercially successful web browser, Internet Explorer?
- **Marked correct:** Microsoft
- **Should be:** Netscape
- **Wrong options:** Netscape | Opera | Mozilla
- **Fixed wrong options:** Microsoft | Opera | Mozilla
- **Problem:** Internet Explorer was not the first commercially successful web browser — Netscape Navigator (released 1994) preceded it and was commercially successful before IE. IE launched in 1995 and eventually dominated the market, but it was not the first commercially successful browser.
- **Action:** fix

**[EASY]** Which company created the first commercially successful graphical user interface?
- **Marked correct:** Apple
- **Should be:** Apple
- **Wrong options:** Microsoft | Xerox | IBM
- **Fixed wrong options:** Microsoft | Commodore | IBM
- **Problem:** Xerox is listed as a wrong answer, but the Xerox Alto (1973) and Xerox Star (1981) featured GUIs before Apple's Macintosh. The question asks who 'created the first commercially successful' GUI, but the explanation itself acknowledges Xerox pioneered the concept, making the question misleading since Xerox Star was also commercially sold.
- **Action:** fix

**[EASY]** In what year was the first Apple laptop, the PowerBook, released?
- **Marked correct:** 1991
- **Wrong options:** 1989 | 1993 | 1990
- **Problem:** The PowerBook was indeed released in 1991, but it was NOT the first Apple laptop. The Apple IIc (1984) and the Macintosh Portable (1989) preceded it. The claim in the explanation that it featured 'the first laptop design with an integrated trackpad' is also incorrect — the PowerBook used a trackball, not a trackpad.
- **Action:** fix

**[EASY]** In what year was the first iPhone with a camera released?
- **Marked correct:** 2008
- **Should be:** 2007
- **Wrong options:** 2007 | 2009 | 2010
- **Fixed wrong options:** 2008 | 2009 | 2010
- **Problem:** The original iPhone (released June 2007) did NOT have a camera. The iPhone 3G (2008) also did not have a camera in the original spec — actually the original iPhone lacked a camera, but the iPhone 3G did include a 2-megapixel camera. However, this is contested: the original 2007 iPhone actually DID include a 2-megapixel camera. The first iPhone released in 2007 included a camera, making 2007 the correct answer, not 2008.
- **Action:** fix

**[EASY]** In what year did Steve Jobs announce the iPad?
- **Marked correct:** 2010
- **Should be:** 2010
- **Wrong options:** 2009 | 2011 | 2008
- **Problem:** Steve Jobs announced the iPad on January 27, 2010, but it went on sale (was released) on April 3, 2010. The question asks when Jobs 'announced' it, which was January 27, 2010 — the answer of 2010 is correct for the year, but the explanation incorrectly states April 3 as the announcement date rather than the release date.
- **Action:** fix

**[EASY]** Which search engine was acquired by Microsoft in 2016?
- **Marked correct:** LinkedIn
- **Should be:** LinkedIn
- **Wrong options:** Yahoo | DuckDuckGo | Bing
- **Problem:** The question asks which 'search engine' was acquired by Microsoft in 2016, but LinkedIn is a professional social networking platform, not a search engine. The question category is also wrong. Bing is listed as a wrong answer but Bing is Microsoft's own search engine, not an acquisition in 2016.
- **Action:** fix

**[EASY]** Which company developed the C++ programming language?
- **Marked correct:** Bjarne Stroustrup
- **Should be:** Bjarne Stroustrup
- **Wrong options:** Dennis Ritchie | Guido van Rossum | James Gosling
- **Problem:** The question asks 'which company' developed C++, but the correct answer is 'Bjarne Stroustrup,' a person, not a company. The question should ask 'who' or 'which person' developed C++.
- **Action:** fix

**[EASY]** Which company created the first tablet computer, the iPad?
- **Marked correct:** Apple
- **Should be:** Apple
- **Wrong options:** Microsoft | Samsung | Google
- **Problem:** Apple did NOT create the first tablet computer. Tablet computers existed well before the iPad, including the Microsoft Tablet PC (2002), the GRiDPad (1989), and others. The question as worded is factually incorrect by claiming the iPad was the first tablet computer.
- **Action:** fix

**[EASY]** In what year was the first Apple Macintosh computer released?
- **Marked correct:** 1984
- **Wrong options:** 1982 | 1986 | 1985
- **Problem:** The explanation's claim that the Macintosh was 'the first commercially successful personal computer with a graphical user interface' is debatable (the Apple Lisa preceded it), but more critically the question itself is accurate — 1984 is correct. However, the explanation overstates the claim. The answer 1984 is correct.
- **Action:** fix

**[EASY]** Which company is known for developing the Linux operating system kernel?
- **Marked correct:** Linus Torvalds
- **Should be:** Linus Torvalds
- **Wrong options:** Richard Stallman | Dennis Ritchie | Ken Thompson
- **Problem:** The question asks 'which company' but the correct answer is 'Linus Torvalds', a person — not a company. The question and answer are mismatched in category (person vs. company).
- **Action:** fix

**[EASY]** In what year was the first webcam created at Carnegie Mellon University?
- **Marked correct:** 1991
- **Should be:** 1991
- **Wrong options:** 1993 | 1989 | 1995
- **Problem:** The first webcam was created at the University of Cambridge (to monitor the Trojan Room coffee pot), not at Carnegie Mellon University. The year 1991 is also slightly off — it was operational in 1991 but the CMU 'panthersnap' connection is a different system. The Cambridge webcam is the canonical 'first webcam' story.
- **Action:** fix

**[MEDIUM]** What was the name of Microsoft's email service launched in 1997 as a web-based alternative to desktop email clients?
- **Marked correct:** Hotmail
- **Should be:** Hotmail
- **Wrong options:** Outlook Web Access | Windows Live Mail | MSN Mail
- **Problem:** Hotmail was not launched by Microsoft in 1997 — it was founded by Sabeer Bhatia and Jack Smith and launched in 1996. Microsoft acquired it in late 1997. The question conflates the acquisition date with the launch date.
- **Action:** fix

**[MEDIUM]** What is the name of the virtualization platform developed by Oracle for running Java applications?
- **Marked correct:** Java Virtual Machine
- **Should be:** Java Virtual Machine
- **Wrong options:** Java Runtime Environment | Java Development Kit | Java Compiler
- **Problem:** The question asks for a 'virtualization platform developed by Oracle,' but the JVM was originally developed by Sun Microsystems, not Oracle. Additionally, the Java Runtime Environment (JRE) includes the JVM, making 'Java Runtime Environment' a potentially confusable wrong answer. The attribution to Oracle is also misleading.
- **Action:** fix

**[MEDIUM]** Which company created the HTTP protocol that forms the foundation of the World Wide Web?
- **Marked correct:** CERN
- **Should be:** CERN
- **Wrong options:** MIT | Stanford University | University of Illinois
- **Problem:** HTTP was not created by 'a company' — CERN is a research organization, not a company. More importantly, HTTP was created by Tim Berners-Lee as an individual researcher at CERN, not by CERN as an institution. The question wording asking 'which company' is factually imprecise since CERN is not a company.
- **Action:** fix

**[MEDIUM]** What is the name of the open-source database management system originally developed by Michael Widenius?
- **Marked correct:** MySQL
- **Should be:** MySQL
- **Wrong options:** PostgreSQL | MariaDB | MongoDB
- **Fixed wrong options:** PostgreSQL | SQLite | MongoDB
- **Problem:** MariaDB was also created by Michael Widenius (nicknamed 'Monty') after he left Oracle following its acquisition of MySQL. MariaDB is named after his daughter Maria, just as MySQL is named after his daughter My. Having MariaDB as a wrong answer is contamination.
- **Action:** fix

**[MEDIUM]** Which company developed the Objective-C programming language used in early iOS development?
- **Marked correct:** StepStone
- **Should be:** StepStone
- **Wrong options:** Apple | NeXT | Sun Microsystems
- **Fixed wrong options:** Apple | Sun Microsystems | IBM
- **Problem:** Objective-C was created by Brad Cox and Tom Love at StepStone (formerly Productivity Products International), but NeXT (listed as a wrong answer) was also instrumental in developing and popularizing it — making NeXT a plausible correct answer. Additionally, the question asks which company 'developed' it, which could reasonably point to StepStone or NeXT. The framing is misleading.
- **Action:** fix

**[MEDIUM]** In what year did Microsoft release the Surface tablet, its first entry into the tablet market?
- **Marked correct:** 2013
- **Should be:** 2012
- **Wrong options:** 2011 | 2012 | 2014
- **Fixed wrong options:** 2011 | 2013 | 2014
- **Problem:** Microsoft released the original Surface tablet in June 2012, not 2013. The Surface RT and Surface Pro were both announced and released in 2012.
- **Action:** fix

**[MEDIUM]** Which company developed the first commercial touchscreen technology that became mainstream in mobile devices?
- **Marked correct:** Apple
- **Should be:** Apple
- **Wrong options:** Microsoft | Nokia | Motorola
- **Fixed wrong options:** Microsoft | Nokia | Motorola
- **Problem:** The question asks which company 'developed the first commercial touchscreen technology that became mainstream in mobile devices,' but Apple did not develop the underlying capacitive touchscreen technology — it was developed by companies like Fingerworks (acquired by Apple). The question conflates popularizing the technology with developing it, making it misleading and potentially incorrect.
- **Action:** fix

**[MEDIUM]** In what year did Intel release the first 64-bit processor for consumer PCs, the Pentium 4?
- **Marked correct:** 2000
- **Wrong options:** 1998 | 2002 | 1999
- **Problem:** The Pentium 4 was not a 64-bit processor. The original Pentium 4 released in 2000 was a 32-bit processor. Intel's first 64-bit consumer processor was the Pentium 4 with EM64T support, introduced in 2004. AMD actually beat Intel to 64-bit consumer CPUs with the Athlon 64 in 2003.
- **Action:** fix

**[MEDIUM]** Which scientist developed the theory that formed the basis for modern cryptography?
- **Marked correct:** Claude Shannon
- **Should be:** Claude Shannon
- **Wrong options:** Alan Turing | John von Neumann | Emmy Noether
- **Fixed wrong options:** Alan Turing | John von Neumann | Whitfield Diffie
- **Problem:** Alan Turing (listed as a wrong answer) also has a strong and well-recognized claim to founding modern cryptography through his work on codebreaking and computing theory. The question is ambiguous as both Shannon and Turing are widely credited with foundational contributions to cryptography.
- **Action:** fix

**[MEDIUM]** Which company created the first commercially successful touchscreen smartphone before the iPhone?
- **Marked correct:** None (iPhone was the first mainstream touchscreen smartphone)
- **Wrong options:** Handspring | Palm | BlackBerry
- **Problem:** The IBM Simon (1992/1994) is widely recognized as the first smartphone with a touchscreen, and devices like the LG Prada and others preceded the iPhone's mainstream touchscreen. More critically, the framing that 'None' is correct is historically contested — the question itself is ambiguous and the answer format ('None') is unusual and misleading for a trivia question.
- **Action:** fix

**[MEDIUM]** Which company developed the first mass-market personal computer?
- **Marked correct:** Commodore
- **Should be:** Apple
- **Wrong options:** Apple | IBM | Altair
- **Fixed wrong options:** IBM | Commodore | Tandy
- **Problem:** The first mass-market personal computer is generally attributed to the Altair 8800 (1975) or the Apple II (1977), not the Commodore 64. The Commodore PET (1977) and VIC-20 (1980) preceded the C64. Attributing 'first mass-market personal computer' to Commodore based solely on the C64's sales is historically inaccurate — the question conflates 'best-selling model' with 'first mass-market PC.'
- **Action:** fix

**[MEDIUM]** Which company created Slack?
- **Marked correct:** Slack Technologies
- **Should be:** Slack Technologies (founded by Stewart Butterfield)
- **Wrong options:** Microsoft | Atlassian | HipChat
- **Fixed wrong options:** Microsoft | Atlassian | Salesforce
- **Problem:** HipChat is listed as a wrong answer, but HipChat was a competing product made by Atlassian — it was not created by Slack Technologies. However, the deeper issue is that listing 'HipChat' alongside 'Atlassian' as separate wrong answers is redundant and potentially confusing since Atlassian owned HipChat. More critically, the correct answer 'Slack Technologies' is circular — the question asks who created Slack and the answer is 'Slack Technologies,' which is tautological and unhelpful.
- **Action:** fix

**[MEDIUM]** In what year was the first multi-core processor released for consumer computers?
- **Marked correct:** 2005
- **Should be:** 2005
- **Wrong options:** 2003 | 2007 | 2001
- **Fixed wrong options:** 2003 | 2007 | 2001
- **Problem:** AMD released the dual-core Athlon 64 X2 processor in April 2005, slightly before Intel's Pentium D (May 2005), making AMD the first to release a dual-core consumer processor. The explanation incorrectly credits Intel as the first.
- **Action:** fix

**[MEDIUM]** Which company created the first commercially successful graphical user interface (GUI) operating system?
- **Marked correct:** Apple
- **Should be:** Apple
- **Wrong options:** Xerox | Microsoft | Commodore
- **Fixed wrong options:** Xerox | Microsoft | Commodore
- **Problem:** The question asks about the 'first commercially successful GUI operating system' but the Apple Lisa (1983) preceded the Macintosh and also had a GUI, yet was not commercially successful. More importantly, Xerox is listed as a wrong answer, but the question's framing could reasonably lead to debate. The answer 'Apple' is defensible for the Macintosh (1984), but the explanation should be more precise.
- **Action:** fix

**[MEDIUM]** What was the name of the first search engine to use link analysis algorithms?
- **Marked correct:** Google
- **Should be:** Google
- **Wrong options:** AltaVista | Yahoo | Lycos
- **Fixed wrong options:** AltaVista | Yahoo | Lycos
- **Problem:** Google was not the first search engine to use link analysis. The Hyperlink-Induced Topic Search (HITS) algorithm was developed by Jon Kleinberg around the same time, and earlier work on link analysis existed. More importantly, BackRub — Google's predecessor — was the first to implement PageRank-style link analysis, but the question should specify this more carefully. The answer is defensible but the framing 'first search engine to use link analysis algorithms' is imprecise enough to be misleading.
- **Action:** fix

**[MEDIUM]** What was the first commercial artificial neural network system widely adopted?
- **Marked correct:** Expert Systems
- **Should be:** Perceptron-based systems (e.g., early optical character recognition systems in the 1960s)
- **Wrong options:** Deep Learning Networks | Convolutional Networks | Transformer Models
- **Fixed wrong options:** Deep Learning Networks | Transformer Models | Convolutional Networks
- **Problem:** Expert systems are NOT artificial neural networks — they are rule-based systems, fundamentally different from neural networks. The question asks about 'the first commercial artificial neural network system' but then gives 'Expert Systems' as the correct answer, which is factually incorrect. Expert systems do not use neural network architecture at all.
- **Action:** fix

**[MEDIUM]** Who founded GitHub?
- **Marked correct:** Tom Preston-Werner, Chris Wanstrath, and PJ Hyett
- **Should be:** Tom Preston-Werner, Chris Wanstrath, PJ Hyett, and Scott Chacon
- **Wrong options:** Linus Torvalds and Eric Raymond | Guido van Rossum and Brett Cannon | Mark Zuckerberg and Eduardo Saverin
- **Fixed wrong options:** Linus Torvalds and Eric Raymond | Guido van Rossum and Brett Cannon | Mark Zuckerberg and Eduardo Saverin
- **Problem:** GitHub was co-founded by four people, not three. Scott Chacon is the fourth co-founder who is omitted from the correct answer. Listing only three of the four founders is factually incomplete.
- **Action:** fix

**[MEDIUM]** What was the primary purpose of the ENIAC computer?
- **Marked correct:** Calculating ballistics tables for military purposes
- **Should be:** Calculating ballistics tables for military purposes
- **Wrong options:** Breaking Enigma codes | Weather prediction | Statistical census analysis
- **Fixed wrong options:** Breaking Enigma codes | Weather prediction | Statistical census analysis
- **Problem:** ENIAC was completed in 1945 and announced publicly in 1946, but it was designed during World War II (1943–1945). The explanation states it was 'specifically designed to calculate trajectory and firing tables during World War II,' which is correct in purpose, but the date '1946' in the explanation refers to its public unveiling, not its design or completion. More importantly, WWII ended in 1945, before ENIAC's public announcement — the explanation is slightly misleading about the timeline.
- **Action:** fix

**[MEDIUM]** Who invented the concept of the hyperlink?
- **Marked correct:** Ted Nelson
- **Wrong options:** Tim Berners-Lee | Doug Engelbart | Alan Turing
- **Problem:** The invention of the hyperlink is genuinely contested. Doug Engelbart demonstrated clickable hyperlinks in his 1968 'Mother of All Demos' and is widely credited with the practical invention, while Ted Nelson coined the term 'hypertext' (not 'hyperlink') in 1963. Crediting Nelson alone as the inventor is debatable.
- **Action:** fix

**[MEDIUM]** What is the name of Intel's primary competitor in CPU manufacturing?
- **Marked correct:** AMD
- **Wrong options:** NVIDIA | Qualcomm | ARM Holdings
- **Problem:** The question asks for Intel's 'primary' competitor in CPU manufacturing, but this is ambiguous. ARM Holdings (via its licensees like Apple, Qualcomm) represents an enormous and growing competitive threat to Intel, and Qualcomm also makes CPUs. However, AMD is the most direct x86 competitor, so the answer is defensible with clearer wording.
- **Action:** fix

**[MEDIUM]** In what year was the first webcam created?
- **Marked correct:** 1993
- **Should be:** 1991
- **Wrong options:** 1995 | 1991 | 1997
- **Fixed wrong options:** 1993 | 1995 | 1997
- **Problem:** The first webcam was set up in 1991 at the University of Cambridge (Trojan Room Coffee Pot), not 1993. The web interface that allowed internet access to the image was added in 1993, but the webcam itself was created in 1991.
- **Action:** fix

**[MEDIUM]** In what year was the first version of Java released?
- **Marked correct:** 1996
- **Wrong options:** 1994 | 1998 | 1995
- **Problem:** Java 1.0 was officially released on January 23, 1996, so the correct answer of 1996 is accurate. However, Java was publicly announced and a beta was available in 1995, and '1995' in the wrong answers could be considered partially correct by some. The explanation should clarify that 1995 was the public announcement/beta, not the official release.
- **Action:** fix

**[MEDIUM]** Who is credited with inventing the transistor?
- **Marked correct:** John Bardeen, Leon Cooper, and Robert Schrieffer
- **Should be:** William Shockley, John Bardeen, and Walter Brattain
- **Wrong options:** William Shockley | Claude Shannon | Alan Turing
- **Fixed wrong options:** Claude Shannon | Alan Turing | Jack Kilby
- **Problem:** The transistor was invented by William Shockley, John Bardeen, and Walter Brattain, who shared the 1956 Nobel Prize in Physics. Leon Cooper and Robert Schrieffer (along with Bardeen) won the 1972 Nobel Prize for BCS theory of superconductivity, not for the transistor. The correct answer should credit Shockley, Bardeen, and Brattain.
- **Action:** fix

**[MEDIUM]** What was the name of the first commercial web server software?
- **Marked correct:** NCSA HTTPd
- **Should be:** NCSA HTTPd
- **Wrong options:** Apache | Nginx | IIS
- **Problem:** The claim that NCSA HTTPd was the 'first commercial web server software' is debatable. NCSA HTTPd was free/open-source academic software, not commercial. The CERN httpd predates it. The question and explanation conflate 'first' with 'commercial' inaccurately.
- **Action:** fix

**[HARD]** Which Bell Labs scientist is credited with inventing the transistor in 1947?
- **Marked correct:** William Shockley
- **Wrong options:** John Bardeen | Leon Cooper | Philip Crosby
- **Fixed wrong options:** Lee de Forest | Leon Cooper | Philip Crosby
- **Problem:** John Bardeen is listed as a wrong answer, but he was equally a co-inventor of the transistor alongside Shockley and Brattain, sharing the Nobel Prize. Crediting Shockley alone as 'the' inventor is misleading and makes Bardeen a contaminated wrong answer.
- **Action:** fix

**[HARD]** In what year did Intel co-founder Gordon Moore formulate Moore's Law?
- **Marked correct:** 1965
- **Should be:** 1965
- **Wrong options:** 1971 | 1960 | 1968
- **Problem:** Moore's original 1965 paper predicted doubling approximately every year (not every two years). The 'every two years' version is a later revision attributed to Moore in 1975. The year 1965 is correct but the explanation misrepresents the original prediction.
- **Action:** fix

**[HARD]** Which programmer wrote the first computer virus, the Creeper worm, in 1971?
- **Marked correct:** Bob Thomas
- **Should be:** Bob Thomas
- **Wrong options:** Richard Stallman | Ken Thompson | Dennis Ritchie
- **Problem:** The Creeper worm is generally classified as the first computer worm, not the first computer virus — these are distinct categories. Additionally, calling it a 'virus' in the question is technically inaccurate.
- **Action:** fix

**[HARD]** Which company released the Alto, widely considered the first personal computer, in 1973?
- **Marked correct:** Xerox
- **Should be:** Xerox
- **Wrong options:** Apple Computer | Commodore | Digital Equipment Corporation
- **Problem:** Calling the Alto 'the first personal computer' is debatable — it was a research workstation never sold commercially. The question simultaneously acknowledges this in the explanation, undermining the framing. Other machines like the Kenbak-1 (1971) or Xerox Alto's contemporaries have claims to 'first PC' status.
- **Action:** fix

**[HARD]** In what year did the first instant message service, The WELL's Picospan, launch?
- **Marked correct:** 1986
- **Wrong options:** 1988 | 1992 | 1984
- **Problem:** The question claims Picospan was 'the first instant message service,' which is inaccurate. Picospan was a conferencing/BBS system, not an instant messaging service. The first widely recognized instant messaging system is generally considered to be Talkomatic on PLATO (1973) or later ICQ/AIM. The question conflates online conferencing with instant messaging.
- **Action:** fix

**[HARD]** Which mathematician created the first database management system, the IMS system?
- **Marked correct:** Charles Bachman
- **Should be:** Charles Bachman
- **Wrong options:** E. F. Codd | Ted Codd | Donald Chamberlin
- **Problem:** Charles Bachman did not create IMS. IMS (Information Management System) was developed primarily by IBM engineers including Vern Lund and others for NASA's Apollo program. Bachman's notable work was on the network database model (CODASYL/IDS at GE), not IMS specifically.
- **Action:** fix

**[HARD]** What was the code name for the Manhattan Project's computing effort that used early computers?
- **Marked correct:** Chicago Pile-1 computational support
- **Wrong options:** Project Trinity Computing | Los Alamos Electronic Calculator | Enrico Fermi Systems
- **Problem:** The question asks about a 'code name' for the Manhattan Project's computing effort but then provides 'Chicago Pile-1 computational support' as the answer, which is not a code name for any computing effort. The question is fabricated around a vague, unverifiable premise with a nonsensical answer.
- **Action:** delete

**[HARD]** Which company developed the first practical laser printer, released in 1984?
- **Marked correct:** Hewlett-Packard
- **Should be:** Hewlett-Packard
- **Wrong options:** Xerox | Canon | Brother Industries
- **Fixed wrong options:** IBM | Apple Computer | Brother Industries
- **Problem:** Xerox is listed as a wrong answer, but Xerox (via Gary Starkweather at PARC) invented the laser printer in 1969 and released the Xerox 9700 in 1977. The HP LaserJet (1984) was the first affordable personal laser printer, so the question's framing of 'first practical laser printer' makes Xerox a legitimate competing answer.
- **Action:** fix

**[HARD]** What was the storage capacity of the first Apple hard disk drive, released in 1984?
- **Marked correct:** 20 megabytes
- **Should be:** 20 megabytes
- **Wrong options:** 10 megabytes | 32 megabytes | 50 megabytes
- **Problem:** The Apple HD-20 was released in 1985, not 1984. The original Macintosh (1984) had no internal hard drive option at launch; the HD-20 external drive came later in 1985. Also, it was not the first commercially available hard drive for personal computers at any price point — hard drives had been available for PCs before this.
- **Action:** fix

**[HARD]** Which protocol did Tim Berners-Lee propose for transferring hypertext on the ARPANET?
- **Marked correct:** HTTP
- **Should be:** HTTP
- **Wrong options:** SMTP | FTP | Gopher
- **Problem:** Tim Berners-Lee proposed HTTP for the World Wide Web at CERN, not for the ARPANET. The question incorrectly states the protocol was for ARPANET; the Web and HTTP were entirely separate from ARPANET.
- **Action:** fix

**[HARD]** Which computer scientist developed the concept of virtual memory?
- **Marked correct:** Tom Kilburn
- **Should be:** Tom Kilburn
- **Wrong options:** Grace Hopper | Maurice Wilkes | Frederic Williams
- **Problem:** Virtual memory was pioneered with the Atlas computer, but the Atlas was developed by a team including Tom Kilburn and others; it was not completed until the early 1960s, not the 1950s. Additionally, the explanation conflates the concept development timeline. The credit is generally accepted for Kilburn's team, but the explanation's claim of 'the 1950s' is inaccurate — Atlas ran in 1962.
- **Action:** fix

**[HARD]** Which company developed the first commercially successful relational database?
- **Marked correct:** Oracle Corporation
- **Should be:** Oracle Corporation
- **Wrong options:** IBM | Sybase | Informix
- **Fixed wrong options:** IBM | Sybase | Informix
- **Problem:** IBM developed System R, one of the first relational database systems, and could reasonably be considered a pioneer of commercial relational databases. The question's framing of 'first commercially successful' is debatable but Oracle's claim is generally accepted; however, IBM is listed as a wrong answer, which may mislead given IBM's foundational role.
- **Action:** fix

**[HARD]** What was the processing speed of the IBM System/360 mainframe, released in 1964?
- **Marked correct:** 1 to 3 megahertz
- **Should be:** 1 to 3 megahertz
- **Wrong options:** 100 kilohertz to 1 megahertz | 5 to 10 megahertz | 10 to 20 megahertz
- **Problem:** The IBM System/360 used a cycle time measured in microseconds, not a clock speed in MHz in the modern sense. Characterizing it as '1 to 3 MHz' is an oversimplification and potentially inaccurate — different models had cycle times ranging from 1 microsecond down to fractions of a microsecond, and the architecture did not use a single clock frequency in the way the question implies.
- **Action:** fix

**[HARD]** Which programmer created the software architecture and framework known as model-view-controller (MVC)?
- **Marked correct:** Trygve Reenskaug
- **Should be:** Trygve Reenskaug
- **Wrong options:** Grady Booch | Gang of Four | David Parnas
- **Problem:** Trygve Reenskaug developed MVC while visiting Xerox PARC, but he was not 'working on Smalltalk at Xerox PARC' as a staff member — he was a visiting scientist. Also, the MVC work was done in 1978-1979, which is correct, but the characterization of his role should be accurate.
- **Action:** fix

**[HARD]** What was the name of the first commercially available personal computer?
- **Marked correct:** Altair 8800
- **Should be:** Altair 8800
- **Wrong options:** Apple II | Commodore PET | TRS-80
- **Problem:** The Altair 8800 is widely cited as the first commercially successful personal computer, but the Kenbak-1 (1971) and Micral N (1973) are also considered by some historians to be earlier commercial personal computers. The explanation's claim that it predated 'Apple II and other competitors' is true but omits earlier machines.
- **Action:** fix

**[HARD]** Who invented the relational database model that became the foundation for SQL?
- **Marked correct:** Edgar F. Codd
- **Should be:** Edgar F. Codd
- **Wrong options:** Donald Chamberlin | Raymond Boyce | Ted Codd
- **Fixed wrong options:** Donald Chamberlin | Raymond Boyce | Christopher Date
- **Problem:** 'Ted Codd' is listed as a wrong answer, but Ted Codd and Edgar F. Codd are the same person — Ted is the common nickname for Edgar. This makes one of the wrong answers also correct.
- **Action:** fix

**[HARD]** Which programming language was created by Guido van Rossum in 1991?
- **Marked correct:** Python
- **Should be:** Python
- **Wrong options:** Perl | Ruby | PHP
- **Problem:** Python was first conceived and developed starting in 1989, and version 0.9.0 was released in February 1991. However, Guido van Rossum began working on it in December 1989, so saying it was 'created in 1991' is slightly misleading but the public release date of 1991 is defensible. The explanation is acceptable.
- **Action:** fix

**[HARD]** What was the primary function of the ENIAC, completed in 1946?
- **Marked correct:** Calculate ballistic trajectories for artillery
- **Should be:** Calculate ballistic trajectories for artillery
- **Wrong options:** Encrypt military communications | Process census data | Simulate weather patterns
- **Problem:** ENIAC was completed in 1945 (operational by late 1945) and formally dedicated/publicly announced in February 1946, not 'completed in 1946.' Also, WWII ended in 1945 before ENIAC was fully operational, so it never actually calculated firing tables during the war.
- **Action:** fix

**[HARD]** Who developed the concept of Object-Oriented Programming and created Smalltalk?
- **Marked correct:** Alan Kay
- **Should be:** Alan Kay
- **Wrong options:** Bjarne Stroustrup | Ole-Johan Dahl | Kristen Nygaard
- **Fixed wrong options:** Bjarne Stroustrup | James Gosling | Grady Booch
- **Problem:** Ole-Johan Dahl and Kristen Nygaard (listed as wrong answers) are actually credited with inventing object-oriented programming through Simula in the 1960s, predating Alan Kay's work. Listing them as wrong answers is misleading since they have a strong claim to inventing OOP. Alan Kay coined the term and developed Smalltalk, but did not solely invent OOP.
- **Action:** fix

**[HARD]** Who is credited with inventing the graphical user interface (GUI)?
- **Marked correct:** Douglas Engelbart
- **Should be:** Xerox PARC researchers
- **Wrong options:** Alan Kay | Xerox engineers | Steve Jobs
- **Fixed wrong options:** Douglas Engelbart | Alan Kay | Steve Jobs
- **Problem:** Douglas Engelbart's 1968 demo showed early elements like the mouse and hypertext, but the graphical user interface as a concept is more accurately credited to Xerox PARC researchers (particularly the Alto system in 1973), and Alan Kay was central to that work. Engelbart is credited with the mouse and early interactive computing, not the GUI per se. Furthermore, 'Xerox engineers' is listed as a wrong answer when they have a stronger claim to inventing the GUI than Engelbart does.
- **Action:** fix

**[HARD]** What was the primary programming language used to develop Unix?
- **Marked correct:** C
- **Should be:** C
- **Wrong options:** Assembly | B | Pascal
- **Fixed wrong options:** Fortran | B | Pascal
- **Problem:** Unix was originally written in Assembly language before being rewritten in C. 'Assembly' is listed as a wrong answer, but it was actually the original language used to develop Unix before C existed, making it a partially correct answer that could confuse players.
- **Action:** fix

**[HARD]** What was the name of the first web browser released in 1993?
- **Marked correct:** Mosaic
- **Should be:** Mosaic
- **Wrong options:** Netscape Navigator | Internet Explorer | Opera
- **Problem:** The question asks for 'the first web browser released in 1993' but WorldWideWeb (later Nexus) was released in 1990 and Line Mode Browser in 1991. Mosaic was the first widely-used graphical browser released in 1993, but the question should specify 'first widely-used graphical web browser' to be accurate.
- **Action:** fix

**[HARD]** Which company developed the TCP/IP protocol suite that became the Internet standard?
- **Marked correct:** DARPA (with Vint Cerf and Bob Kahn)
- **Should be:** DARPA (with Vint Cerf and Bob Kahn)
- **Wrong options:** Bell Labs | Xerox | AT&T
- **Problem:** The question asks which 'company' developed TCP/IP, but DARPA is a government agency, not a company. Additionally, Cerf and Kahn developed TCP/IP while at DARPA/Stanford, not on 'DARPANET projects' specifically. The framing is misleading.
- **Action:** fix

**[HARD]** Who developed the PostScript language used in printing and graphics?
- **Marked correct:** John Warnock
- **Should be:** John Warnock and Charles Geschke
- **Wrong options:** Steve Jobs | Xerox engineers | Adobe founders
- **Fixed wrong options:** Steve Jobs | Xerox engineers | Donald Knuth
- **Problem:** The correct answer 'John Warnock' and the wrong answer 'Adobe founders' refer to the same people — John Warnock and Charles Geschke ARE the Adobe founders. This makes both answers simultaneously correct and is confusing.
- **Action:** fix

**[HARD]** What was the name of the first version of the Java programming language released by Sun Microsystems?
- **Marked correct:** Java 1.0
- **Should be:** Java 1.0
- **Wrong options:** Java Alpha | Java Beta | JDK 1.0
- **Fixed wrong options:** Java Alpha | Java Beta | Oak
- **Problem:** Java 1.0 and JDK 1.0 refer to essentially the same release — the JDK (Java Development Kit) 1.0 was the official name of the first public release in January 1996. Having JDK 1.0 as a wrong answer when the correct answer is Java 1.0 is misleading since they are the same release.
- **Action:** fix

**[HARD]** Which protocol did Roy Fielding define for web services and REST architecture?
- **Marked correct:** HTTP and REST
- **Should be:** REST (Representational State Transfer)
- **Wrong options:** SOAP | XML-RPC | CORBA
- **Fixed wrong options:** SOAP | XML-RPC | CORBA
- **Problem:** Roy Fielding defined REST in his dissertation but did not define HTTP — HTTP was defined primarily by Tim Berners-Lee. Fielding did co-author the HTTP/1.1 specification (RFC 2616), but the question's framing of 'which protocol did Roy Fielding define' with 'HTTP and REST' as the answer is misleading and inaccurate.
- **Action:** fix

**[HARD]** Who invented the concept of 'hypertext' that became the basis for the web?
- **Marked correct:** Ted Nelson
- **Should be:** Ted Nelson
- **Wrong options:** Tim Berners-Lee | Douglas Engelbart | Vannevar Bush
- **Fixed wrong options:** Tim Berners-Lee | Douglas Engelbart | Vannevar Bush
- **Problem:** Vannevar Bush described the concept of linked information in his 1945 'As We May Think' essay (the Memex), predating Nelson's coinage of 'hypertext.' Douglas Engelbart also made foundational contributions. The wrong answer list includes people with legitimate claims to the concept, making this question ambiguous. The question should clarify that Nelson coined the specific term 'hypertext.'
- **Action:** fix

**[HARD]** What was the original name of the Python programming language?
- **Marked correct:** It had no previous name; Guido van Rossum named it after Monty Python
- **Should be:** It had no previous name; Guido van Rossum named it after Monty Python
- **Wrong options:** Viper | Cobra | ABC
- **Fixed wrong options:** Viper | Cobra | Script
- **Problem:** The explanation says Python 'wasn't derived from any previous language,' but Python was heavily influenced by and partly derived from ABC, which is listed as a wrong answer. ABC was actually a direct predecessor language that van Rossum worked on before creating Python.
- **Action:** fix

**[HARD]** Who developed the first version of Cascading Style Sheets (CSS) standardized in 1996?
- **Marked correct:** Håkon Wium Lie
- **Should be:** Håkon Wium Lie
- **Wrong options:** Tim Berners-Lee | Marc Andreessen | W3C consortium
- **Fixed wrong options:** Tim Berners-Lee | Marc Andreessen | Bert Bos
- **Problem:** The wrong answer 'W3C consortium' is problematic because the W3C did in fact standardize CSS Level 1 in 1996, which is what the question asks about. Lie proposed CSS but the W3C released it as a standard, so crediting the W3C as wrong is inaccurate.
- **Action:** fix

**[HARD]** Who created the LAMP stack concept combining Linux, Apache, MySQL, and PHP?
- **Marked correct:** Michael Kunze
- **Should be:** Michael Kunze
- **Wrong options:** Rasmus Lerdorf | Monty Widenius | Tim Berners-Lee
- **Fixed wrong options:** Rasmus Lerdorf | Monty Widenius | Tim Berners-Lee
- **Problem:** Michael Kunze is widely credited with coining the LAMP acronym, but he was a journalist/author writing for a German computing magazine (iX), not an employee of Zend Technologies. The Zend Technologies attribution is incorrect.
- **Action:** fix

**[HARD]** Who developed the concept of virtual memory in computer operating systems?
- **Marked correct:** Fritz-Rudolf Güntsch
- **Should be:** Tom Kilburn (and the Atlas Computer team)
- **Wrong options:** Donald Knuth | Grace Hopper | Tom Kilburn
- **Fixed wrong options:** Donald Knuth | Grace Hopper | Fritz-Rudolf Güntsch
- **Problem:** The claim that Fritz-Rudolf Güntsch developed virtual memory in 1956 for the Telefunken TR-4 is disputed. Virtual memory is more commonly attributed to the Atlas Computer project at the University of Manchester (Tom Kilburn and colleagues) around 1959-1962, and Güntsch's work predated it but is not universally recognized as the definitive origin. Tom Kilburn is listed as a wrong answer but has a strong claim to the invention.
- **Action:** fix

**[HARD]** What was the first major programming language designed to run on multiple platforms using a virtual machine?
- **Marked correct:** UCSD Pascal
- **Should be:** UCSD Pascal
- **Wrong options:** Java | C | Forth
- **Fixed wrong options:** Java | C | BASIC
- **Problem:** The question claims UCSD Pascal was 'the first major programming language designed to run on multiple platforms using a virtual machine,' but Forth (listed as a wrong answer) also used a virtual machine approach for portability around the same era, and earlier languages like BCPL also had portable intermediate code. The claim of 'first' is debatable.
- **Action:** fix

**[HARD]** What was the name of the first object-oriented programming language, created in the late 1960s at Xerox Alto?
- **Marked correct:** Smalltalk
- **Should be:** Simula
- **Wrong options:** Simula | Algol | C++
- **Fixed wrong options:** Smalltalk | Algol | C++
- **Problem:** Smalltalk was developed at Xerox PARC, not 'Xerox Alto' (the Alto was a computer, not a lab). More critically, Simula (created in the 1960s by Nygaard and Dahl) is widely recognized as the first object-oriented programming language, not Smalltalk. The question's framing makes Simula the correct answer, yet it is listed as a wrong answer.
- **Action:** fix

**[HARD]** What is the name of the cryptographic algorithm published by the NSA in 2001 that replaced DES?
- **Marked correct:** Advanced Encryption Standard (AES)
- **Should be:** Advanced Encryption Standard (AES)
- **Wrong options:** Blowfish | RSA-2048 | Twofish
- **Fixed wrong options:** Blowfish | RSA-2048 | Twofish
- **Problem:** AES was not published by the NSA. It was standardized by NIST (National Institute of Standards and Technology) in 2001 after an open international competition. The NSA was not the developer or publisher of AES.
- **Action:** fix

**[HARD]** Who invented the concept of 'packet switching,' which became fundamental to modern internet communication?
- **Marked correct:** Donald Davies
- **Should be:** Donald Davies
- **Wrong options:** Vint Cerf | Robert Kahn | Lawrence Roberts
- **Fixed wrong options:** Vint Cerf | Robert Kahn | Lawrence Roberts
- **Problem:** Packet switching is credited to both Paul Baran (at RAND Corporation) and Donald Davies (at NPL) independently. The question asks who 'invented' it without acknowledging Baran, making the answer ambiguous. Davies coined the term 'packet switching,' but Baran developed the same concept simultaneously.
- **Action:** fix

**[HARD]** Which sorting algorithm, developed in 1962 by C.A.R. Hoare, uses a divide-and-conquer approach with partitioning?
- **Marked correct:** Quicksort
- **Should be:** Quicksort
- **Wrong options:** Mergesort | Heapsort | Shellsort
- **Fixed wrong options:** Mergesort | Heapsort | Shellsort
- **Problem:** Quicksort was published by Tony Hoare in 1959/1960, not 1962. Hoare developed it in 1959 and it was published in 1961 in Computer Journal.
- **Action:** fix

**[HARD]** Which company developed the first commercially successful graphical user interface, released in 1981?
- **Marked correct:** Xerox
- **Should be:** Xerox
- **Wrong options:** Apple | Microsoft | IBM
- **Fixed wrong options:** Apple | Microsoft | IBM
- **Problem:** The Xerox Alto was released in 1973, not 1981, and was never commercially sold — it was a research machine. The first commercially available GUI computer was the Xerox Star (8010), released in 1981. The answer Xerox is defensible but the explanation contains a factual error calling it the 'Xerox Alto.'
- **Action:** fix

**[HARD]** Which programming language, created by Guido van Rossum in 1989, was named after a British comedy group?
- **Marked correct:** Python
- **Should be:** Python
- **Wrong options:** Ruby | Perl | Lua
- **Fixed wrong options:** Ruby | Perl | Lua
- **Problem:** The explanation contains an invented and nonsensical claim that Rossum named Python while 'reading From __future__ imports from the group's scripts.' This fabricated detail undermines the question's credibility. Also, Python's development began in 1989 but it was first released in 1991.
- **Action:** fix

**[HARD]** What was the name of the first electronic general-purpose computer, completed at the University of Pennsylvania in 1946?
- **Marked correct:** ENIAC
- **Wrong options:** Colossus | Mark I | ABC
- **Problem:** The question asks for the first 'electronic general-purpose computer' but this claim is contested. The ABC (Atanasoff-Berry Computer) and Colossus also have claims to being early electronic computers. ENIAC is widely accepted as the first general-purpose, Turing-complete electronic computer, but the question should clarify 'Turing-complete' or 'programmable general-purpose' to avoid ambiguity. Additionally, ABC is listed as a wrong answer, which could confuse knowledgeable respondents since ABC predated ENIAC.
- **Action:** fix

**[HARD]** Who developed the concept of 'structured programming' and proved its importance in the 1960s?
- **Marked correct:** Edsger Dijkstra
- **Wrong options:** Donald Knuth | Niklaus Wirth | C.A.R. Hoare
- **Problem:** The concept of structured programming was developed collaboratively; Dijkstra, Hoare, and Niklaus Wirth all made foundational contributions. C.A.R. Hoare and Wirth are listed as wrong answers but both contributed significantly to structured programming's theoretical basis. The question overstates Dijkstra's sole authorship of the concept.
- **Action:** fix

**[HARD]** What was the name of the first relational database, designed by Edgar F. Codd and implemented at IBM in 1974?
- **Marked correct:** System R
- **Should be:** System R
- **Wrong options:** Ingres | Oracle | DB2
- **Problem:** System R was not the first relational database. Ingres, developed at UC Berkeley, was developed concurrently and also implemented Codd's relational model. More importantly, System R was a research prototype, not a product, and was not 'designed by Edgar F. Codd' — it was designed by IBM researchers (notably Donald Chamberlin and Raymond Boyce). Codd proposed the relational model theoretically. The question's framing is misleading.
- **Action:** fix

**[HARD]** What is the name of the RISC architecture developed by Berkeley computer scientists in the early 1980s?
- **Marked correct:** SPARC
- **Should be:** RISC-I / Berkeley RISC
- **Wrong options:** MIPS | Alpha | PowerPC
- **Fixed wrong options:** SPARC | MIPS | PowerPC
- **Problem:** SPARC was not developed at UC Berkeley. SPARC was developed by Sun Microsystems, inspired by the Berkeley RISC project. The Berkeley RISC project inspired MIPS and SPARC but SPARC itself was a Sun Microsystems design. The Berkeley RISC architecture itself is more directly associated with the RISC-I and RISC-II projects, which influenced SPARC.
- **Action:** fix

**[HARD]** Which Bell Labs scientist developed the Unix philosophy and created the B programming language?
- **Marked correct:** Ken Thompson
- **Wrong options:** Dennis Ritchie | Brian Kernighan | Doug McIlroy
- **Problem:** The question asks who 'developed the Unix philosophy,' but the Unix philosophy is most commonly attributed to Doug McIlroy (who is listed as a wrong answer), not Ken Thompson. Ken Thompson created Unix and the B language, but McIlroy articulated the Unix philosophy. This makes a wrong answer arguably more correct for part of the question.
- **Action:** fix

**[HARD]** What was the first general-purpose electronic computer, completed in 1946?
- **Marked correct:** ENIAC
- **Wrong options:** Colossus | UNIVAC | Mark I
- **Problem:** This is a near-duplicate of Question #1 (same UUID topic, same answer ENIAC), and the claim that ENIAC was 'Turing-complete' is debated by historians. Additionally, ENIAC's status as 'first general-purpose electronic computer' vs. ABC or Colossus remains contested. The question is redundant with Q1 and should be removed or significantly differentiated.
- **Action:** fix

**[HARD]** Who invented the graphical user interface (GUI) that Apple used in the Macintosh?
- **Marked correct:** Xerox Alto research team (led by Alan Kay)
- **Should be:** Xerox PARC research team
- **Wrong options:** Apple in-house team | Microsoft research division | IBM Watson labs
- **Problem:** The question asks who 'invented the GUI that Apple used in the Macintosh,' but the answer lists the 'Xerox Alto research team (led by Alan Kay)' — however, Alan Kay did not lead the Xerox Alto project; the Alto was led by Chuck Thacker and Butler Lampson. Alan Kay led the Dynabook concept and Smalltalk. The attribution is inaccurate.
- **Action:** fix

**[HARD]** Which microprocessor architecture did ARM Holdings design that became dominant in mobile computing?
- **Marked correct:** ARMv7
- **Should be:** ARM (Advanced RISC Machine) architecture
- **Wrong options:** MIPS64 | PowerPC | SPARC64
- **Problem:** The question asks which 'microprocessor architecture' ARM designed that became dominant in mobile computing, but singling out ARMv7 is misleading — ARM's dominance spans multiple architecture versions (ARMv6, ARMv7, ARMv8/AArch64). ARMv8 (64-bit) is now the dominant mobile architecture. The answer of a specific version makes this ambiguous and potentially outdated.
- **Action:** fix

**[HARD]** What was the name of the first commercially successful relational database management system?
- **Marked correct:** System/R or DB2
- **Should be:** Oracle
- **Wrong options:** Ingres | Oracle | PostgreSQL
- **Fixed wrong options:** DB2 | Ingres | PostgreSQL
- **Problem:** Oracle is listed as a wrong answer, but Oracle (released in 1979) is widely considered the first commercially successful relational DBMS, predating IBM's DB2 (1983). The correct answer 'System/R or DB2' is itself problematic since System/R was a research prototype never sold commercially, and Oracle beat DB2 to market. This question is factually muddled.
- **Action:** fix

**[HARD]** What was the first version of the Java programming language released as?
- **Marked correct:** Oak
- **Should be:** Oak
- **Wrong options:** Java 1.0 | GreenTalk | Duke
- **Fixed wrong options:** Java 1.0 | JavaScript | Duke
- **Problem:** The question asks what Java 'was first released as,' with 'Oak' as correct. However, 'GreenTalk' is listed as a wrong answer — GreenTalk actually preceded Oak as the very first name for the language, making it a legitimate alternate answer. The chronological order was GreenTalk → Oak → LiveScript → Java. Additionally, 'Java 1.0' was indeed the first public release name, which could also be considered a valid answer depending on interpretation.
- **Action:** fix

**[HARD]** Which company created the first successful graphical web browser?
- **Marked correct:** Netscape (with Mosaic being the predecessor)
- **Should be:** NCSA (National Center for Supercomputing Applications)
- **Wrong options:** Microsoft | Opera Software | NCSA alone
- **Fixed wrong options:** Microsoft | Opera Software | Netscape
- **Problem:** NCSA Mosaic, created by NCSA (not Netscape), was the first successful graphical web browser, released in 1993. Netscape Navigator was the first commercially dominant browser but not the first successful graphical browser. The correct answer parenthetical contradicts itself by calling Mosaic a 'predecessor.'
- **Action:** fix

**[HARD]** Which AI model architecture, introduced by Google in 2017, revolutionized natural language processing?
- **Marked correct:** Transformer
- **Should be:** Transformer
- **Wrong options:** LSTM | GRU | Attention Mechanism
- **Fixed wrong options:** LSTM | GRU | RNN (Recurrent Neural Network)
- **Problem:** The Attention Mechanism is listed as a wrong answer, but the Transformer architecture is fundamentally built upon and named after the attention mechanism — it could be argued attention is the core innovation. More critically, the question asks which 'architecture' was introduced, so 'Attention Mechanism' as a wrong answer is misleading but defensible. However, the question is otherwise sound.
- **Action:** fix

**[HARD]** What was the first smartphone to use a touchscreen interface?
- **Marked correct:** IBM Simon
- **Should be:** IBM Simon
- **Wrong options:** Apple iPhone | Palm Pilot | Pocket PC
- **Fixed wrong options:** Apple iPhone | Nokia 9000 | Pocket PC
- **Problem:** The Palm Pilot is listed as a wrong answer, but it was not a smartphone and didn't use a touchscreen in the same sense (it used a stylus on a resistive screen). More importantly, the IBM Simon is debatably the first 'smartphone' with a touchscreen, but the question's framing is sound. However, the Palm Pilot did have a touchscreen, making its inclusion as a wrong answer potentially confusing — the question should clarify 'first smartphone with a touchscreen.'
- **Action:** fix

**[HARD]** What was the primary purpose of the ARPANET, created in 1969?
- **Marked correct:** Research network to enable resource sharing among universities and research institutions
- **Should be:** Research network to enable resource sharing among universities and research institutions
- **Wrong options:** Military communications backbone | Commercial internet infrastructure | Government surveillance network
- **Fixed wrong options:** Commercial internet infrastructure | Government surveillance network | Public telecommunications network
- **Problem:** ARPANET was indeed partly motivated by military communications resilience — this was a documented goal of DARPA funding. Listing 'Military communications backbone' as clearly wrong is an oversimplification; it had both research and military/defense purposes, making this a contaminated wrong answer.
- **Action:** fix

**[HARD]** What is the maximum number of transistors on the largest commercially available GPU as of early 2026?
- **Marked correct:** Over 100 billion (approximately 140+ billion on NVIDIA H200)
- **Should be:** Over 200 billion (approximately 208 billion on NVIDIA GB200/Blackwell)
- **Wrong options:** 50 billion | 75 billion | 200+ billion
- **Fixed wrong options:** 50 billion | 75 billion | 140 billion
- **Problem:** The NVIDIA H200 uses the same GH100 die as the H100 with approximately 80 billion transistors, not 140+ billion. The GB200 (Blackwell architecture) has ~208 billion transistors. The stated transistor count for the H200 is factually incorrect, and the question conflates different products.
- **Action:** fix

**[HARD]** Which computer scientist developed the algorithm for page ranking that became Google's foundation?
- **Marked correct:** Larry Page and Sergey Brin
- **Should be:** Larry Page and Sergey Brin
- **Wrong options:** Jon Kleinberg | Rajeev Motwani | Terry Winograd
- **Fixed wrong options:** Jon Kleinberg | Tim Berners-Lee | Vint Cerf
- **Problem:** Rajeev Motwani and Terry Winograd were Stanford advisors who contributed to the development of PageRank and Google. Listing them as wrong answers when they were acknowledged contributors to the foundational work is misleading and potentially contaminated.
- **Action:** fix

**[HARD]** What was the name of Microsoft's first operating system released in 1981?
- **Marked correct:** MS-DOS
- **Should be:** MS-DOS
- **Wrong options:** Windows 1.0 | OS/2 | Xenix
- **Fixed wrong options:** Windows 1.0 | OS/2 | CP/M
- **Problem:** Xenix was actually a Microsoft product — it was Microsoft's version of Unix, released in 1980 before MS-DOS. Listing 'Xenix' as a wrong answer when it is a genuine Microsoft operating system (and predates MS-DOS) contaminates the wrong answers.
- **Action:** fix

**[HARD]** Which protocol, developed by Roy Fielding, defined the architectural principles of REST?
- **Marked correct:** HTTP and REST (Representational State Transfer)
- **Should be:** REST (Representational State Transfer)
- **Wrong options:** SOAP | XML-RPC | CORBA
- **Fixed wrong options:** SOAP | XML-RPC | CORBA
- **Problem:** REST is not a 'protocol' — it is an architectural style. The question asks 'which protocol' but then answers with 'HTTP and REST,' which is confused. REST is not a protocol; HTTP is the protocol. The question is poorly framed.
- **Action:** fix

**[HARD]** What was the first video game ever played over the Internet?
- **Marked correct:** Spacewar! (via ARPANET in 1977)
- **Should be:** Maze War (1973)
- **Wrong options:** Pong | Adventure | Asteroids
- **Fixed wrong options:** Pong | Adventure | Spacewar!
- **Problem:** The claim that Spacewar! was played over ARPANET in 1977 is not well-documented as the 'first video game ever played over the Internet.' The history of networked gaming is complex and this specific claim lacks reliable sourcing. Maze War (1973) is often cited as an earlier networked game.
- **Action:** fix

**[HARD]** Who designed the SHA-1 cryptographic hash function?
- **Marked correct:** NSA (National Security Agency)
- **Should be:** NSA (National Security Agency)
- **Wrong options:** RSA Laboratories | MIT | NIST
- **Fixed wrong options:** RSA Laboratories | MIT | IBM
- **Problem:** NIST published SHA-1 — it is not merely a wrong answer. SHA-1 was designed by the NSA but published by NIST as a Federal Information Processing Standard. Listing NIST as a wrong answer is misleading since NIST was officially responsible for its publication.
- **Action:** fix

**[HARD]** What acronym refers to the five-layer internet model used in TCP/IP?
- **Marked correct:** OSI model (or TCP/IP model with 4-5 layers)
- **Should be:** TCP/IP model (also called the Internet model, with 4 or 5 layers)
- **Wrong options:** LAMP | MEAN | LEMP
- **Fixed wrong options:** OSI model (7 layers) | SNA model | AppleTalk model
- **Problem:** The question asks for an acronym referring to the 'five-layer internet model used in TCP/IP,' but the correct answer given is 'OSI model (or TCP/IP model with 4-5 layers).' The OSI model has 7 layers, not 5, and is not a TCP/IP model. The question is internally contradictory and the correct answer is malformed. LAMP, MEAN, and LEMP are web stack acronyms, not networking models.
- **Action:** fix

**[HARD]** Which quantum computing company was founded by John Preskill at Caltech?
- **Marked correct:** Caltech (he founded research, not a company; or refer to Quantum Supremacy research)
- **Wrong options:** IonQ | Rigetti Computing | D-Wave Systems
- **Problem:** The question asks which quantum computing company was founded by John Preskill, but the correct answer itself admits he didn't found a company. This is a self-defeating question with no valid correct answer among the choices.
- **Action:** delete

**[HARD]** Who invented the Ethernet networking technology at Xerox PARC in 1973?
- **Marked correct:** Robert Metcalfe
- **Should be:** Robert Metcalfe
- **Wrong options:** David Boggs | Charles Simonyi | Alan Kay
- **Fixed wrong options:** Vint Cerf | Charles Simonyi | Alan Kay
- **Problem:** David Boggs co-invented Ethernet with Robert Metcalfe and is listed as a wrong answer, which is misleading. While Metcalfe is the primary credited inventor, Boggs was a genuine co-inventor and co-author of the foundational Ethernet paper.
- **Action:** fix

