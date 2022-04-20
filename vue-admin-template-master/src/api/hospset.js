import request from '@/utils/request'

const api_name = '/admin/hosp/hospitalSet'
export default {
  //按页查询
  getHospSetList(current, limit, searchObj) {
    return request({
      url: `${api_name}/findPageHospSet/${current}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //按ID查询
  getHostSet(id) {
    return request({
      url: `${api_name}/getHospSet/${id}`,
      method: 'get'
    })
  },
  //删除
  deleteHospSet(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  //批量删除
  removeRows(idList) {
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  },
  //锁定和取消锁定
  lockHospSet(id, status) {
    return request({
      url: `${api_name}/lockHospitalSet/${id}/${status}`,
      method: 'put'
    })
  },
  //添加医院设置
  saveHospSet(hospitalSet) {
    return request({
      url: `${api_name}/saveHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  },
  //修改医院设置
  updateHospSet(hospitalSet) {
    return request({
      url: `${api_name}/updateHospitalSet`,
      method: 'post',
      data: hospitalSet
    })
  }
}
