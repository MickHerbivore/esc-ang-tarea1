import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  private objetos: any[] = [
    {
       "_id":"61bd1dbc918f12c17b9c64a1",
       "age":16,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Gaara.jpg",
       "description":"A Genin from the village of Sand, Gaara is brooding boy whose serious and dark demeanor frightens those around him.",
       "firstAnimeAppearance":"Naruto Episode 20",
       "firstMangaAppearance":"Chapter 35",
       "name":"Gaara",
       "nameMeaning":"\"Self-Loving\" ra=Kanji used in demons of myth",
       "notableQuotes":"\"Love only yourself, and fight only for yourself.\"",
       "rank":"Kazekage",
       "village":"sand village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64f5",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Mizukage.jpg",
       "description":"The Fifth Mizukage, born Terumii Mei, is the head ninja of Hidden Mist Village. She is a young woman prone to misplaced anger concerning her relationship status. She possesses two bloodline abilities, Futton and Youton.",
       "firstAnimeAppearance":"Shippuuden Episode 199",
       "firstMangaAppearance":"Chapter 454",
       "name":"Godaime Mizukage (Fifth WaterShadow)",
       "nameMeaning":"Water Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"mist village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64ca",
       "age":54,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Jiraiya.jpg",
       "description":"One of the Legendary Sannin, Jiraiya left Konoha to devote his time to doing research for his line of adult books. He has a blood contract with toads and calls upon them as needed.",
       "firstAnimeAppearance":"Naruto Episode 52",
       "firstMangaAppearance":"Chapter 90",
       "name":"Jiraiya",
       "nameMeaning":"\"Young thunder\", A lead character in Japanese folk tale, married to \"Tsunade\"",
       "notableQuotes":"\"I&apos;m not just a pervert, I&apos;m a super pervert!\"",
       "rank":"Potential Jounin (Kage Level Skill)",
       "village":"leaf village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64bc",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/4th.jpg",
       "description":"The Fourth Hokage, born Namikaze Minato, sacrificed his life to seal the Kyuubi demon inside Naruto.",
       "firstAnimeAppearance":"Naruto Episode 1",
       "firstMangaAppearance":"Chapter 1",
       "name":"Namikaze Minato",
       "nameMeaning":"",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"leaf village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64dc",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/2ndKazekage.jpg",
       "description":"Nidaime Kazekage was the second Kazekage of Hidden Sand.",
       "firstAnimeAppearance":"Shippuuden Episode 2",
       "firstMangaAppearance":"Chapter 266",
       "name":"Nidaime Kazekage (Second WindShadow)",
       "nameMeaning":"Second Wind Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"sand village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64f3",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/2ndMizukage.jpg",
       "description":"The Second Mizukage was the head ninja of Hidden Mist Village. He had a long standing rivalry with Muu the Nidaime Tsuchikage. Both men eventually met in battle and killed each other in the process.",
       "firstAnimeAppearance":"",
       "firstMangaAppearance":"Chapter 525",
       "name":"Nidaime Mizukage (Second WaterShadow)",
       "nameMeaning":"Water Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"mist village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c650e",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/2ndRaikage.jpg",
       "description":"Nidaime Raikage was the second Raikage of Hidden Cloud. When Nidaime Raikage met Nidaime Hokage to form an alliance between their villages, the brothers Kinkaku and Ginkaku launched a coup detat against the Raikage.",
       "firstAnimeAppearance":"",
       "firstMangaAppearance":"Chapter 527",
       "name":"Nidaime Raikage (Second LightningShadow)",
       "nameMeaning":"Lightning Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"cloud village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c6533",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Muu.jpg",
       "description":"Nidaime Tsuchikage, real name Muu, was the head ninja of Hidden Rock Village. He was a legendary ninja known as Mujin (The Nothing Man), due to his ability to turn invisible and completely hide his chakra presence. He had a long standing rivalry with Nidaime Mizukage. Both men eventually met in battle and killed each other in the process.",
       "firstAnimeAppearance":"",
       "firstMangaAppearance":"Chapter 515",
       "name":"Nidaime Tsuchikage (Second EarthShadow)",
       "nameMeaning":"Earth Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"rock village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c650a",
       "age":54,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Orochimaru2.jpg",
       "description":"One of the Legendary Sannin, Orochimaru left Leaf village to form his own hidden village called Hidden Sound.",
       "firstAnimeAppearance":"Naruto Episode 27",
       "firstMangaAppearance":"Chapter 46",
       "name":"Orochimaru",
       "nameMeaning":"Orochimaru=Villain in mythical Jiraiya tale, Orochi=Large Serpent, Maru=Male Name",
       "notableQuotes":"Do you know the happiness and sense of accomplishment you gain when you have a chance to hurt the one you called \"master\"?",
       "rank":"Potential Jounin (Kage Level Skill)",
       "village":"sound village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c650d",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/AkatsukiLeader.jpg",
       "description":"Pain acts as the leader of Akatsuki. He has been seen to direct the actions of other members.",
       "firstAnimeAppearance":"Shippuuden Episode 114",
       "firstMangaAppearance":"Chapter 363",
       "name":"Pain",
       "nameMeaning":"",
       "notableQuotes":"",
       "rank":"Unknown (Kage Level Skill)",
       "village":"rain village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64dd",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/3rdKaze.jpg",
       "description":"Sandaime Kazekage was said to be the most gifted Kage in Hidden Sand&apos;s history. He disappeared under mysterious circumstances right before war broke out. He had the ability to change his body&apos;s chakra into magnetic fields. Seeing a previous Shukaku host manipulate sand, Kazekage surmised he could do something similar with tiny pieces of iron. He used this ability to develop \"Satetsu\" or Iron Sand. He could control this sand in any fashion he wished through the magnetic field. This allowed him to form weapons whenever he needed. This jutsu came to be known as Suna&apos;s deadliest, and granted him the honor of being called the greatest Kazekage.",
       "firstAnimeAppearance":"Shippuuden Episode 2",
       "firstMangaAppearance":"Chapter 266",
       "name":"Sandaime Kazekage (Third WindShadow)",
       "nameMeaning":"Third Wind Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"sand village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c650f",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/3rdRaikage.jpg",
       "description":"Sandaime Raikage, was once the head ninja of Hidden Cloud Village. He is the father of A and taught Darui the secrets of Black Lightning. At some point in the past, he died, sacrificing himself against a reported 10,000 enemy shinobi to allow his comrades time to escape.",
       "firstAnimeAppearance":"",
       "firstMangaAppearance":"Chapter 494",
       "name":"Sandaime Raikage (Third LightningShadow)",
       "nameMeaning":"Lightning Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"cloud village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c6534",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Tsuchikage.jpg",
       "description":"Sandaime Tsuchikage, known as Ryoutenbin no Oonoki (Two Alternatives Oonoki), is the head ninja of Hidden Rock Village. He is a short man who complains about his old, ailing body.",
       "firstAnimeAppearance":"Shippuuden Episode 199",
       "firstMangaAppearance":"Chapter 454",
       "name":"Sandaime Tsuchikage (Third EarthShadow)",
       "nameMeaning":"Earth Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"rock village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64bb",
       "age":69,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/guide/hokage.jpg",
       "description":"The Third Hokage, born Sarutobi Hiruzen, became Hokage again after the Fourth Hokage sacrificed his life to imprison the Kyuubi demon.",
       "firstAnimeAppearance":"Naruto Episode 1",
       "firstMangaAppearance":"Chapter 1",
       "name":"Sarutobi Hiruzen",
       "nameMeaning":"",
       "notableQuotes":"When they are protecting something important, that&apos;s when a shinobi&apos;s true strength appears...",
       "rank":"Kage",
       "village":"leaf village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64b9",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/1st.jpg",
       "description":"The First Hokage, born Senju Hashirama, helped found the village of Leaf with the help of his younger brother the Second Hokage.",
       "firstAnimeAppearance":"Naruto Episode 69",
       "firstMangaAppearance":"Chapter 118",
       "name":"Senju Hashirama",
       "nameMeaning":"",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"leaf village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64ba",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/2nd.jpg",
       "description":"The Second Hokage, born Senju Tobirama, helped found the village of Leaf with the help of his older brother the First Hokage. After the death of his brother he inherited the Hokage title and developed the infrastructure of the village.",
       "firstAnimeAppearance":"Naruto Episode 69",
       "firstMangaAppearance":"Chapter 118",
       "name":"Senju Tobirama",
       "nameMeaning":"",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"leaf village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64db",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/1stKazekage.jpg",
       "description":"Shodai Kazekage was the first Kazekage of Hidden Sand. It can be assumed he helped found the village.",
       "firstAnimeAppearance":"Shippuuden Episode 2",
       "firstMangaAppearance":"Chapter 266",
       "name":"Shodai Kazekage (First WindShadow)",
       "nameMeaning":"First Wind Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"sand village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c6535",
       "age":54,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Tsunade.jpg",
       "description":"One of the Legendary Sannin, Tsunade left Leaf Village to devote her time to her gambling addiction. She has a blood contract with slugs and calls upon them as needed.",
       "firstAnimeAppearance":"Naruto Episode 85",
       "firstMangaAppearance":"Chapter 149",
       "name":"Tsunade",
       "nameMeaning":"A mooring rope, Wife of Jiraiya in mythical tale",
       "notableQuotes":"\"From now on, I too shall bet my life!\"",
       "rank":"Hokage",
       "village":"leaf village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64de",
       "age":40,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/guide/kazekage.jpg",
       "description":"Yondaime Kazekage served as the head of Hidden Sand Village.",
       "firstAnimeAppearance":"Naruto Episode 59",
       "firstMangaAppearance":"Chapter 98",
       "name":"Yondaime Kazekage (Fourth WindShadow)",
       "nameMeaning":"Fourth Wind Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"sand village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c64f4",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/SanbiHost.jpg",
       "description":"The Fourth Mizukage, born Yagura, was the head ninja of Hidden Mist Village and the host of the Sanbi Bijuu. Under Yondaime&apos;s reign, bloody civil strife was rampant leading to the village earning the name \"Blood Mist\" Village. Mist ninja Momochi Zabuza attempted to assassinate the Mizukage, it is unclear if it was Yagura or the Fifth Mizukage. The Kage escaped harm, and Zabuza was forced to flee the country.",
       "firstAnimeAppearance":"",
       "firstMangaAppearance":"Chapter 420",
       "name":"Yondaime Mizukage (Fourth WaterShadow)",
       "nameMeaning":"Water Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"mist village"
    },
    {
       "_id":"61bd1dbc918f12c17b9c6510",
       "age":null,
       "avatarSrc":"https://narutoql.s3.amazonaws.com/Raikage.jpg",
       "description":"Yondaime Raikage, real name A, is the head ninja of Hidden Cloud Village. He is the blood brother of Killer Bee, the Hachibi Jinchuuriki. In the past, a Raikage dispatched a squad to secretly obtain the Hyuuga&apos;s Byakugan. It is unknown if this was the same Raikage that is in power now.",
       "firstAnimeAppearance":"Shippuuden Episode 152",
       "firstMangaAppearance":"Chapter 416",
       "name":"Yondaime Raikage (Fourth LightningShadow)",
       "nameMeaning":"Lightning Shadow",
       "notableQuotes":"",
       "rank":"Kage",
       "village":"cloud village"
    }
 ]

  constructor() { }

  getObjetos() {
    return this.objetos;
  }
}
