# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0](https://github.com/enzoarguello512/api-rest-ecommerce/compare/v0.1.5...v0.2.0) (2022-12-11)


### ⚠ BREAKING CHANGES

* create custom filters to be used according to the backedend model.
* restructure Items component and move api call.
* switch to regular endpoints in product api.
* add state(redux) to ChatChannel component.

### Features

* add IErrorResponse interface. ([f3f63c2](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f3f63c2738415e350b77e0e59cccb06d6cee5499))
* add IProductFiltersResponse and IProductState interface. ([c251e39](https://github.com/enzoarguello512/api-rest-ecommerce/commit/c251e39a110bc78973821230c33c80401299acf0))
* add LoadingPage component. ([24e6c2d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/24e6c2df89ad259cbdd27b5e139b1e5e03bf476d))
* add loadingSession action. ([3114cf0](https://github.com/enzoarguello512/api-rest-ecommerce/commit/3114cf072ffb14e70811e640b15448b08e987690))
* add login state to RequireAuth component. ([bc0aa23](https://github.com/enzoarguello512/api-rest-ecommerce/commit/bc0aa235e6dc30fc06a6fe3dbc21290c3a9a7aa9))
* add module "query-string". ([f9a048d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f9a048d277abf61a512a9a083ff1f7eb8e4fe17a))
* add product slice. ([b72b758](https://github.com/enzoarguello512/api-rest-ecommerce/commit/b72b758ebabdbb065c67375b39e4f3deb7f09734))
* add selectors and new reducers. ([e146647](https://github.com/enzoarguello512/api-rest-ecommerce/commit/e14664730c59ca4e44b12eb5e323bee7948f3228))
* add state(redux) to ChatChannel component. ([1849db7](https://github.com/enzoarguello512/api-rest-ecommerce/commit/1849db7d5e1e93ee2572f9572daea9956c026b3a))
* added message interface. ([95e9b64](https://github.com/enzoarguello512/api-rest-ecommerce/commit/95e9b6484f3c9a1c7a9c631c8c16c629340a692a))
* create custom filters to be used according to the backedend model. ([b1e06b0](https://github.com/enzoarguello512/api-rest-ecommerce/commit/b1e06b0d476678fbbe100ce16308b789ab02c33c))
* split filters component into "SearchBox". ([32cd521](https://github.com/enzoarguello512/api-rest-ecommerce/commit/32cd521312d9bd901f875603ccae8770815c62a5))


### Bug Fixes

* add comments. ([9826350](https://github.com/enzoarguello512/api-rest-ecommerce/commit/98263506e7a375c47b6a2754ff636237a7e9f873))
* add field to repeat password. ([75b98dc](https://github.com/enzoarguello512/api-rest-ecommerce/commit/75b98dc897f905048ea003ae47c9d8f5aa8db51c))
* add initial persistence switch and sort code. ([ed4251d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/ed4251dd612bbd7752f74ab24460f83afd24d3c6))
* add new notification and timeout. ([5ff53ec](https://github.com/enzoarguello512/api-rest-ecommerce/commit/5ff53ecdd1734120186dd47daee9e9649ccafb70))
* add new search failed message and fix render errors. ([b995653](https://github.com/enzoarguello512/api-rest-ecommerce/commit/b995653ca106cf09273ee59ee95de39368434e60))
* add offset to replace breadcrumb. ([bb69d2d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/bb69d2d534065fefcbc2db707d7c459c25c99fae))
* add order and persistence switch. ([858448e](https://github.com/enzoarguello512/api-rest-ecommerce/commit/858448eb46ae51a1cb6f93c5e4583cd8a9da07f6))
* add path "unauthorized" and comments. ([07bd58a](https://github.com/enzoarguello512/api-rest-ecommerce/commit/07bd58ae59dcfb1eea7da5729c78f8dcb0b5285c))
* add redux selectors and styles. ([021984b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/021984bd32672fb74d12ac0ef2ad8003bbe13faa))
* add types. ([e6af10f](https://github.com/enzoarguello512/api-rest-ecommerce/commit/e6af10f270467ce3b1989feb390dec1e74727aa3))
* api and authentication persistence component. ([ad6c364](https://github.com/enzoarguello512/api-rest-ecommerce/commit/ad6c36452f7ece6d67a6d6703ee6172bde4a06a6))
* api call and errors. ([8447c16](https://github.com/enzoarguello512/api-rest-ecommerce/commit/8447c16d75ed7bf967bef9869871a0310288bb7b))
* correct api slice name. ([f9760b6](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f9760b68963621f04b27db0bf4a9a2c1e4636752))
* empty shopping cart error. ([af1a153](https://github.com/enzoarguello512/api-rest-ecommerce/commit/af1a153a0e8e00bdfd5f3234c0cbb72e3c1d5bc6))
* move loading message between components. ([37a4a7d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/37a4a7d3eb880cf1e47d30d659f33022b523d56b))
* prevent the "none" label from being displayed. ([ff339f8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/ff339f8c4178a01a9f15202465ac5e867c8ae37c))
* re-add the persistence component. ([dec00f0](https://github.com/enzoarguello512/api-rest-ecommerce/commit/dec00f0e8fa243148c08118d48bfbb2851de9382))
* remove breadcrumb component. ([332135e](https://github.com/enzoarguello512/api-rest-ecommerce/commit/332135eefe5ae18d778a8f1cb26db199b46ec73d))
* remove images and upload to cloudinary. ([07d5366](https://github.com/enzoarguello512/api-rest-ecommerce/commit/07d53662eab8607f6158497475296d37238a6f5a))
* remove unused operators. ([fc6b5e7](https://github.com/enzoarguello512/api-rest-ecommerce/commit/fc6b5e7473de16c7041b1cc192ee4e1ebeddc01a))
* restructure Items component and move api call. ([ccd15ae](https://github.com/enzoarguello512/api-rest-ecommerce/commit/ccd15ae648fc78d7b0c4f441f852933bd8098f16))
* solve keys error and modify loading message. ([11b36a8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/11b36a8a36f15f8ffe477d84a6819d1150447e9f))
* switch to regular endpoints in product api. ([c0c5a29](https://github.com/enzoarguello512/api-rest-ecommerce/commit/c0c5a296b641e98c8c872767cf99c0191e223bb9))
* UI and signup dispatch. ([4986902](https://github.com/enzoarguello512/api-rest-ecommerce/commit/4986902e1a4c9323b12b212d86a11085fd000fae))
* update cart response. ([aefddc3](https://github.com/enzoarguello512/api-rest-ecommerce/commit/aefddc3d1599ae7db8f06cec71b203b998554f87))
* update dispatch hook. ([6938041](https://github.com/enzoarguello512/api-rest-ecommerce/commit/6938041adaadb5fd1e882603d834fb8cbd7df432))
* update filter interface. ([0f9ada6](https://github.com/enzoarguello512/api-rest-ecommerce/commit/0f9ada67add858f58b5f4c1977db10a81d12dd5a))
* update message format to match backend. ([f7efd0a](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f7efd0a2160e7108b7a4f3a754aae626aa6321ea))

### [0.1.5](https://github.com/enzoarguello512/api-rest-ecommerce/compare/v0.1.4...v0.1.5) (2022-11-02)


### Features

* add @fortawesome/free-regular-svg-icons module. ([c5c7074](https://github.com/enzoarguello512/api-rest-ecommerce/commit/c5c7074c32c810099852bc9b33453e5649f5a3ed))
* add CartSubtotal component. ([9f0edb1](https://github.com/enzoarguello512/api-rest-ecommerce/commit/9f0edb1631d4a788b7fadc173275f12fbd6e3f16))
* add ItemBreadcrumb component. ([b8c391f](https://github.com/enzoarguello512/api-rest-ecommerce/commit/b8c391f54ccb96f7c604414c60cbcd1d49aed572))
* add ItemsFilter component. ([4c44775](https://github.com/enzoarguello512/api-rest-ecommerce/commit/4c447750eeac63a5ed5481802976bf3c921203a4))
* add ItemsSortBy component. ([55b5974](https://github.com/enzoarguello512/api-rest-ecommerce/commit/55b59747385584113601d1c2a7d1a01cc23a96cc))
* add mutation to create/end order. ([2a9b9cb](https://github.com/enzoarguello512/api-rest-ecommerce/commit/2a9b9cb5aeb3543fd43f59b2a3d4bdb2b87efbc6))
* add mutation to delete shopping cart. ([0e75802](https://github.com/enzoarguello512/api-rest-ecommerce/commit/0e75802747d84100daa2a4d3a3fb35409b8ffe49))
* add query and user profile interface. ([2d24da8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/2d24da8c31bcc0c8532da8fb6ac03d92ab77c316))
* add thumbnail class. ([6a26c60](https://github.com/enzoarguello512/api-rest-ecommerce/commit/6a26c60b50914c38adbb4a046ef4b947ce33658e))
* add user card. ([cd1325b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/cd1325b5322bd2b0be07ed34671997db38f4948d))
* add user profile page. ([01dd91c](https://github.com/enzoarguello512/api-rest-ecommerce/commit/01dd91c538d530c124b3f676cfc2b6e979402e35))
* add user profile section in navbar. ([49021f7](https://github.com/enzoarguello512/api-rest-ecommerce/commit/49021f7f6b72eaba7bdb8acf78dbf6e984055b7b))
* optimize login image. ([7fc5dd5](https://github.com/enzoarguello512/api-rest-ecommerce/commit/7fc5dd5b5f268d17b9fde09b2b12d47fd2ac7294))
* update registry model properties. ([9836368](https://github.com/enzoarguello512/api-rest-ecommerce/commit/9836368355e4b3b2ae5093be868de02da3d82f8b))


### Bug Fixes

* add fields to form with the new properties. ([a86dd4f](https://github.com/enzoarguello512/api-rest-ecommerce/commit/a86dd4ff5a575812c71793473588f1a02fa3249b))
* add interfaces for FormData. ([648ae86](https://github.com/enzoarguello512/api-rest-ecommerce/commit/648ae862889611e02fe21755526af657323ebcba))
* add logic to CartSubtotal component. ([9d31bf6](https://github.com/enzoarguello512/api-rest-ecommerce/commit/9d31bf6122cd9a15af22db393b749c40413d6010))
* add responsive to user card. ([9e430ed](https://github.com/enzoarguello512/api-rest-ecommerce/commit/9e430ed6b736597d8e3d420d64c1d08260633467))
* add user profile protected path. ([7af55bf](https://github.com/enzoarguello512/api-rest-ecommerce/commit/7af55bf7a14288321b3aed9128e9e98b2b4288ad))
* change form submission format. ([366d9e6](https://github.com/enzoarguello512/api-rest-ecommerce/commit/366d9e66f4d5b051486808a18f57574ef4033abc))
* formData request. ([be57206](https://github.com/enzoarguello512/api-rest-ecommerce/commit/be57206416ce1fd9b6a3eb579072acabb43af8cb))
* index misuse. ([60561e8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/60561e85e2448a8207fbe03d1c418c7f1ffb034d))
* index misuse. ([116d343](https://github.com/enzoarguello512/api-rest-ecommerce/commit/116d3430e4745c3c36e794bff03040f5e3319e49))
* login form margin. ([88c9679](https://github.com/enzoarguello512/api-rest-ecommerce/commit/88c967951696f49c66bd0e60526869961e28b117))
* possible wrong request. ([db92f24](https://github.com/enzoarguello512/api-rest-ecommerce/commit/db92f2482f85eaa0c45c0c6da3d7ceba8efff190))
* replace deleteCart method with updateCart. ([b856901](https://github.com/enzoarguello512/api-rest-ecommerce/commit/b85690199187c69ba31e67810cd36cd6e9bb3ea2))
* separate code and improve reliability. ([a37cc82](https://github.com/enzoarguello512/api-rest-ecommerce/commit/a37cc8278dfc5f87dc66666ee449a8b282efbc49))
* submit form and images. ([60f0c61](https://github.com/enzoarguello512/api-rest-ecommerce/commit/60f0c6186af6c167af0f4bcefee6259d238c2287))
* update message presentation and style. ([fb0d640](https://github.com/enzoarguello512/api-rest-ecommerce/commit/fb0d6403f0adafee9e9bae396ba6ee6a301fc68f))

### [0.1.4](https://github.com/enzoarguello512/api-rest-ecommerce/compare/v0.1.3...v0.1.4) (2022-09-14)


### Features

* add debounce function. ([f760692](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f760692af2a7e598bdbe9e855e1681e17087fd49))
* add functionality to delete and update items in the cart. ([940015b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/940015baceb046d7ee823757150195425c3c897c))
* add interfaces to complete the types. ([094d225](https://github.com/enzoarguello512/api-rest-ecommerce/commit/094d22570ebd1b2fd4d6b4a96286e8cf6407b327))
* add pre-type hooks and types. ([acea657](https://github.com/enzoarguello512/api-rest-ecommerce/commit/acea657edf7681b340fc64a2f26fd71a38542732))
* add query to get cart and update tags. ([bf6401b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/bf6401bd373761da4ab7aa6c919dc9a0897804e2))
* add utility function (jwt). ([1339769](https://github.com/enzoarguello512/api-rest-ecommerce/commit/133976988e8edb9cf1a292de656d1e7c0cd20fd7))


### Bug Fixes

* add browsing history and alerts. ([3e2301a](https://github.com/enzoarguello512/api-rest-ecommerce/commit/3e2301ad3c0d2f4ef943db94e43319c68bb8ad9e))
* add error handling and change request methods. ([8d95f99](https://github.com/enzoarguello512/api-rest-ecommerce/commit/8d95f992b7bbab3992b09b34e382d869bf28afe4))
* add full responsive to navbar and container control. ([c9ebcca](https://github.com/enzoarguello512/api-rest-ecommerce/commit/c9ebcca4ab169670bebd242350db3ff7550964ea))
* add request to cart. ([8edbb8d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/8edbb8d80d171df34513c6debfa7470fd591a2b2))
* add status and selectors for subtotal. ([e6f9671](https://github.com/enzoarguello512/api-rest-ecommerce/commit/e6f9671fb33d8326109088c327379254967acdb9))
* add types and method of request resubmission. ([2c7d288](https://github.com/enzoarguello512/api-rest-ecommerce/commit/2c7d2884414be6a8b6e55c13c6149edee805b9ab))
* organize routes and components. ([204a4c9](https://github.com/enzoarguello512/api-rest-ecommerce/commit/204a4c93d98a1d233071eeb0edab1957aa18fa96))
* render and comment unused code. ([dc52e08](https://github.com/enzoarguello512/api-rest-ecommerce/commit/dc52e08a5ab0ec3653dac9085008502c3b04d147))
* render, interface and request errors. ([2b0560d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/2b0560d1c13bc266e883a169cac4498eaf141e51))
* replace useSelector and useDispatch. ([4355992](https://github.com/enzoarguello512/api-rest-ecommerce/commit/435599230bdea3eb4e570ab90b16ba980d4d6b76))
* request error with buttons. ([3a5064a](https://github.com/enzoarguello512/api-rest-ecommerce/commit/3a5064a5112f8713b117205ab60ac9bde6f37262))
* sync with backend and add action removeCartProduct. ([f8a6dfd](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f8a6dfd6727ddb689f506848fe28121bc9237f3b))
* update dependency names. ([0a624e5](https://github.com/enzoarguello512/api-rest-ecommerce/commit/0a624e54d17949d9d61813afe1153b65282f075b))
* update links to original project. ([00102b8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/00102b840dcf725754d78d1ce98bf62e0d440525))
* update names and rendering. ([00e0640](https://github.com/enzoarguello512/api-rest-ecommerce/commit/00e0640e3f10bd07d1ebd3148b1ffe7162e3ce53))
* update navbar dropdown. ([2491e2f](https://github.com/enzoarguello512/api-rest-ecommerce/commit/2491e2f65cb70ab79d2db24520645c8c6872a01b))
* update properties to follow the backend model. ([51bc229](https://github.com/enzoarguello512/api-rest-ecommerce/commit/51bc2297b6712a2fbbc2aba5dd367af96af1868e))
* update selectors and queries. ([64db90b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/64db90ba2db7fc035a7c09ced6fb1c0dc74b26a7))

### [0.1.3](https://github.com/enzoarguello512/api-rest-ecommerce/compare/v0.1.2...v0.1.3) (2022-09-10)


### Features

* add config, dotenv and cross-env. ([919093d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/919093de417999daed8a053e2f5d42ad30161168))
* add container and toast styles. ([8c6853b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/8c6853b5a7bf6a175ae61fdd228da6d9b5a7952a))
* add container components and items to the shopping cart. ([c700365](https://github.com/enzoarguello512/api-rest-ecommerce/commit/c7003655885b17b935c4c33e97150d24cb522eed))
* add example files of variables. ([987903b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/987903b87add37324c31fe4af9f51bda3c54a883))
* add main config module. ([247c097](https://github.com/enzoarguello512/api-rest-ecommerce/commit/247c09747bbb49038ef2d3fe60cfedcf9e945847))
* add react-toastify. ([857f38b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/857f38b46904c90661b3592b4f9adafcf41b1243))
* add route and cart page. ([fa398ce](https://github.com/enzoarguello512/api-rest-ecommerce/commit/fa398cece276673e627b859d5d7437d84e5d18e3))
* add user registration endpoint. ([d14003b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/d14003bc7a66fdea45f8f0df78f02b38de0014dd))


### Bug Fixes

* add initial controls. ([3ec129f](https://github.com/enzoarguello512/api-rest-ecommerce/commit/3ec129f2e1c81ddef88807b4602374eaa93717b8))
* add responsive, quantity component and fix styles. ([f696e1d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/f696e1d7a3aff8c7e6193df223d9e1f93bbb0a2b))
* development server error. ([1ebfc7a](https://github.com/enzoarguello512/api-rest-ecommerce/commit/1ebfc7a763f0ded751581f05ae25f68ed97d369b))
* form errors and reduce unused code. ([ce31c1d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/ce31c1d0ef952d886556e683d63eeab1d1552a09))
* remove unused packages. ([461a0e8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/461a0e8a4de7fa9fdd8cf639204a64de407cc6ad))
* rename component and add product page. ([7870714](https://github.com/enzoarguello512/api-rest-ecommerce/commit/7870714f1e52e1451528ae72a531e68203a215e2))
* separate types of ports. ([56009fe](https://github.com/enzoarguello512/api-rest-ecommerce/commit/56009fea21a817054bbba9f84777fff3bb7c7008))
* update base error. ([558b067](https://github.com/enzoarguello512/api-rest-ecommerce/commit/558b067ca025abd30a0d56d03da38603d06eb25b))
* update form and remove unused code. ([50692f1](https://github.com/enzoarguello512/api-rest-ecommerce/commit/50692f1438cdee955559b551f891147b2125a476))
* update product routes, names and add product detail component. ([191684c](https://github.com/enzoarguello512/api-rest-ecommerce/commit/191684cf9a190d2aae9ef68d95c5ea780e1724f9))
* update tags. ([abd935a](https://github.com/enzoarguello512/api-rest-ecommerce/commit/abd935a72e8352053066cb80d9261a8b5fb0486b))
* update token verification. ([a76d08d](https://github.com/enzoarguello512/api-rest-ecommerce/commit/a76d08de9b553e84fc9356b1acb2c40587d96445))
* upgrade interface to the latest model. ([6532b29](https://github.com/enzoarguello512/api-rest-ecommerce/commit/6532b29a4ecd00d8700232f0951b42525f9bbac3))

### 0.1.2 (2022-09-07)

### [0.1.1](https://github.com/enzoarguello512/api-rest-ecommerce/compare/v0.0.4...v0.1.1) (2022-08-25)

### Features

- add base files. ([e5e7b16](https://github.com/enzoarguello512/api-rest-ecommerce/commit/e5e7b164255d1c1fc7c427dc4ad6376bb11b2519))
- add standard release support. ([9d03fb8](https://github.com/enzoarguello512/api-rest-ecommerce/commit/9d03fb8db7a60ab884bd613734abf2eaa0ec24d2))

### Bug Fixes

- commented code to avoid usability problems (future implementation). ([21fe14b](https://github.com/enzoarguello512/api-rest-ecommerce/commit/21fe14bba86b62f6afc4b4cb0bed85b48a27ba71))
- renamed challenge folder. ([88f74e2](https://github.com/enzoarguello512/api-rest-ecommerce/commit/88f74e263e78c354c944de44f49cf156f732d206))
