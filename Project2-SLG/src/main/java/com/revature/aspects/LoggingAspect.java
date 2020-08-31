package com.revature.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import com.revature.beans.Shopper;
import com.revature.util.MyLogger;

@Aspect
@Component
public class LoggingAspect {

	/*
	 * Changed it a bit. See if it works.
	 * Hoping this will apply to all service classes and all methods within.
	 */
	@Pointcut("execution(* com.revature.*.*.*(..))")
	public void logMethod() {
		//Hook method. Does nothing.
	}
	
	@Before(value = "logMethod()", argNames = "joinPoint")
	public void logInfo(JoinPoint jp) {
		// Log that class name. Testing for funzies.
		MyLogger.logger.info(jp.getSignature().getName() + " @ " + jp.getThis().getClass().getSimpleName());
//		Shopper user = (Shopper)jp.getArgs()[0];
//		MyLogger.logger.info(user.getUsername());
	}

}
