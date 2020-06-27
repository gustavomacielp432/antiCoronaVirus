export default class LocaisVisitados {
  constructor(
    user_id = null,
    cep = "",
    lat = "",
    lng = "",
    create_at = new Date(),
    update_at = new Date()
  ) {
    this.user_id = user_id;
    this.cep = cep;
    this.lat = lat;
    this.lng = lng;
    this.create_at = create_at;
    this.update_at = update_at;
  }
}
