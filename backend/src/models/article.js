module.exports = class Article {
  constructor(title, subTitle, content, imageUrl) {
    this.title = title;
    this.subTitle = content;
    this.imageUrl = imageUrl;
  }

  static all() {
    return [
      new Article(
        'Farmers in Ghana Using Drones',
        'for Pest, Disease Surveillance',
        'Small-scale farmers in Ghana are using drones for crop surveillance in a bid to increase yields and incomes. Farmers’ cooperatives embrace the technology as a step toward efficiency. Some however, feel the technology is too expensive and may shut out poor farmers. Sarah Kimani has the story from Accra. \nOriginally published at – https://morigin.voanews.eu/a/farmers-in-ghana-using-drones-for-pest-disease-surveillance-/5076254.html',
      ),
      new Article(
        'Bawumia "Is An Embarrassment Of A Vice President"',
        '- Otokunor Punches',
        'It is quite evident that the political landscape in Ghana has in one way or the other been tainted with insults and demoralizing diction creating worry for successive generations.',
      ),
      new Article(
        'Foreign Students Can Now Work In UK After Graduation',
        '- Boris Johnson',
        'The British Government has said that international students will henceforth be able to stay and work in the UK after graduating.',
        'https://upload.wikimedia.org/wikipedia/commons/c/c5/Boris_johnson.jpg',
      ),

      new Article(
        'Ghana Power Producers Say Plan to Save Costs Carries Hefty Bill',
        '- Bloomberg',
        'Ghana’s plans to stop paying for power that it doesn’t consume may cost the country as much as $2 billion in upfront claims. \nPrivate operators will not accept Finance Minister Ken Ofori-Atta’s proposal to renegotiate agreements and will demand the full payment of their contracts’ termination clauses, Elikplim Kwabla Apetorgbor, chief executive officer of the Chamber of Independent Power Producers, said in an interview.',
      ),
    ];
  }
};
