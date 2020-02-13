/*搜索api*/
import {
  request
} from "@/api/axios";

/*搜索*/
/*type: song singer album songList video radio user lrc*/
let search = function (type, keyword, page = 0, pageSize = 30) {
  return request.get("search", {
    type,
    keyword,
    page,
    pageSize
  })
};


export const searchApi = {
  search
}
