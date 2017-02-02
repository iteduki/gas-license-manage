/** 
* @param {string} userKey 退職ユーザーのメールアドレス
* @param {string} domain 契約しているG Suiteのドメイン
*/
function retireeUser(userKey, domain) {
  
  // 対象のユーザーを取得
  var user = AdminDirectory.Users.get(userKey, {domain: domain});
  
  // 現在のVaultライセンスを取得  
  var productId = 'Google-Vault';
  var skuId = 'Google-Vault';
  var response = AdminLicenseManager.LicenseAssignments.get(productId, skuId, userKey);
  
  // Vaultライセンスを退職済みライセンスに変更
  response.skuId = 'Google-Vault-Former-Employee';
  AdminLicenseManager.LicenseAssignments.update(response, productId, skuId, userKey);
}
