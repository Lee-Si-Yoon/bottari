// https://github.com/hunkim98/canvas_with_math/blob/main/utils/vector/Vector2.ts

// 수집합을 수직으로 배치해 평면을 표기하는 방식을 데카르트 좌표계
// Cartesian coordinate system
// 곱집합 = Cartesian product

export class Vector2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  coord(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }

  add(v: Vector2): Vector2 {
    return new Vector2(this.x + v.x, this.y + v.y);
  }

  scalarMultiple(a: number): Vector2 {
    return new Vector2(this.x * a, this.y * a);
  }

  // 벡터의 크기, 원점으로부터의 최단거리
  // 피타고라스 정리인 c ** 2 = a ** 2 + b ** 2 -> c = Math.sqrt(a ** 2 + b ** 2)
  // 크기이기에 절댓값으로 표현
  norm(): number {
    const hypotenuseSquared = this.x ** 2 + this.y ** 2;
    return Math.abs(Math.sqrt(hypotenuseSquared));
  }

  // 벡터의 크기를 측정하는 기준, 모자를 씌운 v 형태로 표시
  // 임의의 벡터를 크기가 1인 단위 벡터로 다듬는 작업을 정규화 normalize 한다고 함
  // e.g.
  // const dot = new Vector(3,4).norm() = 5
  // const dot = new Vector(3,4).unitVector().norm() = 1
  unitVector(): Vector2 {
    const hypotenuse = this.norm();
    if (hypotenuse === 0) return new Vector2(0, 0);
    return new Vector2(this.x / hypotenuse, this.y / hypotenuse);
  }
}
