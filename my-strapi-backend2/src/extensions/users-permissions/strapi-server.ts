export default (plugin: any) => {
  const originalRegister = plugin.controllers.auth.register;
  const originalLogin = plugin.controllers.auth.callback; // هذا هو الـ login في Strapi

  // حماية التسجيل
  plugin.controllers.auth.register = async (ctx: any) => {
    const { password, username, email } = ctx.request.body || {};

    // تأكد من وجود القيم قبل فحص الطول (للحماية من undefined)
    if (!password || password.length < 6) {
      return ctx.badRequest("Password must be at least 6 characters.");
    }
    return originalRegister(ctx);
  };

  // حماية تسجيل الدخول
  plugin.controllers.auth.callback = async (ctx: any) => {
    const { identifier, password } = ctx.request.body || {};

    // فحص آمن: إذا كانت القيم مفقودة أو كلمة السر قصيرة، ارفض الطلب فوراً
    if (!identifier || !password || password.length < 6) {
      return ctx.badRequest('Invalid identifier or password.');
    }

    return originalLogin(ctx);
  };

  return plugin;
};
