package com.revatue.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

import com.revature.util.MyLogger;

@Aspect
public class LoggingAspect {

	/*
	 * Changed it a bit. See if it works.
	 * Hoping this will apply to all service classes and all methods within.
	 */
	@Pointcut("execution(* com.revature.services.*.*(..))")
	public void logMethod() {
		//Hook method. Does nothing.
	}
	
	@Before(value = "logMethod()", argNames = "joinPoint")
	public void logInfo(JoinPoint jp) {
		// Log that class name. Testing for funzies.
		MyLogger.logger.info(jp.getClass().getName());
	}

}
