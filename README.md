## preeti

Preeti is a popular font used in Nepal to write Nepali text

Without Preeti font, the text is just ASCII, so this module converts it to Unicode Devanagari characters.

### Usage

```javascript
preeti('sf7df08"');
> 'काठमाण्डू'
```

#### In NodeJS

```javascript
preeti = require('preeti');
preeti('sf7df08"');
```

#### Other fonts

You also can use converters for other fonts by providing a second parameter. Here is the list of all supported fonts.

```javascript
preeti('sf&df)*"', 'PCS Nepali');
preeti('sf7df08"', 'Kantipur');
preeti('sf&df)*"', 'Fontasy Himali TT');
preeti('sf7df08"', 'Sagarmatha');
```

### Original Shell and JS code

This project is based on code and regular expressions from the [FOSS Nepal](https://github.com/foss-np) community

- [2utf8](https://github.com/foss-np/2utf8) a Bash command
- [nep-ttf2utf](https://github.com/sapradhan/nep-ttf2utf) a JS and Python3 port by sapradhan

### License

Creative Commons Attribution Non-Commerical Share-Alike
