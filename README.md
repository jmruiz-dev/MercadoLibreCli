# Mercadolibre Product Retriever 
> Command line tool to retrieve data from Mercadolibre API 
## ⚡ Getting Started

To start working with this commandline tool, you have to install Node and execute 
all required steps on next section. 
> To install node, please go to
>  [nodejs.org](https://nodejs.org/en/download/)

Please, execute all next step on root folder of this project.
### 📦 Prerequisites
There are some things to do before game start! Let's go setting up the Environment. 
  
##### *Install Node Dependencies*
```Markdown
# install dependencies
$ npm install
```

##### *Build Service* 
```Markdown
# build distribution
$ npm run build 
  ```

##### *Install CLI* 
```Markdown
# install command on system
$ npm run install:cli 
  ```
  
### 🚀 Usage
After install, CommandLine tool, you can access to this feature through get-ml-products command.
##### *Basic Usage (Get Help)*
```Markdown
#!/usr/bin/env bash
# get help of command usage 
$ get-ml-products --help 

# Output
Usage: get-ml-products [global options]

Options:
  --seller_id <seller>  Please define seller_id [ You can define many sellers
                        in a comma separated list ]
  --site_id <site>      Please define site_id
  -e, --extended        display provider name for each product (default: false)
  -h, --help            display help for command
```
##### *Single Seller*
```Markdown
#!/usr/bin/env bash
# get products 
$ get-ml-products --site_id=MLA --seller_id=179571326

# Output
Id:'MLA863267784'    CategoryName:'Monitores'            CategoryId:'MLA14407'             Title:'Monitor Dell P2018h Led 19.5  Negro 110v/220v' 
Id:'MLA740540307'    CategoryName:'PC'                   CategoryId:'MLA1649'              Title:'Servidor Poweredge Dell T40 Xeon E3-1225 8gb 1tb Hd Free Dos' 
Id:'MLA663208480'    CategoryName:'Notebooks'            CategoryId:'MLA1652'              Title:'Notebook Laptop Dell Inspiron I5 16g 256ssd Ubuntu Ram' 
...
```
##### *Multi Seller*
 You can define many sellers in a comma separated list 
```Markdown
#!/usr/bin/env bash
# get products 
$ get-ml-products --site_id=MLA --seller_id=179571326,179571327,179571328

# Output
Id:'MLA863267784'    CategoryName:'Monitores'            CategoryId:'MLA14407'             Title:'Monitor Dell P2018h Led 19.5  Negro 110v/220v' 
Id:'MLA740540307'    CategoryName:'PC'                   CategoryId:'MLA1649'              Title:'Servidor Poweredge Dell T40 Xeon E3-1225 8gb 1tb Hd Free Dos' 
Id:'MLA663208480'    CategoryName:'Notebooks'            CategoryId:'MLA1652'              Title:'Notebook Laptop Dell Inspiron I5 16g 256ssd Ubuntu Ram' 
...
```
##### *Extended Mode*
 You can access to provider name, adding --extended flag 
```Markdown
#!/usr/bin/env bash
# get products 
$ get-ml-products --site_id=MLA --seller_id=179571326,179571327,179571328

# Output
Provider:'TIENDASMERCADOLIBRE'  Id:'MLA837842655'    CategoryName:'Notebooks'            CategoryId:'MLA1652'              Title:'Notebook Dell Inspiron I7 256ssd 32gb 15.6 W10 Gforce Oferta' 
Provider:'TIENDASMERCADOLIBRE'  Id:'MLA862050665'    CategoryName:'PC'                   CategoryId:'MLA1649'              Title:'Servidor Poweredge Dell T40 Intel E3-2224 16gb 1tb Hd Cuotas' 
Provider:'TIENDASMERCADOLIBRE'  Id:'MLA806652269'    CategoryName:'Monitores'            CategoryId:'MLA14407'             Title:'Monitor Dell 27 Profesional P2719h 1080 60hz Vertical Fhd' 
...
```

##### *Redirecting output to file*
 You can redirect console output to log file, using ">" operator
```Markdown
#!/usr/bin/env bash
# Usage
command ...args > outputfile

# Example 
# This command generate a log file with exactly date of generation as name,
# There we could find products of 3 different providers 

get-ml-products --site_id=MLA --seller_id=179571326,179571327,179571328 > product.list.$(date +'%Y.%m.%d.%H%M').log

# Example output filename
product.list.2020.09.11.0128.log
```


## Authors
* **Jose Ruiz** - *Initial work* - [JMRuiz-Dev](https://github.com/jmruiz-dev)
