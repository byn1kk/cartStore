import { Notification, toaster } from "rsuite";

export class NotificationHelper {
  /**
   * @description Выводит уведомление с иконкой успешкой операции
   *
   *@param message Тело уведомления, описание произошедшего события.
   *@param header Заголовок уведомления, по дэфолту **`Успех`**.
   */
  public static ShowSuccess(
    message: string,
    header = "Успех",
    duration?: number
  ) {
    this.ShowNotification("success", header, message, duration);
  }

  private static ShowNotification(
    type: "info" | "success" | "warning" | "error",
    header: string,
    message: string,
    duration?: number
  ) {
    toaster.push(
      <Notification type={type} header={header} closable>
        <p>{message}</p>
      </Notification>,
      { placement: "topCenter", duration }
    );
  }
}
