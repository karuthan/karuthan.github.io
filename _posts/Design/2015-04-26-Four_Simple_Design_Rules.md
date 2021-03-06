---
title: நான்கு  எளிய மென்பொருள் வடிவமைப்பு விதிகள்   4  Simple Design Rules
layout: article 
author: கருத்தன்
Search:  
categories: design
modified: 2015-04-26
---
எது நல்ல வடிவமைப்பு ?

இதுல நல்லது கேட்டது என்று ஒன்றும் இல்லை,  இருப்பதைவிட
மேலும் மேம்படுத்தும் வடிவமைப்பே சிறந்தது.

>வருங்காலத்தை கணிக்கும் வகையில் குறியீடாதீர்,  மாற்றம் வரும் போது மாற்றவதற்கு ஏதுவாய் இப்போது உங்கள் குறியீட்டை அமையுங்கள் -   Sandi Metz 

###Kent Beck's  நான்கு  எளிய மென்பொருள் வடிவமைப்பு விதிகள்

1. சோதனைகளில் தேர்ச்சி பெறசெய் ( Tests Pass )
2. நோக்கத்தை வெளிபடுத்து ( Expresses Intent )
3. போலிகளற்றதாய் ஆக்கு ( No Duplication )
4. சிறிதாக்கு ( small ) 

####1. சோதனைகளில் தேர்ச்சி பெறசெய்

குறியீட்டில் மாற்றங்களை, நாம்  நம்பிக்கையுடன் மாற்ற சோதனைகள் தேவை.  சோதனைகள் குறியீட்டின் செயல்பாட்டை எளித்தில் உணர்த்தவும், சரிபார்க்கவும்  உதவும்.
எனவே "சோதனைகளில் தேர்ச்சி" மேம்பட்ட வடிவமைப்புக்கு ஓர் அளவுகோல்.

####2. நோக்கத்தை வெளிபடுத்து
நிரலின் கூறுகள் மாற்றங்களுக்கு உட்படுவது இயல்பு.  நிரலில் ஒரு கூறு இதைதான் செய்கிறது என்று வரையறுத்து சொல்ல முடியவில்லை என்றாலோ அதற்கு தகுந்த பெயர் வைப்பதில் குழப்பம்  இருந்தாலோ அது சிக்கலுக்கு (problem) அறிகுறி / சீரமைப்பின் (refactor) தேவையை வலியுறுத்தும்.

>சொல்வது ஒன்று , செய்வன  வேறாய் இருக்க கூடாது.

####3. போலிகளற்றதாய் ஆக்கு
ஓர் நிரலின்  / பயன்பாட்டின் செயல்அறிவு (knowledge of application / business function )  போலிகளற்றதாய் இருக்க வேண்டும்.  செயல்அறிவு பல இடங்களில் இருக்ககூடாது அதற்கென்று ஒரே ஒரு இடம் இருத்தல் வேண்டும்.

>ஒரு நிரலின் செயல்அறிவு கொடியநோய்க்கு மருந்து என்று எடுத்துக்கொள்வோம் , அவ்வறிவுக்கு  போலி இருக்க கூடாது, இருந்தா என்ன ஆகுமென்றால் போலிகள் தனித்தனியாய் மாறும், முடிவில் எந்த போலியும் கொடியநோய்க்கு மருந்தாக!

குறியீடுகள் போலிகள் இருக்கலாம், செயல்அறிவில் போலிகளற்றதாய் இருத்தல் வேண்டும்.

####4. சிறிதாக்கு
மேற்கூறிய 3 விதிகளை கடைப்பித்த பின்   "எது தேவை எது தேவையில்லை" என்ற கேள்விக்கு உட்படுத்துவது நல்லது. 

####விதிகளை பின்பற்றும் முறை
4 விதிகள் ஒன்றுக்கு ஒன்று பிண்ணி பிணைத்தவை இவற்றை பின்பற்ற 
எளிய  படிமுறை ஒன்றும் இல்லை.

>வழியே இல்லை சொல்லவா இவ்வளவு நேரம் ?

உங்க சூழல் தான் எந்த விதியை முதலில் பின்பற்றனும் அதுக்கு அப்புறம் என்வென்பதை தீர்மானிக்கும்.   

இந்த விதிகளில் ஒன்றை பின்பற்றி செய்யும் வேலையின் விளைவு, உங்கள் நிரலின் அமைப்பை மற்றும், அந்த அமைப்புமாற்றம் உங்களை வேறு விதிகளை பின்பற்ற இயல்பாய் தள்ளும்.

####உச்சாந்துணை
1. Understanding the 4 Simple Rules of Design by Corey Haines
2. http://blog.thecodewhisperer.com/2013/12/07/putting-an-age-old-battle-to-rest/

> Written with [StackEdit](https://stackedit.io/).
