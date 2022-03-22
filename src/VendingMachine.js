class VendingMachine {
  constructor() {
    this.icedAme = 10;
    this.hotAme = 5;
  }

  decreaseAmount(americaoType) {
    americaoType === 'iced' ? this.icedAme-- : this.hotAme--;
  }

  defineAmericano(money) {
    return money >= 1000 ? 'iced' : 'hot';
  }

  getItem(money) {
    const ameType = this.defineAmericano(money);
    const itemCount = ameType === 'iced' ? this.icedAme : this.hotAme;

    this.decreaseAmount(ameType);

    return `${
      ameType === 'iced' ? '아이스 아메리카노' : '따듯한 아메리카노'
    } (1/${itemCount}개)를 ${money}원에 구매했습니다.`;
  }

  printResult(purchaseResult) {
    console.log(`=== ${purchaseResult} ===`);
  }
}
