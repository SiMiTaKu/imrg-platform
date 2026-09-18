/**
 * サイト全体で使うエラーの基底クラス
 *
 * @remarks
 * HTTP ステータスコードとユーザー向けメッセージを持つ。
 * 継承して各種エラーを定義し、instanceof や status で分岐する（oshiage と同じ形）。
 */
export abstract class AppError extends Error {
  /**
   * @param status - HTTP ステータスコード（例: 404, 500）
   * @param message - ユーザー向けのメッセージ
   */
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message)
    this.name = new.target.name
  }
}

/**
 * 404 Not Found。求められたページやデータが無いとき
 */
export class NotFoundError extends AppError {
  /**
   * @param message - ユーザー向けのメッセージ
   */
  constructor(message = 'Not Found') {
    super(404, message)
  }
}

/**
 * 500 Internal Server Error。想定外の失敗
 */
export class InternalServerError extends AppError {
  /**
   * @param message - ユーザー向けのメッセージ
   */
  constructor(message = 'Internal Server Error') {
    super(500, message)
  }
}
